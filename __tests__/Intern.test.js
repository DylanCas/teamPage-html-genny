const Intern = require('../lib/Intern')

describe('Intern Class', () => {
    it("Testing Intern constructor should be able to create Intern class", () => {
        const newIntern = new Intern()
        expect(typeof(newIntern)).toBe('object')
    })
    it("Testing getName should return value of name", () =>{
        const newIntern = new Intern()
    })
})