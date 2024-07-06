alert('launching');

const images = document.getElementsByTagName('img');

console.log('launching!')
console.log('images', images);

for (const image of images) {
    console.log(image.width, 'image.width');
    console.log(image.height, 'image.height');

    console.log(image.naturalWidth, 'image.naturalWidth');
    console.log(image.naturalHeight, 'image.naturalHeight');
}
