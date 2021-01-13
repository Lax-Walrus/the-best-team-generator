// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(office) {
    super(id, email, name);
    this.office = office;
    this.id = id;
    this.email = email;
    this.name = name;
  }
}
module.exports = Manager;
