// Task 1: Create a Function to Calculate Average Sales
//Function created and designed to explain what outcome is expected and the equation used to realease the outcome. 
function calculateAverageSales(salesFigures) {
let totalAmount = salesFigures.reduce((sum, sales) => sum + sales, 0);
let average = totalAmount / salesFigures.length;
return average;}
let salesFiguresData = [4680,7770,5483,9832];
let averageSales = calculateAverageSales(salesFiguresData);
console.log(`Average Sales:`, averageSales)
// A function was created to calculate the average of the scores.
// Output= 6941.25 
 // Function is now complete and tested. Function is now ready to be used. 

// Task 2: Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales) {
    if (averageSales >= 10000) {return "Excellent";}
        else if (averageSales >= 7000) {return "Good";}
        else if (averageSales >= 4000) {return "Satisfactory;"}
        else {return "Needs Improvement;"} }
// A function was created to allow the code to rate the performance by using a different word depending on the score. 
    console.log(determinePerformanceRating(4680));
    console.log(determinePerformanceRating(7770));
    console.log(determinePerformanceRating(5483));
    console.log(determinePerformanceRating(9832));
// Function was tested and released the correct level or word for each of the performance rating scores.



// Task 3: Create a Function to Identify Top and Bottom Performers
// A function is being created to help determine the top and bottom performers.
function calculateAverageSales(sales) {
    if (sales.length === 0) return 0;
    let total = sales.reduce((acc, sale) => acc + sale, 0);
    return total / sales.length;}
// The function is being created and set to be able to find the accurate performers in order based on the chosen score. 
function findTopAndBottomPerformers(salesPeople) {
if (salesPeople.length === 0) return { topPerformer: null, bottomPerformer: null };
let averages = salesPeople.map(person => calculateAverageSales(person.sales));
let maxAverage = Math.max(...averages);
let minAverage = Math.min(...averages);
let topPerformer = salesPeople.find(person => calculateAverageSales(person.sales) === maxAverage);
let bottomPerformer = salesPeople.find(person => calculateAverageSales(person.sales) === minAverage);
return {  topPerformer: topPerformer ? topPerformer.name : null,
        bottomPerformer: bottomPerformer ? bottomPerformer.name : null };}
// The function is now complete and should run properly, but not yet tested. 

// The array is being defined to help test the function based on the scores chosen. 
let salesPeople = [
{ name: 'Christian Smith', sales: [4680] },
{ name: 'Sarah Brown', sales: [7770] },
{ name: 'Mark Flinn', sales: [5483] },
{ name: 'Aya Barakat', sales: [9832] }];
// Names were assigned for each of the chosen scores. 
console.log(findTopAndBottomPerformers(salesPeople));

/* Output:
Top performer = Aya Barakat 
Bottom performer = Christian Smith
*/ 
// The function has now been complete since it has been tested and released accurate outputs. 

















   