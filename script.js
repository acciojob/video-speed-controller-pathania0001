// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
const video = document.getElementById("myVideo")
const playbtn = document.getElementById("toggle");
const playbackSpeed  = document.getElementById("playbackSpeed ");
const volume = document.getElementById("volume");
const buffer = document.querySelectorAll("buffer")[0];
const progress = document.querySelectorAll("prgress_filled")[0];

const forward = document.getElementById("for25");
const bacward = document.getElementById("back10");

 const handleButtonClick = ((e,type))=>{
    if(type==="forward")
		console.log(video.currentTime)
 }

console.log(video)
forward.onclick = (e) =>{
 handleButtonClick(e,"forward");
}





	
