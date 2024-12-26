document.getElementById('btn-deposite').addEventListener('click',function () {
  const depositeFelid = document.getElementById('deposite-felid'); 
  const depositeFelidValue = parseFloat(depositeFelid.value);

  depositeFelid.value= '';

  if (isNaN(depositeFelidValue)) {
    alert('pls enter a number');
    return;
  }

  const totaldepo = document.getElementById('total-depo');
  const totaldepoValue = parseFloat(totaldepo.innerText);
  
  totaldepo.innerText = totaldepoValue + depositeFelidValue;

  const balanceEle = document.getElementById('balanceEle');
  const balanceElePrevious = parseFloat(balanceEle.innerText);

  balanceEle.innerText = balanceElePrevious + depositeFelidValue;  

})