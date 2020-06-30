// importamos el mopdulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
// direccion de la api
let API = 'https://rickandmortyapi.com/api/character/'

// funcion principal
function fetchData(url_api, callback){
    // instanciamos la conexion
    let xhttp = new XMLHttpRequest()
    // abrir un conexion con el metodo, la ruta y si es asincrono
    xhttp.open('GEt', url_api, true)
    // validacion del llamado
    xhttp.onreadystatechange = function(event){
        // el state 4 es el ultimo de la peticion
        if(xhttp.readyState === 4) {
            // verificamos que el status este en 200, que dice que todo esta bien, no un 400 o 500
            if(xhttp.status === 200){
                //el primer valor es un error, y el siguiente el resultado
                // ejecutamos el callback con el resultado
                callback(null, JSON.parse(xhttp.responseText))
            } else{
                // si no es 200
                const error = new Error('Error'+ url_api)
                // matamos el proceso con un error
                return callback(error, null)
            }
        }
    }
    // pro ultimo enviamos la peticion
    xhttp.send()
}
// primero buscamos la lista de personajes
fetchData(API, function(error1, data1){
    // si error, matamos retornando un error
    if(error1) return console.error(error1)
        // luego buscamos en la api el id del personaje
        fetchData(API + data1.results[0].id, function(error2, data2){
            // si error, matamos retornando un error
            if(error2) return console.error(error2)
            // por ultimo la consulta a la api que contiene su dimension
            fetchData(data2.origin.url, function(error3, data3){
                // si error matamos retornando un error
                if(error3) return console.error(error3)

                // mostramos los resultados
                console.log(data1.info.count)
                console.log(data2.name)
                console.log(data2.species)
                console.log(data3.name)
            })
        })
})