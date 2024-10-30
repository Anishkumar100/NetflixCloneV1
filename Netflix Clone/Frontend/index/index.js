// Function to transition from landing page to dashboard
function GettingToDashboard() {
  // Hide the main landing container and show the dashboard
  document.getElementById("mainContainer").style.display = "none";
  document.getElementById("Dashboard").style.display = "block";
}

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


//3rd division of the landing page

document.addEventListener('DOMContentLoaded', function () {
  var questions = document.getElementsByClassName("Question");
  
  for (let i = 0; i < questions.length; i++) 
    {
    //By putting [i] every questions class element has eventlistener now
    questions[i].addEventListener('click', function ()  
   
    {
      var popups = document.getElementsByClassName("AnswerPopUp");
    
      if (popups[i].style.display === "block") //When popups are in block if clicked it will be not visible
        {
        popups[i].style.display = "none";
      } 
      else //in else automatically we are considering the popups are not visible
       {
        for(let j=0;j<questions.length;j++)
        {
          popups[j].style.display="none"
        }
        popups[i].style.display = "block";
      }
    });
  }
});


//4th Division

function submitEmail()
{
  var contactEmail=document.getElementById("contactEmail").value

  if(contactEmail==="")
  {
    alert(`Type Your Email Its Very Easy. You Have To Just Press The Buttons.And Dont Forget The "@" Symbol `)
  }

  else{
    alert(`Thank You For Submitting Your Email "${contactEmail}" And Thanks For Trusting Us, We Will Send A Request For A Quick Chat To The Mail You Submitted In Few Moments....`)
  }
}




// this is for the signup or login


function loginToggle()
{
var loginSpan=document.getElementById("loginSpan")
var signUpLogin=document.getElementById("signUpLogin") //full form including singUp and login
var inputName=document.getElementById("inputName").value
var inputEmail=document.getElementById("inputEmail").value

signUpLogin.innerHTML=`   <form>
  <h3 style="text-align: end;margin-top: 0rem;">Login To Aniflix</h3>
  <div class="Inputs">
  <label>Name</label>
  <input type="text" id="inputName" required placeholder="Anish">
  </div>
  <div class="Inputs">
    <label>Email</label>
    <input id="inputEmail" type="text" required="@" placeholder="anishtheman@gmail.com">
    </div>
 
    <div>
      <label>Are You A New User<span style="color: red;letter-spacing: 0.3rem;margin-left: 0.4rem;" onclick="SignUpToggle()" id="SignUpSpan">Sign Up Here</span></label>
    </div>

<div style="display: flex;justify-content: center;">    
<button id="loginButton" onclick="toggleMovies(event)"><span class="text">Login</span><span>Welcome Back!</span></button>
</div>
</form>`


}


function SignUpToggle()
{
  var loginSpan=document.getElementById("loginSpan")
  var signUpLogin=document.getElementById("signUpLogin")
  var inputName=document.getElementById("inputName").value
  console.log(inputName)
  var inputEmail=document.getElementById("inputEmail").value 

  signUpLogin.innerHTML=`
    <form>
  <h3 style="text-align: end;margin-top: 0rem;">Sign Up To Aniflix</h3>
  <div class="Inputs">
  <label>Name</label>
  <input id="inputName" type="text" required placeholder="Anish">
  </div>
  <div class="Inputs">
    <label>Email</label>
    <input type="text" id="inputEmail" required="@" placeholder="anishtheman@gmail.com">
    </div>
  <div style="margin-top: 1rem;">
      <label>Are You 18 Years Old?</label>
      <label>Yes</label><input type="checkbox">
      <label>No</label><input type="checkbox">
      </div>

    <div>
      <label>Already A User<span style="color: red;letter-spacing: 0.3rem;margin-left: 0.4rem;" onclick="loginToggle()" id="loginSpan">Login Here</span></label>
    </div>

<div style="display: flex;justify-content: center;">    
<button id="signUpButton" onclick="toggleMovies(event)"><span class="text">Sign Up</span><span>Thanks!</span></button>
</div>
</form>`
}

function toggleMovies(event) {
  event.preventDefault(); // Prevents the form from submitting

  var signUpLogin = document.getElementById("signUpLogin");
  var inputName = document.getElementById("inputName").value;
  var inputEmail = document.getElementById("inputEmail").value;
  var mainContainer=document.getElementById("mainContainer")
  var signUpButton = document.getElementById("signUpButton");
  var loginButton = document.getElementById("loginButton");

  // Simple validation logic for both login and sign up
  if (signUpButton) {
      // Sign Up Action
      if (inputName === "" || inputEmail === "") {
          alert("Please fill out both Name and Email to sign up.");
      } else {
         
          signUpLogin.style.display = "none"; // Hides the form after successful sign-up
      }
  }

  if (loginButton) {
      // Login Action
      if (inputName === "Anish" && inputEmail === "anishtheman@gmail.com") {
       
          signUpLogin.style.display = "none"; 
          mainContainer.style.display="block"
          mainContainer.style.transition="5s"
          // Hides the form after successful login
      } else {
          alert("Wrong Username or Email.");
      }
  }
}

