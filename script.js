function change(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else if (element.innerText == "Logout") {
        element.innerText = "Login";
    }
}
function addLike1() {
    console.log("entered addLike1");
    var value = document.getElementById("count1").innerText;
    console.log("value = " + value);
    value++;
    console.log("new value = " + value);
    document.getElementById("count1").innerHTML = value;
}

function addLike2() {
    var value = document.getElementById("count2").innerText;
    value++;
    document.getElementById("count2").innerHTML = value;
}

function alertMessage() {
    alert("Ninja was liked!");
  }

function removeBtn(element) {
    element.style.display = "none";
 }
