
        const apiKey = "0b7f541809b6db7fd265e6a857b79607";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=nottingham";

        


        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();

            console.log(data);

        }
        checkWeather();