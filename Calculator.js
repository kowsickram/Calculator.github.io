function calcultor(firstnumber,operator,secondnumber)
{
switch(operator)
{
case'+':
console.log("addition:",firstnumber+secondnumber)
break;
case'-':
console.log("subraction",firstnumber-secondnumber)
break;
case'*':
console.log("multiplication",firstnumber*secondnumber)
case'/':
break;
console.log("Division",firstnumber/secondnumber)
break;
}
calculator(2, '+', 2) // results 4
calculator(3, '-', 2) // results 1
calculator(4, '*', 2) // results 8
calculator(20, '/', 2) // results 10
calculator(8, '/', 0) // results Infinity
}


