$(function(){
        $('.no-message').hide();
        $('.yes-message').hide();
        $('.welcome-message').show();
        
    $('#confirmation-btn').click(function() {
        $('.no-message').hide();
        $('.welcome-message').hide();
        $('.yes-message').show();
    });
    
     $('#deny-btn').click(function() {
        $('.welcome-message').hide();
        $('.yes-message').hide();
        $('.no-message').show();
    });
    
});