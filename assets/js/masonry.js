/*var container = document.querySelector('#work-examples');
var msnry = new Masonry( container, {
  // options...
  itemSelector: '.item',
  columnWidth: 10,
  gutter: 4
});*/

docReady( function() {

  var container = document.querySelector('.work-examples');
  var msnry = new Masonry( container, {
    columnWidth: 10,
    gutter: 4
  });

  eventie.bind( container, 'click', function( event ) {
    // don't proceed if item was not clicked on
    if ( !classie.has( event.target, 'thumbnail' ) ) {
      return;
    }
    // change size of item via class
    classie.toggle( event.target, 'w3' );
    // trigger layout
    msnry.layout();
  });

});