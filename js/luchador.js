$(function(){
        $('.no-message').hide();
        $('.yes-message').hide();
        $('.initial-message').show();
        $('.single-tear').hide();
        
    $('#confirmation-btn').click(function() {
        $('.no-message').hide();
        $('.initial-message').hide();
        $('.yes-message').show();
    });
    
     $('#deny-btn').click(function() {
        $('.initial-message').hide();
        $('.yes-message').hide();
        $('.no-message').show();
        $('.')
    });
    
});