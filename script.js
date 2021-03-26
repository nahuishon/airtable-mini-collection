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
const movie = [];

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
      console.log("movie:", movie);
    });
  }

  // loop through airtable data, and display them onto our page
function showMovie() {
    console.log("showMovie()");
    movie.forEach((movie) => {
    

        // add movie titles to page 
         var movieName = document.createElement("h1");
         movieName.innerText = movie.fields.movie_name;
         document.body.appendChild(movieName);
    
         //add notes name to page
         var movieNotes = document.createElement("p");
         movieNotes.innerText = movie.fields.notes;
         document.body.appendChild(movieNotes);


         // adding artist image to page
         var movieImage = document.createElement("img");
         movieImage.src = movie.fields.movie_image[0].url;
         document.body.appendChild(movieImage);


    });
  }
  
  