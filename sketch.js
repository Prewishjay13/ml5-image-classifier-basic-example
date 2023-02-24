let classifier;
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/kitten.jpg');
}

function setup() {
  createCanvas(640, 480);
  classifier.classify(img, gotResult);
  image(img, 0, 0, width, height);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  createDiv(`Label: ${results[0].label}`);
  createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
}
