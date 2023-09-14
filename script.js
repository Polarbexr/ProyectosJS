const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-piano input");
const keysCheck = document.querySelector(".keys-checkbox input");

let allKeys = [],
 audio = new Audio("tunes/a.wav");

const playTune = (key)=>{
    audio.src = `tunes/${key}.wav`;
audio.play();

const clickedKey = document.querySelector(`[data-key="${key}"]`);
clickedKey.classList.add("active");
setTimeout(() => {
    clickedKey.classList.remove("active");
}, 150);

};

pianokeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});


const handleVolume = (e) =>{
    audio.volume = e.target.value;
    }
    
    const showHideKey = () =>{
        pianokeys.forEach(key => key.classList.toggle("hidde"));
        
    }

const pressedKey = (e) =>{
    if(allKeys.includes(e.key))
playTune(e.key);
}



keysCheck.addEventListener("click", showHideKey);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);