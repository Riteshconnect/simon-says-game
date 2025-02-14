let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow","blue","red","pink"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
	if(started == false){
		console.log("Game started")
		started = true;
		setTimeout(levelup,1000);
	}
});

function btnflash(btn){
	btn.classList.add("flash");
	setTimeout(function(){
		btn.classList.remove("flash")
	},300);
}

function userflash(btn){
	btn.classList.add("userflash");
	setTimeout(function(){
		btn.classList.remove("userflash")
	},300);
}


function levelup(){
	userSeq = [];
	level++;
	h2.innerText = `Level ${level}`;

	let randIdx = Math.floor(Math.random() * 4);
	let randcol = btns[randIdx];
	let randbtn = document.querySelector(`.${randcol}`);
	gameSeq.push(randcol);
	console.log(gameSeq);

	btnflash(randbtn);
}

function checkAns(idx){

	if(userSeq[idx]===gameSeq[idx]){
		if(userSeq.length==gameSeq.length){
			setTimeout(levelup,1000);
		}

	}else{
		h2.innerHTML=`Game Over! Your Score is   <b> ${level}</b> <br>Press any Key to start`;
		document.querySelector("body").style.backgroundColor = "red";
		setTimeout(()=>{
		document.querySelector("body").style.backgroundColor = "white";

		},150);
		reset();
	}	
}
function btnPress(){
	let btn = this;
	userflash(btn);

    userColor = btn.getAttribute("id");
	userSeq.push(userColor);
	checkAns(userSeq.length-1);
}

let Allbtns = document.querySelectorAll(".btn");
for(btn of Allbtns){
	btn.addEventListener("click" , btnPress);
}

function reset(){
	started = false;
	gameSeq = [];
	userSeq = [];
	level = 0;
}