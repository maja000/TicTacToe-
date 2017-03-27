var turn = 1;
var nesto;
var str;
var str2;
var compPos;
var count=0;
var board=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function compplay( ){
  
  $('#1,#2,#3,#4,#5,#6,#7,#8,#9').click(function(){
    count++;
    var num=($(this).val());
    str='#'+($(this).val());
     $(str).text('X');
     $(str).prop('disabled', true);
  
    //compPos=Math.floor(Math.random()*9)+1;
    var a = parseInt(num);
    var index=board.indexOf(a);
   
     board.splice(index, 1);
     console.log(index);
     console.log(board);
    
    compPos=board[0];
    console.log(compPos);
     str2='#'+compPos.toString();
     $(str2).text('O');
     $(str2).prop('disabled', true);
    
    var index2=board.indexOf(compPos);
     board.splice(index2, 1);
   
     checkWinnerX();
     checkWinnerO();
    
 if(board[0]===10){($('#result-msg').text('no winner,try again')); stop();}
   });
  }//compplay
  
  
  function twoplay(){

   $('#1,#2,#3,#4,#5,#6,#7,#8,#9').click(function(){
    if(turn==1){
     count++;
     var str='#'+($(this).val());
     $(str).text('X');
     $(str).prop('disabled', true);
     turn=0;
          
     }else if(turn==0){
      count++;
      var str='#'+($(this).val());
       $(str).text('O');
       $(str).prop('disabled', true);
       turn=1;
      
     }
      
     checkWinnerX();
     checkWinnerO();
     if(count==9){($('#result-msg').text('no winner,try again'));}
    });
  }//twoplay
  


function checkWinnerX(){
    if($('#1').text()=='X'&& $('#2').text()=='X'&& $('#3').text()=='X'){($('#result-msg').text('winner is X')); stop(); }
     if($('#4').text()=='X'&& $('#5').text()=='X'&& $('#6').text()=='X'){($('#result-msg').text('winner is X')); stop(); }
     if($('#7').text()=='X'&& $('#8').text()=='X'&& $('#9').text()=='X'){($('#result-msg').text('winner is X'));stop(); }
     
     if($('#1').text()=='X'&& $('#4').text()=='X'&& $('#7').text()=='X'){($('#result-msg').text('winner is X')); stop(); }
     if($('#2').text()=='X'&& $('#5').text()=='X'&& $('#8').text()=='X'){($('#result-msg').text('winner is X')); stop(); }
     if($('#3').text()=='X'&& $('#6').text()=='X'&& $('#9').text()=='X'){($('#result-msg').text('winner is X')); stop(); }
     
     if($('#1').text()=='X'&& $('#5').text()=='X'&& $('#9').text()=='X'){($('#result-msg').text('winner is X')); stop(); }
     if($('#3').text()=='X'&& $('#5').text()=='X'&& $('#7').text()=='X'){($('#result-msg').text('winner is X')); stop(); }

}//X

function checkWinnerO(){
      if($('#1').text()=='O'&& $('#2').text()=='O'&& $('#3').text()=='O'){($('#result-msg').text('winner is O'));stop();}
      if($('#4').text()=='O'&& $('#5').text()=='O'&& $('#6').text()=='O'){($('#result-msg').text('winner is O'));stop();}
      if($('#7').text()=='O'&& $('#8').text()=='O'&& $('#9').text()=='O'){($('#result-msg').text('winner is O'));stop();}
     
     if($('#1').text()=='O'&& $('#4').text()=='O'&& $('#7').text()=='O'){($('#result-msg').text('winner is O'));stop();}
     if($('#2').text()=='O'&& $('#5').text()=='O'&& $('#8').text()=='O'){($('#result-msg').text('winner is O'));stop();}
     if($('#3').text()=='O'&& $('#6').text()=='O'&& $('#9').text()=='0'){($('#result-msg').text('winner is O'));stop();}
     
     if($('#1').text()=='O'&& $('#5').text()=='O'&& $('#9').text()=='O'){($('#result-msg').text('winner is O'));stop();}
     if($('#3').text()=='O'&& $('#5').text()=='O'&& $('#7').text()=='O'){($('#result-msg').text('winner is O'));stop();}
  
}//O

function stop(){
  
   $('#1,#2,#3,#4,#5,#6,#7,#8,#9').prop('disabled', true);
}//stop

/* $('#reset').click(function() {
    location.reload(true);
});*/
function res(){
window.location.reload(true);
}
 