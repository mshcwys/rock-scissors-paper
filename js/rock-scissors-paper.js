//获取dom
const select = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scorebot = {
    player:0,
    computer:0
};


function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.333){
        return "rock";
    }else if(rand <= 0.666){
        return "paper"
    }else{
        return "scissors"
    }
    
};

function getWinner(p,c){
    if( p === c ){
        return "draw"
    }else if ( p === "rock"){
        if( c === "paper"){
            return "computer"
        }else{
            return "player"
        }
    }else if ( p === "paper"){
        if( c === "scissors"){
            return "computer"
        }else{
            return "player"
        }
        
    }else if ( p === "scissors"){
        if( c === "rock"){
            return "computer"
        }else{
            return "player"
        }
    }
}
//show winner

function showWinner(winner,computerChoice){
    if(winner ==="player"){
        scorebot.player++;
        result.innerHTML=`
        <h1 class="win">恭喜，你赢了</h1>
        <p>电脑的选择为</p>
        <img src="img/${computerChoice}.jpg">
        `
    }else if(winner ==="computer"){
        scorebot.computer++;
        result.innerHTML=`
        <h1 class="lose">抱歉，你输了</h1>
        <p>电脑的选择为</p>
        <img src="img/${computerChoice}.jpg">
        `
    }else{
        result.innerHTML=`
        <h1>平局</h1>
        <p>电脑的选择为</p>
        <img src="img/${computerChoice}.jpg">
        `
    }
    //显示分数
    score.innerHTML = `
    <p>玩家: ${scorebot.player}</p>
    <p>电脑: ${scorebot.computer}</p>
    `

    //显示modal
    modal.style.display = "block"
}

function play(e){
    // console.log(e.target)
    //获取玩家选择
    const palyerChoice = e.target.id;
    //电脑选择
    const computerChoice = getComputerChoice();
    // console.log(palyerChoice,computerChoice)

    //判断胜负
    const winner =getWinner(palyerChoice,computerChoice);
    console.log( palyerChoice,computerChoice,winner)
    showWinner(winner,computerChoice)
}
function clearModal(e){
    if(e.target == modal) {
        modal.style.display = "none";
    }
}
function restartGame(){
    scorebot.player = 0;
    scorebot.computer = 0;
    score.innerHTML = `
    <p>玩家: 0</p>
    <p>电脑: 0</p>
    `
}
//事件监听
select.forEach(choice => choice.addEventListener("click",play))

window.addEventListener("click",clearModal);

restart.addEventListener("click",restartGame)