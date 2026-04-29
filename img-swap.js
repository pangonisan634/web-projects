// Andrew Pangonis
// 4-29-26
// JS Image Swap Project

const theRivals = ['media/the-beginning.png', 'media/the-end.png'];

const preload = new Image();
preload.src = theRivals[1]; // Points to the second image in your modelImages array

const imgElement = document.getElementById('model-frame');

imgElement.addEventListener('mouseenter', () => {
     imgElement.src = theRivals[1];
}); // Note the punctuation on this line!

imgElement.addEventListener('mouseleave', () => {
     imgElement.src = theRivals[0];
});

