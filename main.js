const button = document.getElementById("btn")
const input = document.getElementById("name")
const body = document.querySelector(".container")
const form =document.querySelector("form")



    navigator.geolocation.getCurrentPosition(position =>{
        const { latitude, longitude}=position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        fetch(url).then(res =>res.json()).then(data =>{
            const location = data.address.city 
            const state = data.address.state
            const country = data.address.country
            input.textContent=data.display_name
            
            
    body.style.backgroundImage=" url('https://source.unsplash.com/1440x1600/?nice)"
    body.style.backgroundReapeat  ="no-repeat"
    body.style.backgroundSize="100% 100%"

        }).catch(()=>{
            console.log("error")
        })
    })
    
let weather = {
    "apikey":"8ec6503770ca1b31683201d21d8b7e37",
    fetchWeather: function (place){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + place 
        +"&units=metric&appid="
        +this.apikey)
        .then((response)=>response.json())
        .then((data)=> this.displayWeather(data))
    },
    displayWeather : function(data){
        const{name}= data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in "+ name
        document.querySelector(".icon").src =" https://openweathermap.org/img/wn/"+icon+".png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "Humidity:-"+humidity
        document.querySelector(".wind").innerText = "Wind Speed:-"+speed+"km/hr"
    },
    search : function(){
this.fetchWeather(document.querySelector("#searchbar").value)
}
}
document.querySelector("#btn").addEventListener("click",()=>{
    weather.search()
    document.querySelector("#searchbar").value = ""
})
navigator.geolocation.getCurrentPosition(position =>{
        const { latitude, longitude}=position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        fetch(url).then(res =>res.json()).then(data =>{
            const country = data.address.coutry
weather.fetchWeather(country)


})})





const timeEL=document.getElementById("time")
const dateEl = document.getElementById("date")
const area = document.getElementById("name")
const currentweatheritems = document.querySelector(".weatheritem")
const futureforecast = document.getElementById("otherforcast")
const currenttempEl = document.getElementById("currenttemp")
const days = ["sunday","monday","tuesday,","wednrsday","thursday"
,"friday","sarturday"]
const months = ["january","february","march","april","may","june","july","august","september","october","november","december"]
const apikey ="8ec6503770ca1b31683201d21d8b7e37"
setInterval(()=>{
    const time =new Date()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const hoursin12format = hour >= 13 ? hour %12: hour 
    let minute =(time.getMinutes()<10?'0':'')+ time.getMinutes()
    const ampm = hour >=12 ? 'pm':'am'
    timeEL.innerHTML= hoursin12format+':'+minute+" "+`<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML =days[day]+', '+date+' '+months[month]
},1000)
    
    const APi = "8ec6503770ca1b31683201d21d8b7e37"
function getweather(){
    navigator.geolocation.getCurrentPosition((success)=>{
        const {latitude,longitude} = success.coords
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        fetch(url).then(res =>res.json()).then(data =>{
            const geo = data.address.city
            function weatherfinder(place){
                fetch("https://api.openweathermap.org/data/2.5/weather?q="
                + place 
                +"&units=metric&appid="
                +APi)
                .then((response)=>response.json())
                .then((data)=> {
                    const {humidity,temp,pressure} = data.main
                    const {description,icon}=data.weather[0]
                    const {speed}=data.wind
                    console.log(humidity,temp,pressure,description,icon,speed)
                    const svg=" https://openweathermap.org/img/wn/"+icon+".png"
                    currentweatheritems.innerHTML =
                    `
                    <div class="others" id="current">
                    <div class="weatheritem">
                    <div>Humidity</div>
                <div class="humidityvalue">${humidity}</div>
                </div>
                <div class="weatheritem">
                    <div>Wind Speed</div>
                <div class="windspeed">${speed}km/hr</div>
                </div>
                <div class="weatheritem">
                <div class="celcius">${temp}&#176;</div>
                    </div>
                    
                <div class="weatheritem">
                <div id="desribe">${description}</div>
                    
                <div><img src="${svg}" alt="" id="iconic"></div>
                </div>
                    </div>`;
                })
            }
            weatherfinder(geo)
            })
       /*  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${apikey}
        `
        fetch(url).then(response => response.json())
        .then(data =>{
            console.log(data)
        })
 */        })
}
getweather()

 const   scrollconatiner = document.getElementById("otherforecast")
 const scrollabledivs = document.getElementsByClassName("scrollable")
 let totalwidth = 0;
 for(let i =0;i<scrollabledivs.length;i++){
    totalwidth +=scrollabledivs[i].offsetWidth;
 }
 scrollconatiner.style.width = totalwidth +"px"

 let scrollPosition = 0;
 const scrollspeed = 2;

 function autoscroll(){
    scrollPosition += scrollspeed
    if(scrollPosition>=scrollconatiner.scrollWidth - scrollconatiner.clientWidth){
        scrollPosition = 0;
    }
    scrollconatiner.scrollLeft = scrollPosition 
}

setInterval(autoscroll(), 50)
