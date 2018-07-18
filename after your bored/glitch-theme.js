// 3.0 Glitch Theme Template by @Raytracing :P

// Put code in Console (Ctrl+Shift+J on Scratch3)

// ONLY USE THIS ONCE YOU HAVE TRYED AND GOT BORED OF TEMPLATE (theme.js)
// ONLY USE THIS ONCE YOU HAVE TRYED AND GOT BORED OF TEMPLATE (theme.js)
// ONLY USE THIS ONCE YOU HAVE TRYED AND GOT BORED OF TEMPLATE (theme.js)
// ONLY USE THIS ONCE YOU HAVE TRYED AND GOT BORED OF TEMPLATE (theme.js)
// ONLY USE THIS ONCE YOU HAVE TRYED AND GOT BORED OF TEMPLATE (theme.js)
// ONLY USE THIS ONCE YOU HAVE TRYED AND GOT BORED OF TEMPLATE (theme.js)


var defs = document.getElementsByClassName("blocklySvg")[0].children[0].innerHTML;

var filter = " \
  <filter id='blockfilter' filterUnits='objectBoundingBox' x='-10%' y='-10%' width='150%' height='150%'> \
  <feTurbulence type='turbulence' baseFrequency='0.05' \
        numOctaves='2' result='turbulence'/> \
    <feDisplacementMap in2='turbulence' in='SourceGraphic' \
        scale='12' xChannelSelector='R' yChannelSelector='G'/> \
	</filter>";


// THIS WILL REGISTER FILTER INTO IT

// Creates the filter tag in the definition
document.getElementsByClassName("blocklySvg")[0].children[0].innerHTML = defs + filter;
// This gives elements the filter tag
document.getElementsByClassName("blocklyBlockCanvas")[0].setAttribute("filter", "url(#blockfilter)");
document.getElementsByClassName("blocklyBlockCanvas")[1].setAttribute("filter", "url(#blockfilter)");
