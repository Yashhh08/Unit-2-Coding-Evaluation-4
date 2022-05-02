// write js code here corresponding to matches.html

var Match_data = JSON.parse(localStorage.getItem("schedule"));

var Favourite = JSON.parse(localStorage.getItem("Favourites")) || [];

function Display_data(Match_data) {
  document.querySelector("tbody").innerHTML = "";

  Match_data.forEach(function (el) {
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
    td6.innerText = "Favourites";
    td6.style.color = "green";
    td6.style.cursor = "pointer";

    td6.addEventListener("click", function_addToFav);

    function function_addToFav() {
      Favourite.push(el);

      localStorage.setItem("Favourites", JSON.stringify(Favourite));
    }

    tr.append(td1, td2, td3, td4, td5, td6);
  });
}

Display_data(Match_data);

document
  .querySelector("#filterVenue")
  .addEventListener("change", function_filter);

function function_filter() {
  var selected = document.querySelector("#filterVenue").value;

  var filterlist = Match_data.filter(function (el) {
    return el.Venue == selected;
  });
  Display_data(filterlist);
}
