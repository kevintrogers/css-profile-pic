$(function(){
    
    var singleTear = $('.single-tear-base'),
    singleDrop= $('.single-tear-drop'),
    noMessage = $('.no-message'),
    yesMessage = $('.yes-message'),
    initialMessage = $('.initial-message'),
    leftHand = $('.hand-left'),
    rightHand = $('.hand-right'),
    leftFore = $('.fore-arm-left'),
    rightFore = $('.fore-arm-right'),
    leftUpper = $('.upper-arm-left'),
    rightUpper = $('.upper-arm-right'),
    teeth = $('.teeth'),
    upperLip = $('.upper-lip'),
    lowerLip = $('.lower-lip');
    
    

        teeth.hide();
        
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
        
        lowerLip.hide();
        upperLip.hide();
        teeth.show();
        
        leftHand.toggleClass('hand-left-flex');
        rightHand.toggleClass('hand-right-flex');
        leftFore.toggleClass('fore-arm-left-flex');
        rightFore.toggleClass('fore-arm-right-flex');
        leftUpper.toggleClass('upper-arm-left-flex');
        rightUpper.toggleClass('upper-arm-right-flex');
    });
    
     $('#deny-btn').click(function() {
        initialMessage.hide();
        yesMessage.hide();
        noMessage.show();
        singleTear.show();
        
        lowerLip.show();
        upperLip.show();
        teeth.hide();

        singleTear.addClass('roll-base');
        singleDrop.show();
        singleDrop.addClass('roll-drop');
        
        leftHand.removeClass('hand-left-flex');
        rightHand.removeClass('hand-right-flex');
        leftFore.removeClass('fore-arm-left-flex');
        rightFore.removeClass('fore-arm-right-flex');
        leftUpper.removeClass('upper-arm-left-flex');
        rightUpper.removeClass('upper-arm-right-flex');

    });
    
});