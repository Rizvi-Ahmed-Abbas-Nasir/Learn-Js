

function Copy(){

    var n1 = document.getElementById('1')
    alert(n1.value)
    var val = n1.value
    document.getElementById('2').value = val 
    document.getElementById("demo").innerHTML = "Hello World";
}