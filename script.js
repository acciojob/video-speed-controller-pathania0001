// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
const video = document.getElementById("myVideo")
const playbtn = document.querySelector(".toggle");
const playbackSpeed  = document.getElementById("playbackSpeed ");
const volume = document.getElementById("volume");
const progressContainer = document.querySelector(".progress_container");
const buffer = document.querySelector(".buffer");
const progress = document.querySelector(".progress__filled");
const forward = document.getElementById("for25");
const backward = document.getElementById("back10");
playbtn.innerText = "►";
let playing = false;
 const handleButtonClick = (e,type)=>{
    if(type==="forward")
		video.currentTime+=25;
    else if(type==="backward")
		video.currentTime-=10;
	 else if(type === "play")
	 {
		 if(playing === true){
			 playbtn.innerText = "►"
			 playing = false;
			 video.pause();
		 }
		 else
		 {
			 playbtn.innerText = "❚ ❚";
			 playing = true;
			 video.play();
		 }
	 }
 }

 const handleBarChange = (e,type)=>{
	 if(type==="speed")
	 {
		 video.playbackRate = (e.target.value)/100;
		 console.log(video.playbackRate)
	 }
	 else if(type==="volume")
	 {
		 video.volume = e.target.value;
	 }
	 else if(type==="progress"){
		 console.log("ok")
		  video.currentTime = e.target.value;
		
	 }
 }
video.onloadedmetadata=()=>{progress.max = video.duration}
video.ontimeupdate =()=>{
	let currWidth = ((video.currentTime)/(video.duration))*100;
	progress.style.width=`${currWidth}%`;
     console.log(progress.style.width,currWidth)
}
video.onprogress=(e)=>{
	if(video.buffered.length===0||!video.duration)
		return;
   let curr = (video.buffered.end(video.buffered.length-1)/video.duration)*100;
	buffer.style.width=`${curr}%`;
}

progressContainer.addEventListener("click", (e) => {
  const rect = progressContainer.getBoundingClientRect(); // Use the parent!
  const clickX = e.clientX - rect.left;
  const percent = clickX / rect.width;
  video.currentTime = percent * video.duration;

  console.log("Clicked at %:",e.target.getBoundingClientRect(), (percent * 100).toFixed(2));
});

forward.onclick = (e) =>{handleButtonClick(e,"forward")}
backward.onclick=(e)=>{handleButtonClick(e,"backward")};
playbtn.onclick=(e)=>{handleButtonClick(e,"play")};

progress.onchange=(e)=>{handleBarChange(e,"progress")}
volume.onchange=(e)=>{handleBarChange(e,"volume")}
playbackSpeed.onchange=(e)=>{handleBarChange(e,"speed")}






	
