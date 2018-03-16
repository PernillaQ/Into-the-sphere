GetData();

async function GetData()
{
      let weatherResponse = await fetchData("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&units=metric&APPID=58184a606daa30dd317db1e66a56a2d8");
      let weather = JSON.parse(weatherResponse);

      document.getElementById("time").innerHTML = new Date().toLocaleString();

  /*    let tag15 = document.createElement("h5");
      let text15 =  weather.dt;
      let textNode15 = document.createTextNode(text15);
      tag15.appendChild(textNode15);
      document.getElementById("weatherInfo").appendChild(tag15); */

      let tag = document.createElement("h3");
   	let text = weather.name;
   	let textNode = document.createTextNode(text);
   	tag.appendChild(textNode);
      document.getElementById("weatherInfo").appendChild(tag); 

      let iconTag = document.createElement("IMG");
      let icon = weather.weather[0].icon;
      iconTag.setAttribute("src", "http://openweathermap.org/img/w/" + icon + ".png");
      iconTag.setAttribute("alt", "weather Icon");
      document.getElementById("weatherInfo").appendChild(iconTag); 

      let tag1 = document.createElement("h4");
      let text1 = weather.weather[0].description + " " + weather.main.temp + " °C";
      let textNode1 = document.createTextNode(text1);
      tag1.appendChild(textNode1);
      document.getElementById("weatherInfo").appendChild(tag1);

      let tag3 = document.createElement("h4");
      let text3 = "Max: " + weather.main.temp_max + " °C  Min: " + weather.main.temp_min + "°C";
      let textNode3 = document.createTextNode(text3);
      tag3.appendChild(textNode3);
      document.getElementById("weatherInfo").appendChild(tag3); 

      let tag5 = document.createElement("h4");
      let text5 = "Humidity: " + weather.main.humidity + " %  Wind: " + weather.wind.speed + " m/s";
      let textNode5 = document.createTextNode(text5);
      tag5.appendChild(textNode5);
      document.getElementById("weatherInfo").appendChild(tag5); 

   }

async function fetchData(url)
{
	 let promise = await fetch(url);
    let data = await promise.json();
      return JSON.stringify(data);
}

GetMoreData();

async function GetMoreData()
{
      let weatherResponse2 = await fetchData("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,se&units=metric&APPID=58184a606daa30dd317db1e66a56a2d8");
      let weather2 = JSON.parse(weatherResponse2);
    
      let list2 = document.createElement("ul");


for ( i = 0; i < weather2.list.length; i ++ )
{
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let d = new Date(weather2.list[i].dt_txt);
      let dayName = days[d.getDay()];

    if ( i % 8 === 0 )
    {
      let listItem2 = document.createElement("li");

      let listHeader = document.createElement("h5");
      let headerTextNode = document.createTextNode(dayName);
      listHeader.appendChild(headerTextNode);
      listItem2.appendChild(listHeader);

      let iconTag2 = document.createElement("IMG");
      let icon2 = weather2.list[i].weather[0].icon;
      iconTag2.setAttribute("src", "http://openweathermap.org/img/w/" + icon2 + ".png");
      iconTag2.setAttribute("alt", "weather Icon");
      listItem2.appendChild(iconTag2);

      let listText2 = document.createElement("p");
      let textNode16 = document.createTextNode(weather2.list[i].weather[0].description);
      listText2.appendChild(textNode16);
      listItem2.appendChild(listText2);

      let listText = document.createElement("p");
      let textNode10 = document.createTextNode(/*weather2.list[i].dt_txt + */"Min " + weather2.list[i].main.temp_min + " °C Max " + weather2.list[i].main.temp_max + " °C  ");
      listText.appendChild(textNode10);
      listItem2.appendChild(listText);

      list2.appendChild(listItem2);        
   }
}

   document.getElementById("weatherInfo").appendChild(list2); 

}



   

    
