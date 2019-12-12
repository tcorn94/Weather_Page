var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&units=imperial&appid=5d10d67bc1c17364b9945c8bc7822de2";
          // Create an AJAX call to retrieve data Log the data in console
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
      
          $(".city").text(response.name + " Weather Details"); 
          $(".wind").text("wind speed: " + response.wind.speed);
          $(".humidity").text("humidity: " + response.main.humidity);
          $(".temp").text("temperature: " + response.main.temp);
       
      
        
      });


  // Initial array of cities
  var cities = ["Coral Springs", "Portland", "Nerima"];

  // Function for displaying movie data
  function renderButtons() {

    // Delete the content inside the buttons-view div prior to adding new movies
    $("#buttons-view").empty();
    // (this is necessary otherwise you will have repeat buttons)

    // Loop through the array of movies, then generate buttons for each movie in the array
    for (i=0;i<movies.length;i++){
      var cityButtons = $("<button>");
      cityButtons.text(movies[i]);
      $("#buttons-view").append(cityButtons);

    }

  }

  // This function handles events where the add movie button is clicked
  $("#add-movie").on("click", function(event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();

    var moviesearch = $("#movie-input").val();

    movies.push(moviesearch);
    // Write code to grab the text the user types into the input field
    // Write code to add the new movie into the movies array
    $("#movie-input").val("");

    // The renderButtons function is called, rendering the list of movie buttons
    renderButtons();


  });



  // Calling the renderButtons function to display the initial list of movies
  renderButtons();