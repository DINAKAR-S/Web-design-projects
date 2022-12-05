function form_val()
{
    let fn = document.forms["cys"]["fname"].value
    let ln = document.forms["cys"]["lname"].value
    let pn = document.forms["cys"]["ph.no"].value
    let d = document.forms["cys"]["dob"].value
    let ps = document.forms["cys"]["password"].value
    let cps = document.forms["cys"]["c_password"].value
    let x = document.forms["cys"]["email"].value

    var letters = /^[A-Za-z]+$/;  
    if(fn==""||ln==""||pn==""||ps==""||cps=="")
    {  
       alert("All details are required");  
    }  
    if(!letters.test(fn))  
    {  
    alert("Name is incorrect must contain alphabets only");  
    }  
    if(!letters.test(ln))  
    {  
    alert("Name is incorrect must contain alphabets only");  
    }  
    if(ps != cps)
    {
        alert('Password not matching');
    }
    

    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
      }  
}