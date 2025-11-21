type User = {
    readonly _id: string; //readonly means that, that value is not changable, the program is not allowed to modify it 
    name: string;
    email: string;
    isactive: boolean;
    creditcarddetails?: number; //when we give qn mark then that value holder becomes optional so when we define the actual value in the object section down it doesnt give us any swiggly lines as it knows its marked as options
}

let myUser: User = {
    _id: "1243",
    name: "a",
    email: "h@h.com",
    isactive: false,
    // creditcarddetails: 23324543
}

type cardnumber = {
    cardnumber: string;

}

type carddate = {
    carddate: string
}

type carddetails = cardnumber & carddate & {
    cvv: number
}



myUser.email = "h@gmail.com"
console.log(myUser.email)