
// if (thedate.getDay() == 5) {
//   document.querySelector('#banner').style.display = "block";
// }


const bannerad = document.querySelector('#banner');
const newDateObj = new Date();
const today = newDateObj.getDay();

if (today == 5){
    bannerad.style.display = "block";
}