const $video = $('#video'),
      videoPlayer = $video.get(0), 
      $mp4 = $('#mp4'),
      $webm = $('#webm'),
      $play = $('#play'),
      $mute = $('#mute'),
      $videos = $('#videos');

var volumeSlider = document.getElementById("volume");

var vid = document.getElementById("video");

$play.on('click', function(e) {
      
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
    
    changeImage();
});
 
$mute.on('click', function(e) {
  
    if (videoPlayer.muted) {
      videoPlayer.muted = false;
    } else {
      videoPlayer.muted = true;
    }
});

$videos.on('click', 'button', function(e) {
    console.log($(this));
    $mp4.attr('src', $(this).data('mp4'));
    $webm.attr('src', $(this).data('webm'));
    videoPlayer.load();
});

//-------------------javascript---------------//


//----------playbutton------------------//

function changeImage() {
    let play = document.getElementById("play"),
        img = play.getElementsByTagName('img')[0];
    
        console.log(img);
    
        if (img.src.indexOf("img/play.png") != -1 ) 
        {
            img.src = "img/pause.png";
        }
        else 
        {
            img.src = "img/play.png";
        }
}

  function changeImage3(){
    document.getElementById('toChange').src='img/play.png';
   }
 

function playPause()
{ 
    
var myVideo=document.getElementById("video");
    
if (myVideo.paused) 
  myVideo.play(); 
else 
  myVideo.pause(); 
} 

function makeBig()
{ 
myVideo.width=560; 
} 

function makeSmall()
{ 
myVideo.width=320; 
} 

function makeNormal()
{ 
myVideo.width=420; 
} 

//-----------------volumebutton------------//

function changeImage2() {
    let play = document.getElementById("mute"),
        img = play.getElementsByTagName('img')[0];
    
        console.log(img);
    
        if (img.src.indexOf("img/volume.png") != -1 ) 
        {
            img.src = "img/mute.png"; 
        }
        else 
        {
            img.src = "img/volume.png";
            style
        }
}



vid.addEventListener('timeupdate',function(){
    
    var fillBar = document.getElementById("fill");
    
    
    var position = vid.currentTime / vid.duration;
        
    fillBar.style.width = position * 100 +'%';
    
    convertTime(Math.round(vid.currentTime));  //convert decimal no into intiger
    
    if(vid.ended){
        $("#playBtn").attr("src","img/play.png");
    }
});

function convertTime(seconds)
        {
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent = min + ":" + sec;
            
            totalTime(Math.round(vid.duration));
        }
        
        function totalTime(seconds)
        {
            
            var currentTime = document.getElementById("currentTime");
            
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent += " / " + min + ":" + sec;
        }

//-------------- le volume slider --------//


function changeVolume(){
    

    vid.volume = volumeSlider.value;
    
    if(volumeSlider.value == 0){
        
        $("#speaker").attr("src","img/mute.png");
    }
    else{
        $("#speaker").attr("src","img/volume.png");
    }
}

//-------videopause/play-----------//


function changeImage4() {
    let play = document.getElementById("play"),
        img = play.getElementsByTagName('img')[0];
    
        console.log(img);
    
        if (img.src.indexOf("img/play.png") != -1 ) 
        {
            img.src = "img/pause.png";
        }
        else 
        {
            img.src = "img/play.png";
        }
}

//----------change/description----------//
jQuery(function(){
          jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });
});


//------------photography------------//

//------------photography------------//

//------------photography------------//

//------------photography------------//

//------------photography------------//
//------------photography------------//
//------------photography------------//

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//-----------------------sidenav----------//

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}