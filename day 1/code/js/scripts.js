
var GreetingContainer;

GreetingContainer = "woot";

console.log(GreetingContainer);

document.write('<p>' + GreetingContainer + '</p>');

var attributes = ["blue","red","green"];

var array = document.getElementsByClassName('msg');


for (var i = 0; i<attributes.length; i++) {
	for (var i = 0; i< array.length; i++) {
	array[i].innerHTML = attributes[i];
	}
}


