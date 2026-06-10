/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  // On small screens, skip the priority-plus collapsing and show every link
  // in a horizontally scrollable bar (CSS handles the overflow scrolling).
  if ($(window).width() < 1200) {
    while ($hlinks.children().length) {
      $hlinks.children().first().appendTo($vlinks);
    }
    breaks = [];
    $btn.addClass('hidden');
    $hlinks.addClass('hidden');
    $btn.attr('count', 0);
    return;
  }

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children().last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();

// Scroll affordance for the mobile horizontal nav: fade whichever edge has
// more content beyond it, so it's obvious the bar can be scrolled. The fade
// disappears once that end is reached. CSS applies the fades on mobile only.
function updateNavFade() {
  var el = $vlinks[0];
  if (!el) { return; }
  var scrollable = el.scrollWidth > el.clientWidth + 1;
  var atStart = el.scrollLeft <= 1;
  var atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
  $vlinks
    .toggleClass('nav-fade-left', scrollable && !atStart)
    .toggleClass('nav-fade-right', scrollable && !atEnd);
}

$vlinks.on('scroll', updateNavFade);
$(window).on('resize', updateNavFade);
updateNavFade();