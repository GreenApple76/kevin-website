$(document).ready(function(){
  // close navbar menu on link click
  $('.nav a').on('click', function(){
    $('.navbar-toggle').click(); 
  });

  // check viewport
  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

  // animate skills and portfolio 
  var listGroupItem = document.querySelector('.list-group-item');
  var project = document.querySelector('.project');
  window.addEventListener('scroll', function () {
    if (isInViewport(project)) {
      $('.project').addClass('projectview animated zoomInDown');
    } else if (isInViewport(listGroupItem)) {
      $('.list-group-item').addClass('list-group-item-view animated zoomInDown');
    }
  }, false);

  // generate dynamic greeting
  var now = new Date();
  var hour = now.getHours();
  if (hour < 12) {
    $('#greeting').text('Good morning');
  } else if ((hour >= 12) && (hour <= 17)) {
    $('#greeting').text('Good afternoon');
  } else {
    $('#greeting').text('Good evening');
  }

  // replace svg images with inline svg
  // so that color of svg icons can be
  // changed with css svg tag
  $('img[src$=".svg"]').each(function() {
    var $img = jQuery(this);
    var imgURL = $img.attr('src');
    var attributes = $img.prop("attributes");

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Remove any invalid XML tags
        $svg = $svg.removeAttr('xmlns:a');

        // Loop through IMG attributes and apply on SVG
        $.each(attributes, function() {
            $svg.attr(this.name, this.value);
        });

        // Replace IMG with SVG
        $img.replaceWith($svg);
    }, 'xml');
});

  // activate hover on touch for mobile devices
  $('body').bind('touchstart', function() {});

  // play swoosh sound effect when clicking on navbar elements
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'https://kevincoulter.com/audio/SWOOSH.mp3');
  $('.play').click(function() {
    audioElement.play();
  });

});