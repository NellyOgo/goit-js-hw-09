!function(){var t,o=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");o.addEventListener("click",(function(){o.disabled=!0,e.disabled=!1,new Promise((function(o,e){t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));n.style.backgroundColor=t,o(t)}),1e3)})).then((function(t){console.log("Background color changed to:",t)})).catch((function(t){console.error("Error occurred:",t)}))})),e.addEventListener("click",(function(){o.disabled=!1,e.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.2164130c.js.map
