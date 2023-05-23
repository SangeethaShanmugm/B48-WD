var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log("Data", data);
  console.log(data[15].name.common);
  for (var i in data) {
    var res = data[i].name.common;
    console.log(res);
  }
};
