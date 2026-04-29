// Andrew Pangonis
// 4-29-26
// JS Image Swap Project

const images = ['the-beginning.png', 'the-end.png']

const preload = new Image();
preload.src = modelImages[1]; // Points to the second image in your modelImages array

imgElement.addEventListener('mouseenter', () => {
     imgElement.src = modelImages[1];
}); // Note the punctuation on this line!

imgElement.addEventListener('mouseleave', () => {
     imgElement.src = modelImages[0];
});

