$(function(){
        $('.single-tear').hide();
        $('.no-message').hide();
        $('.yes-message').hide();
        $('.initial-message').show();
        
        
    $('#confirmation-btn').click(function() {
        $('.single-tear').hide();
        $('.no-message').hide();
        $('.initial-message').hide();
        $('.yes-message').show();
    });
    
     $('#deny-btn').click(function() {
        $('.initial-message').hide();
        $('.yes-message').hide();
        $('.no-message').show();
        $('.single-tear').show();
        $('.single-tear').addClass('roll-tear');
    });
    
});