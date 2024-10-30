
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
  