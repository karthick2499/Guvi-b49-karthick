class Movie {
    constructor(title, studio, rating = "PG"){
      this.title = title;
      this.studio = studio;
      if(rating === "")
      {
        this.rating = "PG";
      }
      else {
        this.rating = rating;
      }
    }
    getTitle(){
      return this.title;
    };
    setTitle(name){
      this.title = name;
    };
    getStudio(){
      return this.studio;
    };
    setStudio(studio){
      this.studio = studio;
    };
    
    getRating(){
      return this.rating;
    };
    setRating(rating){
      this.rating = rating;
    };
    
    getPG(arr) {
      this.arr=arr;
      return arr;
    }
  }
  
  let film = new Movie("Casino Royale", "Eon Productions", "PG13");
  let ipArr = [{title:"leo", studio: "ynot", rating: "PG13"},
                {title:"messi", studio: "jack", rating: ""},
                {title:"cr7", studio: "monk", rating: "PG13"}];
  console.log(film.getPG(ipArr));
  console.log("Title:",film.getTitle());
  console.log("Studio:",film.getStudio());
  console.log("Rating:",film.getRating());