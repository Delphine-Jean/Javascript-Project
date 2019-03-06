window.addEventListener('load'()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.longitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = '${proxy}https://api.darksky.net/forecast/e461b1bf9c794798c4635401dccb4661/${lat},${long}';
        });
        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temperature,summary}= data.currently;
            //Set DOM Elements from the API 
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone; 
        })
    }
});
