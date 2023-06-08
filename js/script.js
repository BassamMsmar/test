window.onscroll = function() {
    var section = document.getElementById("my-section");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    
    // Calculate the section's position relative to the viewport
    var sectionPosition = section.offsetTop - scrollPosition;
    
    // Calculate the section's visible height in the viewport
    var sectionHeight = Math.min(section.offsetHeight, windowHeight);
    
    // Calculate the scroll progress within the section
    var scrollProgress = 1 - (sectionPosition + sectionHeight) / sectionHeight;
    
    // Calculate the RGB color values based on the scroll progress
    var red = Math.round(scrollProgress * 255);
    var green = 0;
    var blue = Math.round((1 - scrollProgress) * 255);
    
    // Set the background color of the section
    section.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
};
