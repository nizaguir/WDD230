const bannerad = document.getElementById('banner');
const newDateObj = new Date();
const today = newDateObj.getDay();

if (today == 5){
    bannerad.style.display = "block";
}