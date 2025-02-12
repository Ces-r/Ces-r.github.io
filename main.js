const dynamic = document.getElementById("welcome");
const page = document.getElementById("landing-page");
document.body.style.overflow = "auto";
let lastIndex = -1;

words = ["Software", "Web Dev", "Machine Learning"];


function getRandomNumber(min, max) {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * (max - min) + min);
    } while (newIndex === lastIndex); // Keep generating until it's different

    lastIndex = newIndex; // Update the last index
    return newIndex;
}

// pick a random word
setInterval(() => {
    dynamic.innerText = words[getRandomNumber(0, words.length)];
}, 2000);


function secondsection(){
    document.getElementById("second-section").scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      
}