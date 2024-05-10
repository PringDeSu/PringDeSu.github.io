var h1 = document.getElementById("h1");
var btn = document.getElementById("btn");
var span = document.getElementById("span");
var cnt = 0;

btn.addEventListener("click", function() {
    cnt++;
    if (cnt == 39) {
        h1.innerText = "Miku";
    } else {
        h1.innerText = (cnt % 2 ? "8" : "49");
    }
    span.innerText = `cnt: ${cnt}`;
});
