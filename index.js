
const main = document.querySelector(".poke");

const sun = document.querySelector(".sun");

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd48ed6a3dcmsh9a5f6cc4a705d3cp17bc03jsn72f356c62e96',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const start = async function(city) {
        const response = await fetch(' https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options);
        const result = await response.json();
        console.log(result);

        const name =city
        const temp =result.temp
        const min =result.min_temp
        const max =result.max_temp
        const humid =result.humidity


        main.innerHTML = "";

        const dodo = document.createElement("div")
        dodo.className = "list-item";
        dodo.innerHTML = 
      `  
          
         <div class="temp" >
            ${temp}<sup>	&#9675</sup>
         </div>
         <div class="types">
            ${name}
         </div>
         <div class="details">
            <div class="detail">
                <img class="pic" src="assets/temperature-icon-png-11084.png">
                <p>Max</p>
             <div class="max" ><para>${max}<sup>	&#9675</sup></para></div>

            </div>
            <div class="detail">
                 <img class="pic" src="assets/pngwing.com (2).png">
                 <p>Humidity</p>
                 <div class ="humid"><para>${humid}<sup>	%</sup></para></div>
          
            </div>
            <div class="detail">
                <img class="pic" src="assets/cold.png">
                <p>Min</p>
                <div class="min"><para>${min}<sup>	&#9675</sup></para></div>
          
            </div>
        </div>
      `
      main.appendChild(dodo);
      searcbar.addEventListener("click",(e)=>{
        start(search.value)
     })
    }


    
const search = document.querySelector(".button input")
const searcbar = document.querySelector(".button button")



start("mumbai")

let searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        getWeatherReport(searchInputBox.value);
        
    }
})

