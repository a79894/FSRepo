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
	GrapplingGun =1, 
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
	"occupation" : "Masked Crime Fighter",
	
},
{
	"name" : "Joe Chill",
	"AKA" : "The Joker",
	"address" : "Unknown",
	"occupation" : "Criminal MasterMind"
}
]
}
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



var BatMpg = function(x,y) {
	var Miles = x;
	var Gallons = y;
	var mpg = x/y;

return mpg;
};  
 

//var ReportMpg = function(mpg) {
//    console.log("The Bat-Mobile gets " + 
//    mpg + " miles per gallon and is " + 
//    BatMobileIndicator[0] + ".");

//var mpg = BatMpg(500,10);
//ReportMpg(mpg)


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

// Math

var ThrowCount;
var ActionSeq;

for ( ThrowCount = 0; 
	  ThrowCount < 10; 
	  ThrowCount ++)

{
 ActionSeq = (Math.floor(Math.random() * 6 + 1));
 
}


var BatWing = {
	"VehicleType" : "Ariel",
	"Occupancy" : "Single",
	"Condition" : 100,
	"Ignition" : 100,
	"FireEngine" : function() // Method Accessor
{
	var invalid = "System Failure"
	var AllClear = 10000
	if  (this.Condition === 100 &&  this.Ignition === 100)
{
	return AllClear;
	} else {
	 return invalid;
}
	
},
	"SetCondition" : function (NewCondition) {  //Method Mutator
	NewCondition = (this.Condition - 10)
	//return NewCondition
},
	"SystemCheck" : function() { //Method Function
	var AllSystemsGo = BatWing.Condition === Batwing.Ignition
	return AllSystemsGo;
},
	"TakeFlight" : function() { // Method Procedure
		var Invalid = "System Failure"
		if (AllClear === 10000) {
}IBool

		else{
		 console.log("Fail to Execute Launch")
}
}

}
	

console.log("After a long chase, The Batman catches the Joker and  " + BatmanAttacks[4])

console.log("The Joker says " + JokerSays[5] + " and fires a Rocket at the Batmobile." )
console.log ( "The Joker is laughing. " + JokerSays[5]) 
console.log ( BatmanAttacks[0] + JokerAttacks[0] + JokerSays[0] ) 
console.log (BatmanAttacks[1] + JokerSays[1] + JokerAttacks[1]) 
console.log ( BatmanAttacks[2] + JokerSays[2] + JokerAttacks[2]) 
console.log ( BatmanAttacks[3] + JokerAttacks[3] + JokerSays [3]) 
console.log (BatmanAttacks[4] + JokerAttacks[4] + JokerSays[4])
console.log(BatWing.Allclear)	
	
console.log(CharFile)














