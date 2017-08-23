var menubutton = document.getElementsByTagName('button')[0];
var nav = document.getElementsByTagName('nav')[0];

function main() {

  menubutton.onclick = function() {
    if(nav.className === "open") {
      nav.className = "";
    }else{
      nav.className = "open";
    };
  };

}

window.onload = function() {
       main();
};
