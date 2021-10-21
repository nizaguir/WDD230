const htemp = parseFloat(document.getElementById("d-temp").textContent)
const windspeed = parseFloat(document.getElementById("d-wind-s").textContent)
let windchill;

// Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)


// The formula to calculate the wind chill factor is  𝑓=35.74+0.6215𝑡−35.75𝑠0.16+0.4275𝑡𝑠0.16 
if (htemp <= 50 && windspeed > 3){
  windchill = 35.74 + 0.6215 * htemp - 35.75 * windspeed** 0.16 + 0.4275 * htemp * windspeed ** 0.16;
  windchill = Math.round(windchill * 100) / 100;
  document.getElementById("d-wind-c").textContent = windchill;


}else {
  document.getElementById("d-wind-c").textContent = "N/A";
}


