const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Create the 'ans' div where the test runner expects the final total to be displayed.
const ansDiv = document.createElement("div");
ansDiv.id = "ans"; 
document.body.appendChild(ansDiv);


const getSum = () => {
    // Select all price elements using the class "price" found in the HTML
    const priceElements = document.querySelectorAll(".price");

    let totalPrice = 0;

    // Iterate through the price elements and calculate the sum
    priceElements.forEach(element => {
        // Get the text content and convert it to an integer
        const price = parseInt(element.textContent, 10);
        
        // Add robust check just in case the data isn't a number
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // CRITICAL FIX: Display the result in the #ans div's text content, 
    // as expected by the automated test cases. Do not insert a table row.
    ansDiv.textContent = totalPrice; 
};

getSumBtn.addEventListener("click", getSum);

// Ensure there is NO extra text like "splitter" after this line in your final submission.
