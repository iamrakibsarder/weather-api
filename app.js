const submitButton = document.getElementById('submit-value').addEventListener('click', function(){
    const inputValue = document.getElementById('input-value').value;
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q= + ${inputValue} + &appid=0b07ada3b9c5091361de54b52949e0a8`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('city-name').innerText = data.name;
        const getDegree = data.main.temp - 273.15
        document.getElementById('tempareture').innerText = getDegree.toFixed(2);
        document.getElementById('weather-mode').innerText = data.weather[0].main;
    })

    const getCityName = document.getElementById('city-name').innerText;
    if(inputValue == ""){
        alert("Please Enter a City");
    }
    document.getElementById('input-value').value = "";
    })
