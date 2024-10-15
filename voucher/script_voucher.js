document.getElementById('voucherForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form data
    const voucherNo = document.getElementById('voucherNo').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const paid_to = document.getElementById('paid_to').value;
    const description = document.getElementById('description').value;
    const remark = document.getElementById('remark').value;
    const timestamp = new Date().toLocaleString(); 

    // Get the user's name from the URL parameter (assuming it's passed from the login page)
    const userName = new URLSearchParams(window.location.search).get('name');

    // URL of your Google Apps Script Web App (replace with your actual Web App URL)
    const scriptURL = 'https://script.google.com/a/~/macros/s/AKfycby0bI95R-TukDh_GFKW4Sj-AFr5G8zY0gYztQl9F1U7u4eM6LQ1TLmrPpb1rJX-ggMT/exec';

    // Create a FormData object to send form data via POST request
    const formData = new FormData();
    formData.append('voucherNo', voucherNo);
    formData.append('date', date);
    formData.append('amount', amount);
    formData.append('paid_to', paid_to);
    formData.append('description', description);
    formData.append('remark', remark);
    formData.append('timestamp', timestamp);
    formData.append('userName', userName); // Append the user's name to the form data

    // Show loading indicator (disable button and show spinner)
    const submitButton = document.querySelector('button[type="submit"]');
    const spinner = document.getElementById('spinner');
    submitButton.disabled = true;  // Disable the submit button
    submitButton.textContent = "Saving...";  // Show loading text
    spinner.style.display = "inline-block";  // Show the spinner

    // Send the form data to the Google Apps Script via POST
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.text())
        .then(result => {
            alert('Data saved successfully!');
            document.getElementById('voucherForm').reset();  // Reset form

            // Hide the spinner and reset the button after success
            submitButton.disabled = false;
            submitButton.textContent = "Submit";  // Revert button text
            spinner.style.display = "none";  // Hide spinner
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Failed to save data.');

            // Hide the spinner and reset the button if an error occurs
            submitButton.disabled = false;
            submitButton.textContent = "Submit";  // Revert button text
            spinner.style.display = "none";  // Hide spinner
        });
});
