
//  AUTHOR: Kiren Kaur
//  CREATE DATE: 02/08/2018
//  PURPOSE: javascript objects
//  LAST MODIFIED ON: 02/08/2018
//  LAST MODIFIED BY: Kiren Kaur
//  MODIFICATION HISTORY:
//  02/08/2018 Original Build


$(document).ready(function() {

  //pirate object
  //divId = allows each crew member to have own divID
  //strRank = rank of crew members
  //intFavNum = number crew member guess
	function Pirate(divID, strRank, intAnswer) {
		this.divID = divID;
		this.strRank = strRank;
		this.intFavNum = 0;

    //purpose = generate random numbers from 1 to 10
    //parameters = announces
    //return value = intrandGen (a random number)
		this.randGen = function() {
			return intrandGen = Math.ceil(Math.random()*10);
		};

    //purpose: allow ship members to display text
    //parameters: none
    //return value: none
		this.speak = function() {
      //if captain is speaking, display a different output
			if(this.strRank == "Captain") {

  				this.intFavNum = this.randGen();
  				var strOutput = "Yur " + this.strRank + " is tellin ya the number is " + this.intFavNum.toString();
  				document.getElementById(this.divID).textContent = strOutput;

			} else {

          //if crew member speaking, display different output
  				this.intFavNum = this.randGen();
  				var strOutput = this.strRank + " guesses the number " + this.intFavNum.toString() + ", argh.";
  				document.getElementById(this.divID).textContent = strOutput;
			}
		};
	};

	//Creating objects
	var Captain = new Pirate("Captain","Captain");
           Captain.speak();
           var intAnswer = Captain.intFavNum;

  //create sailor object
	var Sailor = new Pirate("Sailor","Sailor", intAnswer);
	         Sailor.speak();

  //create Quartermaster object
	var Quartermaster = new Pirate("Quartermaster","Quartermaster", intAnswer);
	         Quartermaster.speak();

  //create cabin boy object
	var CabinBoy = new Pirate("CabinBoy","Cabin Boy", intAnswer);
	         CabinBoy.speak();

  //create cabin boy object
  var Surgeon = new Pirate("Surgeon","Surgeon", intAnswer);
  	        Surgeon.speak();
}
);
