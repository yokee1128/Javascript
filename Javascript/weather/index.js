const btn=document.querySelector("button")

const buttonArr=["Incheon-gwangyeoksi","Hukuoka","Qingdao","Taiwan","Australia"]

function weaterinfo(cityname){
    const apiKey = '59c55439801dbf2fb58aef1c263d7d70';
    const positionUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${apiKey}`
    fetch(positionUrl)
        .then((v)=>v.json())
        .then((v)=>{
            // console.log(v);
            const lat = v[0].lat
            // console.log(lat); 

    fetch(positionUrl)
        .then((v)=>v.json())
        .then((v)=>{
                    // console.log(v);
                    const lon = v[0].lon
                    // console.log(lon);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(weatherUrl)
    .then(v => v.json())
    .then(v => {
                // console.log(v);            
                const weather = document.querySelector(".weather")
                weather.innerText= `${button.innerText}${v.weather[0].main}`
                
            })
        })        
    })
}

buttonArr.forEach((v)=> btn.addEventListener("click",()=>{
    weaterinfo(buttonArr.every(v))
}))