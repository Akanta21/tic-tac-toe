function playTurn (index) {
  //need to persist data
  if(grid[index]) {
    $("#gameActionDisplay").text("Space is filled")
    return false;
  }
  else if(isGameOver()) {
    return false;
  }
  else {
    grid[index] = player;
    if(isGameOver()){
      if(whoWon() === 1){
        $("#" + index).text('X');
        console.log("Game is over. Winner is Player 1");
        $("#gameActionDisplay").text("Winner is Player 1");
      }
      else if(whoWon() === 2){
        $("#" + index).text('O');
        console.log($("#" + index).text('O'));
        $("#gameActionDisplay").text("Winner is Player 2");
      }
      else{
        $("#" + index).text('X');
        $("#gameActionDisplay").text("The Game is a Draw");
      }
    }
    else if(player === 1){
      player = 2
      $("#" + index).text('X');
      console.log($("#" + index).text('X'));
      $("#gameActionDisplay").text("Player 2 turn");
    }
    else{
      player = 1
      $("#" + index).text('O');
      console.log($("#" + index).text('O'));
      $("#gameActionDisplay").text("Player 1 turn");
    }
    return true;
  }
}


function whoWon(){

console.log(grid.join("-"));
if(grid[0] === 1 && grid[1] === 1 && grid[2] ===1)return 1 //Top Row P1
if(grid[0] === 2 && grid[1] === 2 && grid[2] ===2)return 2 //Top Row P2

if(grid[3] === 1 && grid[4] === 1 && grid[5] === 1)return 1 //Mid Row P1
if(grid[3] === 2 && grid[4] === 2 && grid[5] === 2)return 2 //Mid Row P1

if(grid[6] === 1 && grid[7]=== 1 && grid[8] === 1)return 1 //Bottom Row P1
if(grid[6] === 2 && grid[7]=== 2 && grid[8] === 2)return 2 //Bottom Row P1

if(grid[0] === 1 && grid[3] === 1 && grid[6] === 1)return 1 // First Column P1
if(grid[0] === 2 && grid[3] === 2 && grid[6] === 2)return 2 // First Column P2

if(grid[1] === 1 && grid[4] === 1 && grid[7] === 1)return 1 // Second Column P1
if(grid[1] === 2 && grid[4] === 2 && grid[7] ===2)return 2 // Second Column P2

if(grid[2] === 1 && grid[5] === 1 && grid[8] === 1)return 1 //Third Column P1
if(grid[2] === 2 && grid[5] === 2 && grid[8] ===2)return 2 //Third Column P2

if(grid[0] === 1 && grid[4] === 1 && grid[8] === 1)return 1 //Left Diagonal P1
if(grid[0] === 2 && grid[4] === 2 && grid[8] === 2)return 2 //Left Diagonal P2

if(grid[2] === 1 && grid[4] === 1 && grid[6] === 1)return 1 //Right Diagonal P1
if(grid[2] === 2 && grid[4] === 2 && grid[6] === 2)return 2 //Right Diagonal P2

if ((grid[0]+grid[1]+grid[2]+grid[3]+grid[4]+grid[5]+grid[6]+grid[7]+grid[8])===13)return 3

return 0 //Inconclusive outcome
}

function isGameOver(){
  if(whoWon())return true
  return false
}
function computerTurn(){

}
//Restart function
function restart(){
  grid = [0,0,0,
          0,0,0,
          0,0,0,];

  player = 1;
  console.log("Restart has been found");
  $("#0").text(" ");
  $("#1").text(" ");
  $("#2").text(" ");
  $("#3").text(" ");
  $("#4").text(" ");
  $("#5").text(" ");
  $("#6").text(" ");
  $("#7").text(" ");
  $("#8").text(" ");
  $("#gameActionDisplay").text("Player 1 turn");
}
var grid = [0,0,0,
            0,0,0,
            0,0,0];

var player = 1;


///JQuery function

$(function(){
  console.log("DOM is loaded");
  $("#0").click(function(){
    console.log("test");
    console.log(player);
    playTurn(0);
    });
  $("#1").click(function(){
    playTurn(1);
    });
  $("#2").click(function(){
    playTurn(2);
    });
  $("#3").click(function(){
    playTurn(3);
    });
  $("#4").click(function(){
    playTurn(4);
    });
  $("#5").click(function(){
    playTurn(5);
    });
  $("#6").click(function(){
    playTurn(6);
    });
  $("#7").click(function(){
    playTurn(7);
    });
  $("#8").click(function(){
    playTurn(8);
    });
  $("#restart").click(restart);
});
