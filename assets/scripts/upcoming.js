// Para el Upcoming Events

// Para las categorías
function printCategory() {
    let allCateg = [];
    let allCategPrint = [];
    let container = document.getElementById("categoryId-upcoming");

    data.events.forEach(element => {
        if (!allCateg.includes(element.category)) {
            allCateg.push(element.category)
        }
    });

    allCateg.forEach(element => {
        allCategPrint.push(`<label for="${element}">
        <input type="checkbox" name="choose" id="${element}" value="${element}">
        ${element}</label>`)
    })

    container.innerHTML = allCategPrint.join("");
}
printCategory();



// Para las cards
function printUpcomingEvents() {
    let upEvCards = [];
    let containerUpEv = document.getElementById("card-UpEvents");

    for (let event of data.events) {
        if (event.date > data.currentDate) {
            let card = `
            <article class="card">
                <figure>
                    <img class="card-image" src="${event.image}" alt="${event.name}">
                </figure>
                <h2>${event.name}</h2>
                <p>${event.description}</p>
                <div class="base-card">
                    <p>Price $${event.price}</p>
                    <a class="but-view" href="./details.html?id=${event._id}">View more</a>
                </div> 
            </article>
            `
            upEvCards.push(card);
        }
    }
    containerUpEv.innerHTML = upEvCards.join("");
}
printUpcomingEvents();
