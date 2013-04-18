//Author: Andrae Sanders
//SDI: 1304
//Project 2
// 

//My Variables


//My strings

var WakeUp = "I Wake up.";

var WeatherCheck = "I check the weather on my iPhone.";

var StayIn = "I'm staying home ";

var True = "true";

var BootCold = true;

var FryeBoots = "\"Frye\" boots";

var Sneakers = "I will wear my sneakers";

var Freeze =  " surely, I will freeze to death!";

var Sleeping = "I am sleeping";

var WakingUp = "I am waking up!";

 

//My numbers

var temp = 30;

var Time = 8 



//My arrays

var SnoozeTimes = ["10", "20", "30"];

var conditions = ["windy", "sunny", "rainy", "chilly", "warm", "breezy", "clear", "freezing"];

var ShirtColors = [ "blue", "yellow", "green", "red", "white", "black"];

var Clothes = ["Jeans", "khaki's", "Cargo pants", "shorts"];



//My Procedure

var Procedure = function () {

	console.log (WakeUp + " " + WeatherCheck)

}

Procedure()



//My Boolean

var FootWear = function() {


if (BootCold === false){

	if (temp >= 30) { 
	     
    temp = temp + 1
	
	console.log ("If it is more than " + temp + " degrees I will wear my " + FryeBoots + ".") 
	
	}else{ console.log ("I will not wear " + FryeBoots +  ".")

}

}else{ if (StayIn == "I'm staying in.")

    {console.log (Sneakers)

    }else {
    
    console.log (StayIn + "or" + Freeze)}

}};

FootWear()



//My Number Function

var StayOrGo = function() {

for (var temp = 0; temp <= 30; temp +=30) {
	
	console.log ("If it is " + temp + " degrees outside, I'm staying in bed");

};

console.log ("If it is more than 30 degrees, " + WakingUp );


}

StayOrGo()


//My String

var LazyBones = function(){

console.log (WakeUp + " " + WeatherCheck + " " + StayIn)

}

LazyBones()

