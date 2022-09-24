function Check(){
    Num = document.getElementById('1').value
    Num = parseInt(Num)
    ReturnStr = SumOfSqure(Num)
    document.getElementById('2').value = ReturnStr;
}

function SumOfSqure(Num){
   sum = 0;
    d = Num*Num
   while(d > 0){
    sum = sum+d % 10;
    d = Math.floor(d / 10);
   }
   return sum
}