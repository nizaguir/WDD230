// determine what day of the week it is today
// let thedate = new Date ();
// console.log(thedate.getDay());

//change to 5 because it equals Friday
// in order to do in one line use ternary operator
// check codepen 

// if (thedate.getDay() == 5) {
//   document.querySelector('#banner').style.display = "block";
// }


const bannerEl = document.querySelector('#banner');
const newDateObj = new Date();
const today = newDateObj.getDay();

if (today == 5){
    bannerEl.style.display = "block";
}