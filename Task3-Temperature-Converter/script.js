function convertTemperature(){


let temperature =
document.getElementById("temperature").value;


let unit =
document.getElementById("unit").value;



let error =
document.getElementById("error");



if(temperature === ""){

error.innerHTML="Please enter a temperature value.";

return;

}



temperature = Number(temperature);



error.innerHTML="";



let celsius;
let fahrenheit;
let kelvin;



if(unit === "celsius"){


celsius = temperature;

fahrenheit = (temperature * 9/5) + 32;

kelvin = temperature + 273.15;


}



else if(unit === "fahrenheit"){


fahrenheit = temperature;

celsius = (temperature - 32) * 5/9;

kelvin = celsius + 273.15;


}



else{


kelvin = temperature;

celsius = temperature - 273.15;

fahrenheit = (celsius * 9/5) + 32;


}





if(celsius < -273.15){

error.innerHTML =
"Temperature cannot be below absolute zero (-273.15°C).";

return;

}



document.getElementById("celsius").innerHTML =
"Celsius: " + celsius.toFixed(2) + " °C";



document.getElementById("fahrenheit").innerHTML =
"Fahrenheit: " + fahrenheit.toFixed(2) + " °F";



document.getElementById("kelvin").innerHTML =
"Kelvin: " + kelvin.toFixed(2) + " K";


}