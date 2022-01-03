var no1, no2, tot , operator; 

function setScreen(num)
{
    
    if(document.getElementById('txtDisplay').value != "0")
       {
           document.getElementById('txtDisplay').value += num;     
       }
    else
        {
            document.getElementById('txtDisplay').value = num;
        }
}

function reset()
{
    document.getElementById('txtDisplay').value = "0";
}

function setOperator(op)
{   
    no1= document.getElementById('txtDisplay').value;
    document.getElementById('txtDisplay').value = "0";
    operator=op;
}


function getAnswer()
{
    no2=document.getElementById('txtDisplay').value;

    
    if(operator=='+')
        {
            tot=Number(no1)+Number(no2);
        }
    if(operator=='-')
        {
            tot=Number(no1)-Number(no2);
        }
    if(operator=='*')
        {
            tot=Number(no1)*Number(no2);
        }
    if(operator=='/')
        {
            tot=Number(no1)/Number(no2);
        }

    document.getElementById('txtDisplay').value=tot;
}