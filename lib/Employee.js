// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.email = email;
    this.name = name;
  }

  getname() {
    console.log(this.name);
  }
}

module.exports = Employee;
