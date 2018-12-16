$('.ppt li:gt(0)').hide();
$('.ppt li:last').addClass('last');
$('.ppt li:first').addClass('first');
$('#play').hide();

var cur = $('.ppt li:first');
var interval,
    timeStep = 5000,
    lastTime = (new Date()).getTime();

$('#fwd').click( function() {
    goFwd();
    showPause();
} );

$('#back').click( function() {
    goBack();
    showPause();
} );

$('#stop').click( function() {
    stop();
    showPlay();
} );

$('#play').click( function() {
    start();
    showPause();
} );

function goFwd() {
    stop();
    forward();
    start();
}

function goBack() {
    stop();
    back();
    start();
}

function back() {
    cur.fadeOut( 1000 );
    if ( cur.attr('class') == 'first' )
        cur = $('.ppt li:last');
    else
        cur = cur.prev();
    cur.fadeIn( 1000 );
}

function forward() {
    var curTime = (new Date()).getTime() - lastTime;
    if(curTime > timeStep){ 
        lastTime = (new Date()).getTime();
        cur.fadeOut( 1000 );
        if ( cur.attr('class') == 'last' )
            cur = $('.ppt li:first');
        else
            cur = cur.next();
        cur.fadeIn( 1000 );
    }else{
        $("#progress").width(curTime/timeStep * 100 + "%");  
    }
}

function showPause() {
    $('#play').hide();
    $('#stop').show();
}

function showPlay() {
    $('#stop').hide();
    $('#play').show();
}

function start(changeInterval) {
    if(changeInterval){
        timeStep = changeInterval;
    }
    
    interval = setInterval( function(){forward();}, 1000);
}

function stop() {
    clearInterval( interval );
}

$(function() {
    start();
} );
