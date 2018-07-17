// Theme3.0 by @Raytracing

// Copy and paste this code into the console on the scratch 3.0 website inside editor.

var defs = document.getElementsByClassName("blocklySvg")[0].children[0].innerHTML;

var filter = " \
    <filter id='blockfilter' filterUnits='objectBoundingBox' x='-10%' y='-10%' width='150%' height='150%'> \
		<feGaussianBlur in='SourceAlpha' stdDeviation='0.5' result='blur'/> \
		<feSpecularLighting in='blur' surfaceScale='4' specularConstant='0.5' specularExponent='34' result='specOut' lighting-color='white'> \
			<fePointLight x='-5000' y='-5000' z='8000'/> \
		</feSpecularLighting> \
		<feComposite in='specOut' in2='SourceAlpha' operator='in' result='specOut2'/> \
		<feComposite in='SourceGraphic' in2='specOut2' operator='arithmetic' k1='0' k2='1' k3='1' k4='0' result='litPaint' /> \
<feColorMatrix \
      type='matrix' \
      values='0.85 0 0 0 0 \
              0 0.85 0 0 0 \
              0 0 0.85 0 0 \
              0 0 0 1 0 '/> \
	</filter>"

document.getElementsByClassName("blocklySvg")[0].children[0].innerHTML = defs + filter;

var scratchblocks = document.getElementsByClassName("blocklyDraggable");


var lengthupdate = 0;


document.body.onmouseup = function(){
    if (scratchblocks.length == lengthupdate) {
      // Wait
    } else {
  
    for (i=0;i<scratchblocks.length;i++) {
      scratchblocks[i].setAttribute("filter", "url(#blockfilter)");
    }
  
  lengthupdate =  scratchblocks.length;}
};

