let tex = document.querySelector(".text");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp-size");

btn.addEventListener("click", function () {
    let choice = inp.value;
    let url = `https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${choice}`;
    fetch(url)
        .then(res => res.json()
            .then(data => {
                tex.innerHTML =
                    `
            <p class="p">Capital:${data.location.name}</p>  
            <hr>
            <p class="p">Region:${data.location.region}</p>  
            <hr>
            <p class="p">Country:${data.location.country}</p> 
            <hr>
            <p class="p">Temp-C:${data.current.temp_c}</p>
            <hr>
            <p class="p">Temp-F:${data.current.temp_f}</p>
            <hr>
            <img class="img" src="https:${data.current.condition.icon}" alt="">  
            `
            }))
})


