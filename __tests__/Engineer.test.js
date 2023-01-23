const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    it("Testing Engineer constructor should be able to create Engineer class", () => {
        const newEngineer = new Engineer()
        expect(typeof(newEngineer)).toBe('object')
    })
    it("Testing getName should return value of name", () =>{
        const newEngineer = new Engineer()
    })
})