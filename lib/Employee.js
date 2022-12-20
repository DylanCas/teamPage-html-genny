class Employee {
    constructor(name, id, email) { // subclasses will hold add'l items
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return this.name
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return 'Employee'
    };
}

module.exports = Employee