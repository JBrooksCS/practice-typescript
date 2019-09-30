let lucky = 23;

//lucky = '23'; 

//If declared but not initialized, will remain mutable
let mut_var;
mut_var = 23;
mut_var = '23';


//Interfacing objects.
interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person_1: Person = {
    first: 'Jeff',
    last: 'Delaney'
}
const person_2: Person = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
} 

//Typing function
function pow(x: number, y: number){
    return Math.pow(x,y)
}
//Typing function and specifying return type
function pow_2(x: number, y: number): number{
    return Math.pow(x,y)
}
//Arrays
const arr: Person[] = []
arr.push(person_1)
//These return errors
// arr.push('23')
// arr.push(false)

//Generics
class Observable<T>{
    constructor(public value: T){}
}

let x: Observable<number>;   
let y: Observable<Person>;   
let z = new Observable(23);


