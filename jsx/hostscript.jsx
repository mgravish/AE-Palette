/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function sayHello(str){
    var colProp = app.project.activeItem.selectedLayers[0].source.mainSource.color;
    str = str.slice(4, -1);
    str = str.split(",");
    app.project.activeItem.selectedLayers[0].source.mainSource.color = [str[0]/255,str[1]/255,str[2]/255];
    //alert(str);
}

function sayAdded(){
    alert("Adding Item!");
}