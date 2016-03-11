// var elements = document.getElementsByTagName('*');

// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];

//         if (node.nodeType === 3) {
//             var text = node.nodeValue;
//             var replacedText = text.replace(/the/gi, 'kevin');

//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }
var elements = document.getElementsByTagName('img');

for (var i = 0; i < elements.length; i++) {
    elements[i].src = "http://www.dailyherald.com/storyimage/DA/20140508/news/140508515/EP/1/10/EP-140508515.jpg&updated=201405081534&MaxW=800&maxH=800&updated=201405081534&noborder";
}