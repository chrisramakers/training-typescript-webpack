export default class Calculator {
    public divide(a: number, b: number): number {
        if (b === 0) throw new Error('Divide by zero not allowed')
        return a / b
    }
    public multiply(a: number, b: number): number {
        return a * b
    }
    public sub(a: number, b: number): number {
        return a - b
    }
    public add(...n: number[]): number {
        return n.reduce((prev, value) => prev + value)
    }
}
