let h =2;
let w= 120;
let BMI= w/(h*h) ;
if(BMI < 18.5)
{
console.log("Вашето тегло е поднормено " + BMI)
}
else if (18.5< BMI < 24.99)
{
console.log("Вашето тегло е нормално тегло " + BMI)
}
else if (BMI >= 25.0)
{
console.log("Вашето тегло е наднормено тегло " + BMI)
}
else {
console.log("Вие сте затлъстял " + BMI)
}