// Select the buttons
var e=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),t=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),n=document.querySelector(".field");function o(){var o=n.rows.length,c=n.rows[0].cells.length;e.disabled=o>=10,r.disabled=o<=2,t.disabled=c>=10,l.disabled=c<=2}// Add event listeners
e.addEventListener("click",// Define the functions
function(){for(var e=n.insertRow(),r=n.rows[0].cells.length,t=0;t<r;t++)e.insertCell();o()}),r.addEventListener("click",function(){n.deleteRow(-1),o()}),t.addEventListener("click",function(){var e=!0,r=!1,t=void 0;try{for(var l,c=n.rows[Symbol.iterator]();!(e=(l=c.next()).done);e=!0)l.value.insertCell()}catch(e){r=!0,t=e}finally{try{e||null==c.return||c.return()}finally{if(r)throw t}}o()}),l.addEventListener("click",function(){var e=!0,r=!1,t=void 0;try{for(var l,c=n.rows[Symbol.iterator]();!(e=(l=c.next()).done);e=!0)l.value.deleteCell(-1)}catch(e){r=!0,t=e}finally{try{e||null==c.return||c.return()}finally{if(r)throw t}}o()});//# sourceMappingURL=index.3d425c72.js.map

//# sourceMappingURL=index.3d425c72.js.map
