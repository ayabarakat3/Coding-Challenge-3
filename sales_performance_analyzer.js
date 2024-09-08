// Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(salesFigures) {
let totalAmount = salesFigures.reduce((sum, sales) => sum + sales, 0);
let average = totalAmount / salesFigures.length;
return average;}
let salesFiguresData = [4680,7770,5483,9832];
let averageSales = calculateAverageSales(salesFiguresData);
console.log(`Average Sales:`, averageSales);
// Output= 6941.25 
// A function was created to calculate the average of the scores. 

// Task 2: Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales) {
    if (averageSales >= 10000) {return "Excellent";}
        else if (averageSales >= 7000) {return "Good";}
        else if (averageSales >= 4000) {return "Satisfactory;"}
        else {return "Needs Improvement;"} }
    console.log(determinePerformanceRating(4680));
    console.log(determinePerformanceRating(7770));
    console.log(determinePerformanceRating(5483));
    console.log(determinePerformanceRating(9832));

// Task 3: Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers(sales) {}
   