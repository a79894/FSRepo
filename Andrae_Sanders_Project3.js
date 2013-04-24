//alert("JavaScript works!");
//Andrae Sanders

//Boolean nested conditional

var Batman = ["I need the Batsuit.", "vigilante", "To the Batmobile!", 
    "punch", "Kick", "BodySlam", "DropKick",
    "Flying Elbow", "Tie up", "I am ready to face the Joker." ,
    "I am not prepared to defeat the Joker"];
    
    
var UtilityBelt = 1, Batarang = 1, 
GrapplingGun = 1, BatPhone = 1, 
BatDarts = 6, SmokePellets = 6,
Batsuit = true;      
   
if ((UtilityBelt === 1) &&  (Batarang === 1) && 
	(GrapplingGun === 1) && (BatPhone === 1) && 
	(BatDarts === 6) && (SmokePellets === 6 )) {
	console.log(Batman[9]);
	if (Batsuit === true){
		console.log("Suited and Booted. " + Batman[2] ); 
	  } else { 
		console.log( Batman[0]);
		};
}else{
	console.log(Batman[10]);
};	    


//Json Data

var CharFile = {
	"Characters" : {
		"Batman": {
			"name" : "Bruce Wayne",
			"address" : "Wayne Manor",
			"occupation" : "Masked Crime Fighter"
		},
		"Joker": {
			"name" : "Joe Chill",
			"address" : "Unknown",
			"occupation" : "Criminal MasterMind"
		}
	}
};


for (var key in CharFile.Characters ) {
	var character = CharFile.Characters [key];
};

console.log(CharFile)


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




























