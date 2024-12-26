document.getElementById('btn-withdraw').addEventListener('click',function () {
  const withdrawFeild = document.getElementById('withdrawFeild');
  const withdrawFeildValue = parseFloat(withdrawFeild.value);
//  2
  withdrawFeild.value= '';

  if (isNaN(withdrawFeildValue)) {
    alert('pls give a number');
    return;
  }

  const totalWithdraw = document.getElementById('totalWithdraw');
  const totalWithdrawPrev = parseFloat(totalWithdraw.innerText);

  
   
  const balanceEle = document.getElementById('balanceEle');
  const balanceElePrevious = parseFloat(balanceEle.innerText);

  if (withdrawFeildValue>balanceElePrevious) {
    alert('taka nai');
    return;
  }

  totalWithdraw.innerText =  totalWithdrawPrev + withdrawFeildValue;
  balanceEle.innerText = balanceElePrevious - withdrawFeildValue;

})