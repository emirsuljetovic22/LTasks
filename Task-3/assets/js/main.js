document.addEventListener("DOMContentLoaded", function(event) { 

    document.querySelector("#toggleView").addEventListener("click",function(){
        var state = this.dataset.clicked;
        state = typeof state == "undefined" ? "Y" : state;
        ((state == "Y") ? openMenu : closeMenu)();
        this.dataset.clicked = (state == "Y") ? "N" : "Y"; 
      },false);

    function openMenu() {
        document.getElementById("bar1").classList.add('bar1-transformed');
        document.getElementById("bar2").classList.add('bar2-transformed');
        document.getElementById("bar3").classList.add('bar3-transformed');
        document.getElementById("menu").style.left = "0px";
        document.getElementById("content-area").style.marginLeft = "250px";
        document.getElementById("content-area").style.opacity = "0.5";
    }
    
    function closeMenu() {
        document.getElementById("bar1").classList.remove('bar1-transformed');
        document.getElementById("bar2").classList.remove('bar2-transformed');
        document.getElementById("bar3").classList.remove('bar3-transformed');
        document.getElementById("menu").style.left = "-250px";
        document.getElementById("content-area").style.marginLeft = "0px";
        document.getElementById("content-area").style.opacity = "1";
    }

  });
