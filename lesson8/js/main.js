// TOGGLE MENU
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// CURRENT DATE FIELD ON FOOTER
// const datefield = document.querySelector("#currentdate");

// const now = new Date();
// const currentdate = new Intl.DateTimeFormat("en-US", {
//   dateStyle: 'full'
// }).format(now);
// datefield.textContent = currentdate;

// Create a new Date object and inject in the DOM the current date
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.querySelector('#currentdate').innerHTML = new Date().toLocaleDateString('en-US', options);

// SHOW BANNER AD ON FRIDAY
const bannerad = document.getElementById('banner');
const newDateObj = new Date();
const today = newDateObj.getDay();

if (today == 5){
    bannerad.style.display = "block";
}
