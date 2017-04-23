$(function(){
    
    var singleTear = $('.single-tear'),
    noMessage = $('.no-message'),
    yesMessage = $('.yes-message'),
    initialMessage = $('.initial-message');    
        
        singleTear.hide();
        noMessage.hide();
        yesMessage.hide();
        initialMessage.show();
        
        
    $('#confirmation-btn').click(function() {
        singleTear.hide();
        noMessage.hide();
        initialMessage.hide();
        yesMessage.show();
    });
    
     $('#deny-btn').click(function() {
        initialMessage.hide();
        yesMessage.hide();
        noMessage.show();
        singleTear.show();
        singleTear.addClass('roll-tear');
        // singleTear.one('webkitAnimationEnd oanimationend msAnimationEnd animationend'),
        // function (e) {
        //     singleTear.removeClass('roll-tear');
        

    });
    
});