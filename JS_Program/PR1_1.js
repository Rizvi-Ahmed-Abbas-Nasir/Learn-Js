function AND() {
  const num = document.getElementById("n1");
  const IntNum = parseInt(num.value);
  const num1 = document.getElementById("n2");
  const IntNum1 = parseInt(num1.value);
  const res = IntNum & IntNum1;
  document.getElementById('n3').value = res
}

function OR() {
    const num = document.getElementById("n1");
    const IntNum = parseInt(num.value);
    const num1 = document.getElementById("n2");
    const IntNum1 = parseInt(num1.value);
    const res = IntNum | IntNum1;
    document.getElementById('n3').value = res
  }

  function NAND() {
    const num = document.getElementById("n1");
    const IntNum = parseInt(num.value);
    const num1 = document.getElementById("n2");
    const IntNum1 = parseInt(num1.value);
    const res = IntNum ^ IntNum1;
    document.getElementById('n3').value = res
  }
