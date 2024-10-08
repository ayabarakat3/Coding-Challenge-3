// Sample data set for testing and task 5
let salesPeople = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },];

// Task 1: Create a Function to Calculate Average Sales
//Function created and designed to explain what outcome is expected and the equation used to realease the outcome. 
function calculateAverageSales(salesFigures) 
{let totalAmount = salesFigures.reduce((sum, sales) => sum + sales, 0);
let average = totalAmount / salesFigures.length;
return average;}
// A function was created to calculate the average of the scores. 
// Function is now complete and tested. Function is now ready to be used. 

// Task 2: Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales) 
    {if (averageSales >= 10000) {return "Excellent";}
        else if (averageSales >= 7000) {return "Good";}
        else if (averageSales >= 4000) {return "Satisfactory;"}
        else {return "Needs Improvement;"} }
// A function was created to allow the code to rate the performance by using a different word depending on the score. 
   

// Task 3: Create a Function to Identify Top and Bottom Performers
// A function is being created to help determine the top and bottom performers.
// The function is being created and set to be able to find the accurate performers in order based on the given score. 
function findTopAndBottomPerformers(salesPeople) {
if (salesPeople.length === 0) return { topPerformer: null, bottomPerformer: null };
let averages = salesPeople.map(person => calculateAverageSales(person.sales));
let maxAverage = Math.max(...averages);
let minAverage = Math.min(...averages);
let topPerformer = salesPeople.find(person => calculateAverageSales(person.sales) === maxAverage);
let bottomPerformer = salesPeople.find(person => calculateAverageSales(person.sales) === minAverage);
return { topPerformer: topPerformer ? topPerformer.name : null,
        bottomPerformer: bottomPerformer ? bottomPerformer.name : null };}
// This function is now complete and should run properly.
// The array is being defined to help test the function based on the scores chosen.  
console.log(findTopAndBottomPerformers(salesPeople));
/* Output:
Top performer = Alice 
Bottom performer = Charlie
*/ 
// This function has now been complete since it has been tested and released accurate outputs. 

// Task 4: Combine Functions to Generate a Performance Report
function generatePerformanceReport(salesPeople) {
var report = salesPeople.map(person => {
var averageSales = calculateAverageSales(person.sales);
var performanceRating = determinePerformanceRating(averageSales);
// Functions have been combined to give desired output for data set provided. 
return {name: person.name,
averageSales: averageSales,
performanceRating: performanceRating};});
var topAndBottom = findTopAndBottomPerformers(salesPeople);
return { report: report,
        topPerformer: topAndBottom.topPerformer,
        bottomPerformer: topAndBottom.bottomPerformer};}

console.log(generatePerformanceReport(salesPeople));
const report = generatePerformanceReport(salesPeople);
console.log("Performance Report:");
for (let personReport of report.report) {
console.log(`Name: ${personReport.name}, Average Sales: ${personReport.averageSales}, Rating: ${personReport.performanceRating}`);}
console.log(`Top Performer: ${report.topPerformer}`);
console.log(`Bottom Performer: ${report.bottomPerformer}`);
/* 
Output for performance report:
Name: Alice, Average Sales: 13333.333333333334, Rating: Excellent
Name: Bob, Average Sales: 6833.333333333333, Rating: Satisfactory;
Name: Charlie, Average Sales: 3500, Rating: Needs Improvement;
Name: Diana, Average Sales: 8900, Rating: Good
Top Performer: Alice
Bottom Performer: Charlie */

/* All functions have now been combined.
Functions displayed all the information required. 
Sample data set has been displayed at the very top.
Sample sales data given has been tested.  
All the information displayed is accurate.
Code ran properly and displayed all outputs expected. 
All tasks have now been completed. */
