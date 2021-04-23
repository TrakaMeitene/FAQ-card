
var acc = document.getElementsByClassName("question");

var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
 
   
   var answer = this.nextElementSibling;

    if (answer.style.display === "block") {
		answer.style.display = "none";
		this.classList.remove("arrowUp");

	  
    } else {
		answer.style.display = "block";
		this.classList.toggle("arrowUp")
	     }
  });
  
 
}