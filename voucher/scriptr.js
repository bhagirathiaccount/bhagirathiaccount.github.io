const sheetUrl = 'https://script.google.com/macros/s/AKfycby73KpS_sJw33vaQOh1n47y_vR0jdMq6e-UtwpSF0NnrPydG06ab32WJW2l_xXV9pdP/exec';  // Your WebApp URL

function fetchData() {
    const fromDate = document.getElementById('from-date').value;
    const toDate = document.getElementById('to-date').value;

    if (!fromDate || !toDate) {
        alert('Please select both dates.');
        return false;
    }

    // Show the spinner
    document.getElementById('spinner').style.display = 'inline-block';

    // Pass the from and to dates as query parameters
    fetch(`${sheetUrl}?from=${fromDate}&to=${toDate}`)
        .then(response => response.json())
        .then(data => {
            // Hide the spinner
            document.getElementById('spinner').style.display = 'none';

            // Display data with date filtering
            displayData(data);
        })
        .catch(error => {
            document.getElementById('spinner').style.display = 'none';
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again.');
        });

    return false;  // Prevent form submission
}

function displayData(data) {
    const tbody = document.getElementById('data-table').querySelector('tbody');
    tbody.innerHTML = ''; // Clear previous data

    let totalAmount = 0;

    data.forEach(row => {
        const tr = document.createElement('tr');

        // Format the date to dd/mm/yyyy
        const formattedDate = formatDate(row.date);

        const rowData = [
            row.timestamp,
            row.voucherNo,
            formattedDate,
            row.amount,
            row.description,
            row.remark
        ];

        rowData.forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);

        // Accumulate the total amount
        totalAmount += parseFloat(row.amount) || 0;
    });

    document.getElementById('data-table').style.display = 'table';  // Show the table

    // Update the summary section
    document.getElementById('summary').textContent = `Total rows: ${data.length}, Total amount: ${totalAmount}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
