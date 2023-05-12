// Para el Upcoming Events

// Para las categorías y las cards
async function createUpcomingEventsArrayFromApi() {
    try {
        let urlApi = "./assets/scripts/all-events.json"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        
        captureList = response.events;
        
        // pongo acá el printCategory para que me imprima las categorías desde el array completo, porque si primero filtra
        // y después saca las categorías, el orden de aparición de estas difiere del de la página home
        printCategory("categoryId-upcoming");

        let upEvArray = [];

    for (let event of captureList) {
        if (event.date > response.currentDate) {
            upEvArray.push(event);
        }
    }
    captureList = upEvArray;

    printEvents(upEvArray)

    } catch (error) {
        console.log("Ocurrió un error en fetchApi en upcoming events");
        console.log(error);
    }
}

// Llamo a la función para que me genere el array filtrado
createUpcomingEventsArrayFromApi()
