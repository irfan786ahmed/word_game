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
let bollywood = ["sharukh khan", "amir khan", "salman khan", "katrina kaif", "aftab", "ranveer singh", "shahid kapoor", "irfan khan", "anil kapoor", "kareena kapoor"];
let cricket = ["sachin","virat","afridi","babar","watson","gayle","steyn","dhoni","rohit","hasan ali","dilshan"];
let brand = ["zara","tata motors","apple","rayban","bata","louis vuitton","samsung","maruti suzuki","air india","nike","puma"];

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
        inputText.style.cssText = "display:block;text-transform:uppercase";
        start.innerHTML = "Guess the Word";
        animalNames = createNewWords();
        randAnimalNames = scrambleWords(animalNames.split("")).join("");
        start.style.cssText="font-size:25px;text-align:center"
        if (animalNames === "tiger"){
            start.innerHTML=`They are wild and <br>get angry too quickly. <br>Don't taunt them even<br> if they're caged. **${randAnimalNames}**`;
            }
        else if (animalNames === "lion"){
                start.innerHTML=`National animal of <br> India <br>**${randAnimalNames}**`;
            }
        else if (animalNames === "monkey"){
                start.innerHTML=`They are known for<br> running and leaping <br>through trees with ease. **${randAnimalNames}**`;
            }
        else if (animalNames === "deer"){
                start.innerHTML=` They are brown in colour<br>, and some of them have<br> marks on their body <br> **${randAnimalNames}**`;
            }
        else if (animalNames === "goat"){
                start.innerHTML=`It is pet animal <br> for every family <br>in villages <br> **${randAnimalNames}**`;
            }
        else if (animalNames === "elephant"){
                start.innerHTML=`They are very big <br>have trunk and two <br>long teeth  <br> **${randAnimalNames}**`;
            }
        else if (animalNames === "buffalo"){
                start.innerHTML=`They are large black<br> domestic animal which <br>gives drinkable milk <br> **${randAnimalNames}**`;
            }
        else if (animalNames === "cow"){
                start.innerHTML=`They are religious  <br> animal white in color  <br> **${randAnimalNames}**`;
            }
        else if (animalNames === "giraffe"){
                start.innerHTML=`It has long neck <br> eat trees leaves   <br> **${randAnimalNames}**`;
            }
        else{
            start.innerHTML=`They are most loving <br> fish and can play <br> with humans<br> **${randAnimalNames}**`
        }
    }
    else {
        let writtenWord = inputText.value;
        if (writtenWord.toLowerCase() === animalNames) {
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
        inputText1.style.cssText = "display:block;text-transform:uppercase";
        start1.innerHTML = "Guess the Word";
        bollywoodNames = bollyNewWords();
        randBollyNames = scrambleBollyWords(bollywoodNames.split("")).join("");
        start1.style.cssText="font-size:25px;text-align:center"
        if (bollywoodNames === "sharukh khan"){
            start1.innerHTML=`He is known as <br> King Khan of Bollywood<br> **${randBollyNames}**`;
            }
        else if (bollywoodNames === "amir khan"){
                start1.innerHTML=`He is a known as <br> Mr. Perfectionist <br>**${randBollyNames}**`;
            }
        else if (bollywoodNames === "salman khan"){
                start1.innerHTML=`He is known as <br> Bhai Jaan of Bollywood <br> **${randBollyNames}**`;
            }
        else if (bollywoodNames === "katrina kaif"){
                start1.innerHTML=`Wife of Vickey Kaushal <br> **${randBollyNames}**`;
            }
        else if (bollywoodNames === "aftab"){
                start1.innerHTML=`He is an veteran actor <br> worked in masti series <br> **${randBollyNames}**`;
            }
        else if (bollywoodNames === "ranveer singh"){
                start1.innerHTML=`Husband of actress <br>Deepika Padukone  <br> **${randBollyNames}**`;
            }
        else if (bollywoodNames === "shahid kapoor"){
                start1.innerHTML=`He casted in the <br> movie Kabir Singh <br> **${randBollyNames}**`;
            }
        else if (bollywoodNames === "irfan khan"){
                start1.innerHTML=`He is an oscar <br> award winner <br> **${randBollyNames}**`;
            }
        else if (bollywoodNames === "anil kapoor"){
                start1.innerHTML=`He is forever young  <br> **${randBollyNames}**`;
            }
        else{
            start1.innerHTML=`She is wife of <br> actor Saif Ali Khan<br> **${randBollyNames}**`
        }
        

        // start1.innerHTML = randBollyNames;
    }
    else {
        let writtenWord1 = inputText1.value;
        if (writtenWord1.toLowerCase() === bollywoodNames) {
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
        inputText2.style.cssText = "display:block;text-transform:uppercase";
        start2.innerHTML = "Guess the Word";
        cricketNames = cricketNewWords();
        randCricketNames = scrambleCricketWords(cricketNames.split("")).join("");
        start2.style.cssText="font-size:25px;text-align:center";
        if (cricketNames === "sachin"){
            start2.innerHTML=`He is an Indian Batsmen <br> with 100 Intnl Centuries<br> **${randCricketNames}**`;
            }
        else if (cricketNames === "afridi"){
                start2.innerHTML=`He is a Pakistan Allrounder <br> who has hit <br>longest six <br>**${randCricketNames}**`;
            }
        else if (cricketNames === "virat"){
                start2.innerHTML=`He is an Indian Batsmen <br> who is husband of<br> Anushka Sharma <br> **${randCricketNames}**`;
            }
        else if (cricketNames === "hasan ali"){
                start2.innerHTML=`He is a Pakistan bowler <br> who drop catches <br> **${randCricketNames}**`;
            }
        else if (cricketNames === "watson"){
                start2.innerHTML=`He is an Australian <br> All-Rounder <br> **${randCricketNames}**`;
            }
        else if (cricketNames === "gayle"){
                start2.innerHTML=`He is an West Indian <br>Opener Universal Boss  <br> **${randCricketNames}**`;
            }
        else if (cricketNames === "steyn"){
                start2.innerHTML=`He is a South African <br> fastest bowler <br> **${randCricketNames}**`;
            }
        else if (cricketNames === "babar"){
                start2.innerHTML=`He is a Pakistani <br> batsmen and Captain <br> **${randCricketNames}**`;
            }
        else if (cricketNames === "dhoni"){
                start2.innerHTML=`He is an Indian wicket <br> keeper bestest among all <br> **${randCricketNames}**`;
            }
        else if (cricketNames === "rohit"){
                start2.innerHTML=`He is an Indian opening <br> batsmen and captain <br> **${randCricketNames}**`;
            }
        else{
            start2.innerHTML=`He is a Srilankan opening <br> batsmen best shot dilscoop <br> **${randCricketNames}**`
        }
        
        // start2.innerHTML = randCricketNames;
    }
    else {
        let writtenWord2 = inputText2.value;
        if (writtenWord2.toLowerCase() === cricketNames) {
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
        inputText3.style.cssText = "display:block;text-transform:uppercase";
        start3.innerHTML = "Guess the Word";
        brandNames = brandNewWords();
        randBrandNames = scrambleBrandWords(brandNames.split("")).join("");
        // let brand = ["zara man","tata motors","apple","rayban","bata","louis vuitton","samsung","maruti suzuki","airindia","nike","puma"]
        start3.style.cssText="font-size:25px;text-align:center";
        // start3.innerHTML = randBrandNames;
        if (brandNames === "zara man"){
            start3.innerHTML=`The most famous clothes<br> brand owner Bernard Arnault<br> **${randBrandNames}**`;
            }
        else if (brandNames === "tata motors"){
                start3.innerHTML=`The car manufacturing <br> company whose owner <br>is Ratan Tata <br>**${randBrandNames}**`;
            }
        else if (brandNames === "apple"){
                start3.innerHTML=`Most trusted gadget  <br> building company whose<br> name is same as fruit <br> **${randBrandNames}**`;
            }
        else if (brandNames === "rayban"){
                start3.innerHTML=`Goggles making company <br> whose first starts from R <br> **${randBrandNames}**`;
            }
        else if (brandNames === "bata"){
                start3.innerHTML=`Indian footwear maker company <br> **${randBrandNames}**`;
            }
        else if (brandNames === "louis vuitton"){
                start3.innerHTML=`World costliest product  <br>making brand which uses real <br>animal skin  <br> **${randBrandNames}**`;
            }
        else if (brandNames === "samsung"){
                start3.innerHTML=`Best android mobile  <br> developing company <br> **${randBrandNames}**`;
            }
        else if (brandNames === "maruti suzuki"){
                start3.innerHTML=`Car manufacturing oldest<br> car is Maruti800 <br> **${randBrandNames}**`;
            }
        else if (brandNames === "air india"){
                start3.innerHTML=`Indian government airlines <br> **${randBrandNames}**`;
            }
        else if (brandNames === "nike"){
                start3.innerHTML=`Most famous shoes making <br> like jordan <br> **${randBrandNames}**`;
            }
        else{
            start3.innerHTML=`Tiger is  the logo <br> shoes makers <br> **${randBrandNames}**`
        }
    }
    else {
        let writtenWord3 = inputText3.value;
        if (writtenWord3.toLowerCase() === brandNames) {
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
