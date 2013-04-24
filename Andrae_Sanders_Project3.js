//alert("JavaScript works!");
//Andrae Sanders

//Boolean nested conditional

var BatmanSays = ["I need the BatSuit.", 
			"To the BatCave!", 
			"To the Batmobile!", 
    		"I am ready to defeat the Joker." ,
    		"I am not prepared to defeat the Joker"

];

var BatmanAttacks =  ["Punch", 
					"Kick", 
					"BodySlam", 
					"DropKick", 
					"Spinning Elbow"

]; 

var UtilityBelt = 1, 
	Batarang = 1, 
	GrapplingGun = 1, 
	BatPhone = 1, 
	BatDarts = 6, 
	SmokePellets = 6,
	Batsuit = 1; 


//Json Data

var CharFile = {
	"Characters" : [
			{
			"name" : "Bruce Wayne",
			"AKA" : "The Batman",
			"address" : "Wayne Manor",
			"occupation" : "Masked Crime Fighter"
		},
		    {
			"name" : "Joe Chill",
			"AKA" : "The Joker",
			"address" : "Unknown",
			"occupation" : "Criminal MasterMind"
		}
	]
};
for (var key in CharFile.Characters ) {
	var character = CharFile.Characters [key];
	};
     
   
if ((UtilityBelt === 1) &&  
	(Batarang === 1) && 
	(GrapplingGun === 1) && 
	(BatPhone === 1) && 
	(BatDarts === 6) && 
	(SmokePellets === 6 )&&
	(Batsuit ===1))
{
	console.log(BatmanSays[3]);
} else {
	console.log(BatmanSays[4]);
};	   




//Batmobile

var BatMpg = function(x,y) {
var Miles = x;
var Gallons = y;
var mpg = x/y;

return mpg;
};  

var ReportMpg = function(mpg) {
console.log("The Batmobile gets " 
+ mpg + " miles per gallon.");
};

var mpg = BatMpg(500,10);
ReportMpg(mpg)










console.log(CharFile)

















