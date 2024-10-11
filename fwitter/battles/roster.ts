import { Fgtr, Specials } from "./battle"

const Zyborg: Fgtr = {
    name: 'Zyborg',
    stat: 2,
    specials: [Specials.firstHit, Specials.doubleHit]
}

const MyBird: Fgtr = {
    name: 'Mybird',
    stat: 1,
    specials: [Specials.counterHit]
}

const Huppy: Fgtr = {
    name: 'Huppy',
    stat: 2,
    specials: []
}

const JimBongo: Fgtr = {
    name: 'JimBongo',
    stat: 3,
    specials: [Specials.doubleHit]
}

const Exsetra: Fgtr = {
    name: 'Exsetra',
    stat: 3,
    specials: [Specials.firstHit, Specials.lastStand]
}

const Injiro: Fgtr = {
    name: 'Injiro',
    stat: 3,
    specials: [Specials.lastStand]
}

export const roster = [Injiro, Exsetra, JimBongo, Huppy, MyBird, Zyborg];