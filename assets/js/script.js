var start=document.querySelector("#startquiz")
var rules=document.querySelector("#follow")
var rulebox=document.querySelector("#rulebox")

start.addEventListener("click", function(){
    var listItemEl = document.createElement("li");
    listItemEl.className="rulebox";
    rulebox.appendChild(listItemEl);
});