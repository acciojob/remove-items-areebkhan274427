//your JS code here. If required.

const btn = document.querySelector('body > form > input[type=button]');


function myFunction(){

	          var x = document.getElementById("colorSelect");
              x.remove(x.selectedIndex);
}

btn.addEventListener("click", myFunction);