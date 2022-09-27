function Amount(){

    let Amount = document.getElementById('1').value;
    let Amount2 = document.getElementById('2').value;
    let Amount3 = document.getElementById('3').value;
    let Amount4 = document.getElementById('4').value;

    Amount = parseInt(Amount);
    Amount2 = parseInt(Amount2);
    Amount3 = parseInt(Amount3);
    Amount4 = parseInt(Amount4);
    Total = Amount+Amount2+Amount3+Amount4; 
    document.getElementById('5').value = Total;
}