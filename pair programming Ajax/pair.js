
function loadImages (query){
    fetch(`http://www.splashbase.co/api/v1/images/search?q=${query}`)
    .then((response) =>
    console.log(response.json())
    ).catch ((error)=>{
        console.log('error')
    })
}
window.onload = loadImages('beaches')