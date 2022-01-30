
document.getElementById("confirm").addEventListener("click", function(){
    let Array = document.getElementById("atraduire").value;
    let final = Array.split("").reverse().join("");;
    document.getElementById("result").innerHTML = final;
});