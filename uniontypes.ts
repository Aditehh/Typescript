//union in ts 

let score: number | string = 33

score = 44

score = "fifetyfive"

console.log(score)

type Userss = {
    name: string;
    id: number
}

type admin = {
    username: string;
    id: number
}

let hites: Userss | admin = {
    name: "hitesh", id: 2323
}

hites = { username: "fla", id: 334 }

function getDBId(id: number | string) {
    //making some api class to bring on id
    console.log(`db id ins: ${id}`)
}

getDBId(3)