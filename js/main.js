(function(){

	var popwrap = document.querySelector("#visibility"),
		exitbut = document.querySelector("#exit");

	//This function will check if the user has visited the site before, and decides whether or not to toggle the popup
	function checkVisits(){
		if(document.cookie === 0){
			setTimeout(makeVisible, 3000) //Delays the popup for 3 seconds
			//console.log("User has never visited this site before.");
		}else{
			//No class will be toggled, the popup will remain invisible to user and screenreader.
			//console.log("User has visited this site before.");
		}
	}

	//This will make the popup visible after 3 seconds
	function makeVisible(){
		popwrap.classList.remove("no-read");
		document.cookie = 1;
	}

	//This function will toggle a class that will hide the popup and remove it from the reach of screenreaders
	function exitPopup(){
		//console.log("You have clicked the exit button");
		popwrap.classList.add("no-read");
	}

	window.addEventListener("load", checkVisits, false);
	exitbut.addEventListener("click", exitPopup, false);


})();