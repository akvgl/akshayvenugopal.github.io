const display = document.getElementById("display");
const operation = ['+','-','*','/'];
var str = "";

function clearAll()
{
    display.innerText = "";
    str = "";
}

function removeLastFromStr()
{
    if(str.length > 1)
    {
        str = str.slice(0, -1);
        display.innerText = display.innerText.slice(0,-1);
    }
}

function addToDisplay(x)
{
    if(str.length > 15)
    {
        alert("input limit exceeded!! ")
        clearAll();
    }
    else if(x == '*' && checkForOperation(x) && display.innerText.length != 0)
    {
        display.innerText += '×';
        str += x;
    }
    else if(x == '/' && checkForOperation(x) && display.innerText.length != 0)
    {
        display.innerText += '÷';
        str += x;
    }
    else if(x == '+' && checkForOperation(x))
    {
        display.innerText += '+';
        str += x;
    }
    else if(x == '-' && checkForOperation(x))
    {
        display.innerText += '-';
        str += x;
    }
    else if(x == '.')
    {
        checkForDot();
    }
    else if(checkForNumber(x))
    {
        display.innerText += x;
        str += x;
    }

}

function printResult()
{
    try 
    {   
        display.innerText = eval(str);
    } 
    catch (error)
    {
        display.innerText = "Error"
    }
}

function checkForDot()
{
    for(let i = 0; i < str.length; ++i)
    {
        if(str[i] == '.')
        {
            return;
        }
    }

    if(display.innerText.length == 0)
    {
        display.innerText += '0.';
        str += '0.'
        lenCnt++;
    }
    else
    {
        str += '.';
        display.innerText += '.';
        lenCnt++;
    }   
    
}

function checkForOperation(x)
{
    if(display.innerText == ' ')
    {
        return false;
    }
    for(let i = 0; i < operation.length; ++i)
    {
        if(str[str.length - 1] == operation[i])
        {
            return false;
        }
    }

    return true;
}

function checkForNumber(x)
{
    for(let i = 0; i < 10; ++i)
    {
        if(x == i)
        {
            return true;
        }
    }

    return false;
}