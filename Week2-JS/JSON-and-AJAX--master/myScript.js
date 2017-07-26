// This is my script for the JSON exercise


var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadMyData, false);

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);

function loadMyData() {
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
//    console.log(manufacturerStored);
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/kaw31/JustItWeek2/master/Week2-JS/JSON-and-AJAX--master/expensiveLuxuryCars.json", true);
    
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {

            var myData = JSON.parse(myRequest.responseText);
            
             /* ============= VIDEO =========== */
            
            document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="' + myData.data[manufacturerStored].video + '"frameborder="0" allowfullscreen></iframe>';
            
             /* ============= IMAGES =========== */
            
            document.getElementById("imgC").innerHTML = '<img src="' + myData.data[manufacturerStored].img + '"width="auto" height="auto" alt="Car image">';
            
            /* ============= CHART =========== */
            
            var charType = mySurvey.value;
            
            var chart = new CanvasJS.Chart("chartContainer", {
            theme: "theme2",//theme1
            backgroundColor: "transparent",
            title:{
            text: "Specifications",
            fontColor: "black"
		      },
              animationEnabled: false,   // change to true
		      data: [              
		      {
			// Change type to "bar", "area", "spline", "pie",etc.
			type: charType,
			dataPoints: [
				{ label: "Overall",  y: myData.data[manufacturerStored].quality[0].rating },
				{ label: "Mechanical", y: myData.data[manufacturerStored].quality[1].rating },
				{ label: "Powertrain", y: myData.data[manufacturerStored].quality[2].rating },
				{ label: "Body",  y: myData.data[manufacturerStored].quality[3].rating },
				{ label: "Interior",  y: myData.data[manufacturerStored].quality[4].rating },
				{ label: "Accessories",  y: myData.data[manufacturerStored].quality[5].rating }
			]
		}
		]
	});
	chart.render();
            
//            console.log(myData);
        }
    }
    
  
    
    
    myRequest.send();
    
    
    
    
    
    
//    console.log(myRequest);
}