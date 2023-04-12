// var item0 = "pen"
//     item1 = "pencil"
//     item3 = "notebook";

/*var items = [];
items[0]="Pen";
items[1]="Pencil";
items[2]= "Notebook";*/

var items = ["Pen", "Pencil", "Notebook", "Eraser", "Ruler"];

/*function listItems(){
    console.log(item0);
    console.log(item1);
    console.log(item2);
}*/

/*function listItems(){
    console.log(items[0]);
    console.log(items[1]);
    console.log(items[2]);
}*/

function listItems(){
    for(var i= 0;i<items.length;i++){
        console.log(items[i]);
    }
}
listItems();