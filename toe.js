var va=1;
var m = 0;
const player1="X";
const player2="O";
const winval=[["b1","b2","b3"],["b1","b5","b9"],["b1","b4","b7"],["b4","b5","b6"],["b7","b8","b9"],["b2","b5","b8"],["b3","b6","b9"],["b3","b5","b7"]];

function fill(box) {
    if(va==1){
        document.getElementById(box).value= player1;
        va--;
        document.getElementById(box).disabled="disabled";
        winner();
    }
    else {
        document.getElementById(box).value= player2;
        va++;
        document.getElementById(box).disabled="disabled";
        winner();
    }
}
function winner() {
  var win = false;

  for(var i = 0;i<8;i++)
  {
    m++;
    var j = winval[i];
    var c = 0;
    var z = 0;

    for(var x =0 ;x<3;x++)
    {
    if(document.getElementById(j[x]).value=="X")
    {
    c++;
    }
    if(document.getElementById(j[x]).value=="O")
    {
      z++;
    }
    }
  if(c==3)
  {
    win = true;
    alert("Player X has won the Match!!!!!!");

  }
  else if(z==3)
  {
    win = true;
    alert("Player O has won the match!!!!!");
  }
   }
   if(m==72 && win==false)
   {
     alert("Match Tied");
   }


    }
  
