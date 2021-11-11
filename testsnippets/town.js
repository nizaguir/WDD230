// Make the hamburger nav responsive and to toggle open/close in the small view

const navHam = document.querySelector('.responsive');
const mainNav = document.querySelector('.navigation');

navHam.addEventListener('click', toggleMenu)

function toggleMenu() {
    mainNav.classList.toggle('navigation');
}

// Toggle on/off the banner at the top

const bannerEl = document.querySelector('.banner-show');
const newDateObj = new Date();
const today = newDateObj.getDay();


// Create Town Cards in the Homepage

const infoURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(infoURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObj) => {
        console.table(jsonObj);
        const towns = jsonObj["towns"];
        towns.forEach((town) => {
            if ((town.name == 'Preston') ||  (town.name == 'Soda Springs') || (town.name == 'Fish Haven')){
                // Create Twon Cards //
                let section = document.createElement('section');
                let divContCard = document.createElement('div');
                let h4 = document.createElement('h4');
                let motto = document.createElement('p');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let rainFall = document.createElement('p');
                let picture = document.createElement('img');
                let divFlex = document.createElement('div');
    
                section.setAttribute('class', 'preston-town card-1');
                section.setAttribute('id', 'homepage-box');
                divContCard.setAttribute('class', 'container-2 card-1-2 town-grid');
                
                h4.textContent = town.name;
                motto.setAttribute('class', 'motto');
                motto.textContent = town.motto;
                picture.setAttribute('src', `./images/placeholder.jpg`);
                picture.setAttribute('data-src', `./images/${town.photo}`);
                yearFounded.setAttribute('class', 'year-founded');
                yearFounded.textContent = `Year Founded: ${town.yearFounded}`;
                population.setAttribute('class', 'population');
                population.textContent = `Current Population: ${town.currentPopulation}`;
                rainFall.setAttribute('class', 'rain-fall');
                rainFall.textContent = `Average Rainfall: ${town.averageRainfall}`;
                divFlex.setAttribute('class', 'content-flex');

                divFlex.append(picture, yearFounded, population, rainFall);
                divContCard.append(motto, divFlex)
                section.append(h4, divContCard);

                document.querySelector('.container-town-info').appendChild(section);

                // Create Event Cards //
                let sectionEvent = document.createElement('section');
                let h4Event = document.createElement('h4');
                let divContCardEvent = document.createElement('div');
                let picEvent = document.createElement('img');
                let events = town.events;
                let allEvents = document.createElement('div');
                let buttonJoin = document.createElement('button');

                sectionEvent.setAttribute('class', 'card-1');
                sectionEvent.setAttribute('id', 'homepage-box');
                divContCardEvent.setAttribute('class', 'container-2 card-1-2 event-flex');

                h4Event.textContent = town.name;
                picEvent.setAttribute('src', `./images/placeholder.jpg`);
                picEvent.setAttribute('data-src', `./images/${town.photo}`);

                events.forEach(event => {
                    let eventPar = document.createElement('p');
                    eventPar.textContent = event;
                    allEvents.append(eventPar);
                })

                allEvents.setAttribute('class', 'events-name');
                buttonJoin.textContent = 'Join Us'
                buttonJoin.setAttribute('class', 'btn-events');
                divContCardEvent.append(picEvent, allEvents, buttonJoin);
                sectionEvent.append(h4Event, divContCardEvent);
                document.querySelector('.events-container').append(sectionEvent)

            }
        });
    })