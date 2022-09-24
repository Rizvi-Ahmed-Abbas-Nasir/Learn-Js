function Check(){
    Str = document.getElementById('1').value
    ReturnStr = CountWhiteSpace(Str)
    document.getElementById('2').value = ReturnStr;
}

function CountWhiteSpace(Str){
    Count = 0;
    len = Str.length;
    for(i = 0; i < len - 1; i++){
        if(Str[i] == " "){
            Count++;
        }
    }
    return Count;
}