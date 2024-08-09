  console.log('this is first weather app')
let input=document.querySelector('.inp');
let btn = document.querySelector('.btn');
let weather_img = document.querySelector('.weather-img');
let temp = document.querySelector('.temp span');
let speed = document.querySelector('.wind-speed');
let humidity = document.querySelector('.humidity');
let mood = document.querySelector('.deg span')

 async function weatherchange(city){
       let apikey = "98a8d9c8d24c45e0cf49d6a248889bfc";
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  
   let data = await  fetch(`${url}`)
     .then((response) => response.json())
    
     console.log(data)
  temp.innerHTML = Math.ceil(data.main.temp-273); 
   speed.innerHTML = data.wind.speed+ ' km/h'; 
    humidity.innerHTML = data.main.humidity+'%';
   if (data.weather[0].main === 'Clouds'){
    weather_img.src = '/images/clouds.png'; 
   }
   else if (data.weather[0].main === 'Mist'){
    weather_img.src = '/images/mist.png'; 
  }
  else if (data.weather[0].main === 'Clear'){
    weather_img.src = '/images/clear.png'; 
  }
  else if (data.weather[0].main === 'Rain'){
    weather_img.src = '/images/rain.png'; 
  }
  else if (data.weather[0].main === 'Drizzle.png'){
    weather_img.src = '/images/drizzle.png'; 
  }
  
  mood.innerHTML= data.weather[0].main;

 }

  btn.addEventListener('click', ()=>{
    console.log('hii this is my weather console');
      weatherchange(input.value);
  })