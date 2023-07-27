const loadQuotes=()=>{
    fetch('https://api.kanye.rest/')
    .then(Response => Response.json())
    .then(data=>console.log(data))
}
const displayQuote=quote=>{

}