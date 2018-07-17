// Theme3.0 by @Raytracing

// Copy and paste this code into the console on the scratch 3.0 website inside editor.

var defs = document.getElementsByClassName("blocklySvg")[0].children[0].innerHTML;

var filter = "<filter id='blockfilter' x='0' y='0' width='300%' height='300%'> \
                <feOffset result='offOut' in='SourceAlpha' dx='5' dy='5'></feOffset> \
                <feGaussianBlur result='blurOut' in='offOut' stdDeviation='3'></feGaussianBlur> \
                <feBlend in='SourceGraphic' in2='blurOut' mode='normal'></feBlend> \
              </filter>"

document.getElementsByClassName("blocklySvg")[0].children[0].innerHTML = defs + filter;

var scratchblocks = document.getElementsByClassName("blocklyDraggable");


var lengthupdate = 0;


object.onmouseup = function(){
    if (scratchblocks.length == lengthupdate) {
      // Wait
    } else {
  
    for (i=0;i<scratchblocks.length;i++) {
      scratchblocks[i].setAttribute("filter", "url(#blockfilter)");
    }
  
  lengthupdate =  scratchblocks.length;}
};

