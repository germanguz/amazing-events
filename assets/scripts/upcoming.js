// Para el Upcoming Events

// Para las categorías
printCategory("categoryId-upcoming");

// Para las cards
function createUpcomingEventsArray(lista) {
    let upEvArray = [];
    for (let event of lista) {
        if (event.date > data.currentDate) {
            upEvArray.push(event);
        }
    }
    printEvents(upEvArray)
    captureList = upEvArray;
}

// Llamo a la función para que me genere el array filtrado
createUpcomingEventsArray(data.events)
