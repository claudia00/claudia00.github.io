
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e){
  e.preventDefault();
  // console.log("SUBMITTED!")
  const searchTerm = form.elements.query.value;
  const config = {params: {q: searchTerm}}
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`, config);
  images_info(res.data);

  form.elements.value = '';
})


const images_info =(shows) =>{
  for (let result of shows){
    if(result.show.image){
    const divMaker = document.createElement('div')
    divMaker.classList.add('divMaker');
    const name = document.createElement('span');
    const genre = document.createElement('span');
    const summary = document.createElement ('span');
    const img = document.createElement('img');
   
    name.innerHTML =`<br>Title: ${result.show.name}</br>`;
    genre.innerHTML =` <br>Genre: ${result.show.genres}</br>`;
    summary.innerHTML =` <br>Summary: ${result.show.summary}</br>`;
    img.src = `${result.show.image.medium}`; 
    
    document.body.append(img);
    document.body.append(name);
    document.body.append(genre);
    document.body.append(summary);
    document.body.append(divMaker);
}
  }
}
















// //onload function
// $(function() {
//   $("#pokemon-search").click(function() {
//     let pokemonName = $("#pokemon-name").val()
//     // make sure the name isn't empty
//     if (pokemonName !== '') {
//       getPokemon(pokemonName)
//     }
//     //reset the input
//     $('#pokemon-name').val('')
//   })
// })

// function getPokemon(pokemonName) {
//   $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
//     console.log('data: ', data)
//     $("#pokemon-img").attr({src: data.sprites.front_default})
//     $("#name").text(data.name)
//     for (let object of data.types) {
//       $("#type").append(`<li class="capitalize">${object.type.name}</li>`)
//     }
//     getCharacteristics(data.id)
//     $("#pokemon").show()
//   }).fail(function() {
//     console.log("We couldn't find that pokemon")
//   })
// }

// function getCharacteristics(pokemonId) {
//   $.getJSON(`https://pokeapi.co/api/v2/characteristic/${pokemonId}`, function(data) {
//     console.log('data: ', data)
//     for (let description of data.descriptions) {
//       if (description.language.name == 'en') {
//         $("#characteristics").append(description.description)
//       }
//     }
//   }).fail(function() {
//     console.log("We couldn't find that pokemon's characteristics.")
//   })
// }

