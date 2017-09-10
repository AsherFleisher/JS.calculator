

var num1 = ""
var num2 = ""
var comand = 0
var comand2 = 0
var answer=0


function fillnum1(para)
{
    if(comand===0&&answer===0)
    {

        num1 += "" + parseInt (document.getElementById("num1").innerHTML)
           document.getElementById("displaynum1").value=num1
    }       
        else
       {
           if(answer===0)
           {
              num2 += "" + parseInt (para.innerHTML)
              document.getElementById("displaynum2").value=num2
           }
           else
           {
               AC()
           }
   
        }
   
}

document.getElementById("num1").addEventListener("click", fillnum1);

function fillcomand(para)
{
    if(num2==="")
    
      
      {
         comand = para.innerHTML
         document.getElementById("comand").value = comand
      }
      if(answer!==0)
     
      {
          answer =
          document.getElementById("answer2").value = answer
          answer2 = answer 
           AC()
        document.getElementById("displaynum1").value = answer2
          comand = para.innerHTML
          document.getElementById("comand").value = comand
      }
    
   
    
}

function equal()
{
    num1 = parseInt(document.getElementById("displaynum1").value)
    num2 = parseInt(document.getElementById("displaynum2").value)
    comand = document.getElementById("comand").value
     if (comand === "*")
    {
        document.getElementById("answer").value= num1 * num2
                answer=num1 * num2

    }
    else if (comand === "/")
    {
        document.getElementById("answer").value= num1 / num2
                answer=num1 / num2

    }
    else if (comand === "+")
    {
        document.getElementById("answer").value= num1 + num2
                answer=num1 + num2

    }
    else if (comand === "-")
    {
        document.getElementById("answer").value= num1 - num2
        answer= num1 - num2
    }

}
            function AC()
            {
              num1=""
              num2=""
              answer=0
              comand=0
              document.getElementById("displaynum1").value=null
              document.getElementById("displaynum2").value=null
              document.getElementById("answer").value=null

              document.getElementById("comand").value=null

            }








function calc()
{
   var answer = 0
   var num1=document.getElementById("num1").value
   var num2=parseInt(document.getElementById("num2").value)
  
  answer = num1 + num2
  document.getElementById("answer").value = answer
}




function calcadd()
{
   var answer = 0
   var firstnum=parseInt(document.getElementById("firstnum").value)
   var secnum=parseInt(document.getElementById("secnum").value)
  
  answer = firstnum + secnum
  document.getElementById("answer").value = answer
}

function alertfirst(para)
{
    alert(para.innerHTML)
    
    
    
}
function alertsec(para)
{
    alert(para.innerHTML)
    
    
    
}






















function alertfirst(para)
{
    alert(para.innerHTML)
    
    
    
}
function alertsec(para)
{
    alert(para.innerHTML)
    
    
    
}

