const API_KEY = "appid=7143a03f0e8f1216c260be4d34afd088";
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;

    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&${API_KEY}&units=metric`)

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (city, idName) => {
    document.getElementById(city).innerText = idName;
};

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
};
