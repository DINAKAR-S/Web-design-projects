    function f1()
    {
    let text = "Hello,We are here to announce a big event in Amrita Vishwa Vidyapeetham for cyber fraud.";
    let n = text.search(/Amrita/i);
    document.getElementById("demo").innerHTML=n;
    }

    function f2()
    {
    let text1 = document.getElementById("demo1").innerHTML; 
    document.getElementById("demo1").innerHTML = text1.replace("Microsoft", "Google");
    }
    
    function clickevent()  
    {  
        document.write("Congrats,you ur good learner");  
    }  
    function mouseoverevent()
    {
        alert("Hey,Buddy Ur a fast learner");
    }

    function mousedownevent() 
    {
        document.getElementById("myP").style.color = "red";
    }
      
    function mouseupevent() 
    {
        document.getElementById("myP").style.color = "blue";
    }
    function mousemoveevent()
    {
        alert("Thank u Visit again!!");
    }
    function focusevent()  
    {  
        document.getElementById("input1").style.background=" aqua";  
    }  

