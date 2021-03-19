let ranking = [];
let sortCriteria;
function loadRanking(criteria){

    sortCriteria = criteria;

    console.log("AAA 1");
    let i =0;
    while(true){

        console.log(localStorage['score'+i.toString()]);

        if(localStorage['score' + i] == null)
            break;

        let r = JSON.parse(localStorage['score' + i]);

        ranking[i] = r;

        i++;
    }

    ranking.sort((a, b) =>{
        if(a[sortCriteria] > b[sortCriteria])
            return 1;
        if(a[sortCriteria] < b[sortCriteria])
            return -1;
        return 0;
    });
}

function createRankingsScreen(){

    if(sortCriteria == "score"){
        document.getElementById('title').innerText = "Rankings (por pontuação)";
    }
    else document.getElementById('title').innerText = "Rankings (por erros)";

    console.log(ranking.length);

    let ol = document.getElementById('ranking');

    for(let i=0; i<ranking.length; i++){

        if(ranking[i] == null) continue;

        let li = document.createElement('li');
        li.innerText = ranking[i].name + " - ";
        if(sortCriteria == 'score')
            li.innerText += ranking[i].score + " pts";
        else
           li.innerText += ranking[i].errors + " erros";


        ol.appendChild(li);
    }

}

function removeRankingList(){
    let list = document.getElementsByTagName("li"), index;

    for (index = list.length - 1; index >= 0; index--) {
        list[index].parentNode.removeChild(list[index]);
   }

}

function changeRankings(){
    console.log("CHANGE");
    removeRankingList();
    openRankings(sortCriteria == 'score' ? 'errors' : 'score');
}


function clearRankings(){

    if(!confirm("Apagar as pontuações de jogadores?"))
       return;

   localStorage.clear();
   window.open('ranking.html');
}

function openRankings(sortCriteria){
    loadRanking(sortCriteria);
    createRankingsScreen(sortCriteria);
}



document.getElementById("change-btn").onclick = () => changeRankings();
document.getElementById("clear-btn").onclick = () => clearRankings();

openRankings('score');
