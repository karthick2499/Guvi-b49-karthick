class Uber {
    constructor(name, basefee, city, rates) {
      this.name = name;
      this.basefee = basefee;
      this.city = city;
      this.rates = rates;
    }
    getName(){
      return this.name;
      };
    setName(name){
      this.name = name;
      };
    getBasefee(){
      return this.basefee;
    };
    setBasefee(basefee){
      this.basefee = basefee;
    };
    getCity(){
      return this.city;
    };
    setCity(city){
      this.city = city;
    };
    
    getRates(){
      return this.basefee*this.rates;
      };
  
  }
  
  let ub = new Uber("Leo",10, "Chennai",25 );
  console.log("Name:",ub.getName());
  console.log("Destination:",ub.getCity());
  console.log("Bill:",ub.getRates());