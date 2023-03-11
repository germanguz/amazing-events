// Para el Past Events

// Para las categorías y las cards
async function createPastEventsArrayFromApi() {
    try {
        let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        
        captureList = response.events;
        
        // pongo acá el printCategory para que me imprima las categorías desde el array completo, porque si primero filtra
        // y después saca las categorías, el orden de aparición de estas difiere del de la página home
        printCategory("categoryId-past");

        let pastEvArray = [];
    for (let event of captureList) {
        if (event.date < response.currentDate) {
            pastEvArray.push(event);
        }
    }
    captureList = pastEvArray;

    printEvents(pastEvArray)

    } catch (error) {
        console.log("Ocurrió un error en fetchApi en past events");
        console.log(error);
    }
}

// Llamo a la función para que me genere el array filtrado
createPastEventsArrayFromApi()