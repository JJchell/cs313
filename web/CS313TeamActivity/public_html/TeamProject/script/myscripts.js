

//function changecolor() {
    //var ddiv1 = document.getElementById("div1");
  
    //ddiv1.className = "blueback";
//}

function changeColor() {
	var textbox_id = "txtColor";
	var textbox = document.getElementById(textbox_id);

	var div_id = "div1";
	var div = document.getElementById(div_id);

	// We should verify values here before we use them...
	var color = textbox.value;
	div.style.backgroundColor = color;

}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);

function dochange() {
    alert('clicked');
}
