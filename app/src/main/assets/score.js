let scoreData = JSON.parse(localStorage['scoreData']);

function load(){

    let score = scoreData["score"];
    let color = scoreData["color"];
    let errors = scoreData["errors"];

    console.log(score);
    console.log(color);
    console.log(errors);

    let nameInput = document.getElementById("name-input");

    document.getElementsByTagName("html")[0].style.backgroundColor = color;
    nameInput.style.backgroundColor = color;
    document.getElementById("pts").innerText = score;
    document.getElementById("errors").innerText = errors;


    document.getElementById("submit").onclick = () => openRankings(nameInput);
}

function openRankings(nameInput){

   btnEnabled = false;

    let size = 0;
    if(localStorage['rankingSize']){
        size = localStorage['rankingSize'];
        size++;
    }

    localStorage.setItem('rankingSize', size);

    if(nameInput.value){
        scoreData["name"] = nameInput.value;
        localStorage['score' + size.toString()] = JSON.stringify(scoreData);
        console.log(size.toString());
        console.log(localStorage['score' + size.toString()]);
        window.open("ranking.html");
    }
}
load();