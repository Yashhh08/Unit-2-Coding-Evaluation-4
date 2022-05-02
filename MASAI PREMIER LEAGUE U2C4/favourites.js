// write js code here corresponding to favourites.html

var Favourite = JSON.parse(localStorage.getItem("Favourites"));

Favourite.forEach(function (el, index) {
  var tr = document.createElement("tr");
  document.querySelector("tbody").append(tr);

  var td1 = document.createElement("td");
  td1.innerText = el.Match_Number;

  var td2 = document.createElement("td");
  td2.innerText = el.Team_A;

  var td3 = document.createElement("td");
  td3.innerText = el.Team_B;

  var td4 = document.createElement("td");
  td4.innerText = el.Date;

  var td5 = document.createElement("td");
  td5.innerText = el.Venue;

  var td6 = document.createElement("td");
  td6.innerText = "Delete";
  td6.style.color = "red";
  td6.style.cursor = "pointer";

  td6.addEventListener("click", function () {
    function_delete(el, index);
  });

  tr.append(td1, td2, td3, td4, td5, td6);
});

function function_delete(el, index) {
  Favourite.splice(index, 1);

  localStorage.setItem("Favourites", JSON.stringify(Favourite));

  window.location.reload();
}
