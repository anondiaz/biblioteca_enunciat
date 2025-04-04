// localStorage.removeItem("biblioteca")

// MINI BIBLIOTECA

// const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
    { titulo: "Guerra y Paz", autor: "Lev Tolstoi", categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Anna Karenina", autor: "Lev Tolstoi", categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "L'Odisea", autor: "Homero", categoria: "drama", idioma: "català", epoca: "clásica" },
    { titulo: "Antologia de la poesia medieval catalana", autor: "Diversos", categoria: "poesia", idioma: "català", epoca: "clásica" },
    { titulo: "La Ilíada", autor: "Homero", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Poema del Mio Cid", autor: "Anónimo", categoria: "poesia", idioma: "español", epoca: "clásica" },
    { titulo: "Veinte mil leguas de viaje submarino", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "De la Terra a la Lluna", autor: "Jules Verne", categoria: "aventuras", idioma: "català", epoca: "s.XIX" },
    { titulo: "Cinco semanas en globo", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "Robinson Crusoe", autor: "Daniel Defoe", categoria: "aventuras", idioma: "català", epoca: "clásica" },
    { titulo: "Germinal", autor: 'Émile Zola', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Notre Dame de Paris", autor: 'Victor Hugo', categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "Los Miserables", autor: 'Victor Hugo', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Yo, robot", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Fundació", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Ciberiada", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Solaris", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "El hombre bicentenario", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Tokio Blues", autor: "Haruki Murakami", categoria: "drama", idioma: "español", epoca: "s.XX" },
    { titulo: "Romancero Gitano", autor: "Federico García Lorca", categoria: "poesia", idioma: "español", epoca: "s.XX" },
    { titulo: "Los aventuras de Sherlock Holmes", autor: 'Arthur Conan Doyle', categoria: "misterio", idioma: "español", epoca: "s.XIX" },
    { titulo: "Rebelió a la granja", autor: 'George Orwell', categoria: "drama", idioma: "català", epoca: "s.XX" },
    { titulo: "La Divina Comedia", autor: "Dante Alighieri", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Cròniques Marcianes", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
]

// ==========================================================================================================
// EJERCICIO 1
// Libros disponibleS
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Llista del llibres
// const listaLibros = document.getElementById("listaLibros");

// Creamos esta función para poder ejecutar la actualización del listado para los otros ejercicios
// y al final la llamamos con el id del div para poder mostrarla en este ejercicio
function mostrarArray (id) {
    // Con esta función ordenamos los libros por orden alfabetico del titulo
    biblioteca.sort((a, b) => {
      return a.titulo.localeCompare(b.titulo, "es-ES", { numeric: true })
    });
    // Checks varios
    // console.log(biblioteca);
    // console.log(id);
    // Nos traemos el elemento asociado al id, en este caso un <div>
    const idHTMLEjer1 = document.getElementById(id)
    // Inicializamos el contenido de la lista creando la variable que lo contendra en este caso una lista ordenada <ol>
    let htmlEj1EF = "<ol>"
    // Con es bucle sacaremos cada dato del array...
    biblioteca.forEach((libro) => {
        // Checks varios
        // console.log(libro["titulo"]);
        // ... y lo introduciremos en la variable antes mencionada como elemento de lista ordenada <li>
        htmlEj1EF += `<li>Título: ${libro.titulo} Autor: ${libro.autor} Categoría: ${libro.categoria} Idioma: ${libro.idioma} Época: ${libro.epoca} </li>`
    })
    // Finalizaremos la lista ordenada con </ol>
    htmlEj1EF += '</ol>'
    // Introducimos en el <div> el codigo HTML para mostrarlo en la pagina web
    idHTMLEjer1.innerHTML = htmlEj1EF
    // console.log(htmlEj3EFEF);
    cargarSelect()
}
  
// Llamamos a la función que acabamos de crear para que se ejecute y muestre el contenido
// Utilizando funciones nos evitaremos tener que volver a escribir lo mismo
mostrarArray('ejer1')

// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css

// Nos traemos el div que contendrá el listado
const ejer2 = document.getElementById("ejer2")
// Cargamos el listado completo de titulos utilizando la función del ejercicio1, pero usando el id del ejercicio2
// de esta forma mostramos el listado al cargar la página
// mostrarArray('ejer2')

// Nos traemos el formulario para poder trabajar con el
const formEj2EF = document.forms["form-filtrado"];

function filtradoEj2 (){

    // Preparamos el contenido del <div>, de momento vacio
    ejer2.innerHTML = ""
    // Establecemos unas variables (constantes) con el elemento seleccionado para posterioremente poder filtrar
    const categoria = formEj2EF["categoria"].value;
    const idioma = formEj2EF["idioma"].value;
    const epoca = formEj2EF["epoca"].value;
    // Establecemos una variable para que cuando no haya resultados poder mostrar un mensaje, por defecto será true y se mostrará el mensaje
    let sinResultados = true
    // Inicializamos el contenido, con una lista ordenanda <ol>
    let htmlEj2EF = "<ul>";
    // Recorremos el array para poder filtrar...
    biblioteca.forEach((libro) => {
        // ... según lo que el usuario seleccione, si el usuario no ha seleccionado nada
        // o ha seleccionado sin especificar en todos los filtros, se mostrará todo el listado,
        // en caso de que haya seleccionado algo distinto se mostrarán la coincidencias en base a los filtros del condicional,
        // Si no hay coincidencias saldrá del condicional y consecuentemente del bucle
        if (
        (categoria == "todo" || libro.categoria == categoria) &&
        (idioma == "todo" || libro.idioma == idioma) &&
        (epoca == "todo" || libro.epoca == epoca)
        ) {
            // Llenaremos la variable con el contenido coincidente segun el condicional
            htmlEj2EF += `<li><span class="autor">${libro.autor}</span> : <span class="obra">${libro.titulo}</span> (${libro.categoria}), ${libro.idioma}</li>`
            // Pondremos la variable de sinResultados a false para evitar que salga el mensaje de "No hay ningún..."
            sinResultados = false
        }
    });
    // Finalizaremos el contenido, de la lista ordenanda con </ol>
    htmlEj2EF += "</ul>"
    // Inyectaremos todo el contenido HTMl dentro del <div>, si esta vacio porque ha salido del bucle sin resultados estará sin ningín <li>
    ejer2.innerHTML += htmlEj2EF
    // En función del estado de la variable de sinResulatdos mostraremos el mensaje, todo irá en función del bucle y el condicional
    if (sinResultados) {
        ejer2.innerHTML = "No hay ningún libro que cumpla las condiciones"
    }
}

// Llamamos a la función para que se ejecute
filtradoEj2 ()

// Con un evento en el cambio de seleccion filtraremos
formEj2EF.addEventListener("change", () => {
    // Llamamos a la función en el evento de cambio con el escuchador
    filtradoEj2 ()
});

// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX) 

// Nos traemos el div que contendrá el listado
const ejer3 = document.querySelector('#ejer3')

// Nos traemos el formulario para poder trabajar con el
const formEj3EF = document.forms['form-autor']

// Creamos una función para la busqueda
function busquedaEj2 (consultaAutor) {
    // console.log(consultaAutor);
    // Establecemos una variable para que cuando no haya resultados podamos mostrar un mensaje,
    //  por defecto será true y se mostrará el mensaje
    let sinResultados = true
    // Inicializamos el contenido, con una lista ordenanda <ol>
    let htmlEj3EF = "<ol>";
        // Recorremos el array para poder filtrar...
        biblioteca.forEach((libro) => {
            // Checks varios
            // console.log(libro["autor"]);
            // console.log(consultaAutor);
            // console.log((libro.autor.toLocaleLowerCase()).includes(consultaAutor));
            // Compararemos la lista de autores con la consulta realizada, pasamos el texto a minúsculas
            // y con el includes buscamos la cadena de texto dentro de la consulta
            if ((libro.autor.toLocaleLowerCase()).includes(consultaAutor)) {
                // Muestra de resultado de la busqueda:
                // Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX) 
                htmlEj3EF += `<li>${libro.autor} : ${libro.titulo} (${libro.categoria}, idioma : ${libro.idioma} época : ${libro.epoca}</li>`
                // Pondremos la variable de sinResultados a false para evitar que salga el mensaje de "No hay ningún..."
                sinResultados = false
            }
        
        });
    // Finalizaremos el contenido, de la lista ordenanda con </ol>
    htmlEj3EF += "</ol>"
    // Inyectaremos todo el contenido HTMl dentro del <div>,
    // excepto si no hay ninguna coincidencia, según el boolean sinResultados,
    // en cuyo caso mostraremos el mensaje "No hay ... "
    ejer3.innerHTML = sinResultados ? "No hay ningún autor que coincida con la búsqueda" : htmlEj3EF
}

// En el evento del submit del formulario ponemos un listener
formEj3EF.addEventListener('submit', (e) => {
// Preparamos el contenido del <div>, de momento vacio
  ejer3.textContent = ""
    // Evitamos la herencia
    e.preventDefault()
    // Cargamos el valor del input text y limpiamos el texto delante y detras de espacios vacios
    let consultaAutor = formEj3EF['autor'].value.trim()
    // console.log(consultaAutor);
    // Pasamos el texto a minusculas para poder comparar en la busqueda posterior
    consultaAutor = consultaAutor.toLocaleLowerCase()
    // Vamos a comprobar que no hayan dejado vacia la caja de busqueda,
    // en ese caso mostraremos un mensaje de error y seguiremos ejecutando el codigo,
    // para al final salir del listener
    if (consultaAutor.length == 0) {
        ejer3.textContent = "Hay que incluir texto en la búsqueda"
    return
    }
    // Llamamos a la función para que se ejecute cuando se produzca el evento
    busquedaEj2(consultaAutor)
})

// ==========================================================================================================
// EJERCICIO 4
// Añadir obra a la biblioteca
// A partir del formulario, añadir obras a la biblioteca
// Conseguir permanencia con LocalStorage
// Actualizar automáticamente el listado de obras del ejercicio 1

// Nos traemos el formulario para poder trabajar con el
const formEj4EF = document.forms['incluirObra']

// En el evento del submit del formulario ponemos un listener
formEj4EF.addEventListener('submit', (e) => {
    e.preventDefault()
    // Cargamos todos los valores de los inputs de texto
    let autor = formEj4EF['incluir-autor'].value
    let titulo = formEj4EF['incluir-titulo'].value
    let categoria = formEj4EF['incluir-categoria'].value
    let idioma = formEj4EF['incluir-idioma'].value
    let epoca = formEj4EF['incluir-epoca'].value
    // Si hay alguno vacio se mostrará el error del sistema
    // console.log(autor, titulo, categoria, idioma, epoca);
    //  Creamos el objetoObra con los datos introducidos
    let objetoObra = {titulo, autor, categoria, idioma, epoca}
    // console.log(objetoObra);
    // Introducimos el objeto anterior en el array mediante un push del objeto
    biblioteca.push(objetoObra)
    // Lanzamos la función del primer ejercicio para recargar el listado con los nuevos datos
    mostrarArray("ejer1")
    // Hacemos persistentes los datos en el localStorage para poder recuperarlos en caso de refresco del navegador
    // No sirve en caso de cerrarlo, es un almacenamiento temporal
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
    //Borramos los valores del formulario
    formEj4EF.reset()
    //Recargamos el select para que esté actualizado
    cargarSelect()
    // Recargamos el filtrado del ejercicio 2
    filtradoEj2 ()
    // // Recargamos la busqueda con los nuevos resultados
    // // No se si esto es deseable, pero es posible hacerlo
    // busquedaEj2()
})



// ==========================================================================================================
// EJERCICIO 5
// Quitar obras de la biblioteca. Crea en un formulario una etiqueta select con las obras de la biblioteca.
// Al seleccionar una obra y enviar el formulario, se eliminará la obra de la biblioteca.
// Actualizar automáticamente el listado de obras del ejercicio 1
// Actualizar el LocalStorage

//Creamos una función para actualizar el select una vez eliminada alguna obra
function cargarSelect() {
    // Nos traemos el div que contendrá el listado
    const ejer5 = document.querySelector('#selectQuitarObra')

    // Nos traemos el formulario para poder trabajar con el
    const formEj5EF = document.forms['formQuitarObra']

    // Definimos la variable que utilizaremos para generar el select con los options e incluimos el select
    let htmlEj5EF = '<select  name="bibliotecalista" id="bibliotecalista">'
    // Añadimos a la variable anterior el primer option con un mensaje descriptivo
    htmlEj5EF += '<option value="obraseleccionada" selected>Selecciona una obra para borrar</option>'

    // Ejecutamos un bucle para llenar el select con los options que llevarán las obras
    biblioteca.forEach((libro) => {
        // console.log(libro.titulo);
        // console.log(biblioteca.indexOf(libro));
        // Añadimos a la variable anterior un option por cada obra
        htmlEj5EF += `<option value="${libro.titulo}">Título : ${libro.titulo}</option>`
    });
    
    // Finalizamos el select añadiendo el tag de cierre a la variable que lo contiene
    htmlEj5EF += '</select>'

    // Inyectamos el codigo HTML en el documento
    ejer5.innerHTML = htmlEj5EF

    // Con un Listener que detecte el cambio vamos a detectar la obra seleccionada y obtener el indice
    formEj5EF.addEventListener('change', () => {
        // Obtenemos el valor del select
        let obraSeleccionada = formEj5EF['bibliotecalista'].value
        // Buscamos el indice de la obra seleccionada para pasarselo a la función de borrado
        // y añadirlo al boton en el onclick    
        const indice = biblioteca.findIndex(obra => obra.titulo === obraSeleccionada)
        // console.log(obraSeleccionada);
        // console.log(indice);
        // Seleccionamos el boton, en el fichero HTML hemos puesto un id para facilitar la tarea
        const botonBorrar = document.querySelector('#botonQuitarObra')
        // Establecemos el atributo onclick pasandole a la función eliminarObra el indice obtenido anteriormente
        botonBorrar.setAttribute("onclick", `eliminarObra(${indice})`)
    })
}

// Creamos una nueva función para eliminar la obra seleccionada, el parametro lo obtenemos del boton de borrado
function eliminarObra(indice) {
    // Eliminamos la obra con el indice seleccionado
    biblioteca.splice(indice, 1)
    // Hacemos persistentes los datos en el localStorage para poder recuperarlos en caso de refresco del navegador
    // No sirve en caso de cerrarlo, es un almacenamiento temporal
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
    // Lanzamos la función del primer ejercicio para recargar el listado con los nuevos datos
    mostrarArray("ejer1")
    // Recargamos el select por si quisieramos borrar otra obra
    cargarSelect()
    // Recargamos el filtrado del ejercicio 2
    filtradoEj2 ()
    // // Recargamos la busqueda con los nuevos resultados
    // // No se si esto es deseable, pero es posible hacerlo
    // busquedaEj2()
}

