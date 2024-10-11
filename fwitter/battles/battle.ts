export enum Specials {
    firstHit='firstHit',
    counterHit='counterHit',
    lastStand='lastStand',
    quickWin='quickWin',
    doubleHit='doubleHit'
}

export type Fgtr = {
    name: string;
    stat: number;
    specials: Specials[]
}

type InFightFgtr = Fgtr & {health: number}

export type FightResult = {
    winner: string;
    rounds: number;
}

type GameState = {
    round: number,
    opp1: InFightFgtr,
    opp2: InFightFgtr
}

const pickHitter = (one:InFightFgtr, two:InFightFgtr):InFightFgtr => {
  const total = one.stat + two.stat;
  const random = Math.random() * total;
  return random < one.stat ? one : two;
}

const prepForFight = (opponent:Fgtr):InFightFgtr => {
return {...opponent, health: 10}
}

const evalHitter = (round:number, one:InFightFgtr, two:InFightFgtr, pick:(one:InFightFgtr, two:InFightFgtr)=>InFightFgtr) => {
    if(round === 0){
        if(one.specials.includes(Specials.firstHit) && two.specials.includes(Specials.firstHit)){
            return pick(one, two);
        }
        if(one.specials.includes(Specials.firstHit)){
            return one;
        }
        if(two.specials.includes(Specials.firstHit)){
            return two;
        }
    }
    return pick(one, two);
}

const damage = (gameState:GameState, hitter:InFightFgtr) => {
    if(hitter.name === gameState.opp1.name){
        gameState.opp2.health -= gameState.opp1.stat;
    } else {
        gameState.opp1.health -= gameState.opp2.stat;
    }
}

function randomIntFromInterval(max:number):number {
    return Math.floor(Math.random() * (max + 1));
}

const evalCounterHit = (gameState:GameState, hitter:InFightFgtr):InFightFgtr|false =>{
    if(hitter.name === gameState.opp1.name){
        if(gameState.opp2.specials.includes(Specials.counterHit)){
            return Math.random() < 0.5 ? gameState.opp2 : false;
        };
    }
    if(hitter.name === gameState.opp2.name){
        if(gameState.opp1.specials.includes(Specials.counterHit)){
            return Math.random() < 0.5 ? gameState.opp1 : false;
        };
    }
    return false;
}

const evalLastStand = (gameState:GameState):InFightFgtr|false => {
    if (gameState.opp1.health < 1 && gameState.opp1.specials.includes(Specials.lastStand)){
     return gameState.opp1;
    }
    if (gameState.opp2.health < 1 && gameState.opp2.specials.includes(Specials.lastStand)){
        return gameState.opp2;
    }
    return false;
}

const evalQuickWin = (gameState:GameState):InFightFgtr|false => {
    const {opp1, opp2} = gameState;
    const chance = randomIntFromInterval(2);

    if(opp1.health > opp2.health && opp1.specials.includes(Specials.quickWin)){
        if(chance === 1){
            return gameState.opp1;
        }
    }
    if(opp2.health > opp1.health && opp2.specials.includes(Specials.quickWin)){
        if(chance === 1){
            return gameState.opp2;
        }
    }

    return false;
};

const evalDoubleHit = (hitter:InFightFgtr):boolean => {
    return hitter.specials.includes(Specials.doubleHit) && randomIntFromInterval(2) === 1;
}

const resolveHit = (gameState:GameState):GameState => {
    const hitter = evalHitter(gameState.round, gameState.opp1, gameState.opp2, pickHitter);

    damage(gameState, hitter);

    // double hit?
    if(evalDoubleHit(hitter)){
        damage(gameState, hitter);
    }

    // counter hit?
    const counterHitter = evalCounterHit(gameState, hitter);
    if(counterHitter){
        damage(gameState, counterHitter);
    }

    // last stand
    const lastStand = evalLastStand(gameState);
    if(lastStand) {
        damage(gameState, lastStand);
    }

    return gameState;
}

const evalBattleEnd = (gameState:GameState):boolean => {
    return gameState.opp1.health < 1 || gameState.opp2.health < 1;
}

const findWinner = (gameState:GameState):string => {
    if(gameState.opp1.health < 1 && gameState.opp2.health < 1){return 'draw'}
    if(gameState.opp1.health < gameState.opp2.health){return gameState.opp2.name}
    return gameState.opp1.name;
}

const setupGame = (_opponent1:Fgtr, _opponent2:Fgtr):GameState => ({
    round: 0,
    opp1: prepForFight(_opponent1),
    opp2: prepForFight(_opponent2)
})

export const battle = (_opponent1:Fgtr, _opponent2:Fgtr):FightResult => {
    let finished = false;
    const gameState:GameState = setupGame(_opponent1, _opponent2);

    while(!finished) {
        const newGameState = {...resolveHit(gameState), round: gameState.round++};

        if(gameState.round === 1){
            const quickWin = evalQuickWin(newGameState);
            if(quickWin){finished = true;}
        }
        if(evalBattleEnd(newGameState)){ finished = true; };
    }
    return {rounds: gameState.round, winner: findWinner(gameState)};
}
