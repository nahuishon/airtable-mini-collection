//console.log("Hello is this working?")


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
//console.log(Airtable);

// connect our airtable base to ou website using API key
var base = new Airtable({ apiKey: "keyAPSgVKXfGcLldO" }).base(
    "appFM7dyonhVM0A5U"
  );


 //get our airtable data, specify how to retrieve it
base("movie").select({}).eachPage(gotPageOfMovie, gotAllMovie);

// an empty array to hold our book data
var movie = [];

//callback function that receives our data
function gotPageOfMovie(records, fetchNextPage) {
  console.log("gotPageOfMovie()");
  // add the records from this page to our books array
  movie.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllMovie(err) {
    console.log("gotAllMovie()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogMovie();
    showMovie();
  }

  // just loop through the books and console.log them
function consoleLogMovie() {
    console.log("consoleLogMovie()");
    movie.forEach((movie) => {
      console.log("Movie:", movie);
    });
  }

  // loop through airtable data, and display them onto our page
function showMovie() {
    console.log("showMovie()");
    movie.forEach((movie) => {
  
        //create container for each movie

         var movieContainer = document.createElement("div");
         movieContainer.classList.add("movie-container");
        document.querySelector(".container").append(movieContainer);
       
          //add song thitles to our song container
          var movieName = document.createElement("h1");
           movieName.classList.add("movie-name");
           movieName.innerText = movie.fields.movie_name;
           movieContainer.append(movieName);

           //add artists to our movie container
           var nameOfArtist = document.createElement("h1");
          nameOfArtist.classList.add("movie-artist");
          nameOfArtist.innerText = movie.fields.artist;
           movieContainer.append(nameOfArtist);


           //add description to our song container
           var movieDescription = document.createElement("p");
          movieDescription.classList.add("movie-description");
          movieDescription.innerText = movie.fields.description;
          movieContainer.append(movieDescription);
   
          //add image to our song container
          var movieImage = document.createElement("img");
          movieImage.classList.add("movie-image");
          movieImage.src = movie.fields.movie_image[0].url;
          movieContainer.append(movieImage);

    
         //add evnet listener
         //when user clicks on moie container
         //image and description will appear or disappear
         movieContainer.addEventListener("click", function(event){
          movieDescription.classList.toggle("active");
          movieImage.classList.toggle("active");
       });

          //loop throught the array and addeach genre as 
          //a class to the song container
          var movieGenre = movie.fields.genre;
          movieGenre.forEach(function(genre){
            movieContainer.classList.add(genre);

          });

          //add event listener to our fillter 
          //to add an active class to our song

          //clicking on filter by movie
          //change background

          var filterDrama = document.querySelector('.drama');
          filterDrama.addEventListener("click", function() {
      
            if (movieContainer.classList.contains("drama")) {
              movieContainer.style.background = "red";
            } else {
              movieContainer.style.background = "white";
              }
            });
        
            //filter by crime genre
            var fillterCrime = document.querySelector('.crime');
            filterCrime.addEventListener("click",function(){

              if (movieContainer.classList.contains("crime")) {
                movieContainer.style.background = "red";
              }else {
                movieContainer.style.background = "white";
              }
            });
        
            // filter by shoegaze music
    var filterAction = document.querySelector(".action");
    filterAction.addEventListener("click", function() {
      if (movieContainer.classList.contains("action")) {
        movieContainer.style.background = "red";
      } else {
        movieContainer.style.background = "white";
      }
    });

    // filter reset
    var filterReset = document.querySelector(".js-reset");
    filterReset.addEventListener("click", function() {
      songContainer.style.background = "white";
         });
        });
      }
  
  