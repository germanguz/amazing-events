// Para el Past Events
function printPastEvents() {
    let pastEvCards = [];
    let containerPsEv = document.getElementById("card-PastEvents");

    for (let event of data.events) {
        if (event.date < data.currentDate) {
            let card = `
            <article class="card">
                <figure>
                    <img class="card-image" src="${event.image}" alt="${event.name}">
                </figure>
                <h2>${event.name}</h2>
                <p>${event.description}</p>
                <div class="base-card">
                    <p>Price $${event.price}</p>
                    <a class="but-view" href="./details.html">View more</a>
                </div> 
            </article>
            `
            pastEvCards.push(card);
        }
    }
    containerPsEv.innerHTML = pastEvCards.join("");
}
printPastEvents();
