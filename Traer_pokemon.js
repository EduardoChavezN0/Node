function Traer_pokemon_pikachu()
{
    var UrlAPi='https://pokeapi.co/api/v2/pokemon/pikachu'
    console.log(UrlAPi)

    fetch(UrlAPi)
    .then(response => response.json())
    .then(data => 
            {
                var imagen;
                imagen = document.createElement("img");
                imagen.src=data.sprites.front_default;
                salida = imagen.src
                document.getElementById("imagen_pikachu").innerHTML= "<img src ="+salida+">";
            }
    )
}


function Imprimir_pokemon()
{
    var UrlAPi='https://pokeapi.co/api/v2/pokemon'
    console.log(UrlAPi)

    fetch(UrlAPi)
    .then(response => response.json())
    .then(data => 
            {
             for(let i of data["results"])
             {
                console.log(data)
                document.write(i.name+"<br>")
             }
            }
    )
}


function Traer_pokemon_pikachu2()
{
    var pokemon = document.getElementById("pokemon").value;
    var UrlAPi='https://pokeapi.co/api/v2/pokemon/'+pokemon
    console.log(UrlAPi)

    fetch(UrlAPi)
    .then(response => response.json())
    .then(data => 
            {
                var imagen;
                imagen = document.createElement("img");
                imagen.src=data.sprites.front_default;
                salida = imagen.src
                document.getElementById("imagen_pikachu2").innerHTML= "<img src ="+salida+">";
            }
    )
}