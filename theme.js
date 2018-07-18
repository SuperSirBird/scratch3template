// 3.0 Theme Template by @Raytracing

// Copy + Paste this WHOLE DOCUMENT into the console (Ctrl+C + then go to scratch3 then Ctrl+Shift+J then Ctrl+V then Enter then close console)

var defs = document.getElementsByClassName("blocklySvg")[0].children[0].innerHTML;


// REPLACE THE INNER CONTENTS OF THE VAR "FILTER" WITH YOUR FILTER
// MORE INFO ON FILTERS: https://www.w3schools.com/graphics/svg_filters_intro.asp

// MUST DO TO WORK:

// REMEMBER TO SET THE <filter id='blockfilter'> AND ALSO REPLACE ALL "s WITH 's OTHERWISE IT WILL NOT WORK!
// FOR EVERY LINE OF THE VARIABLE PUT A \ AT THE END TO TELL IT TO GO TO THE NEXT LINE EXEPT FOR LAST LINE!

var filter = " \
    <filter id='blockfilter' filterUnits='objectBoundingBox' x='-10%' y='-10%' width='150%' height='150%'> \
		<feGaussianBlur in='SourceAlpha' stdDeviation='0.9' result='blur'/> \
		<feSpecularLighting in='blur' surfaceScale='3' specularConstant='2' specularExponent='50' result='specOut' lighting-color='white'> \
			<fePointLight x='-5000' y='-5000' z='8000'/> \
		</feSpecularLighting> \
		<feComposite in='specOut' in2='SourceAlpha' operator='in' result='specOut2'/> \
		<feComposite in='SourceGraphic' in2='specOut2' operator='arithmetic' k1='0' k2='1' k3='1' k4='0' result='litPaint' /> \
<feColorMatrix \
      type='matrix' \
      values='0.85 0 0 0 0 \
              0 0.85 0 0 0 \
              0 0 0.95 0 0 \
              0 0 0 1 0 '/> \
	</filter>";


// THIS WILL REGISTER FILTER INTO IT

// Creates the filter tag in the definition
document.getElementsByClassName("blocklySvg")[0].children[0].innerHTML = defs + filter;
// This gives elements the filter tag
document.getElementsByClassName("blocklyBlockCanvas")[0].setAttribute("filter", "url(#blockfilter)");
document.getElementsByClassName("blocklyBlockCanvas")[1].setAttribute("filter", "url(#blockfilter)");

