

    function loadData(){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "64b9dc6615msh6a07f9a399f6cecp104ec8jsn6ec8c45b0920"
}

})
.then((response) =>
  response.json() 
   
)
.then(data =>{
   let albums = document.querySelectorAll('tr td')
   for(let i=0; i<albums.length;i++){
      albums[i].innerHTML = data[i].title;
   }
})
.catch((error)=> {
console.log(error)
});


   }
window.onload = loadData()