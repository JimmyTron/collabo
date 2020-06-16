// alert("Keep calm and git push")

var copyButton = document.querySelectorAll(".btn-clipboard").length;

for (var i = 0; i < copyButton; i++) {
  // const element = array[i];


document.querySelectorAll(".btn-clipboard")[i].addEventListener("click", function () {
  alert("copied!");
});

}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}




$("h6").addClass("glow-anime");
setTimeout(function() {
  $("h6").addClass("glow-anime");
}, 200);
