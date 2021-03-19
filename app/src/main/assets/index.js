let sequence = [];
let index;
let errors;
let score;

function generateSequence(restart=false){

    sequence = Array(6).fill().map((_, index) => index + 1);
    sequence.sort(() => Math.random() - 0.5);


}


function start(){

    generateSequence();
    errors = 0;
    index = 0;
    score = new Date();
    showButtons();
}

function showButtons(){
    for(let i = 1; i<=6; i++){
        let btn = document.getElementById("b"+i);
        btn.className = "btn";
    }
}
function onBtnClick(id){
    let progress = document.getElementById("progress-bar");
    let html = document.getElementsByTagName("html")[0];
    console.log(sequence);
    if(id == sequence[index]){

        let btn = document.getElementById("b" + id);
        btn.className = 'hide-btn';
        html.style.backgroundColor = btn.style.backgroundColor;
        progress.value = (index+1)/6*100;
        index++;
    }
    else{
        errors++;
        showButtons();
        index = 0;
        progress.value = 0;
        html.style.backgroundColor = "white";

    }

    if(index == sequence.length){
       let date = new Date() - score;
       let scoreData = {'score': Math.abs(date/100), 'errors':errors, 'color':document.getElementsByTagName("html")[0].style.backgroundColor};
       localStorage['scoreData'] = JSON.stringify(scoreData);
       window.open("score.html");
     }

}

start();

