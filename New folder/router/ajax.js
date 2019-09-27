var pr1 = $.ajax({
  url: "http://192.168.1.18:3000/post/1",
});
pr1.then(function(data) {
  var row = $('<div class="row"></div>');
  $("body").append(row);
  for (let index = 0; index < data.length; index++) {
      const element = data[index];
    var template = `<div class="card m-auto" style="width: 18rem;">
      <img src=${element.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.cost}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
    row.append(template);
  }
});
