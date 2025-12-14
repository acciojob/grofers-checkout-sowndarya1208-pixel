const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll(".price");

    let totalPrice = 0;

    // 2. Iterate through the elements and sum up the prices
    priceElements.forEach(element => {
        // Get the text content, convert it from a string to an integer
        const price = parseInt(element.textContent, 10);
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // 3. Create the new row for the total price
    const table = document.querySelector("table");
    // Check if the total row already exists to prevent duplicates on multiple clicks
    if (document.getElementById("total-row")) {
        return; 
    }
    
    const newRow = document.createElement("tr");
    newRow.id = "total-row"; // Give it an ID so we can check for existence

    // 4. Create a single cell that spans across the two columns
    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", 2); 
    totalCell.textContent = "Total Price: Rs " + totalPrice;

    // Optional: Add some basic styling for visibility
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";

    // 5. Append the cell to the row, and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};
};

getSumBtn.addEventListener("click", getSum);

