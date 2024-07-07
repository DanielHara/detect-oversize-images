# Detect too large images

Source code for extension: https://chromewebstore.google.com/detail/detect-oversize-images/pcjakmokjbidkbcegahoieooccenkfgg

If you're a good frontender, and care about users not wasting bandwidth in order to download images which are too large for the displayed size (that is, their intrisic size are overly larger than their rendered size), you can use this extension to detect the images you have to resize!

Just click on the extension icon, and you'll see something like this:

<img width="1792" alt="Screenshot 2024-07-06 at 22 45 49" src="https://github.com/DanielHara/detect-oversize-images/assets/17606011/b7783587-f063-4d90-808a-b906df033926">

In this case, the extension is complaining that this image has an intrisic size of `200px x 200px`, while the rendered size is only `24px x 24px`. The image has `4` times larger dimensions than it needs to have, and therefore the browser is downloading `4 x 4 = 16` times the data it actually needs. That's a lot! The extension will mark images whose intrisic width or height is larger than `1.5` of its rendered width or height.

This way, you can see which images need your attention, in just a click!
