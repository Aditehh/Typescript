const superheros: string[] = []
const heropower: number[] = []



type Users = {
    name: string;
    isactive: boolean
}

const allusers: Users[] = []


const mlmodels: number[][] = [
    [255, 255, 255],
    []
]

const data: (number | string)[] = [1, "aditya", 32, "thirthytowow"] //do this to use | (or) wala thingy

let seatallotment: "aisle" | "middle" | "window" //done when there are strict assignation which cannot me altered like in this case we cannot do seatallotment = "crew" or smth like that



superheros.push("spiderman")
heropower.push(23)
allusers.push({ name: "hitesh", isactive: false })
console.log(superheros)
console.log(heropower)
console.log(allusers)
console.log(data)