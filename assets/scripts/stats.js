// *Para las estadísticas (stats)

async function createPastEventsArrayFromApiToStats() {
    try {
        let urlApi = "./assets/scripts/all-events.json"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()

        let pastEvArray = [];
        for (let event of response.events) {
            if (event.date < response.currentDate) {
                pastEvArray.push(event);
            }
        }

        // *IMPRESIONES EN HTML TABLA 1
        // Primero ordeno el array por capacidad para sacar los datos que necesito para la última col de tabla 1

        // *Forma 1 de ordenar array
        // pastEvArray.sort((a, b) => a.capacity > b.capacity ? -1 : 1);

        // *Forma 2 de ordenar array
        pastEvArray.sort((a, b) => b.capacity - a.capacity);

        // *Forma 3 de ordenar array. La forma larga de hacerlo con los if
        // pastEvArray.sort((a, b) => {
        //     if (a.capacity > b.capacity) {
        //         return -1;
        //     }
        //     if (a.capacity < b.capacity) {
        //         return 1;
        //     }
        //     return 0;
        // });

        // *Imprime el evento que tiene mayor capacidad
        document.getElementById("idMaxEventCapacity").innerHTML = `${pastEvArray[0].name}`;

        // *Imprime la cantidad del evento que tiene mayor capacidad
        let maxCapacity = document.getElementById("idMaxCapacity");
        maxCapacity.innerHTML = `${pastEvArray[0].capacity.toLocaleString('en-US')}`

        // Ordeno el array de mayor a menor asistencia, para usarlo en las siguientes impresiones
        pastEvArray.sort((a, b) => b.assistance - a.assistance);

        // *Imprime el evento que tuvo mayor asistencia
        document.getElementById("idMaxEventAssistance").innerHTML = `${pastEvArray[0].name}`;

        // *Imprime la cantidad y porcentaje de ese evento con mayor asistencia
        document.getElementById("idMaxAssistance").innerHTML = `${pastEvArray[0].assistance.toLocaleString('en-US')} with 
    ${Number(pastEvArray[0].assistance / pastEvArray[0].capacity * 100).toFixed(2)} percent`;

        // *Imprime el evento que tuvo menor asistencia
        document.getElementById("idMinEventAssistance").innerHTML = `${pastEvArray[pastEvArray.length - 1].name}`;

        // *Imprime la cantidad y porcentaje de ese evento con menor asistencia
        document.getElementById("idMinAssistance").innerHTML = `${pastEvArray[pastEvArray.length - 1].assistance.toLocaleString('en-US')} with 
    ${Number(pastEvArray[pastEvArray.length - 1].assistance / pastEvArray[pastEvArray.length - 1].capacity * 100).toFixed(2)} percent`;



        // *IMPRESIONES EN HTML TABLA 3 - Past events

        let categoryPastArray = [];
        let categoryPastArrayFilter = [];
        let categoryPastArrayInnerHtml = [];

        // Recorro todo el array de eventos pasados
        pastEvArray.forEach(element => {
            let asistencia = "";
            let capacidad = "";
            let precio = "";
            let ganancia = "";
            let porcentajeAsistencia = "";
            let obj_acc = {};

            // Si la categ no está en el array entonces la pusheo. Con eso logro un array con cada categ sin repetir
            if (!categoryPastArray.includes(element.category)) {
                categoryPastArray.push(element.category);

                // De esa categ que no está repetida, busco en el pastArray cada elemento con esa categoria y formo un nuevo array
                categoryPastArrayFilter = pastEvArray.filter(e => e.category == element.category)

                // Aplico reduce a cada array filtrado que contiene todos los elementos con una misma categoría
                categoryPastArrayFilter.reduce((acc, current) => {
                    asistencia = current.assistance;
                    precio = current.price;
                    ganancia = asistencia * precio;
                    capacidad = current.capacity;
                    obj_acc = {
                        totalGanancia: acc.totalGanancia + ganancia,
                        totalCapacidad: acc.totalCapacidad + capacidad,
                        totalAsistencia: acc.totalAsistencia + asistencia
                    }
                    return obj_acc;
                }, { totalGanancia: 0, totalCapacidad: 0, totalAsistencia: 0 })

                porcentajeAsistencia = (obj_acc.totalAsistencia / obj_acc.totalCapacidad * 100).toFixed(2);

                // Genero el array con la plantilla que se va a mostrar, tomando los datos de las categorías y lo "reducido".
                // toLocaleString es para que muestre los número con coma y no todo junto(algo estético) 
                categoryPastArrayInnerHtml.push(`<tr>
            <td>${element.category}</td>
            <td>$ ${obj_acc.totalGanancia.toLocaleString('en-US')}</td>
            <td>${porcentajeAsistencia}%</td>
            </tr>`)
            };
        })
        // Imprime el array en el HTML
        document.getElementById("idPastCategories").innerHTML = categoryPastArrayInnerHtml.join("");

    } catch (error) {
        console.log("Ocurrió un error en fetchApi en stats");
        console.log(error);
    }
}

// Llamo a la función para que me genere el array desde la API y genere las tablas 1 y 3
createPastEventsArrayFromApiToStats()



// *====================================================================*



async function createUpcomingEventsArrayFromApiToStats() {
    try {
        // let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events?time=upcoming"
        let urlApi = "./assets/scripts/all-events.json"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()

        // *esta era la que usaba con la api externa porque ya venía filtrado con el "endpoint: ?time=upcoming"
        // let upcomingEvArray = [];
        // for (let event of response.events) {
        //     upcomingEvArray.push(event);
        // }

        let upcomingEvArray = [];
        for (let event of response.events) {
            if (event.date > response.currentDate) {
                upcomingEvArray.push(event);
            }
        }

        // *IMPRESIONES EN HTML TABLA 2 - Upcoming events

        let categoryUpcomingArray = [];
        let categoryUpcomingArrayFilter = [];
        let categoryUpcomingArrayInnerHtml = [];

        // Recorro todo el array de eventos futuros
        upcomingEvArray.forEach(element => {
            let estimado = "";
            let capacidad = "";
            let precio = "";
            let ganancia = "";
            let porcentajeEstimado = "";
            let obj_acc = {};

            // Si la categ no está en el array entonces la pusheo. Con eso logro un array con cada categ sin repetir
            if (!categoryUpcomingArray.includes(element.category)) {
                categoryUpcomingArray.push(element.category);

                // De esa categ que no está repetida, busco en el upcomingArray cada elemento con esa categoria y formo un nuevo array
                categoryUpcomingArrayFilter = upcomingEvArray.filter(e => e.category == element.category)

                // Aplico reduce a cada array filtrado que contiene todos los elementos con una misma categoría
                categoryUpcomingArrayFilter.reduce((acc, current) => {
                    estimado = current.estimate;
                    precio = current.price;
                    ganancia = estimado * precio;
                    capacidad = current.capacity;
                    obj_acc = {
                        totalGananciaEstimada: acc.totalGananciaEstimada + ganancia,
                        totalCapacidad: acc.totalCapacidad + capacidad,
                        totalAsistenciaEstimada: acc.totalAsistenciaEstimada + estimado
                    }
                    return obj_acc;
                }, { totalGananciaEstimada: 0, totalCapacidad: 0, totalAsistenciaEstimada: 0 })

                porcentajeEstimado = (obj_acc.totalAsistenciaEstimada / obj_acc.totalCapacidad * 100).toFixed(2);

                // Genero el array con la plantilla que se va a mostrar, tomando los datos de las categorías y lo "reducido".
                // toLocaleString es para que muestre los número con coma y no todo junto(algo estético) 
                categoryUpcomingArrayInnerHtml.push(`<tr>
            <td>${element.category}</td>
            <td>$ ${obj_acc.totalGananciaEstimada.toLocaleString('en-US')}</td>
            <td>${porcentajeEstimado}%</td>
            </tr>`)
            };
        })
        // Imprime el array en el HTML
        document.getElementById("idUpcomingCategories").innerHTML = categoryUpcomingArrayInnerHtml.join("");

    } catch (error) {
        console.log("Ocurrió un error en fetchApi en stats");
        console.log(error);
    }
}

// Llamo a la función para que me genere el array desde la API y genere la tabla 2
createUpcomingEventsArrayFromApiToStats()