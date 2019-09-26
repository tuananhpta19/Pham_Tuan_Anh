for (var i = 1; i <= 10; i++) {
  var btn = document.createElement("BUTTON");
  btn.setAttribute("class", "btn" + i);
  btn.innerHTML = "CLICK ME" + i;
  document.body.appendChild(btn);
}
var btn = document.querySelectorAll("button");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var nutkichhoat = this;
    var vitrinut = 0;
    for (vitrinut = 0;(nutkichhoat = nutkichhoat.previousElementSibling);vitrinut++){}
    console.log(vitrinut);
  });
}
