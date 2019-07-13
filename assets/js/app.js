$(document).ready(function() {

    var topics = ["Michael", "Dwight", "Jim", "Pam", "Andy", "Kevin", "Stanley", "Angela", "Phyllis", "Creed"];

    function displayInfo();
    $("#office-view").empty();
    var topic = $("this).attr("data-name");
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + '&api_key=jVz8LzEOLKTNPSj1tux4I40dP1PX6Pbg&limit=10';


    $.ajax({
      url: queryURL,
      method: "GET"
    })
}