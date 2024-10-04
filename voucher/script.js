function validateForm() {
    const voucherNo = document.getElementById('voucherNo').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (!voucherNo || !date || !amount || !description) {
        alert("Please fill in all the required fields.");
        return false;
    }
    return true;
}
document.getElementById('voucherForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get form data
    const voucherNo = document.getElementById('voucherNo').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const remark = document.getElementById('remark').value;

    // URL of the Google Apps Script Web App (replace with your actual URL)
    const scriptURL = 'https://script.google.com/a/~/macros/s/AKfycbzuOe2E348vPaVN-Y4K4wFB7XHNWsJWKie4roJB1OPE9zI2ZZ2imqxSaL56ysXi4gg/exec';

    // Create a FormData object to send form data via POST request
    const formData = new FormData();
    formData.append('voucherNo', voucherNo);
    formData.append('date', date);
    formData.append('amount', amount);
    formData.append('description', description);
    formData.append('remark', remark);

    // Send the form data to Google Apps Script
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.text())
        .then(result => {
            alert('Data saved successfully!');
            document.getElementById('voucherForm').reset();  // Reset form
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Failed to save data.');
        });
});
