$(function (){
    $('.bubbles').hover(function() {
        $(this).children().toggle();
    });

    $('#draggable').draggable();
    $("#droppable").droppable( {
		drop: function(event,ui) {
			$(this).addClass("ui-state-highlight").find(".bubbles");
		}
	});
});



// function touching(margin) {
//   var result= false;
//   $('.tag').each(function() {
//     var t1= $(this),
//         t1radius= t1.width()/2,
//         t1x= t1.offset().left + t1radius,
//         t1y= t1.offset().top  + t1radius;

//     $('.tag').not(t1).each(function() {
//       var t2= $(this);
//           t2radius= t2.width()/2,
//           t2x= t2.offset().left + t2radius,
//           t2y= t2.offset().top  + t2radius,
//           dist= Math.sqrt((t2x-t1x)*(t2x-t1x) + (t2y-t1y)*(t2y-t1y));
      
//       if(t1radius && t2radius && dist<t1radius+t2radius+margin) {
//         result= true;
//       }
//     })
//   });
//   return result;
// } //touching

// $('.tag').each(function(idx) {
//   do {
//     var container= $(this).parent(),
//         diam= Math.round(Math.random() * 75 + 50),
//         top = Math.round(Math.random() * (container.height() - diam)),
//         left= Math.round(Math.random() * (container.width()  - diam)),
//         bg= '#'+(Math.random()*128+32<<0).toString(16)+(Math.random()*128+32<<0).toString(16)+(Math.random()*128+32<<0).toString(16);

//     $(this)
//       .css({
//         top         : top,
//         left        : left,
//         width       : diam,
//         font        : diam/5+'px verdana',
//         lineHeight  : diam+'px',
//         background  : bg
//       })
//       .html('tag '+(idx+1));
//   } while(touching(20));
// });