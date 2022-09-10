function Convert(){
    const c = document.getElementById('n1')
    const cnum = parseInt(c.value)
    const F = (cnum * 9/5) + 32
    document.getElementById('n2').value = F
}