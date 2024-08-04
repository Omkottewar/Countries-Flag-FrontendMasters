document.addEventListener("DOMContentLoaded",()=>{
const btn = document.querySelector("#dark-mode");
const nav = document.querySelector(".header__nav")
const body = document.body;
const main = document.querySelector("#card");

// main.style.backgroundColor = "red";
btn.addEventListener("click", ()=>{
    btn.classList.toggle("active")
    nav.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")
})


async function card() {
    try {
        const response = await fetch("http://localhost:3001/counteries");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data[0].name);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

card();

async function createCard(){
    const data = await card();
    console.log()
    const main_body = document.querySelector(".container-main");
   
    for(let i = 0 ; i <10 ; i++){
    const MainDiv = document.createElement("a");
    MainDiv.setAttribute("href","details.html")
    MainDiv.setAttribute("id","card");
    MainDiv.classList.add("card")
    // MainDiv.classList.add("active");
    MainDiv.innerHTML = `
    <img src="${data[i].flags.svg}">
    <div class="tile-text">
    <h3>${data[i].name}</h3>
    <p>Population: ${data[i].population}</p>
    <p>Region: ${data[i].region}</p>
    <p>Capital: ${data[i].capital}</p>
    </div>
    `;
    main_body.appendChild(MainDiv);
    }
    
}
createCard();
})


