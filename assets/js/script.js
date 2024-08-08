function scroll() {
    var position = window.scrollY;
    var div = document.querySelector(".top-fixed");

    if(position != 0) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}