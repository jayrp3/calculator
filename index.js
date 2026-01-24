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
            add(num1,num2);
            break;
        case '-':
            sub(num1,num2);
            break;
        case '*':
            mul(num1,num2);
            break;
        case '/':
            div(num1,num2);
            break;
    }
}