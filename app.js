let a = 3;
let b = 5;

//=========Sum-Subtraction-Multiplication-Division-Modulus====Display======//
document.write("<br/>","<h2>Sum-Subtraction-Multiplication-Division-Modulus</h2>","<br/>")
document.write("Sum of 3 and 5 is ", a + b,"<br/>")
document.write("Subtraction of 3 and 5 is ", a - b,"<br/>")
document.write("Multiplication of 3 and 5 is ", a * b,"<br/>")
document.write("Division of 3 and 5 is ", a / b,"<br/>")
document.write("Modulus of 3 and 5 is ", a % b,"<br/>")

//=========Sum-Subtraction-Multiplication-Division-Modulus======Console======//

console.log("Sum-Subtraction-Multiplication-Division-Modulus:")
console.log("Sum of 3 and 5 is", a + b)
console.log("Subtraction of 3 and 5 is", a - b)
console.log("Multiplication of 3 and 5 is", a * b)
console.log("Division of 3 and 5 is", a / b)
console.log("Modulus of 3 and 5 is", a % b)

//============Do-the-following-using-JS-Mathematic-Expressions==============//

document.write("<br/><h2>Do the following using JS Mathematic Expressions</h2>")

let value = "Value after variable declaration is undefined"
let initialvalue = 5;
let addition = 7;
let initialvalue1 = initialvalue + addition
remainder = initialvalue1 % 3 

//============Do-the-following-using-JS-Mathematic-Expressions========Display=======//

document.write("<br/>","Value after variable declaration is undefined","<br/>")
document.write("Initial value: ", + initialvalue)
document.write("<br/>Value after increment is: ", ++initialvalue)
document.write("<br/>Value after increment is: ",initialvalue + addition)
document.write("<br/>Value after decrement is:",initialvalue + --addition)
document.write("<br/>The remainder is: ",remainder  )

//============Do-the-following-using-JS-Mathematic-Expressions=======Console========//

console.log("Do-the-following-using-JS-Mathematic-Expressions:")
console.log("Value after variable declaration is undefined")
console.log("Initial value:", --initialvalue)
console.log("Value after increment is:", ++initialvalue)
console.log("Value after increment is:", initialvalue + ++addition)
console.log("Value after decrement is:", initialvalue + --addition)
console.log("The remainder is:",remainder)

//============Movie-Ticket==========//

let ticketPrice = 600
let buying = 5
movieTicketCost = ticketPrice * buying

//============Movie-Ticket========Display=======//

document.write("<br/><br/><h2> Total Cost to buy " + buying + " tickets to a movie is "+  movieTicketCost+"PKR")

//============Movie-Ticket========Console=======//

console.log("Total Cost to buy " + buying + " tickets to a movie is "+  movieTicketCost+"PKR")

//========Table-Of-4========//
let table = 4

//========Table-Of-4=========Display=====//
document.write("<br/><br/>Table of 4")
document.write("<br/>4 x 1 " + "= " + table * 1)
document.write("<br/>4 x 2 "+  "= " + table * 2)
document.write("<br/>4 x 3 "+  "= " + table * 3)
document.write("<br/>4 x 4 "+  "= " + table * 4)
document.write("<br/>4 x 5 "+  "= " + table * 5)
document.write("<br/>4 x 6 "+  "= " + table * 6)
document.write("<br/>4 x 7 "+  "= " + table * 7)
document.write("<br/>4 x 8 "+  "= " + table * 8)
document.write("<br/>4 x 9 "+  "= " + table * 9)
document.write("<br/>4 x 10 "+  "= " + table * 10)


//========Table-Of-4=======Console======//
console.log("Table of 4")
console.log("4 x 1 "+ "= " + table * 1)
console.log("4 x 2 "+  "= " + table * 2)
console.log("4 x 3 "+  "= " + table * 3)
console.log("4 x 4 "+  "= " + table * 4)
console.log("4 x 5 "+  "= " + table * 5)
console.log("4 x 6 "+  "= " + table * 6)
console.log("4 x 7 "+  "= " + table * 7)
console.log("4 x 8 "+  "= " + table * 8)
console.log("4 x 9 "+  "= " + table * 9)
console.log("4 x 10 "+  "= " + table * 10)

//============The-Temperature-Converter===========//

let Celsius = 25;
let Fahrenheit = (Celsius *9/5) +32 ;

let Fahrenheit2 = 70
let Celsius2 = (Fahrenheit2 -32) *5/9;

//============The-Temperature-Converter========Display======//

document.write("<br/><br/>",Celsius + "*C is " + Fahrenheit + "*F")
document.write("<br/>",Fahrenheit2 + "*F is " + Celsius2 + "*C</h2>")

//============The-Temperature-Converter=======Console=======//
console.log(Celsius + "*C is " + Fahrenheit + "*F")
console.log(Fahrenheit2 + "*F is " + Celsius2 + "*C")

//==================Shoping-Cart=================//

let priceOfItems = 650
let quantityOfItems = 3
let priceOfItems2 = 100
let quantityOfItems2 = 7
let shippingCharges = 100
totalCost = priceOfItems * quantityOfItems + quantityOfItems2 * priceOfItems2 + shippingCharges 

//==================Shoping-Cart============Display========//

document.write("<br/><h1>Shopping Cart</h1>")
document.write("<br/>Price of item 1 is " + priceOfItems)
document.write("<br/> Quantity of item 1 is " + quantityOfItems)
document.write("<br/>Price of item 2 is " + priceOfItems2)
document.write("<br/> Quantity of item 2 is " + quantityOfItems2)
document.write("<br/> Shipping Charges is " + shippingCharges)
document.write("<br/><br/>Total Cost of your order is " + totalCost)

//==================Shoping-Cart===========Console=========//
console.log("Shopping Cart:")
console.log("Price of item 1 is " + priceOfItems)
console.log("Quantity of item 1 is " + quantityOfItems)
console.log("Price of item 2 is " + priceOfItems2)
console.log("Quantity of item 2 is " + quantityOfItems2)
console.log("Shipping Charges is " + shippingCharges)
console.log("Total Cost of your order is " + totalCost)

//==================Mark-sheet===============//

let totalMarks = 980
let obtainedMarks = 804
percentage = (obtainedMarks / totalMarks) *100;

//==================Mark-sheet==========Display==========//

document.write("<br/><br/><h2>Mark Sheet</h2>")
document.write("<br/><br/>Total Marks: "+totalMarks)
document.write("<br/>Obtained Marks: "+obtainedMarks)
document.write("<br/>Percentage: "+percentage+"%")

//==================Mark-sheet===========Console=========//
console.log("Mark Sheet:")
console.log("Total Marks: "+totalMarks)
console.log("Obtained Marks: "+obtainedMarks)
console.log("Percentage: "+percentage+"%")

//===========Currency-In-PKR=============//

let dollar = 10;
let saudiRiyals = 25;
pakistaniCurrency = (dollar*104.80 + saudiRiyals*28)

//===========Currency-In-PKR==========Display========//
document.write("<br/><br/><h1>Currency in PKR</h1>")
document.write("<br/><br/>Total Currency in PKR: "+pakistaniCurrency)

//===========Currency-In-PKR==========Console========//
console.log("Currency in PKR:")
console.log("Total Currency in PKR: "+pakistaniCurrency)

//============Arithmetic-Sequence========//

let number = 8;
finalResult = (number + 5 * 10 / 2);

//============Arithmetic-Sequence========Display======//
document.write("<br/><br/><h1>Arithmetic Sequence:</h1>")
document.write(finalResult)
//============Arithmetic-Sequence========Console======//
console.log("Arithmetic Sequence:")
console.log(finalResult)

//=============Age-Calculator===============//

let currrentYear = 2023
let birthYear = 2005
let age = (currrentYear - birthYear) 

//=============Age-Calculator=========Display========//

document.write("<br/><br/><h1>Age Calculator</h1>")
document.write("<br/>Current Year is ",2023)
document.write("<br/>Birth Year is ",2005)
document.write("<br/>Your Age is "+age)

//=============Age-Calculator=========Console==========//

console.log("Age Calculator:")
console.log("Current Year is " + currrentYear)
console.log("Birth Year is " + birthYear)
console.log("Your Age is "+ age)

//============The-Geometrizer============//

var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

//============The-Geometrizer======Display=========//

document.write("<br/><br/><h1>The Geometrizer</h1>")
document.write("<br/>Radius of Circle: " + radius)
document.write("<br/>The circumference is: " + circumference)
document.write("<br/>The area is: " + area)

//============The-Geometrizer=======Console=========//
console.log("The Geometrizer:")
console.log("Radius of Circle: "+radius)
console.log("The circumference is: " + circumference.toFixed(2)); // Using toFixed to round to 2 decimal places
console.log("The area is: " + area.toFixed(2)); // Using toFixed to round to 2 decimal places

//===========The-Lifetime-Supply-Calculator============// 

let favSnack = "Lays"
let currentAge = 18
let maxAge = 65
let perDay = 2
let agesRemaining = (maxAge-currentAge)
let total = (agesRemaining*365*perDay)
//===========The-Lifetime-Supply-Calculator========Display========// 
document.write("<br/><br/><h1>The Lifetime Supply Calculator</h1>")
document.write("<br/>Favourite Snack is: " + favSnack )
document.write("<br/>Current age: " + currentAge)
document.write("<br/>Estimated maximum Age: " + maxAge)
document.write("<br/>Amount of Snack perday is: "+perDay)
document.write("<br/>You will need  " + total   + " " +  favSnack + " to last you until the ripe old age of 65" )

//===========The-Lifetime-Supply-Calculator=========Console=========// 
console.log("The Lifetime Supply Calculator:")
console.log("Favourite Snack is: " + favSnack )
console.log("Current age: " + currentAge)
console.log("Estimated maximum Age: " + maxAge)
console.log("Amount of Snack perday is: " + perDay )
console.log("You will need" + total + favSnack + "to last you until the ripe old age of 65" )

//~~~~~~~~~~~~~========END~~~~~~~~~~~=======//
