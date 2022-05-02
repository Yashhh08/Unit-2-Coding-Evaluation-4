// write js code here corresponding to index.html
// You should add submit event on the form

var Match_data = JSON.parse(localStorage.getItem("schedule")) || [];

document
  .querySelector("#masaiForm")
  .addEventListener("submit", function_add_match);

function function_add_match() {
  event.preventDefault();

  var data = {
    Match_Number: document.querySelector("#matchNum").value,

    Team_A: document.querySelector("#teamA").value,

    Team_B: document.querySelector("#teamB").value,

    Date: document.querySelector("#date").value,

    Venue: document.querySelector("#venue").value,
  };

  Match_data.push(data);

  localStorage.setItem("schedule", JSON.stringify(Match_data));

  window.location.reload();
}
