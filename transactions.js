<?php
// transactions.php - v6 (Modern Grid UI & Improved Responsiveness)

require_once 'header.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: auth.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Transaction History</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="transactions.css">
</head>
<body>
<div class="content-wrapper">
    <div class="page-header">
        <h1 class="page-title">Transaction History</h1>
        <p class="page-subtitle">A unified history of all your financial activity.</p>
    </div>

    <div class="bento-card">
        <div class="controls-grid">
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="credit">Credits</button>
                <button class="filter-btn" data-filter="debits">Debits</button>
            </div>
            <input type="text" id="searchInput" class="search-input" placeholder="Search by description...">
        </div>
        
        <ul class="transaction-list" id="transactionsList">
            <div class="loading-spinner"><i class="fa fa-spinner fa-spin"></i></div>
        </ul>
        <div id="noTransactionsMessage" style="display: none;">
            <div class="no-transactions-msg">
                <i class="fas fa-search"></i>
                <h3>No Transactions Found</h3>
            </div>
        </div>
    </div>
</div>

<script src="transactions.js"></script>
</body>
</html>
