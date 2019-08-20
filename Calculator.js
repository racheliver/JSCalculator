/*********************************************
*  Racheli Verechzon, ID: 305710071             *
*  ======================================       *
*         Exercise 3                            *
*  ======================================       *
***********************************************/


/*******************************Exercise summary*********************************************************************************************
In this exercise we  write a simple calculator application. An app that looks like a simple calculator,                                     *
The app will contain the following sections:                                                                                                *
Display Area - A field that will project the numbers entered and the result.                                                                *
Button area - consists of buttons for digits, decimal point, four account operations, result and reset.                                     *
How the app works -                                                                                                                         *
The app will act like a calculator for everything. with the right logic.                                        *
***********************************The idea behind the realization***************************************************************************
In order to maintain a calculator that meets all the conditions and stands in all the exercises according to the order of account operations*
as long as we have created two views of calculators one displayed to the user and the other hidden and is for the programmer.               *
The viewer can see that behind the scenes a smart screen is stored in which all the screen operations and the entire exercise are           *
 reserved. that way we used the function insert and insertOp just insert the click buttons numbers to the correct screen                    *
*********************************************************************************************************************************************/

/**************************OpOrNum***********************************************************
*OpOrNum represents a global variable that sets whether the last entered key was an operator*
*or a number,it is best to support the display to the screen as required (old calculator)   *
*********************************************************************************************/
/*************************CountDot**************************************************************************
*Contadt is a global variable that tells the number of points in a given number, according to any standard *
*calculator,a decimal number is allowed to contain only one point, we use this variable to test it.        *
***********************************************************************************************************/
var OpOrNum=0;
var countDot=0;

/***********************************************loadPage*****************************************************************************
*When the html page finishes loading, it fires the load event, and we place the listener on the onload attribute.                   *
*In the listener we will write the code we want to happen when the page finishes loading, ie the links of the listeners to the tags:*
*************************************************************************************************************************************/

    var loadPage = function() {
    document.getElementById("textview").placeholder = "0";
    document.getElementById("bnt1").addEventListener("click",  ListenerFunc, false);
    document.getElementById("bnt2").addEventListener("click",  ListenerFunc, false);
	  document.getElementById("bnt3").addEventListener("click",  ListenerFunc, false);
    document.getElementById("bnt4").addEventListener("click",  ListenerFunc, false);
	  document.getElementById("bnt5").addEventListener("click",  ListenerFunc, false);
    document.getElementById("bnt6").addEventListener("click",  ListenerFunc, false);
	  document.getElementById("bnt7").addEventListener("click",  ListenerFunc, false);
    document.getElementById("bnt8").addEventListener("click",  ListenerFunc, false);
	  document.getElementById("bnt9").addEventListener("click",  ListenerFunc, false);
    document.getElementById("bnt0").addEventListener("click",  ListenerFunc, false);
	  document.getElementById("bntPlus").addEventListener("click",   ListenerFunc, false);
    document.getElementById("bntMinus").addEventListener("click",  ListenerFunc, false);
	  document.getElementById("bntTimes").addEventListener("click",  ListenerFunc, false);
    document.getElementById("bntDivide").addEventListener("click", ListenerFunc, false);
	  document.getElementById("bntDot").addEventListener("click",    ListenerFunc, false);
    document.getElementById("bntEqual").addEventListener("click",  ListenerFunc, false);
    document.getElementById("AC").addEventListener("click",        ListenerFunc, false);
};


var ListenerFunc = function(e) {
    document.getElementById("textview").placeholder = "";
  if(e.target.id == "bnt1")
    insert('1');
  if(e.target.id == "bnt2")
    insert('2');
  if(e.target.id == "bnt3")
    insert('3');
  if(e.target.id == "bnt4")
    insert('4');
  if(e.target.id == "bnt5")
    insert('5');
  if(e.target.id == "bnt6")
    insert('6');
  if(e.target.id == "bnt7")
    insert('7');
  if(e.target.id == "bnt8")
    insert('8');
  if(e.target.id == "bnt9")
    insert('9');
  if(e.target.id == "bnt0")
    insert('0');
    if(e.target.id == "bntPlus")
    insertOp('+');
  if(e.target.id == "bntTimes")
    insertOp('*');
  if(e.target.id == "bntDivide")
    insertOp('/');
  if(e.target.id == "bntMinus")
    insertOp('-');
  if(e.target.id == "bntEqual")
    equal();
  if(e.target.id == "bntDot"){
    insert('.');countDot++;}
  if(e.target.id == "AC")
    AC();

}

function insertOp(num){
  OpOrNum=1;
  countDot=0;
  document.form2.textviewHidden.value+=num;
}

function insert(num){
  if (OpOrNum==1)
  {
  document.form.textview.value=""; OpOrNum=0;countDot=0;}
  if(countDot<1 || num != '.')
  {
  document.form2.textviewHidden.value+=num;
  if (num >=0 && num<=9 || num=='.')
    document.form.textview.value+=num;
  }
}

function equal(){
      document.form.textview.value="";
      var exp2 =document.form2.textviewHidden.value;
      if(exp2){
          document.form.textview.value=eval(exp2);
          document.form2.textviewHidden.value=eval(exp2);
  }
}
function AC(){
    document.form.textview.value="";
    document.form2.textviewHidden.value="";countDot=0;OpOrNum=0;
    document.getElementById("textview").placeholder = "0";
}
