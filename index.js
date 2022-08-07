const inputText = document.querySelector(".blank");
const inputText1 = document.querySelector(".blank1");
const inputText2 = document.querySelector(".blank2");
const inputText3 = document.querySelector(".blank3");
const clickButton = document.querySelector(".btn");
const clickButton1 = document.querySelector(".btn1");
const clickButton2 = document.querySelector(".btn2");
const clickButton3 = document.querySelector(".btn3");
const start = document.querySelector("#ani");
const start1 = document.querySelector("#bol");
const start2 = document.querySelector("#cric");
const start3 = document.querySelector("#bran");
let play , play1 , play2 , play3= false
let animalNames , randAnimalNames , bollywoodNames ,randBollyNames , cricketNames , randCricketNames , brandNames,randBrandNames= "";
let animals = ['tiger', "lion", "monkey", "deer", "goat", "elephant", "cow", "buffalo", "giraffe", "dino", "dolphin"];
let bollywood = ["sharukh", "amir", "salman", "katrina", "aftab", "ranveer", "shahid", "irfan", "tabbu", "kareena"];
let cricket = ["sachin","virat","afridi","babar","watson","gayle","steyn","dhoni","rohit","hasan ali","dilshan"];
let brand = ["zara","mufti","wrangler","rayban","bata","louis vuitton","roadster","lee cooper","adidas","nike","puma"];



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
const cricketNewWords = () => {
    let randomNumber3 = Math.floor(Math.random() * cricket.length);
    let tempCricketWords = cricket[randomNumber3];
    return tempCricketWords;
}
const brandNewWords = () => {
    let randomNumber4 = Math.floor(Math.random() * brand.length);
    let tempBrandWords = brand[randomNumber4];
    return tempBrandWords;
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
const scrambleCricketWords = (arr2) => {
    for (let i = arr2.length - 1; i > 0; i--) {
        let temp2 = arr2[i]
        let j2 = Math.floor(Math.random() * (i + 1))

        arr2[i] = arr2[j2];
        arr2[j2] = temp2;
    }
    return arr2;
}
const scrambleBrandWords = (arr3) => {
    for (let i = arr3.length - 1; i > 0; i--) {
        let temp3 = arr3[i]
        let j3 = Math.floor(Math.random() * (i + 1))

        arr3[i] = arr3[j3];
        arr3[j3] = temp3;
    }
    return arr3;
}



clickButton.addEventListener("click", () => {
    if (!play) {
        play = true;
        clickButton.innerHTML = "guess";
        inputText.style.cssText = "display:block;text-transform:lowercase";
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
    if (!play1) {
        play1 = true;
        clickButton1.innerHTML = "guess";
        inputText1.style.cssText = "display:block;text-transform:lowercase";
        start1.innerHTML = "Guess the Word";
        bollywoodNames = bollyNewWords();
        randBollyNames = scrambleBollyWords(bollywoodNames.split("")).join("");
        start1.innerHTML = randBollyNames;
    }
    else {
        let writtenWord1 = inputText1.value;
        if (writtenWord1 === bollywoodNames) {
            play1 = false;
            start1.style.cssText = "font-size:25px;text-transform:uppercase"
            start1.innerHTML = `you are absolutely <br> right my friend`;
            clickButton1.style.backgroundColor = "rgb(189, 243, 81)"
            clickButton1.innerHTML = "Guess Again";
            clickButton1.style.color = "black"
            inputText1.value = "";
        }
        else {
            start1.style.cssText = "font-size:25px;text-transform:uppercase;text-align:center"
            start1.innerHTML = `You are wrong.<br>Please try again <br> ""${randBollyNames}""`;
        }
    }
})


 clickButton2.addEventListener("click", () => {
    if (!play2) {
        play2 = true;
        clickButton2.innerHTML = "guess";
        inputText2.style.cssText = "display:block;text-transform:lowercase";
        start2.innerHTML = "Guess the Word";
        cricketNames = cricketNewWords();
        randCricketNames = scrambleCricketWords(cricketNames.split("")).join("");
        start2.innerHTML = randCricketNames;
    }
    else {
        let writtenWord2 = inputText2.value;
        if (writtenWord2 === cricketNames) {
            play2 = false;
            start2.style.cssText = "font-size:25px;text-transform:uppercase"
            start2.innerHTML = `you are absolutely <br> right my friend`;
            clickButton2.style.backgroundColor = "rgb(189, 243, 81)"
            clickButton2.innerHTML = "Guess Again";
            clickButton2.style.color = "black"
            inputText2.value = "";
        }
        else {
            start2.style.cssText = "font-size:25px;text-transform:uppercase;text-align:center"
            start2.innerHTML = `You are wrong.<br>Please try again <br> ""${randCricketNames}""`;
        }
    }
})
 clickButton3.addEventListener("click", () => {
    if (!play3) {
        play3 = true;
        clickButton3.innerHTML = "guess";
        inputText3.style.cssText = "display:block;text-transform:lowercase";
        start3.innerHTML = "Guess the Word";
        brandNames = brandNewWords();
        randBrandNames = scrambleBrandWords(brandNames.split("")).join("");
        start3.innerHTML = randBrandNames;
    }
    else {
        let writtenWord3 = inputText3.value;
        if (writtenWord3 === brandNames) {
            play3 = false;
            start3.style.cssText = "font-size:25px;text-transform:uppercase"
            start3.innerHTML = `you are absolutely <br> right my friend`;
            clickButton3.style.backgroundColor = "rgb(189, 243, 81)"
            clickButton3.innerHTML = "Guess Again";
            clickButton3.style.color = "black"
            inputText3.value = "";
        }
        else {
            start3.style.cssText = "font-size:25px;text-transform:uppercase;text-align:center"
            start3.innerHTML = `You are wrong.<br>Please try again <br> ""${randBrandNames}""`;
        }
    }
})
