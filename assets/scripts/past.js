// Para el Past Events

// Para las categorías
printCategory("categoryId-past");

// Para las cards
function createPastEventsArray(lista) {
    let pastEvArray = [];
    for (let event of lista) {
        if (event.date < data.currentDate) {
            pastEvArray.push(event);
        }
    }
    printEvents(pastEvArray)
    captureList = pastEvArray;
}

// Llamo a la función para que me genere el array filtrado
createPastEventsArray(data.events)
