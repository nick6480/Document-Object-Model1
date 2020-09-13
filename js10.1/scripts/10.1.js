"use strict";

// date
let date = $("date");

let currentDate = function() {
  let today = new Date();

  let year = today.getFullYear();

  let month = today.getMonth() + 1;
    if(month <= 9) {
      month = '0'+month;
    };

    let day= today.getDate();
    if(day <= 9) {
      day = '0'+day;
    };

  date.value = year +'-'+ month +'-'+ day;

};

currentDate();



// Slider
let slider = $("slider");
let sliderOutput = $("sliderOutput");

sliderOutput.innerHTML = slider.value + " K\xB0";

slider.oninput = function() {
  sliderOutput.innerHTML = slider.value + " K\xB0";
}
