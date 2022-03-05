console.log("Let's get this party started!");

const $input = $("#search");
const ul = document.querySelector("#loaded");
const $area = $("#loaded");

function createGiph(gips){
 
    //console.log(gips);
    
   
    const img = document.createElement('img');


  let numResults = gips.data.length;
  console.log(numResults);
  if(numResults){
    let random = Math.floor(Math.random() * numResults);
    let $newDiv = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let $newGif = $("<img>", {
          src: gips.data[random].images.original.url,
          class: "w-100"
      })
       $newDiv.append($newGif);
        $area.append($newDiv);
  }
  

  

}



const btn = document.querySelector('#buttonGiph');

//const form = document.querySelector('#searchform');

$("form").on("submit", async function(e) {
	e.preventDefault();
    let searchTerm = $input.val();
    $input.val("");

	const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });  
  console.log(response);
  createGiph(response.data);
});

$("#remove").on("click", function(e){
    $area.empty();
});