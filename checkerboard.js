function getCrossBrowserEvent(e)
{
  if (!e)
  {
    e = window.event;
  }
  return e;
}
function onClickBlackSquare(e)
{
  e = getCrossBrowserEvent(e);
  var source = e.srcElement;

  if (source.tagName == "IMG"){
    source.parentElement.innerHTML = "";
    
  }
  else{
    source.innerHTML = "<img src=\"checker.gif\" />";
  }


}
function createBoard()
{

  var board = document.getElementById("board");
  var numberRows = board.rows.length;
  var numberCols = board.rows[0].cells.length;
  var iRow;
  var iCol;

  

  for(iRow=0;iRow<numberRows;iRow++){
    for(iCol=0;iCol<numberCols;iCol++){
      var square = board.rows[iRow].cells[iCol];
      if ((iRow + iCol) % 2 != 0){
        square.style.backgroundColor = "black";
        square.onclick = onClickBlackSquare;
      }
      else{
        square.style.backgroundColor = "red";
      }

    }

  }


}



function onLoadBody()
{
  createBoard();
}
