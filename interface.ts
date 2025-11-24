// similar to types , superficial view of class 

interface man {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    starttrail(): string,
    getdiscount(coupnname: string, value: number): number
}

interface man {
    githubToken: string
}


interface Admin extends man {
    role: "admin" | "ta" | "learner"
}



const aditeh: Admin = {
    dbId: 3232, email: "a@", userId: 232334,
    role: "admin",
    starttrail: () => {
        return "trail started"
    },
    githubToken: "github",
    getdiscount: (name: "messi", off: 10) => {
        return 10
    }
}

//INTERFACE VS TYPES

