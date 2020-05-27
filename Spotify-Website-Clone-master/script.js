

async function getArtist (){
    const res = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/412/albums?limit=12", {
    
    "method": "GET",
    
    "headers": {
    
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    
        "x-rapidapi-key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
        }
    })
    const jresponse = await res.json()
    return jresponse
}


let artistPage = document.querySelector('.content-albums')

async function displayArtists (){
    const newArtist = await getArtist()
    let newArtists = newArtist.data
    for(let i = 0; i<newArtists.length; i++){
        let newA = newArtists[i]

    artistPage.innerHTML += 
    `
        <div class="col column-for-covers mb-4">
            <a href="album.html?id=${newA.id}"><img src="${newA.cover_xl}" alt="Bohemian rhapsody"></a>
            <div class="my-2">
                <span>${newA.title}</span>
                <p></p>
            </div>
        </div>`
    

    }   

 }
 window.onload = displayArtists();


  window.onload = getArtist()


  async function getArtistName (){
    const res = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/412", {
    
    "method": "GET",
    
    "headers": {
    
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    
        "x-rapidapi-key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
        }
    })
    const jsonResponse = await res.json()
    return jsonResponse
}


getArtistName().then(jsonResponse=>{
    let artistName = document.querySelector('.artistName')
    artistName.innerText = jsonResponse.name
})