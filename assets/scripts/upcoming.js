// Para el Upcoming Events

// Para las categorías y las cards
async function createUpcomingEventsArrayFromApi() {
    try {
        let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        
        // let actualDate = response.currentDate;
        // console.log(actualDate);
        captureList = response.events;
        // console.log(captureList);
        
        // pongo acá el printCategory para que me imprima las categorías desde el array completo, porque si primero filtra
        // y después saca las categorías, el orden de aparición de estas difiere del de la página home
        printCategory("categoryId-upcoming");

        let upEvArray = [];
    for (let event of captureList) {
        // console.log(event.date);
        // console.log(actualDate);
        if (event.date > response.currentDate) {
            upEvArray.push(event);
        }
    }
    captureList = upEvArray;
    // console.log(captureList);

    printEvents(upEvArray)

    } catch (error) {
        console.log("Ocurrió un error en fetchApi en upcoming events");
        console.log(error);
    }
}

// Llamo a la función para que me genere el array filtrado
createUpcomingEventsArrayFromApi()
