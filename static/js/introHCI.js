'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("JK, My name's not Michael");
			$("#testjs").text("We got connection!");
			$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

//changes color of project node (box surrounding project)
function projectClick(e) { 

	//print string to browser's console -- for debugging 
	console.log("Project clicked"); 

	//prevent the page from reloading 
	e.preventDefault();

	//in a event handler, $(this) refers to the object that triggered the event
	$(this).css("background-color", "#b799de"); 

	//append descriptions of project to project node
	// var containingProject = $(this).closest(".project");
 //    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");


 	//dynamically update the description
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");

    //display description text. first time clicks get color msg. 
  //   if (description.length == 0) {
  //      $(containingProject).append("<div class='project-description'><p>Yay, you turned it purple!.</p></div>");
  //   } 
  //   else if (description.length == 1) { 
		// description.html("<p>I'll leave if you click on me again!" + "</p>");
  //   }
  //   else {
  //      // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
  //   	// $(containingProject).hide(); 
  //   	// $(description).fadeIn(); 
  //      	$(containingProject).fadeOut(); 
    // }

    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Yay, you turned it purple! But if you click on me again, I'll leave</p></div>");
    } 
    else {
		// description.html("<p>I'll leave if you click on me again!" + "</p>");
       	// $(containingProject).fadeOut(); 
       	$(description).fadeOut(); //"description" is a css selector, but here, description is a variable
       	// $(description).fadeIn(); 
    }
}


