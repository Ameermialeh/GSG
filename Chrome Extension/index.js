const txt = document.getElementById("txt-el");
const data = document.getElementById("data");
const saveInput = document.getElementById("saveI-btn");
const saveTab = document.getElementById("saveT-btn");
const deleteAll = document.getElementById("delete-btn");

let myLeads = [];

let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadFromLocalStorage) {
  myLeads = leadFromLocalStorage;
  setUl();
}

saveInput.addEventListener("click", function () {
  myLeads.push(txt.value);
  txt.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  setUl();
});

saveTab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    setUl();
  });
});

deleteAll.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  setUl();
});

function setUl() {
  let tempTxt = "";
  for (let i = 0; i < myLeads.length; i++) {
    tempTxt +=
      "<li><a id=" +
      "a-data" +
      " href=" +
      myLeads[i] +
      " target='_blank' >" +
      myLeads[i] +
      "</a></li>";
  }
  data.innerHTML = tempTxt;
}
