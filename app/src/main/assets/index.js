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
    for(let i = 1; i<=6; i++){
        console.log(i);
        let btn = document.getElementById("b"+i);
        btn.className = "btn";
    }
}

function onBtnClick(id){

    if(id == sequence[index]){

        let btn = document.getElementById("b" + id);
        btn.className = 'hide-btn';
        document.getElementsByTagName("html")[0].style.backgroundColor = btn.style.backgroundColor;
        document.getElementById("progress-bar").value = (index+1)/6*100;
        index++;
    }
    else
        errors++;

    if(index == sequence.length){
       let date = new Date() - score;
       let scoreData = {'score': Math.abs(date/100), 'errors':errors, 'color':document.getElementsByTagName("html")[0].style.backgroundColor};
       localStorage['scoreData'] = JSON.stringify(scoreData);
        window.open("score.html");
     }

}

start();

