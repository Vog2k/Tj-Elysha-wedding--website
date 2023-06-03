$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 650) {
            $(".nav1").css('background-color', '#000');
        } else {
            $(".nav1").css('background-color', 'Transparent');
        }
    });
  });
  
  
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  document.getElementById("navbar").style.top = "0";
  } else {
  document.getElementById("navbar").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
  }
  
  
  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".secondtext");
  
    for (var i = 0; i < tags.length; i++) {
      var secondtext = tags[i];
      if ($(secondtext).position().top < pageBottom) {
        $(secondtext).addClass("visible");
      } else {
        $(secondtext).removeClass("visible");
      }
    }
  })
  
  