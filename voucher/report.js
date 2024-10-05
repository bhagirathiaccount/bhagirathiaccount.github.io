<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voucher Data Report</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form-container">
        <form id="reportForm" onsubmit="return fetchData()">
            <center>
                <h2>
                    Voucher Data Report
                    <br>
                    <div class="spinner" id="spinner"></div>
                </h2>
            </center>

            <div class="date-picker-container">
                <div>
                    <label for="from-date">From Date</label>
                    <input type="date" id="from-date" name="from-date" required>
                </div>
                <div>
                    <label for="to-date">To Date</label>
                    <input type="date" id="to-date" name="to-date" required>
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>

        <table id="data-table" style="margin-top: 20px; display: none; border: 1px solid #000;">
            <thead>
                <tr>
                    <th>Timestamp</th>
                    <th>Voucher No.</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Remark</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>

        <div class="summary" id="summary"></div>
    </div>

    <script src="scriptr.js"></script>
</body>
</html>
