$(document).ready(function(){
    // add time and date to website 
    var interval = setInterval(function() {
        var currentMoment = moment();
        $('.date-container').html(currentMoment.format('dddd') + ", " + currentMoment.format('DD MM YYYY'));
        $('.time-container').html(currentMoment.format('hh:mm:ss'));
    }, 100);

    window.onresize = function() {
        location.reload();
        $('html, body').scrollTop(0);
    }
    var valueNew = $('.navbar-menu').innerHeight() - 10;
    var valueOld = $('.navbar-menu').innerHeight() + 2;
    $(window).on('scroll', function(){
        var carouselBottomPos = $('#carouselExampleSlidesOnly').innerHeight();
        var navbarBottomPos = $('.navbar-menu').innerHeight() + window.scrollY;
        if(navbarBottomPos > carouselBottomPos) {
            $('.navbar-menu').css({height: valueNew});
        } else {
            $('.navbar-menu').css({height: valueOld});
        }

        if(window.scrollY == window.screenTop){
            $('.navbar-menu').addClass('height-auto');
        } else {
            $('.navbar-menu').removeClass('height-auto');
        }
    });
    $('.navbar-toggler').on('click', function(){
        if(!$('.navbar-toggler').hasClass('collapse')){
            $('.navbar-menu').addClass('height-auto');
        } else {
            $('.navbar-menu').removeClass('height-auto');
        }
    });
    // add currency for deposit
    $('#depositExchange').on('change', function(){
        $('#currencyDeposit').addClass('d-none');
        if($('#currencyDeposit').hasClass('show')){
            $('#currencyDeposit').removeClass('show');
        }
        if($('#depositExchange').val() === 'tenExch'){
            $('#currencyDeposit').load('currency/tenExchCurrency.html');
            $('#currencyDeposit').removeClass('d-none');
        }
        if($('#depositExchange').val() === 'lordsExch'){
            $('#currencyDeposit').load('currency/lordsExch.html');
            $('#currencyDeposit').removeClass('d-none');
        } 
        if($('#depositExchange').val() === 'lotusExch'){
            $('#currencyDeposit').load('currency/lotusExch.html');
            $('#currencyDeposit').removeClass('d-none');
        } 
        if($('#depositExchange').val() === 'diamondExch'){
            $('#currencyDeposit').load('currency/diamondCurrency.html');
            $('#currencyDeposit').removeClass('d-none');
        } 
        if($('#depositExchange').val() === 'wolfExch'){
            $('#currencyDeposit').load('currency/wolf777Currency.html');
            $('#currencyDeposit').removeClass('d-none');
        } 
    });
    // add currency for withdrawal 
    $('#withdrawalExchange').on('change', function(){
        $('#currencyWithdrawal').addClass('d-none');
        if($('#currencyWithdrawal').hasClass('show')){
            $('#currencyWithdrawal').removeClass('show');
        }
        if($('#withdrawalExchange').val() === 'tenExch'){
            $('#currencyWithdrawal').load('currency/tenExchCurrency.html');
            $('#currencyWithdrawal').removeClass('d-none');
        }
        if($('#withdrawalExchange').val() === 'lordsExch'){
            $('#currencyWithdrawal').load('currency/lordsExch.html');
            $('#currencyWithdrawal').removeClass('d-none');
        } 
        if($('#withdrawalExchange').val() === 'lotusExch'){
            $('#currencyWithdrawal').load('currency/lotusExch.html');
            $('#currencyWithdrawal').removeClass('d-none');
        } 
        if($('#withdrawalExchange').val() === 'diamondExch'){
            $('#currencyWithdrawal').load('currency/diamondCurrency.html');
            $('#currencyWithdrawal').removeClass('d-none');
        } 
        if($('#withdrawalExchange').val() === 'wolfExch'){
            $('#currencyWithdrawal').load('currency/wolf777Currency.html');
            $('#currencyWithdrawal').removeClass('d-none');
        } 
    });
    // DEPOSIT minimum amount
    $('#depositBtn').on('click', function(e){
        e.preventDefault();
        $('.small-text-deposit').empty();
        var exchangeType = $('#depositExchange').val();
        var depositAmount = $('#inputAmount').val();
        // diamond exchange DEPOSIT minimum amount
        if(exchangeType === 'diamondExch' && depositAmount < 5000) {
            $('.small-text-deposit').append('minimum deposit amount is 5000');
        }
        // Ten exchange DEPOSIT minimum amount 
        if(exchangeType === 'tenExch' && depositAmount < 3000) {
            $('.small-text-deposit').append('minimum deposit amount is 3000');
        }
        // Taj exchange DEPOSIT minimum amount 
        if(exchangeType === 'tajExch' && depositAmount < 3000) {
            $('.small-text-deposit').append('minimum deposit amount is 3000');
        }
        // lords exchange DEPOSIT minimum amount 
        if(exchangeType === 'lordsExch' && depositAmount < 3000) {
            $('.small-text-deposit').append('minimum deposit amount is 3000');
        }
        // lotus exchange DEPOSIT minimum amount 
        if(exchangeType === 'lotusExch' && depositAmount < 3000) {
            $('.small-text-deposit').append('minimum deposit amount is 3000');
        }
        // wolf777 exchange DEPOSIT minimum amount 
        if(exchangeType === 'wolfExch' && depositAmount < 1000) {
            $('.small-text-deposit').append('minimum deposit amount is 1000');
        }
    });
    // Withdrawal minimum amount
    $('#withdrawalBtn').on('click', function(e){
        e.preventDefault();
        $('.small-text-deposit').empty();
        var exchangeType = $('#withdrawalExchange').val();
        var withdrawalAmount = $('#inputAmountWithdrawal').val();
        // diamond exchange DEPOSIT minimum amount
        if(exchangeType === 'diamondExch' && withdrawalAmount < 1000) {
            $('.small-text-deposit').append('minimum withdrawal amount is 1000');
        }
        // Ten exchange DEPOSIT minimum amount 
        if(exchangeType === 'tenExch' && withdrawalAmount < 1000) {
            $('.small-text-deposit').append('minimum withdrawal amount is 1000');
        }
        // Taj exchange DEPOSIT minimum amount 
        if(exchangeType === 'tajExch' && withdrawalAmount < 1000) {
            $('.small-text-deposit').append('minimum withdrawal amount is 1000');
        }
        // lords exchange DEPOSIT minimum amount 
        if(exchangeType === 'lordsExch' && withdrawalAmount < 1000) {
            $('.small-text-deposit').append('minimum withdrawal amount is 1000');
        }
        // lotus exchange DEPOSIT minimum amount 
        if(exchangeType === 'lotusExch' && withdrawalAmount < 1000) {
            $('.small-text-deposit').append('minimum withdrawal amount is 1000');
        }
        // wolf777 exchange DEPOSIT minimum amount 
        if(exchangeType === 'wolfExch' && withdrawalAmount < 1000) {
            $('.small-text-deposit').append('minimum withdrawal amount is 1000');
        }
    });
    // chatbot section
    $('#chat-with-us').on("click", function(e) {
        e.preventDefault();
        $(".whatsapp-chatbot").removeClass('d-none');
    });
    $('#close-btn').on('click', function(){
        $(".whatsapp-chatbot").addClass('d-none');
    });
    $('.send-it').on('click', function(e){
        e.preventDefault();
        var response = $('.response-input').val();
        if("" != response) {
            var c = $(".response-input").val(),
            d = "https://web.whatsapp.com/send",
            f = "&text=" + c;
            var d = "whatsapp://send";
            var g = d + "?phone=+447979793979" + f;
            window.open(g, "_self");
        }
    });



});

