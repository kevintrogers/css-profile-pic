$(function()  {
    
    var boxtop = $('.box-top');
    
    $('a#box-btn').click(function() {
        $('.box-top').toggleClass('open');
        $('.big-action').toggleClass('hide');
        $('.small-action').toggleClass('hide');
        $('.box-form').show();
        
    });
    
});