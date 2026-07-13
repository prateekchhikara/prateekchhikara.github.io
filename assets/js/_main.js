/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function(e) {
    e.stopPropagation();
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // macOS Dock-style magnification for author social links.
  $(".author__urls.social-grid").each(function() {
    var dock = this;
    var links = Array.prototype.slice.call(dock.querySelectorAll("a"));
    var maxScale = 1.9;
    var maxLift = 22;
    var influence = 118;

    var resetDock = function() {
      links.forEach(function(link) {
        link.style.setProperty("--dock-scale", "1");
        link.style.setProperty("--dock-lift", "0");
        link.parentElement.classList.remove("dock-active");
      });
    };

    dock.addEventListener("pointermove", function(event) {
      links.forEach(function(link) {
        var rect = link.getBoundingClientRect();
        var center = rect.left + rect.width / 2;
        var distance = Math.abs(event.clientX - center);
        var closeness = Math.max(0, 1 - distance / influence);
        var eased = Math.pow(closeness, 1.8);
        var scale = 1 + (maxScale - 1) * eased;
        var lift = maxLift * eased;

        link.style.setProperty("--dock-scale", scale.toFixed(3));
        link.style.setProperty("--dock-lift", lift.toFixed(2));
        link.parentElement.classList.toggle("dock-active", scale > 1.12);
      });
    });

    dock.addEventListener("pointerleave", resetDock);
    dock.addEventListener("blur", resetDock, true);
  });

  // Close the dropdown when clicking/tapping anywhere outside it.
  // Guarded to mobile (button visible) so the inline desktop grid is never hidden.
  $(document).on("click", function(e) {
    var $button = $(".author__urls-wrapper button");
    if (!$button.is(":visible") || !$button.hasClass("open")) {
      return;
    }
    if ($(e.target).closest(".author__urls-wrapper").length === 0) {
      $(".author__urls").fadeOut("fast");
      $button.removeClass("open");
    }
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
