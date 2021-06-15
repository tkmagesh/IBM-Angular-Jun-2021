export function add(x : number, y : number) :number {
    return x + y;
}

export function subtract(x:number, y : number) :number {
    return x - y
}

const calc = { 
    add, 
    subtract, 
    getDate : () => new Date() 
}

//there can be only one default exported entity in a file
export default calc;