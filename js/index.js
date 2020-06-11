// alert("Keep calm and git push")

var copyButton = document.querySelectorAll(".btn-clipboard").length;

for (var i = 0; i < copyButton; i++) {
  // const element = array[i];


document.querySelectorAll(".btn-clipboard")[i].addEventListener("click", function () {
  alert("copied!");
});
  
}



$("h6").addClass("glow-anime");
setTimeout(function() {
  $("h6").addClass("glow-anime");
}, 200);



