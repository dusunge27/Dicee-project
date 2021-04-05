var randnum1=Math.floor(Math.random()*6)+1;

var imagesource1="images/dice"+randnum1+".png";

document.querySelectorAll('img')[0].setAttribute('src',imagesource1);

var randnum2=Math.floor(Math.random()*6)+1;
var imagesource2="images/dice"+randnum2+".png";
document.querySelectorAll('img')[1].setAttribute('src',imagesource2);




if ( randnum2 > randnum1 ){

  document.querySelector('h1').innerHTML="Player 2 wins";

}
else if ( randnum1 > randnum2 ){

  document.querySelector('h1').innerHTML="Player 1 wins";

}

else{
document.querySelector('h1').innerHTML="match is tie";

}
