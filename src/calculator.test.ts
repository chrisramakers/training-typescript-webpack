import Calculator from './calculator'

describe('Calculator', () => {
    it('Should add two numbers', () => {
        const calc = new Calculator()
        expect(calc.add(2, 4)).toBe(6)
    })
    it('Should add more than two numbers', () => {
        const calc = new Calculator()
        expect(calc.add(1, 2, 3)).toBe(6)
    })

    it('Should subtract two numbers', () => {
        const calc = new Calculator()
        expect(calc.sub(5, 2)).toBe(3)
    })

    it('Should multiply two numbers', () => {
        const calc = new Calculator()
        expect(calc.multiply(2, 5)).toBe(10)
    })

    it('Should divide two numbers', () => {
        const calc = new Calculator()
        expect(calc.divide(10, 2)).toBe(5)
    })

    it('Should not allow divide by zero', () => {
        const calc = new Calculator()
        expect(() => {
            calc.divide(10, 0)
        }).toThrowError('Divide by zero not allowed')
    })
})
