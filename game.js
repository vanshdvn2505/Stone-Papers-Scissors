let arr = {
    rock : 0,
    paper : 1,
    scissor : 2
}

let rocks = document.getElementById('rock');
let papers = document.getElementById('paper');
let scissors = document.getElementById('scissor');

papers.addEventListener('click',()=> {
    let x = Math.floor(Math.random()*3);
    if(x == 0){
        document.getElementById("use").innerHTML = 'You chose PAPER';
        document.getElementById("cp").innerHTML = 'Computer chose ROCK';
        document.getElementById("stats").innerHTML = 'YOU WON';
        let temp = document.getElementById("yscr").innerText;
        temp += "+1";
        document.getElementById("yscr").innerText=eval(temp);
    }
    else if(x == 1){
        document.getElementById("use").innerHTML = 'You chose PAPER';
        document.getElementById("cp").innerHTML = 'Computer chose PAPER';
        document.getElementById("stats").innerHTML = 'DRAW';
    }
    else{
        document.getElementById("use").innerHTML = 'You chose PAPER';
        document.getElementById("cp").innerHTML = 'Computer chose SCISSORS';
        document.getElementById("stats").innerHTML = 'YOU LOST';
        let temp = document.getElementById("scr").innerText;
        temp += "+1";
        document.getElementById("scr").innerText=eval(temp);
    }
})

rocks.addEventListener('click',()=>{
    let x = Math.floor(Math.random()*3);
    if(x == 0){
        document.getElementById("use").innerHTML = 'You chose ROCK';
        document.getElementById("cp").innerHTML = 'Computer chose ROCK';
        document.getElementById("stats").innerHTML = 'DRAW';
    }
    else if(x == 1){
        document.getElementById("use").innerHTML = 'You chose ROCK';
        document.getElementById("cp").innerHTML = 'Computer chose PAPER';
        document.getElementById("stats").innerHTML = 'YOU LOST';
        let temp = document.getElementById("scr").innerText;
        temp += "+1";
        document.getElementById("scr").innerText=eval(temp);
    }
    else{
        document.getElementById("use").innerHTML = 'You chose ROCK';
        document.getElementById("cp").innerHTML = 'Computer chose SCISSORS';
        document.getElementById("stats").innerHTML = 'YOU WON';
        let temp = document.getElementById("yscr").innerText;
        temp += "+1";
        document.getElementById("yscr").innerText=eval(temp);
    }
})

scissors.addEventListener('click',()=>{
    let x = Math.floor(Math.random()*3);
    if(x == 0){
        document.getElementById("use").innerHTML = 'You chose SCISSORS';
        document.getElementById("cp").innerHTML = 'Computer chose PAPER';
        document.getElementById("stats").innerHTML = 'YOU WON';
        let temp = document.getElementById("yscr").innerText;
        temp += "+1";
        document.getElementById("yscr").innerText=eval(temp);
    }
    else if(x == 1){
        document.getElementById("use").innerHTML = 'You chose SCISSORS';
        document.getElementById("cp").innerHTML = 'Computer chose ROCK';
        document.getElementById("stats").innerHTML = 'YOU LOST';
        let temp = document.getElementById("scr").innerText;
        temp += "+1";
        document.getElementById("scr").innerText=eval(temp);
    }
    else{
        document.getElementById("use").innerHTML = 'You chose SCISSORS';
        document.getElementById("cp").innerHTML = 'Computer chose SCISSORS';
        document.getElementById("stats").innerHTML = 'DRAW';
    }
})