// Initialize app
var app = new Framework7({
  //Tell Framework7 to compile templates on app init
  root: '#app',
  panel: {
    swipe: 'right',
    leftBreakpoint: 768,
    rightBreakpoint: 1440,
  },
  routes: app_routes,
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var socket_remotes = null;
var socket_radios = null;

// Add view
var mainView = app.views.create('.view-main', {
  // url: '/'
});

var loginScreen = app.loginScreen.create({
  el: '.login-screen',
  // animate: true
});

mainView.router.navigate('/bid/');
