
$(document).ready(function(){

     $("#submitCity").click(function(){
          return getWeather();
     })
})

// ajax
function getWeather(){
     var city = $("#city").val();
     
     if(city != ''){
          $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" 
              + "&appid=2e005d3e757b71149f64b010a5dd83f1",
              type: "GET",
              dataType: "jsonp" ,
              success: function(data){
               //console.log(data)
                    var temp = showResults(data)
                    $("#showWeather").html(temp);
                    $("#city").val(' ');
              }
          })
     }else{
          $("#err").html("<div>City cannot be empty</div>")
     }
}
function showResults(data){
console.log("hello")
     return "<p>Name: "+data.name+" </p>"
     +"<p>Name: "+data.sys.country+" </p>"
     +"<p>Temperature:"+data.main.temp+"</p>"
     +"<p>Pressure: "+data.main.pressure+" </p>"
     +"<p>Humidity: "+data.main.humidity+" </p>"
     +"<p>Min Temperature: "+data.main.temp_min+" </p>"
     +"<p>Max Temperature: "+data.main.temp_max+" </p>"
     +"<p>Wind Speed: "+data.wind.speed+" </p>"
     +"<p>Clouds: "+data.clouds.all+" </p>";
} 