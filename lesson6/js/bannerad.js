const bannerad = document.getElementById('banner');
const newDateObj = new Date();
const today = newDateObj.getDay();

if (today == 4){
    bannerad.style.display = "block";
}