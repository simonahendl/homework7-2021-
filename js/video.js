var video = document.getElementById("player1")
console.log("Hello");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener
("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100+"%"
});

document.querySelector("#pause").addEventListener
("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener
("click", function(){
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener
("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool");
});

document.querySelector("#slower").addEventListener
("click", function() {
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener
("click", function() {
	console.log("GO FASTER")
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener
("change", function(){
	console.log(this.value)
	var slider = this.value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML = video.volume*100+"%"
});

document.querySelector("#mute").addEventListener
("click", function(){
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}

	else {
		video.muted = false;
		document.querySelector("#unmute").innerHTML = "mute"
	}
});

document.querySelector("#skip").addEventListener
("click", function(){
	if (video.currentTime + 15 >= video.duration) {
		video.currentTime = 0;
	}

	else{
		console.log(video.currentTime);
		video.currentTIme += 15;
	}
});
