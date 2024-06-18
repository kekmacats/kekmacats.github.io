var vid1audio = new Audio('vid1.mp4');
var elem = document.documentElement;
var input = document.getElementById("myInput");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
	event.returnValue = "";
});

document.getElementById("toggleBtn").onclick = function() {
    var vid = document.getElementById("vid");
        vid.style.display = "block";
        toggleBtn.style.display = "none";
        ad.style.display = "none";
        tube.style.display = "none";
        txt.style.display = "none";
        txt2.style.display = "none";
		vid1audio.play();
		openFullscreen()
};
	
elem.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("toggleBtn").click();
  }
});
	
document.getElementById("ad").onclick = function() {
        txt2.style.display = "block";
    };
	
vid1audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false)