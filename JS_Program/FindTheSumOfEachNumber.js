function Check(){
    Num = document.getElementById('1').value
    N = parseInt(Num)
    ReturnStr = SumOfSqure(N)
    document.getElementById('2').value = ReturnStr;
}

function SumOfSqure(N){
    sum = 0;
   while(N > 0){
    d = N % 10;
    sum = sum+(d*d);
    N = Math.floor(N / 10);
   }
   return sum
}