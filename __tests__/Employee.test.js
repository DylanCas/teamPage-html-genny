const Employee = require('../lib/Employee')

describe('Employee Class', () => {
    it("Testing Employee constructor should be able to create Employee class", () => {
        const newEmployee = new Employee()
        expect(typeof(newEmployee)).toBe('object')
    })
    it("Testing getName should return value of name", () =>{
        const newEmployee = new Employee()
    })
})