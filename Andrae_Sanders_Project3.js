//alert("JavaScript works!");
//Andrae Sanders

//Boolean nested conditional

var BatmanSays = [
	"I need the BatSuit.", 
	"To the BatCave!", 
	"To the Batmobile!", 
    "I am ready to defeat the Joker." ,
    "I am not prepared to defeat the Joker",
    "The Bat-Mobile is "

];

var BatmanAttacks =  [
	"Punch", 
	"Kick", 
	"BodySlam", 
	"DropKick", 
	"Spinning Elbow"
]; 

var BatMobileIndicator = [
	"Fully Operational",
	"Initializing Self-Destruct",
	"Deploying Bat-Pod"
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
    console.log("The Batmobile gets " + 
    mpg + " miles per gallon.");
};

var mpg = BatMpg(500,10);
ReportMpg(mpg)


for (BatMobileCondition = 100; 
	 BatMobileCondition >10; 
	 BatMobileCondition -- );
	 {
	 console.log( 
	 		 BatmanSays[5] + " at " + 
	 		 BatMobileCondition +
	   	     " percent " + " and " + 
	   	     BatMobileIndicator[0])
	 };
	 {
	 console.log (
	 		"Leaping Lizards! Situation Critical " + 
	 		 BatMobileIndicator[1] + " " + 
	 		 BatMobileIndicator[2])
	 };






console.log(CharFile)

















