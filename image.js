const images = document.getElementsByTagName('img');

for (const image of images) {
    if (image.naturalHeight > 1.5* image.height || image.naturalWidth > 1.5 * image.width) {
        const warningText = document.createElement('div');
        warningText.innerText = 'YOU MUST RESIZE THE IMAGE ABOVE!'
        warningText.style = "background-color:red;font-size:40px;"

        image.parentNode.insertBefore(warningText, image.nextSibling)
    }
}
