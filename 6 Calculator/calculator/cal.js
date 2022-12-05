let amt = document.getElementById("amount");
let int = document.getElementById("interest");
let tim = document.getElementById("time");
let submit = document.getElementById("calculate");

submit.addEventListener('click',e=>{
    e.preventDefault();
    calculateEMI();
})

function calculateEMI()
{
    if(tim=="")
    {
        alert("Please enter loan tenure time in month")
    }
let r = parseFloat(int.value)/12/100;
let p = amt.value;
let n = tim.value;
let EMI = (p*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
let totalinterest = (EMI*n)-p;
let totalpayment = totalinterest + parseFloat(p);
document.getElementById("EMI").innerText="₹" + Math.round(EMI);
document.getElementById("Total Interest").innerText="₹" + Math.round(totalinterest);
document.getElementById("Total Payment").innerText="₹" +Math.round(totalpayment);
}