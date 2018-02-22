$(function() {

    var mX, mY, distance,
    $distance = $('#distance span'),
    $element  = $('#header-div');

  $( "#header-div" ).mouseover(function(){
    $('#default-icons-title').show();
  });
  $( "#default-icons-title" ).mouseover(function(){
    $('#default-icons-title').show();
  });
  $( "#header-div" ).mouseout(function(){
    $('#default-icons-title').hide();
  });


    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left +(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(document).mousemove(function(e) {
        mX = e.pageX;
        mY = e.pageY;
        //distance = calculateDistance($element, mX, mY);
        // $distance.text(distance);
        //console.log('('+mX+','+mY+')');
        //console.log(distance);

});


});
