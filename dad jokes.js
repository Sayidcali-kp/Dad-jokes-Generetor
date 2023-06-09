const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")


const apikey = "y/3MXwLx60yMK6UfiMyyCw==TI8J7eVtckyuqGDA"

const options = {
    method: "Get",
    headers: {
        "x-Api-key": apikey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
  
    try {
        jokeEl.innerText ="updating.....";
        btnEl.disabled = true;
        btnEl.innerText = "Loading....."
        const response = await fetch(apiURL, options)
        const data =  await response.json()
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
    
        jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later"
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
    }

   
}

btnEl.addEventListener("click", getjoke)