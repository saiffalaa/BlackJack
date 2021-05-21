document.getElementById("hit").addEventListener('click',hitBtn);
const hitSound = new Audio("talk.wav")
const winSound = new Audio("buttonclick.wav")
const loseSound = new Audio("killChicken.wav")
const drawSound = new Audio("aug_boltslap.wav");
const standSound = new Audio("enemy_died.wav");
let rndm;
let Yresult=0;
let Dresult=0;
let turn ;
let wn=0;
let los=0;
let dr=0;
document.getElementById("deal").addEventListener('click',Deal);
document.getElementById("stand").addEventListener('click',Stand);
function Stand()
{
	turn="db";
	let prob;
	while(Dresult<=21)
	{
		if(Dresult==21)
			break;
		if(Dresult>=15&&Dresult<21)
		{
			prob = Math.floor(Math.random()*2);
			if(prob==1)
			{
				Dresult+=showCard();
				document.getElementById("dealer").innerHTML=Dresult;
				break;
			}
			else 
			{
				break;
			}
		}
		
		Dresult+=showCard()
		document.getElementById("dealer").innerHTML=Dresult;
		//setMilliseconds(1000);
		setTimeout(asd(),1000);
	}
	
	//standSound.play();
	
	checkRes();
}
function asd(){}
function hitBtn()
{
	turn = "yb";
	Yresult+=showCard();
	document.getElementById("your").innerHTML=Yresult;
	//document.getElementById("your").add(toString(Yresult));
}
function showCard()
{
	let card = document.createElement("img");
	rndm = Math.floor(Math.random()*13);
	rndm++;
	card.src=rndm+".png";
	if(rndm>10)rndm=10;
	//card.setAttribute("heigh","50px");
	//card.setAttribute("width","50px");
	document.getElementById(turn).appendChild(card);
	hitSound.play();
	return rndm;
}
function Deal()
{
	let YImages = document.getElementById("yb").querySelectorAll("img");
	//console.log(Images.length);
	let DImages = document.getElementById("db").querySelectorAll("img");
	let x = YImages.length;
	let y = DImages.length;
	for(let i = 0 ; i < x  ;i++)
	{
		YImages[i].remove();
		//console.log(Images.length);
	}
	for(let j=0 ; j < y ; j++)
	{
		DImages[j].remove();
	}
	Dresult=0;
	Yresult=0;
	document.getElementById("BlackJack-result").innerHTML="Let's play";
	document.getElementById("your").innerHTML=0;
	document.getElementById("dealer").innerHTML=0;
	drawSound.play();
}
function checkRes()
{
	if((Dresult>21&&Yresult>21)||(Dresult==Yresult))
		
	{
		document.getElementById("draws").innerHTML=++dr;
		document.getElementById("BlackJack-result").innerHTML="Draw"
		standSound.play();
	}
	else if(Dresult>21)
	{
		document.getElementById("wins").innerHTML=++wn;
		document.getElementById("BlackJack-result").innerHTML="You Win!!"
		winSound.play();
	}
	else if(Yresult>21)
	{
		document.getElementById("losses").innerHTML=++los;
		document.getElementById("BlackJack-result").innerHTML="You Lose!!"
		loseSound.play();
	}
	else if(Dresult>Yresult)
	{
		document.getElementById("losses").innerHTML=++los;
		document.getElementById("BlackJack-result").innerHTML="You Lose!!"
		loseSound.play();
	}
	else if(Yresult>Dresult)
	{
		document.getElementById("wins").innerHTML=++wn;
		document.getElementById("BlackJack-result").innerHTML="You Win!!"
		winSound.play();
	}
	
}