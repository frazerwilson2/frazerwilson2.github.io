const roster = ['one', 'two', 'three', 'four', 'five']

const copyroster = [...roster];
const schedule:string[] = [];

while(copyroster.length > 2){
    const pick = copyroster[Math.floor(Math.random() * (copyroster.length + 1))]
    schedule.push(pick)
    console.log(schedule);
}