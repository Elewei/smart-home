


function get_weather_info() {
  
  /* 获取天气信息 */
  $.ajax({
    type: "get",
    dataType: "json",
    url: "https://free-api.heweather.net/s6/weather?location=221.224.30.130&key=c3af91c9c649423386bd645f32f5d67f",
    start: function () { console.log("开始获取天气数据了") },
    complete: function () { console.log("获取天气数据完成") },
    success: function (data) {
      console.log(data);
      let currentCity = data.HeWeather6[0].basic.location;
      let currentTmp = data.HeWeather6[0].now.tmp + '℃';
      let currentWeather = data.HeWeather6[0].now.cond_txt;
      let currentWeatherPic = data.HeWeather6[0].now.cond_code;
	  
	  console.log(currentTmp);
	  console.log(currentWeather);
	  console.log(currentCity);
	  console.log(currentWeatherPic);
	  
	  document.getElementById("wendu").innerText = currentTmp;
	  document.getElementById("tianqi").innerText = currentWeather;
	  document.getElementById("city").innerText = currentCity;
	  //document.getElementById("weatherPic").innerText = currentWeatherPic;      
    }
  });

  setTimeout("get_weather_info()", 600000);
}






//window.onload = get_weather_info;