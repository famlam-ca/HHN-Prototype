if (screen.availWidth > 606) {
  var o = document.getElementById("one");
  var to = document.getElementById("two");
  to.style.display = "none";
  function openNav() {
    document.getElementById("nav").style.width = "18rem";
    document.getElementById("main").style.marginLeft = "18.5rem";
    o.style.display = "";
    to.style.display = "none";
  }
  function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0.3rem";
    o.style.display = "none";
    to.style.display = "";
  }
} else {
  var o = document.getElementById("one");
  var to = document.getElementById("two");
  to.style.display = "none";
  function openNav() {
    document.getElementById("nav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
    o.style.display = "";
    to.style.display = "none";
  }
  function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    o.style.display = "none";
    to.style.display = "";
  }
}