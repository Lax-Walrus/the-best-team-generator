// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.position = "Employee";
  }

  getName() {
    console.log(this.name);
    return this.name;
  }

  getId() {
    console.log(this.id);
    return this.id;
  }

  getEmail() {
    console.log(this.email);
    return this.email;
  }

  getRole() {
    return this.position;
  }
}

// const Kevin = new Employee("Kevin", 2, "Kevinissexy@aol.net");
// console.log(Kevin);

module.exports = Employee;
