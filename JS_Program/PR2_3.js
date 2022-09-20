for (counter = 50; counter < 100; counter++) {
  flag = 0;
  for (let i = 2; i < counter - 1; i++) {
    if (counter % i == 0) {
      flag = 1;
    }
  }
  if(flag == 0){
    document.write(counter+"\t")
  }
}
