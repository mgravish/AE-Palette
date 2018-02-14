var csInterface = new CSInterface();

var pckry = new Packery( '.grid', {
  itemSelector: '.grid-item',
  isHorizontal: true,
  gutter: 5    
});

pckry.getItemElements().forEach( function( itemElem ) {
  var draggie = new Draggabilly( itemElem,{axis: 'x'} );
  pckry.bindDraggabillyEvents( draggie );
  draggie.on( 'staticClick', function(event,pointer){ 
  if(event.shiftKey){
      pckry.remove(itemElem);
      pckry.layout();
  } 
  else{
      console.log( 'eventName happened', draggie.position.x, draggie.position.y, draggie.$element.context.style.backgroundColor);
      var color = draggie.$element.context.style.backgroundColor.toString();
      csInterface.evalScript("sayHello('"+color+"')");
  }    
 });
});


function addDrag(itemElem){
    var draggie = new Draggabilly( itemElem,{axis: 'x'} );
    pckry.bindDraggabillyEvents( draggie );
    draggie.on( 'staticClick', function(event,pointer){ 
  if(event.shiftKey){
        pckry.remove(itemElem);
        pckry.layout();
  } 
  else{
      console.log( 'eventName happened', draggie.position.x, draggie.position.y, draggie.$element.context.style.backgroundColor);
      var color = draggie.$element.context.style.backgroundColor.toString();
      csInterface.evalScript("sayHello('"+color+"')");
  }    
 });
}
