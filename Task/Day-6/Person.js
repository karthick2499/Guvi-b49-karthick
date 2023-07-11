class Person {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
    getName(){
      return this.name;
      };
    setName(name){
      this.name = name;
      };
    getAge(){
      return this.age;
    };
    setAge(age){
      this.age = age;
    };
    getEmail(){
      return this.email;
    };
    setEmail(email){
      this.email = email;
    };
  }
  
  let per = new Person("Leo", 24, "leo@gmail.com");
  console.log("Name:",per.getName());
  console.log("Age:",per.getAge());
  console.log("Email:",per.getEmail());