(function(){

	var popwrap = document.querySelector("#visibility"),
		exitbut = document.querySelector("#exit"),
		chisel = document.querySelector("#chisel"),
		shaving = document.querySelector("#shave");

	//This function will check if the user has visited the site before, and decides whether or not to toggle the popup
	function checkVisits(){
		if(localStorage.visits == 1){
			//No class will be toggled, the popup will remain invisible to user and screenreader.
			console.log("User has visited this site before.");
		}else{
			setTimeout(makeVisible, 3000); //Delays the popup for 3 seconds
			console.log("User has never visited this site before.");
		}
	}

	//This will make the popup visible after 3 seconds
	function makeVisible(){
		popwrap.classList.remove("no-read");
	}

	//This will toggle the classes that make a parallax effect
	function animateShavings()
	{
		var topDistance = window.scrollY; //Detecting and storing the distance the user has scrolled from the top of the page
		//console.log(topDistance);

		//Modifying the margin-top property of the chisel and shaving in congruence with the value of topDistance
		shave.style.marginTop = topDistance+"px";
		chisel.style.marginTop = "-"+topDistance+"px";
	}

	//This function will toggle a class that will hide the popup and remove it from the reach of screenreaders
	function exitPopup(){
		//console.log("You have clicked the exit button");
		popwrap.classList.add("no-read");
		localStorage.visits = 1; //After the popup has been closed once, the visit is logged and it should not appear again.
	}

	window.addEventListener("load", checkVisits, false);
	window.addEventListener('scroll', animateShavings, false); 
	exitbut.addEventListener("click", exitPopup, false);


})();