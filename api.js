var upStatus = "not available";

var upWindow = document.getElementById("updateCheck");
var upCheckBtn = document.getElementById("updateCheck-btn");
var okay = document.getElementsByClassName("alert-close")[0];
var wClose = document.getElementsByClassName("alert-close")[1];
var later = document.getElementsByClassName("okay")[1];

later.onclick = function(){
upWindow.style.display='none';
};

if( upStatus=="not available"){
upCheckBtn.onclick = function(){
$('.latest-version').fadeIn('slow');
}
}else if( upStatus=="available" ){
upCheckBtn.onclick = function(){
upWindow.style.display="block";

}
}else{
upCheckBtn.onclick = function(){
$('.went-wrong').fadeIn('slow');
}
};

  wClose.onclick = function(){
 $(".went-wrong").fadeOut("slow");
 };
 okay.onclick = function(){
 $(".latest-version").fadeOut("slow ");
 };
  
  $("#newFeatures").html("<b>What's new...?</b>  <li> New User Interface. </li>  <li>Added 5000+ new icons.</li>  <li>Crashes and mirror bug fixed</li>  <li> Download option added.  </li>  <li>Crashes and minor bug fixed</li> ");
  
 var UpDlink  = document.querySelector(".update-link");
     
     UpDlink.setAttribute("href", "https://shantoislam.cf");
   
 
 