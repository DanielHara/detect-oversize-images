const images = document.getElementsByTagName('img');

for (const image of images) {

    console.log(image.height, 'image.height');

    console.log(image.naturalWidth, 'image.naturalWidth');
    console.log(image.naturalHeight, 'image.naturalHeight');

    const warningText = document.createElement('div');
    warningText.innerText = 'YOU MUST RESIZE THE IMAGE ABOVE!'
    warningText.style = "background-color:red;font-size:40px;"

    image.parentNode.insertBefore(warningText, image.nextSibling)
}
