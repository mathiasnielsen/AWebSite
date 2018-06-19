// Automatic Slideshow - change image every 3 seconds
const timeBetweenSlides = 3000;
var currentImageIndex = 0;

// Actually call the function to start it.
carousel();

function carousel()
{
    var mySlidesClassElements = document.getElementsByClassName("mySlides");
    for (var i = 0; i < mySlidesClassElements.length; i++) 
    {
       mySlidesClassElements[i].style.display = "none";
    }

    currentImageIndex++;
    if (currentImageIndex > mySlidesClassElements.length) 
	{
		currentImageIndex = 1
	}

    mySlidesClassElements[currentImageIndex-1].style.display = "block";
    setTimeout(carousel, timeBetweenSlides);
}