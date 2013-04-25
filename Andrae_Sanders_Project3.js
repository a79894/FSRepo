//alert("JavaScript works!");
//Andrae Sanders

//Variable arrays

var BatmanSays = [
	"I need the BatSuit.", 
	"To the BatCave!", 
	"To the Batmobile!", 
    "I am ready to defeat the Joker." ,
    "I am not prepared to defeat the Joker",
    "The Bat-Mobile is "

];

var BatmanAttacks =  [
	"Batman punches the Joker.", 
	"Batman kicks the Joker.", 
	"Batman body slams the Joker.", 
	"Batman drop kicks the Joker.", 
	"Batman delivers the Spinning Elbow to the Joker.",
	"Batman applies the rear neck and choke to the Joker."
];

var JokerSays = [
	"Why so serious?",
	"This is what happens when an immovable object encounters an unstoppable force!",
	"Service with a smile.",
	"AHA-OOO-AHEEE-AHHUMM!",
	"I have a feeling we will be doing this a long time Batman!",
	"Boo! HAHAHHAAHAH!"
];

var JokerAttacks = [
	"The Joker punches the Batman.",
	"The Joker kicks the Batman.",
	"The Joker stabs the Batman.",
	"The Joker shoots at the Batman.",
	"The Joker laughs at the Batman.",
	"The Joker tricks the Batman."

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
	"Characters" : 
[
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
    console.log("The Bat-Mobile gets " + 
    mpg + " miles per gallon and is " + BatMobileIndicator[0] + ".");
};

var mpg = BatMpg(500,10);
ReportMpg(mpg)

console.log("The Joker says " + JokerSays[5] + " and fires a Rocket at the Batmobile." )

for (BatMobileCondition = 100; 
	 BatMobileCondition > 0; 
	 BatMobileCondition-- );
{
	 console.log( 
	 		 BatmanSays[5] + " at " + 
	 		 BatMobileCondition +
	   	     " percent " + " and " + 
	   	     BatMobileIndicator[1])
};
{
	 console.log (
	 		 "Leaping Lizards! " +  
	 		 "Situation Critical " +  " " + 
	 		 BatMobileIndicator[2])
};

console.log("After a long chase, The Batman catches the Joker " + BatmanAttacks[4])

// Math


var ThrowCount;
var DiceThrow;

for ( ThrowCount = 0; 
	  ThrowCount < 10; 
	  ThrowCount ++)

{
	DiceThrow = (
	Math.floor(Math.random() * 6 + 1));
	//console.log(DiceThrow)
}

if (
	dicethrow = 1 )
	{console.log ( "The Joker is laughing.") 
	}

(
	dicethrow = 2 )
	{console.log ( "The Joker is laughing.") 
	}


console.log(CharFile)

















