const sleep = t => new Promise(s => setTimeout(s, t));

async function load(){

    let scoreData = JSON.parse(localStorage['scoreData']);

    let score = scoreData["score"];
    let color = scoreData["color"];
    let errors = scoreData["errors"];

    console.log(score);
    console.log(color);
    console.log(errors);

    while(true){
        console.log(document.getElementsByTagName("html")[0]);
        if(document.getElementsByTagName("html")[0] == null)
            await sleep(1000);

        else
            break;

    }
    document.getElementsByTagName("html")[0].style.backgroundColor = color;
    document.getElementById("name-input").style.backgroundColor = color;
    document.getElementById("pts").innerText = score;
    document.getElementById("errors").innerText = errors;
}

load();