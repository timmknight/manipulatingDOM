$(document).ready(function(){
  generateSite();
});



function generateSite(){
  $('#content').append('<div  id="image"><img src="images/food.jpg"/></div>');
  $('#content').append("<h2>Tim's JQuery Burger Shack!</h2>");
  $('#content').append('<nav><a class="button" href="#about">About</a><a class="button" href="#menu">Menu</a><a class="button" href="#contact">Contact</a></nav>');
  $('div').addClass('idTabs');
  $('#content').append('<div id="about"><p>This is a simple jQuery project based on manipulating the DOM, the aim is to use Javascript to dynamically (re)render the page rather than loading a new page when you click on a link. Very little styling has been done as this is simply about the jQuery</p></div>');
  $('#content').append('<div id="menu"><p>This is the food menu!</p></div>');
  $('#content').append('<div id="contact"><p><a href="mailto:timmilesknight@gmail.com"> timmilesknight@gmail.com</a></p></div>');
}
