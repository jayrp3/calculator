function add(num1,num2)
{
    return num1+num2;
}
function sub(num1,num2)
{
    return num1-num2;
}
function mul(num1,num2)
{
    return num1*num2;
}
function div(num1,num2)
{
    return num1/num2;
}
let num1;
let num2;
let operand;

function operate(operand,num1,num2)
{
    switch (operand)
    {
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return sub(num1,num2);
            break;
        case '*':
            return mul(num1,num2);
            break;
        case '/':
            return div(num1,num2);
            break;
    }
}