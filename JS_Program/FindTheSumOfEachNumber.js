function Check(){
    Num = document.getElementById('1').value
    N = parseInt(Num)
    ReturnStr = SumOfSqure(N)
    document.getElementById('2').value = ReturnStr;
}

function SumOfSqure(N){
    sum = 0;
    d = N*N
   while(d > 0){
    sum = sum+d % 10;
    d = Math.floor(d / 10);
   }
   return sum
}