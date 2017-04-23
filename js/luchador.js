$(function(){
    
    var singleTear = $('.single-tear-base'),
    singleDrop= $('.single-tear-drop'),
    noMessage = $('.no-message'),
    yesMessage = $('.yes-message'),
    initialMessage = $('.initial-message');    
        
        singleTear.hide();
        singleDrop.hide();
        noMessage.hide();
        yesMessage.hide();
        initialMessage.show();
        
        
    $('#confirmation-btn').click(function() {
        singleTear.hide();
        singleDrop.hide();
        noMessage.hide();
        initialMessage.hide();
        yesMessage.show();
    });
    
     $('#deny-btn').click(function() {
        initialMessage.hide();
        yesMessage.hide();
        noMessage.show();
        singleTear.show();

        singleTear.addClass('roll-base');
        singleDrop.show();
        singleDrop.addClass('roll-drop');

    });
    
});