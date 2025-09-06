function upDate(previewPic) {
    // Step 1: Check if event is triggering
    console.log("Event triggered!");

    // Step 2: Print out some info about previewPic
    console.log("Image source:", previewPic.src);
    console.log("Image alt:", previewPic.alt);

    // Step 3: Change the text of the element with id="image"
    document.getElementById('image').innerHTML = previewPic.alt;

    // Step 4: Change the background image
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Reset background image back to empty
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset the text back to original
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}