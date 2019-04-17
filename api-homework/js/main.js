

	$(document).ready(function(){

		$("#btn").click(function(){

			$.getJSON("https://aws.random.cat/meow", function(data){
			
			console.log(data.file);

			$("#json-container").append("<img class='cat-img' src ="+ data.file +">" + "</img>");

	})
			$("#txt").replaceWith("I want more cats!");
			$("#btn").append("!");
		})
	})

