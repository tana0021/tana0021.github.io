<?php 

$msg = ''; 
$msgClass = '';

if(folter_has_var(INPUT_POST, 'submit)){
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(!empty($email)&& !empty($name) && !empty($message)){

} else {

$msg = ''Please fill in all fields';
 $msg = 'alert-danger
  }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
   <link rel="stylesheet" href="css/styles.css">
   <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/script.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    
   <link rel="shortcut icon" href="../tana0021.github.io/img/favicon.png" type="image/x-icon">
<link rel="icon" href="../tana0021.github.io/simg/favicon.png" type="image/x-icon">
    <title>Katina Tanascon - Portfolio</title>
</head>
<body>


    

    
    <div class="mask"><a href="about.html"><img src="img/logo.png" class="logoabout"></a>
    <span style="font-size:30px;cursor:pointer" onclick="openNav()"><img class="hamburger" src="img/hamburger-button.png"></span>
    <div id="overlaybg"></div>
   </div>
  
   
   <div class="navdiv">
          <ul>
            <li><a href="about.html" style="text-decoration: none; " class="current">HOME</a></li>
            <li><a href="work.html" style="text-decoration: none; " > WORK</a></li>
            <li><a href="skills.html" style="text-decoration: none; " >SKILLS</a></li>
            <li><a href="contact.html" style="text-decoration: none; " >CONTACT</a></li>
            
          </ul>
      </div>

    <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="about.html">HOME</a>
  <a href="work.html">WORK</a>
  <a href="skills.html">SKILLS</a>
  <a href="contact.html">CONTACT</a>
</div>
     

      <div class="tryform"> 
     <div class="form">
      <div class="contact">CONTACT</div>
      <p class="email">katina.tanascon@gmail.com</p>
      </div> 

<form method="post" action="<?php echo $_SERVER['PHP_SELF]; ?>">
   
    <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" class="form-control" value="">
    </div>
    <div class="form-group">
        <label>Email</label>
        <input type="text" name="email" class="form-control" value="">
    </div>
    <div class="form-group">
        <label>Message</label>
        <textarea name="message" class="form-control"></textarea>
    </div>
    <br>
    <button type="submit" name="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
 
</body>
</html>