const inputText = document.querySelector(".blank");
const inputText1 = document.querySelector(".blank1");
const clickButton = document.querySelector(".btn");
const clickButton1 = document.querySelector(".btn1");
const start = document.querySelector("h3");
const start1 = document.querySelector("#bol");
let play = false;
let animals = ['tiger', "lion", "monkey", "deer", "goat", "elephant", "cow", "buffalo", "giraffe", "dino", "dolphin"]
let animalNames = "";
let randAnimalNames = "";
let bollywood = ["sharukh", "amir", "salman", "katrina", "aftab", "ranveer", "shahid", "irfan", "tabbu", "kareena"]
let bollywoodNames = "";
let randBollyNames = "";


const createNewWords = () => {
    let randomNumber = Math.floor(Math.random() * animals.length);
    let tempWords = animals[randomNumber];
    return tempWords;
}
const bollyNewWords = () => {
    let randomNumber2 = Math.floor(Math.random() * bollywood.length);
    let tempBollyWords = bollywood[randomNumber2];
    return tempBollyWords;
}

const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i]
        let j = Math.floor(Math.random() * (i + 1))

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
const scrambleBollyWords = (arr1) => {
    for (let i = arr1.length - 1; i > 0; i--) {
        let temp1 = arr1[i]
        let j1 = Math.floor(Math.random() * (i + 1))

        arr1[i] = arr1[j1];
        arr1[j1] = temp1;
    }
    return arr1;
}



clickButton.addEventListener("click", () => {
    if (!play) {
        play = true;
        clickButton.innerHTML = "guess";
        inputText.style.display = "block";
        start.innerHTML = "Guess the Word";
        animalNames = createNewWords();
        randAnimalNames = scrambleWords(animalNames.split("")).join("");
        start.innerHTML = randAnimalNames;
    }
    else {
        let writtenWord = inputText.value;
        if (writtenWord === animalNames) {
            play = false;
            start.style.cssText = "font-size:25px;text-transform:uppercase"
            start.innerHTML = `you are absolutely <br>right my friend`;
            clickButton.style.backgroundColor = "rgb(189, 243, 81)"
            clickButton.innerHTML = "Guess Again";
            clickButton.style.color = "black"
            inputText.value = ""
        }
        else {
            start.style.cssText = "font-size:25px;text-transform:uppercase;text-align:center"
            start.innerHTML = `You are wrong.<br>Please try again <br> ""${randAnimalNames}""`;
        }
    }
})

 clickButton1.addEventListener("click", () => {
    if (!play) {
        play = true;
        clickButton1.innerHTML = "guess";
        inputText1.style.display = "block";
        start1.innerHTML = "Guess the Word";
        bollywoodNames = bollyNewWords();
        randBollyNames = scrambleBollyWords(bollywoodNames.split("")).join("");
        start1.innerHTML = randBollyNames;
    }
    else {
        let writtenWord1 = inputText1.value;
        if (writtenWord1 === bollywoodNames) {
            play = false;
            start1.style.cssText = "font-size:25px;text-transform:uppercase"
            start1.innerHTML = `you are absolutely <br> right my friend`;
            clickButton1.style.backgroundColor = "rgb(189, 243, 81)"
            clickButton1.innerHTML = "Guess Again";
            clickButton1.style.color = "black"
            inputText1.value = "";
        }
        else {
            start1.style.cssText = "font-size:25px;text-transform:uppercase;text-align:center"
            start1.innerHTML = `You are wrong.Please try again <br> ""${randBollyNames}""`;
        }
    }
})
