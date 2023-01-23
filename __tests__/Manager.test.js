const Manager = require('../lib/Manager')

describe('Manager Class', () => {
    it("Testing Manager constructor should be able to create Manager class", () => {
        const newManager = new Manager()
        expect(typeof(newManager)).toBe('object')
    })
    it("Testing getName should return value of name", () =>{
        const newManager = new Manager()
    })
})