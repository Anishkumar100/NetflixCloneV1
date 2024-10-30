
// Function to toggle the visibility of navigation menu (if you're adding a side nav or dropdown)
function showNav() {
    var navMiddle = document.getElementById("navMiddle");
    var navEnd=document.getElementById("navEnd")
    var Layer_1=document.getElementById("Layer_1")
    
        // Check the current display property and toggle it
        if (navMiddle.style.display === "none" || navEnd.style.display === "none") {
            navMiddle.style.display = "flex"; // Show menu
            navEnd.style.display="flex"
        } 
        else
         {
            navMiddle.style.display = "none"; // Hide menu
            navEnd.style.display="none"
        }
  
  }

  // carousal Code

  var carousal=document.querySelectorAll(".carousal")

console.log(carousal)


let popularIndex = 0;
let recommendedIndex = 0;

function moveCarousel(direction, type) {
  const carousals = document.querySelectorAll(`.${type} .carousals`);
  const totalCarousals = carousals.length;

  // Update current index based on direction
  if (type === 'popular') {
    popularIndex += direction;
    if (popularIndex < 0) {
      popularIndex = totalCarousals - 1; // Go to last item
    } else if (popularIndex >= totalCarousals) {
      popularIndex = 0; // Go to first item
    }
  } else if (type === 'recommended') {
    recommendedIndex += direction;
    if (recommendedIndex < 0) {
      recommendedIndex = totalCarousals - 1; // Go to last item
    } else if (recommendedIndex >= totalCarousals) {
      recommendedIndex = 0; // Go to first item
    }
  }

  // Move the carousel
  const carouselContainer = document.querySelector(`.${type}`);
  const offset = type === 'popular' ? -popularIndex * 100 : -recommendedIndex * 100; // Calculate offset
  carouselContainer.style.transform = `translateX(${offset}%)`;
}
