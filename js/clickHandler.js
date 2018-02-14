function addNewSwatch(){
    //var txt = window.clipboardData.getData('Text');
    //alert(txt);
    var elem = document.createElement('div');
    elem.setAttribute('class', 'grid-item');
    elem.setAttribute('style', 'background: hsla(190, 100%, 50%, 1);');
    var grid = document.getElementById("palette");
    //alert(elem);
    grid.appendChild(elem);
    pckry.appended(elem);
    addDrag(elem)
    pckry.layout();
}