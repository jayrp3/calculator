function add(num1,num2)
{
    return Number(num1)+Number(num2);
}
function sub(num1,num2)
{
    return Number(num1)-Number(num2);
}
function mul(num1,num2)
{
    return Number(num1)*Number(num2);
}
function div(num1,num2)
{
    return Number(num1)/Number(num2);
}
let num1 = '';
let num2 = '';
let operand = '';


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
        case 'x':
            return mul(num1,num2);
            break;
        case '/':
            return div(num1,num2);
            break;
    }
}
document.querySelectorAll('button').forEach(button =>
{
    button.addEventListener('click', (event) => 
    {
        const category = event.target.dataset.type;
        const clickedButton=event.target.textContent;
        if (category === 'digit')
        {
            if (operand==='')
            {
                num1+=clickedButton;
            }
            else
            {
                num2+=clickedButton;
            }
            updateDisplay();
        }  
        if (category === 'operator')
        {
            if(num2 === '')
            {
                operand = clickedButton;
            }
            else
            {
                num1 = String(operate(operand,num1,num2));
                operand = clickedButton;
                num2='';
            }
            updateDisplay();
        }
        if (category === 'clear')
        {
            num1='';
            num2='';
            operand='';
            updateDisplay();
        }
        if (category === 'equals')
        {
            if (num1!=='' && num2!=='' && operand !=='')
            {
                num1 = String(operate(operand,num1,num2));
                operand='';
                num2='';
                updateDisplay();
            }
        }
        if (category === 'neg-pos')
        {
            if (operand === '')
            {
                num1 = String(Number(num1)*-1);
            }
            else
            {
                num2 =  String(Number(num2)*-1);
            }
            updateDisplay();
        }
        if (category === 'decimal')
        {
            if (operand==='' && !(num1.includes('.')))
            {
                if (num1==='')
                {
                    num1+=`0`+clickedButton;
                }
                else
                {
                    num1+=clickedButton;
                }
            }
            else if (operand !== '' && !(num2.includes('.')))
            {
                if (num2 ==='')
                {
                    num2+=`0`+clickedButton;
                }
                else
                {
                    num2+=clickedButton;
                }
            }
            updateDisplay();
        }
    })
});

function updateDisplay()
{
 document.querySelector('#screen-display')
 .textContent = num1+operand+num2;
}

function clearDisplay()
{
    document.querySelector('#screen-display')
    .textContent = '';
}