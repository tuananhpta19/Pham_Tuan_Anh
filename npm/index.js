
    var template = `<div id="myProgress" style="width:100%;background-color:#ddd;height:30px">
  <div id="myBar" style="width:2%;height:30px;background-color:#4CAF50"></div>
</div>`;
    (function move() {
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++;
          $("#myBar").css("width", "" + width + "%");
        }
      }
    })();
    $("body").append(template);
