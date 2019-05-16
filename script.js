/***********************************************
script.js
************************************************/
var isVisible = false;
function clickBait() {
    if (!isVisible)
    {
        document.getElementById('bait').style.display = "block";
        isVisible = true;
    }
    else
    {
        document.getElementById('bait').style.display = "none";
        isVisible = false;
    }
}