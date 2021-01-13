const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email);
    this.id = id;
    this.email = email;
    this.name = name;
    this.github = github;
  }
}
module.exports = Engineer;
