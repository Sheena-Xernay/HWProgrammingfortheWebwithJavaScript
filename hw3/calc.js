/*
 * Implement all your JavaScript in this file!
 */
var newNumber = true;
var justCleared = true;
var stillOperating = false;
var currentOperator = 'none';
var currentTotal = null;
var operatingNumber = null;
var display = $("input[name='display']");
var preNum = 0;
var clearDis = true;



var curNum = 0 ;
// var loadCur;
//reset and clear
var resetDis = function() {
    display.val('');
    justCleared = true;
    newNumber = true;
    stillOperating = false;
    currentTotal = null;
    currentOperator = 'none';
}


$("button").click(function() {
    if (justCleared === false){
    	resetDis();
    	display.val($(this).val());
    	curNum = Number(display.val());

    }else{

    	//find all number:
    	if (/\d/.test($(this).val())) {
    	//need to add what if first num 0?
    		 display.val(display.val() + $(this).val());
    		 curNum = Number(display.val());
    	 	console.log(curNum);
    	}else{

    		//function button
    		if(this.id === 'clearButton'){
    			resetDis();
    		}

    		if(this.id === 'addButton'){
    			display.val(curNum);
    			justCleared = false;
    			getTotal();

    		}
    		if(this.id === 'subtractButton'){
    			display.val(curNum);
    			justCleared = false;
    			getTotal();
    		}
    		if(this.id === 'multiplyButton'){
    			display.val(curNum);
    			justCleared = false;
    			getTotal();
    		}
    		if(this.id === 'divideButton'){
    			display.val(curNum);
    			justCleared = false;
    			getTotal();
    		}
    		if(this.id === 'equalsButton'){
    			display.val(curNum);
    			justCleared = false;
    			getResult();
    		}
		 } 
		}
	});
	

function getTotal(){
	console.log("currtun total is =" + curNum);
}
function getResult(){

	console.log("final result");

}

// link numbers to button
// $("#button1").click(function(){
// 	var temNum = $("#button1").val();
// 	insert(temNum);
// });
// $("#button2").click(function(){
// 	var temNum = $("#button2").val();
// 	insert(temNum);
// });
// $("#button3").click(function(){
// 	var temNum = $("#button3").val();
// 	insert(temNum);
// });
// $("#button4").click(function(){
// 	var temNum = $("#button4").val();
// 	insert(temNum);
// });
// $("#button5").click(function(){
// 	var temNum = $("#button5").val();
// 	insert(temNum);
// });
// $("#button6").click(function(){
// 	var temNum = $("#button6").val();
// 	insert(temNum);
// });
// $("#button7").click(function(){
// 	var temNum = $("#button7").val();
// 	insert(temNum);
// });
// $("#button8").click(function(){
// 	var temNum = $("#button8").val();
// 	insert(temNum);
// });
// $("#button9").click(function(){
// 	var temNum = $("#button9").val();
// 	insert(temNum);
// });
// $("#button0").click(function(){
// 	var temNum = $("#button0").val();
// 	insert(temNum);
// });

//calculate function
// $("#addButton").click(function(){
// 	// var loadCur = curNum;
// 	preNum = curNum;
// 	resetDis();
// 	$(".p").val =(preNum);
// });


// var btn_text = [];

// $(":button").click(function(){
// display.val("display.val()+button1")
// 	btn_text = $(this).val();
// 	if (!isNaN.btn_text) {
// 		// push.display("gd");
// 		return btn_text;
// 	}else{
// 		console.log("what");
// 	}
// })


// add operation

// 1. click "+" 

