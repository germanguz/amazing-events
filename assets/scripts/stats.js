// *Para las estadísticas (stats)

async function createPastEventsArrayFromApiToStats() {
    try {
        let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()

        let pastEvArray = [];
    for (let event of response.events) {
        if (event.date < response.currentDate) {
            pastEvArray.push(event);
        }
    }
    console.log(pastEvArray);
    for(let e of pastEvArray) {
        // console.log(e.capacity);
    }
    // console.log(pastEvArray[0].name);

    pastEvArray.sort((a, b) => a.capacity > b.capacity ? -1 : 1);
    // console.log(pastEvArray);

    for(let e of pastEvArray) {
        // console.log(e.capacity);
    }
    console.log(Object.keys(pastEvArray[0]));



    // *Impresiones en html
    document.getElementById("idMaxEventCapacity").innerHTML = `${pastEvArray[0].name}`;
    
    let maxCapacity = document.getElementById("idMaxCapacity");
    maxCapacity.innerHTML = `${pastEvArray[0].capacity}`

    pastEvArray.sort((a, b) => a.assistance > b.assistance ? -1 : 1);
    for(let e of pastEvArray) {
        console.log(e.assistance);
    }
    document.getElementById("idMaxEventAssistance").innerHTML = `${pastEvArray[0].name}`;
    document.getElementById("idMaxAssistance").innerHTML = `${pastEvArray[0].assistance} with 
    ${Math.round(pastEvArray[0].assistance / pastEvArray[0].capacity * 100).toFixed(2)} percent`;

    } catch (error) {
        console.log("Ocurrió un error en fetchApi en stats");
        console.log(error);
    }
}

// Llamo a la función para que me genere el array filtrado
createPastEventsArrayFromApiToStats()