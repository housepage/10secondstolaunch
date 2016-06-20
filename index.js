require('!style!css!./styles/stylish-portfolio/css/bootstrap.css');
require('!style!css!./styles/stylish-portfolio/css/stylish-portfolio.css');
require('!style!css!./node_modules/flipclock/compiled/flipclock.css');
require('!style!css!./style.css');

require('font-awesome-webpack');
var jQuery = require('jquery');
require('./styles/stylish-portfolio/js/bootstrap.js');
require('./node_modules/flipclock/compiled/flipclock.js');

// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Grab the current date
var currentDate = new Date();
// Set some date in the future. In this case, it's always Jan 1
var futureDate  = new Date(2017, 0, 1);
// Calculate the difference in seconds between the future and current date
var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

var daysLeft = diff / 86400;

var clock = $('.countdown-clock').FlipClock(diff, {
  countdown: true,
  clockFace: 'DailyCounter'
});

if (daysLeft > 99) {
  $('.countdown-clock .days .flip-clock-label').addClass('more-than-99-days');
}

