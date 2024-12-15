/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const halfDay_cost = 20;
const fullDay_cost = 35;
let selectedDays = 0;
let currentRate = fullDay_cost;

const calculatedCostElement = document.getElementById('calculated-cost'); 
const dayButtons = document.querySelectorAll('.day-selector li'); 
const clearButton = document.getElementById('clear-button'); 
const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(day => {
    day.addEventListener('click', () => {
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked');
            selectedDays++; 
        } else {
            day.classList.remove('clicked');
            selectedDays--; 
        }
        calculateTotal(); 
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    dayButtons.forEach(day => day.classList.remove('clicked'));
    selectedDays = 0; 
    calculateTotal(); 
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', () => {
    currentRate = halfDay_cost; // Set the rate to $20
    halfDayButton.classList.add('clicked'); // Highlight the half-day button
    fullDayButton.classList.remove('clicked'); // Un-highlight the full-day button
    calculateTotal(); // Recalculate the total cost
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', () => {
    currentRate = fullDay_cost; // Set the rate to $35
    fullDayButton.classList.add('clicked'); // Highlight the full-day button
    halfDayButton.classList.remove('clicked'); // Un-highlight the half-day button
    calculateTotal(); // Recalculate the total cost
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotal() {
    const totalCost = selectedDays * currentRate; // Calculate the total
    calculatedCostElement.innerHTML = totalCost; // Update the displayed cost
}
