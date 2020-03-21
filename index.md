<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Practice with Pros</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Favicons -->
<link rel="shortcut icon" sizes="32x32" href="home/img/favicon.ico"/>

<!-- Cubeportfolio -->
<link rel="stylesheet" type="text/css" href="home/css/cubeportfolio.min.css">

<!-- Bootstrap -->
<link rel="stylesheet" type="text/css"  href="home/css/bootstrap.css">
<!-- Fonts -->
<link rel="stylesheet" type="text/css" href="home/fonts/font-awesome/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="home/css/Simple-Line-Icons-Webfont/simple-line-icons.css" media="screen" />
<link rel="stylesheet" href="home/css/et-line-font/et-line-font.css">

<!-- MENU CSS -->
<link rel="stylesheet" href="home/css/menuzord.css">

<!-- FONT AWESOME -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

<!-- Prettyphoto-->
<link rel="stylesheet" href="home/css/prettyphoto.css">

<!--Master slider-->
<link href="home/master-slider/style/masterslider.css" rel="stylesheet">
<link href="home/master-slider/skins/default/style.css" rel="stylesheet">

<!-- swiper -->
<link rel="stylesheet" type="text/css"  href="home/css/swiper.min.css">
<link rel="stylesheet" type="text/css"  href="home/css/all.min.css">

<!-- Owl Carousel -->
<link href="home/css/owl.carousel.css" rel="stylesheet" media="screen">
<link href="home/css/owl.theme.css" rel="stylesheet" media="screen">



<!-- Stylesheet -->
<link rel="stylesheet" type="text/css"  href="home/css/style.css">
<!-- Responsive -->
<link rel="stylesheet" type="text/css"  href="home/css/responsive.css">

<!-- Animate.min -->
<link rel="stylesheet" type="text/css"  href="home/css/animate.min.css">


</head>
<body style="width: 100% !important; margin: 0px !important;" id="page-top" >
<!-- data-spy="scroll" data-target=".navbar-fixed-top"> -->

<!--preloader start-->
<div id="preloader">
  <div id="loader"></div>
</div>
<!--preloader end--> 
<div id="tophome"></div>
<!-- realhome for MOBILE (sort of) -->
<!-- this is our hacky/hidden behind fake div to displace the top video an equal amount relative to changing size of topbar-->
<div id="fakehome" class="navbar navbar-custom top-nav-collapse navbar4k" role="navigation" style="display: contents !important; position: absolute !important; max-width: 100% !important;">
    <div id="mySidenavfake" class="sidenav fakesidenav">
        <a onclick="closeNav()" style="" class="active page-scroll" href="#tophome">➤Home</a>
        <a onclick="closeNav()" style="" class="page-scroll" href="#apptarget2">➤App</a>
        <a onclick="closeNav()" style="" class="page-scroll" href="#videos">➤Videos</a>
        <a onclick="closeNav()" style="" class="page-scroll" href="#virtual-coaching">➤Virtual Coaching</a>
        <a onclick="closeNav()" style="" class="page-scroll" href="#about-review-full">➤Connect</a>
    </div>
    <button class="navbar-toggle" id="btnMenufake" type="button" > <i class="fa fa-bars"></i> </button>
    
    <span style="float: top-left;"><a href="#page-top"><img class="logoimg" style="" src="home/img/home/logowhitelong_blackaccent.png"></a> 
    <span style="float: middle;"><img class="comingsoon" style="" src="home/img/home/comingsooncsv.png"></a> 
        
        <span id="navBarCollapsefake" class="navbar-collapse-fake navbar-right collapse navbar-collapse navbar-main-collapse" style="text-align: right; ">
            
            <ul id="navDesktopfake" class="nav navbar-nav desktop navbar-nav-desktop">
                <li class="active"> <a style="font-size: 20px;" class="page-scroll" href="#tophome">Home</a> </li>
                <li> <a style="font-size: 20px;" class="page-scroll" href="#apptarget2">App</a> </li>
                <li> <a style="font-size: 20px;" class="page-scroll" href="#videotarget">Videos</a> </li>
                <li> <a style="font-size: 20px;" class="page-scroll" href="#virtual-coaching">Virtual Coaching</a> </li>
                <li> <a style="font-size: 20px;" class="page-scroll" href="#about-review-full">Connect</a> </li>
            </ul>
        
        
        </span>    
      
    </span>
          
</div>

<!-- realhome for DESKTOP -->
<div id="realhome" class="navbar navbar-custom navbar-fixed-top top-nav-collapse navbar4k" role="navigation" style="display: block !important; width: 100%; max-width: 100% !important;">   

    <div id="mySidenav" class="sidenav">
<!--         <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> meet-the-pros-m -->
        <a onclick="closeNav()" style="" class="active page-scroll" href="#tophome">➤Home</a>
        <a onclick="closeNav()" style="" class="page-scroll" href="#apptarget2" >➤App</a>
        <a onclick="closeNav()" style="" class="page-scroll" href="#videos">➤Videos</a>
        <a onclick="closeNav()" style="" class="page-scroll" href="#virtual-coaching">➤Virtual Coaching</a>
        <a onclick="closeNav()" style="" class="page-scroll" href="#about-review-full">➤Connect</a>
    </div>
    <!-- class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse" -->
    <button class="navbar-toggle" id="btnMenu" type="button" > <i class="fa fa-bars"></i> </button>
    
    <span style="float: top-left;"><a href="#page-top"><img class="logoimg" style="" src="home/img/home/logowhitelong_blackaccent.png"></a> 
        <span style="float: middle;"><img class="comingsoon" style="" src="home/img/home/comingsooncsv.png"></a> 

        <span id="navBarCollapse" class="navbar-right collapse navbar-collapse navbar-main-collapse" style="text-align: right; "><!--  collapse navbar-collapse  navbar-main-collapse <a href="#contact-inner-o" class="theme-btn btn-orange page-scroll">Contact Us</a> -->
            
            <ul id="navDesktop" class="nav navbar-nav desktop navbar-nav-desktop">
                <li class="active"> <a style="font-size: 20px;" class="page-scroll" href="#tophome">Home</a> </li>
                <li> <a style="font-size: 20px;" class="page-scroll" href="#apptarget2">App</a> </li>
                <li> <a style="font-size: 20px;" class="page-scroll" href="#videos">Videos</a> </li>
                <li> <a style="font-size: 20px;" class="page-scroll" href="#virtual-coaching">Virtual Coaching</a> </li>
                <li> <a style="font-size: 20px;" class="page-scroll" href="#about-review-full">Connect</a> </li>
            </ul>
        
        
        </span>    
      
    </span>
          
</div>

<!-- END Nav Bar --> 
<!-- <div class="spacer" style="height: 10%;">
    &nbsp;
</div> -->
<!-- Header background-color: #666666; padding-top: 80px; height: 100% !important; padding-top: 0px !important; width: 100% !important; margin-top: 0px !important; -->
<div class="homevideodiv" id="home" style="">
         <!-- <video style="padding-top:150px; object-fit: cover;" class="center-video" src="https://www.youtube.com/watch?v=IapFDyd6X9M" controls poster="https://img.youtube.com/vi/IapFDyd6X9M/hqdefault.jpg" width="100%">⁪</video> -->
         <!-- <video style="padding-top:0px; object-fit: cover;" class="center-video" src="home/videos/movie.MP4" controls width="100%">⁪</video> -->
        
        <!-- <img id="homevideoplaybg" align="center" class="homevideoplaybg" src="home/videos/videosnap.png" alt=""> poster="home/videos/videosnap.png"-->
        
        <video id="homevideo" class="homevideo" controls preload seekable style=""  id="myVideo">
        <source src="home/videos/pwp_small.mp4" type="video/mp4">
        </video>
<!--         <span class="desktopbrs"><img onClick="playVid()" id="homevideoplaybtn" style="" class="homevideoplaybtn active" src="home/img/3favicon.ico" alt=""></span> -->
        

        <!-- width: fit-content !important; max-height: 100%; max-width: 100% !important; height: 100% !important; -->
        <!-- VIDEO PROGRESS BAR BROKEN DURING DEMO
        requires byterange request which is not supported when served via staticfiles; this will work when we move this server to apache -->
        
         <!-- <progress id="myProgress" min="0" max="100" value="0"></progress>
        <div class="controls"></div>    -->

    <br><br>
  
</div>
<!-- End-Header --> 

<!-- Feature  -->
<div id="apptarget2"></div>
<span class="desktopbrs"></span>
<br><br><br>
      

<div id="how-it-works">

  <div id="apptarget" class="container">

    <div class="section-title center text-center">
      <span class="desktopbrs"  ><br><br><br></span>

      <div class="row"> 
        
        <div class="col-md-4 col-sm-12 feature-box feature-icon-left-more">
          <div class="feature-icon"> <i class="fa fa-sign-in-alt"></i> </div>
          <div class="feature-content text-left">
            <h4>SINGLE SIGN ON</h4>
            <div class="feature-test">Join the team with Google, Facebook, Instagram, and Twitter integration.</div>
            <i style="font-family: FontAwesome;" class="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i style="font-family: FontAwesome;" class="fa fa-twitter" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i style="font-family: FontAwesome;" class="fa fa-instagram" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i style="font-family: FontAwesome;" class="fa fa-youtube" aria-hidden="true"></i>

          </div>
          
          <div class="feature-icon"> <i class="fa fa-address-card"></i> </div>
          <div class="feature-content text-left">
            <h4>CREATE YOUR PROFILE</h4>
            <div class="feature-test">Showcase photos, position, age, team, etc.<br> </div>
          </div>
          <span class="desktopbrs"> <br> <br></span>
          <div class="feature-icon"> <i class="fa fa-file-video"></i> </div>
          <div class="feature-content text-left">
            <h4>SORT & SAVE VIDEOS</h4>
            <div class="feature-test">Watch instructional videos to better your game. Save them to your profile for easy-viewing later. </div>
          </div>
        </div>
        <div class="col-sm-12 col-sm-12 col-md-4">
          <div class="photo-slide">
            <div id="carousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1" class=""></li>
                <li data-target="#carousel" data-slide-to="2" class=""></li>
                <li data-target="#carousel" data-slide-to="3" class=""></li>
              </ol>
              <div class="carousel-inner">

                <div class="item active">
                    <span style="float: middle;">
                    <img class="comingsoonphone" style="" src="home/img/home/comingsooncsv.png"></span>
                    <img src="home/img/home/videoiphonesignup.png" alt="" > 
                </div>

                <div class="item  next"> 
                    <span style="float: middle;">
                    <img class="comingsoonphone" style="" src="home/img/home/comingsooncsv.png"> </span>
                    <img src="home/img/home/videoiphoneprofileck.png" alt="" > 
                </div>
                
                <div class="item  "> 
                    <span style="float: middle;">
                    <img class="comingsoonphone" style="" src="home/img/home/comingsooncsv.png"> </span>
                    <img src="home/img/home/videoiphoneprofiledk.png" alt="" > 
                </div>
                
                <div class="item "> 
                    <span style="float: middle;">
                    <img class="comingsoonphone" style="" src="home/img/home/comingsooncsv.png"> </span>
                    <img style="" src="home/img/home/videoiphoneplay.png" alt="" > 
                </div>          
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 feature-box feature-icon-right-more">
          <div class="feature-icon"> <i class="fa fa-upload"></i> </div>
          <div class="feature-content text-left">
            <h4>UPLOAD VIDEOS TO PROS</h4>
            <div class="feature-test">Have a PRO review your video and provide personalized coaching. <br><br></div>
          </div>
          <div class="feature-icon"> <i class="fa fa-play-circle"></i> </div>
          <div class="feature-content text-left">
            <h4>TIP OF THE WEEK FROM MLB PLAYERS</h4>
            <div class="feature-test">Practice with Pros provides a steady stream of professionally-created instructional videos for players of all skill levels. </div>
          </div>
          <div class="feature-icon"><i class="fa fa-user-plus"></i></div>
          <div class="feature-content text-left">
            <h4>SUBSCRIBE FOR ACCESS</h4>
            <div class="feature-test">Gain access to exclusive Q&A sessions with current and former pros! </div>
          </div>
        </div>
      </div>
      <!-- .row --> 
    </div>
  </div>
</div>

<!-- END Feature--> 


<!-- videos  -->
<!-- <span class="desktopbrs"><br><br><br></span> -->
<div id="videos" style="padding-top: 0px;" class="text-center">



<span class="desktopbrs"><br><br><br><br></span>
<div id="videotarget"></div>

     <div class="container">
          <div class="section-title center">
               <h2> <strong>Featured Video Categories</strong></h2>
               <br>
               <!-- <p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. <strong>Lorem Ipsum has been the industry's standard dummy </strong>text
                    ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. </p> -->
          </div>
          <div id="js-grid-blog-posts" class="cbp">
               <div class="cbp-item web-design print"> <a href="#videos" class="cbp-caption">
                    <div class="cbp-caption-defaultWrap"> <img style="background: white;"  src="home/img/video_placeholder.png" alt=""> </div>
                    <div class="cbp-caption-activeWrap">
                         <div class="cbp-l-caption-alignCenter">
                              <div class="cbp-l-caption-body">
                                    <span style="float:top"><img class="comingsoon" style="" src="home/img/home/comingsooncsv.png"></span>

                                   <div class="cbp-l-caption-text">VIEW VIDEOS</div>
                              </div>
                         </div>
                    </div>
                    </a> <a href="#" class="cbp-l-grid-blog-title">HITTING</a>
                    <!-- <div class="cbp-l-grid-blog-date">2 january 2016</div>
                    <div class="cbp-l-grid-blog-split">|</div>
                    <a href="#" class="cbp-l-grid-blog-comments">111 comments</a>
                    <div class="cbp-l-grid-blog-desc">Quis autem vel eum iure reprehenderit
                         qui in ea voluptate velit esse quam moles... </div> -->
               </div>
               <div class="cbp-item motion logos"> <a href="#vidoes" class="cbp-caption">
                    <div class="cbp-caption-defaultWrap"> <img style="background: white;"  src="home/img/video_placeholder.png" alt=""> </div>
                    <div class="cbp-caption-activeWrap">
                         <div class="cbp-l-caption-alignCenter">
                              <div class="cbp-l-caption-body">
                                    <span style="float:top"><img class="comingsoon" style="" src="home/img/home/comingsooncsv.png"></span>

                                   <div class="cbp-l-caption-text">VIEW VIDEOS</div>
                              </div>
                         </div>
                    </div>
                    </a> <a href="#" class="cbp-l-grid-blog-title">PITCHING</a>
                    <!-- <div class="cbp-l-grid-blog-date">8 january 2016</div>
                    <div class="cbp-l-grid-blog-split">|</div>
                    <a href="#" class="cbp-l-grid-blog-comments">1 comments</a>
                    <div class="cbp-l-grid-blog-desc">Voluptas nulla pariatur? At vero eos
                         et accusamus et iusto odio dignissimos ducimu. </div> -->
               </div>
               <div class="cbp-item print motion"> <a href="#vidoes" class="cbp-caption">
                    <div class="cbp-caption-defaultWrap"> <img style="background: white;"  src="home/img/video_placeholder.png" alt=""> </div>
                    <div class="cbp-caption-activeWrap">
                         <div class="cbp-l-caption-alignCenter">
                              <div class="cbp-l-caption-body">
                                    <span style="float:top"><img class="comingsoon" style="" src="home/img/home/comingsooncsv.png"></span>

                                   <div class="cbp-l-caption-text">VIEW VIDEOS</div>
                              </div>
                         </div>
                    </div>
                    </a> <a href="#" class="cbp-l-grid-blog-title">CATCHING</a>
                    <!-- <div class="cbp-l-grid-blog-date">10 january 2016</div>
                    <div class="cbp-l-grid-blog-split">|</div>
                    <a href="#" class="cbp-l-grid-blog-comments">54 comments</a>
                    <div class="cbp-l-grid-blog-desc">Perspiciatis unde omnis iste natus
                         error sit voluptatem accusantium. Sed ut perspiciatis... </div> -->
               </div>
               <div class="cbp-item web-design print"> <a href="#vidoes" class="cbp-caption">
                    <div class="cbp-caption-defaultWrap"> <img style="background: white;"  src="home/img/video_placeholder.png" alt=""> </div>
                    <div class="cbp-caption-activeWrap">
                         <div class="cbp-l-caption-alignCenter">
                              <div class="cbp-l-caption-body">
                                    <span style="float:top"><img class="comingsoon" style="" src="home/img/home/comingsooncsv.png"></span>

                                   <div class="cbp-l-caption-text">VIEW VIDEOS</div>
                              </div>
                         </div>
                    </div>
                    </a> <a href="#" class="cbp-l-grid-blog-title">INFIELD</a>
                    <!-- <div class="cbp-l-grid-blog-date">15 january 2016</div>
                    <div class="cbp-l-grid-blog-split">|</div>
                    <a href="#" class="cbp-l-grid-blog-comments">12 comments</a>
                    <div class="cbp-l-grid-blog-desc">Aenean vulputate eleifend tellus. Aenean
                         leo ligula, porttitor eu, voluptatem accusantium consequat vitae... </div> -->
               </div>
               <div class="cbp-item print logos"> <a href="#vidoes" class="cbp-caption">
                    <div class="cbp-caption-defaultWrap"> <img style="background: white;"  src="home/img/video_placeholder.png" alt=""> </div>
                    <div class="cbp-caption-activeWrap">
                         <div class="cbp-l-caption-alignCenter">
                              <div class="cbp-l-caption-body">
                                    <span style="float:top"><img class="comingsoon" style="" src="home/img/home/comingsooncsv.png"></span>

                                   <div class="cbp-l-caption-text">VIEW VIDEOS</div>
                              </div>
                         </div>
                    </div>
                    </a> <a href="#" class="cbp-l-grid-blog-title">OUTFIELD</a>
                    <!-- <div class="cbp-l-grid-blog-date">25 january 2016</div>
                    <div class="cbp-l-grid-blog-split">|</div>
                    <a href="#" class="cbp-l-grid-blog-comments">6 comments</a>
                    <div class="cbp-l-grid-blog-desc">Sed ut perspiciatis unde omnis iste
                         natus error sit voluptatem voluptatem accusantium. </div>  style="backgro und: radial-gradient(at center center, rgb(5, 139, 173) 0%, rgb(5, 139, 173) 19%, rgb(176, 189, 189) 100%);"-->
               </div>
               <div class="cbp-item motion logos"> <a href="#vidoes" class="cbp-caption">
                    <div class="cbp-caption-defaultWrap"> <img style="background: white;"  src="home/img/video_placeholder.png" alt=""> </div>
                    <div class="cbp-caption-activeWrap">
                         <div class="cbp-l-caption-alignCenter">
                              <div class="cbp-l-caption-body">
                                    <span style="float:top"><img class="comingsoon" style="" src="home/img/home/comingsooncsv.png"></span>

                                   <div class="cbp-l-caption-text">VIEW VIDEOS</div>
                              </div>
                         </div>
                    </div>
                    </a> <a href="#" class="cbp-l-grid-blog-title">UNWRITTEN RULES <br><small>OF THE GAME</small></a>
                    <!-- <div class="cbp-l-grid-blog-date">28 january 2016</div>
                    <div class="cbp-l-grid-blog-split">|</div>
                    <a href="#" class="cbp-l-grid-blog-comments">3 comments</a>
                    <div class="cbp-l-grid-blog-desc">Sed ut perspiciatis unde omnis iste
                         natus error sit voluptatem accusantium. </div> -->
               </div>
          </div>
     </div>
</div>
<!-- END Blog  --> 



<!-- TEMP REMOVED  -->
<!--
 <div id="meet-the-pros" class="blog-div-area">

  <div id="meet-the-pros-m" class="container">
    <div class="blog-content-div">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12 blog-ma">
          <div class="single-blog">
            <div class="feature-images"> <img style="background-color: #ccc; " alt="blog" src="home/img/home/ScottVanSlyke.png"> 
              <div class="overley"></div>
            </div>
            <div class="blog-content">
              <h3>Scott Van Slyke</h3>
              <ul>
              </ul>
              <p>
Scott Van Slyke signed with the Los Angeles Dodgers as an 18 year old from John Burrough High School in St. Louis, Missouri.  He made his professional debut in the summer of 2005.  His Minor League career lasted 8 years, while batting .287 over than span and compiling 114 home runs while maintaining a .365 OBP. His Major League career spanned six seasons.  Scott was considered a 4th outfielder and hit .242 with a .326 OBP during his Major League career.  
(highlight underlined content)
Scott’s father, Andy Van Slyke, played over 13 years in the Major Leagues, made 3 All-Star appearances won 5 Gold Gloves, and 2 Silver-Slugger Awards.  Because of his access to professional instruction, Scott was able to take his game from average to elite.  With Scott’s background, he understands to value of learning from current or former major league baseball players.  
Scott’s vision for Practice with Pros is to provide affordable access to the game’s most knowledgeable players.           
                <span class="desktopbrs"><br><br><br><br><br></span>

              
              </p>
            </div>
          </div>
        </div>
        <div class="col-md- col-sm-4 col-xs-12 blog-ma" style="padding-bottom: 15px;">
          <div class="single-blog">
            <div class="feature-images"> <img style="background-color: #ccc;" alt="blog" src="home/img/home/ClaytonKershaw.png"> 
              <div class="overley"></div>
            </div>
            <div class="blog-content">
              <h3>Clayton Kershaw</h3>
              <ul>

              </ul>
              <p>
                  Clayton Kershaw was the first pick by the Los Angeles Dodgers in 2006.  In his time with the Dodgers, he has compiled an impressive 8 All-Star selections, an MVP Award, 3 Cy Young Awards, a Gold Glove, and a Roberto Clemente Award.
(highlight underlined section)
Clayton’s vision for the future generation of baseball players aligns with the purpose behind Practice with Pros, to provide the highest levels of baseball instruction to anyone.  He desires for kids and parents from any background to have affordable access to world’s best instruction. 
              
              <span class="desktopbrs"><br><br><br><br><br><br><br><br><br><br></span>
              
              
              </p>
            </div>
          </div>
        </div>
        <div class="col-md- col-sm-4 col-xs-12 blog-ma">
          <div class="single-blog">
            <div class="feature-images"><img style="background-color: #ccc;" alt="blog" src="home/img/home/ShawnTolleson.png"> 
              <div class="overley"></div>
            </div>
            <div class="blog-content">
              <h3>Shawn Tolleson</h3>
              <ul>

              </ul>
              <p>
Shawn Tolleson, better known in baseball as “Tolley,” is a former Major League baseball player with the Los Angeles Dodgers and Texas Rangers. Shawn accelerated through Minor League baseball with a 132 innings pitched, striking out 192, and maintaining a 1.70 ERA. During his 6 seasons in the Major Leagues, Shawn held hitters to a .247 batting average and a sub 4.00 ERA. Shawn also never made an error in his entire Major League career.
Shawn is most remembered for the 2015 season in which he served as the closer for the Texas Rangers. He finished the season with 35 saves and led Major League baseball with 22 saves after the All-Star break. He helped lead the Rangers to an improbable Post-Season appearance that year and finished 10th in Cy Young voting.
(highlight underlined content)
Shawn experienced a career that was derailed by injuries, and he has devoted himself to providing better instruction and awareness to young baseball players, parents, and coaches across the world.  
Shawn’s vision for Practice with Pros is to bridge the gap between youth baseball and the pros.  He wants a resource for amatuer players to tap into professional coaching and desires to give all former pros an outlet to share their wealth of expertise.                  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  -->

<!-- End-Blog  --> 

<!-- Download e-->
<!-- 
<div id="virtual-coaching"></div>
<span id="desktopbrs" class="desktopbrs"><br><br></span>
<div style="background-color: white !important;">
<br>
    <div class="join-us-app" style="color: black !important;">
        <div class="container">
            <div class="row">
                <div class="section-title center text-center">
                    <h2 style="color: black !important; background-color: white !important;">MEET THE PROS</h2>
                    <br>
                </div>
                <div class="col-sm-0 col-md-1 col-lg-2"></div>
                
                <div class="col-sm-12 col-md-10 col-lg-8">

                    <div class="testimonial-slider fs-blog-carousel"  tyle="background-color: white !important;" data-col="1" data-row="1" data-responsive="1,1,1">
                        <div class="swiper-container" style="background-color: white !important;">
                            <div class="swiper-wrapper" style="background-color: white !important;">
                    
                                <div class="swiper-slide" style="background-color: white !important;">
                                    <div class="swiper-holder" style="background-color: white !important;">
                                       
                                       <blockquote style="color: black !important; display: contents;">
                                           <cite style="font-size: xx-large; background-color: white !important; color: black !important;">Shawn Tolleson</cite>
                                           <p style="background-color: white !important; color: black !important;">
                                                ○   Shawn played <b>9</b> seasons in professional baseball including <b>6</b> seasons at the Major League level.  
                                                <span class="desktopbrs"> <br></span><br>○  Shawn’s most memorable moment was <b>throwing the final pitch to clinch a playoff berth for the Texas Rangers.</b>
                                                <span class="desktopbrs"> <br></span><br>○  Shawn enjoys working with players <b>that need help finding a consistent pitching delivery.</b>
                                                <span class="desktopbrs"><br> </span><br><br><b><i class="meetproquote" >Shawn looks forward to reviewing your video submissions to help you improve your game!</b></i>
                                           </p>
                                       </blockquote>
                                       <span class="desktopbrs"> <br> <br></span>

                                       <span style="float:right; size=100%;">
                                       <img src="home/img/home/meettheprosst.png" alt="Scott">
                                       </span>
                                    </div>
                                </div>
                                <div class="swiper-slide" style="background-color: white !important;">
                                    <div class="swiper-holder" style="background-color: white !important;">
                                     
                                       <blockquote  style="color: black !important; display: contents;">
                                            <cite style="font-size: xx-large; background-color: white !important; color: black !important;">Scott Van Slyke</cite>
                                            <p style="text-alrign: right; background-color: white !important; color: black !important;">
                                                ○   Scott played <b>13</b> seasons in professional baseball including <b>6</b> seasons at the Major League level.  
                                                <span class="desktopbrs"> <br></span><br>○  Scott’s most memorable moment was <b>going up to bat against Aroldis Chapman</b> when he was pitching for the Cincinnati Reds.
                                                <span class="desktopbrs"> <br></span><br>○  Scott looks forward to reviewing your video submissions to help you improve your game! <b><br></b>
                                                <span class="desktopbrs"> <br></span><br><b><i class="meetproquote" >Scott enjoys working with players, helping them make more consistent contact at the plate. </b></i>
                                            
                                            </p>
                                        </blockquote>
                                        <span class="desktopbrs"> <br> <br></span>
                                        <span style="float:right; size=30%;">
                                        <img src="home/img/home/meettheprossc.png" alt="Scott">
                                        </span>                                 
                                            
         
                                    </div>
                                </div>
                            </div>
                    
                            <div class="fs-pager">
                                <span>
                                    <i class="fs-current-index">1</i> / <i class="fs-current-total">1</i>
                                </span>
                            </div>
                    
                        </div>
                    
                        <div class="swiper-button-prev swiper-prev">
                            <i class="" style="line-height:unset;"></i>
                        </div>
                        <div class="swiper-button-next swiper-next">
                           <i class="" style="line-height:unset;"></i>
                        </div>
                    </div>
                    
                </div>
                
                <div class="col-sm-0 col-md-1 col-lg-2"></div>
                
                 
            </div>    
        </div>    
    </div>  

</div> -->

<!-- MEET THE PROS slider section being replaced with 2 cofounder imgs -->

<!-- <br><br>
<div id="virtual-coaching"></div>
<span id="desktopbrs" class="desktopbrs"><br><br></span>
<div style="background-color: white !important;">
<br>
    <div class="join-us-app">
        <div class="container">
            <div class="row">
                <div class="section-title center text-center">
                    <h2><strong>MEET THE PROS</strong></h2>
                    <br>
                </div>
                <div class="col-sm-0 col-md-1 col-lg-1"></div>

                <div class="meettheprosmid col-sm-12 col-md-10 col-lg-10">

                    <div class="testimonial-slider fs-blog-carousel testimonial-slider-mob" data-col="1" data-row="1" data-responsive="1,1,1">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide">
                                    <div class="swiper-holder" style="padding-top: 2px;">
                                       <cite class="procite" style="" >&nbsp;&nbsp;Shawn Tolleson</cite><span style="font-size: small; font-family:'CenturyGothic';" >&nbsp; ~ Co-Founder</span>

                                       <blockquote>
                                           <p>
                                                ○   Shawn played <b>9</b> seasons in professional baseball including <b>6</b> seasons at the Major League level.  
                                                <span class="desktopbrs"> <br></span><br>○  Shawn’s most memorable moment was <b>throwing the final pitch to clinch a playoff berth for the Texas Rangers.</b>
                                                <span class="desktopbrs"> <br></span><br>○  Shawn enjoys working with players <b>that need help finding a consistent pitching delivery.</b>
                                                <span class="desktopbrs"><br> </span><br><br><b><i class="meetproquote" >Shawn looks forward to reviewing your video submissions to help you improve your game!</b></i>
                                           </p>
                                       </blockquote>
                                       <span class="mtpspanimg" style="">
                                       <img class="mtpimg" src="home/img/home/shawnt.png" alt="Shawn">
                                       </span>
                                    </div>
                                </div>
                                
                                <div class="swiper-slide">
                                    <div class="swiper-holder" style="padding-top: 2px;">
                                       <cite class="procite" style="" >&nbsp;&nbsp;Scott Van Slyke</cite><span style="font-size: small; font-family:'CenturyGothic';" >&nbsp; ~ Co-Founder</span>

                                        <blockquote>

                                            <p>
                                                ○   Scott played <b>13</b> seasons in professional baseball including <b>6</b> seasons at the Major League level.  
                                                <span class="desktopbrs"> <br></span><br>○  Scott’s most memorable moment was <b>going up to bat against Aroldis Chapman</b> when he was pitching for the Cincinnati Reds.
                                                <span class="desktopbrs"> <br></span><br>○  Scott looks forward to reviewing your video submissions to help you improve your game! <b><br></b>
                                                <span class="desktopbrs"> <br></span><br><b><i class="meetproquote" >Scott enjoys working with players, helping them make more consistent contact at the plate. </b></i>
                                            </p>
                                        </blockquote>
                                        <span class="mtpspanimg" style="">
                                        <img class="mtpimg" src="home/img/home/vans.png" alt="Shawn">
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="fs-pager">
                                <span>
                                    <i class="fs-current-index">1</i> / <i class="fs-current-total">1</i>
                                </span>
                            </div>

                        </div>

                        <div class="swiper-button-prev swiper-prev">
                        </div>
                        <div class="swiper-button-next swiper-next">
                        </div>
                    </div>

                </div>
                
                <div class="col-sm-0 col-md-1 col-lg-1"></div>


            </div>    
        </div>    
    </div>  
    
</div> -->

<div id="virtual-coaching"> </div>
<span class="desktopbrs"><br><br><br></span>
<span class="mobilebrs"><br><br></span>


<div>
    <div class="join-us-app">
        <div class="container">
        
        
            <span class="founders2">
                <div class="row">
                        <span class="founderstitle">
                            <h1 class="foundersheader" style="text-align: center; "><strong>CO-FOUNDERS</strong></h1>
                        </span>       
                        <img class="mtpscreen" align="left" style="" src="home/img/home/cf_scott_cropped.png"> 
                        
                        <img class="mtpscreen" align="right" style="" src="home/img/home/cf_shawn_cropped.png"> 
                </div>
            </span>

            <span class="founders1x2">
                <div class="row">
                        <span class="founderstitle">
                            <h2 style="text-align: center; "><strong>CO-FOUNDER</strong></h2>
                        </span>       
                        <img class="mtpscreen" align="middle" style="" src="home/img/home/cf_scott_cropped.png"> 
                </div>
                <div class="row">
                        <span class="founderstitle">
                            <h2 style="text-align: center; "><strong>CO-FOUNDER</strong></h2>
                        </span>       
                        <img class="mtpscreen" align="middle" style="" src="home/img/home/cf_shawn_cropped.png"> 
                </div>
            </span>
        <span class="desktopbrs"><br><br><br><br> </span>


        </div>    
    </div>  

<br><br>
<span id="aaaa" class="mobilebrs"><br><br><br></span>

<!-- END Contact--> 
<span id="blackdiv" >
</span>
<div id="about-review-full" class="about-review-full section-space parallax parallax-testimonial">
<br>

  <div class="container">
    <div class="row">
    <span ><img class="footerlogo" style="" src="home/img/home/pwplogowhiteblackround.png"></span>
      <div class="col-md-8" style="float: unset !important;">
        <!-- <div class="section-title center text-center">
          <h2 class="white"><strong>Client's </strong> Review</h2>
          <hr>
          <div class="mid"></div>
        </div> -->
        
        
          <div class="container f-b">
            <div id="newsletters">
              <div class="low-back-up">
                <div class="container" style="padding: 0px;">
                  <div class="row footeroverflow">
                    <div class="leadbot col-lg-8 col-md-offset-2 col-sm-offset-0 col-xm-offset-0 col-xm-12 text-center">
                      <div class="social-media text-center">
                        <ul>
                          <li><a target="_blank" href="https://facebook.com/practicewithpros/"><i style="font-family: FontAwesome;" class="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a target="_blank" href="https://twitter.com/practicewithpro"><i style="font-family: FontAwesome;" class="fa fa-twitter" aria-hidden="true"></i></a></li>
<!--                           <li><a href="index2.html#"><i style="font-family: FontAwesome;" class="fa fa-linkedin" aria-hidden="true"></i></a></li> -->
                          <!-- <li><a href="index2.html#"><i style="font-family: FontAwesome;" class="fa fa-youtube" aria-hidden="true"></i></a></li> -->
                          <li><a target="_blank" href="https://www.instagram.com/practice.with.pros/"><i style="font-family: FontAwesome;" class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div class="newsletter text-center">
                        
                        <span class="desktopbrs">
                            
                        <h3 style="color:white;">INTERESTED? <span class="black"><strong>JOIN THE TEAM</strong></h3>
                            
                        </span>
                            
                        </h3>
                        <span style="" class="mobilebrs">
                            
                        <h3 style="color:white;">INTERESTED? </h3>
                        <h3 style="color:black;"><strong>JOIN THE TEAM</strong></h3>
                            
                        </span>
                            
                        
                        
                        <form action="#" method="post" id="newsletter">
                          <div class="newsletter-content">
                            <input class="signupinput" type="text" name="email" placeholder="Enter your Email address">
                            <button type="submit" class="button"><span><i style="font-family: FontAwesome;" class="fa fa-paper-plane-o" aria-hidden="true"></i></span></button>
                            
                          </div>
                        </form>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="f-b"><span class=""><!-- <i class="fa fa-baseball-ball"></i> --></span> &copy; 2020 Practice with Pros, LLC
<!--             <br>Practice with Pros Mobile App process – Proprietary & Confidential -->
<!--             <br>Practice with Pros, LLC All Rights Reserved  -->
            </div>
      </div>
    </div>
  </div>
  <br><br>
</div>


<!-- Footer -->
<!-- <br><br><br><br>
<div id="footer-bottom" class="footer-bottom" >
<br><br>
<span style="float:right; height: 200px; width: 200px; margin-right: 280px;"><img src="/static/home/img/logo.png"></span>

  <div class="container f-b">
    <div id="newsletters">
      <div class="low-back-up">
        <div class="container">
          <div class="row">
            <div class="leadbot col-lg-8 col-md-offset-2 col-sm-offset-0 col-xm-offset-0 col-xm-12 text-center">
              <div class="social-media text-center">
                <ul>
                  <li><a href="index2.html#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="index2.html#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="index2.html#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  <li><a href="index2.html#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                  <li><a href="index2.html#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
              <div class="newsletter text-center">
                <h3 class="white">SUBSCRIBE TO <span class="black"><strong>OUR NEWSLETTER</strong></span></h3>
                <form action="#" method="post" id="newsletter">
                  <div class="newsletter-content">
                    <input type="text" name="email" placeholder="Enter your Email address">
                    <button type="submit" class="button"><span><i class="fa fa-paper-plane-o" aria-hidden="true"></i></span></button>
                    
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="f-b"><span class="heart"><i class="fa fa-baseball-ball"></i></span> &copy; 2020
    <br>Practice with Pros Mobile App process – Proprietary & Confidential
    <br>Practice with Pros, LLC All Rights Reserved
    </div>
</div> -->
  

  
  
<!-- </div>
  <div class="row" style="height: 300px; width: 100%; background-image:url('home/img/home/granitebg.PNG')">
</div> -->


<!-- END Footer--> 

<!-- All Template -->
<!-- <div class="buy-theme alt-font xs-display-none"><a href="home/index.html" target="_blank"><i class="fa fa-share"></i> <span>All Teamplate</span></a></div> -->

<!-- Back to Top --> 
<a href="#" id="back-to-top" title="Back to top"><img src="home/img/top-arrow.png" alt="" ></a> 

<!-- js file  --> 
<script src="home/js/jquery.min.js"></script> 

<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="home/js/bootstrap.js"></script> 

<!--load cubeportfolio --> 
<script type="text/javascript" src="home/js/jquery.cubeportfolio.min.js"></script> 
<script type="text/javascript" src="home/js/main-portfolio.js"></script> 

<!-- Prettyphoto JS  --> 
<script src="home/js/jquery.prettyphoto.js"></script> 

<!-- Menu JS  --> 
<script src="home/js/menuzord.js"></script> 

<!--jqBootstrapValidation js file--> 
<script src="home/js/jqBootstrapValidation.js"></script> 

<!--contact js file--> 
<script src="home/js/contact_me.js"></script> 

<!--owl.carouse js filel--> 
<script src="home/js/owl.carousel.js"></script> 

<!--wow js file--> 
<script src="home/js/wow.min.js"></script> 

<!--master slider--> 
<script src="home/master-slider/js/masterslider.min.js"></script> 

<!-- main js --> 
<script src="home/js/main.js"></script>

<!-- masterslider swiper js --> 
<script src="home/js/swiper.js"></script>

<script>
    $('.owl-carousel').owlCarousel({
        center:true,
        videoWidth:1280,
        videoHeight:1050
    });
    
    btnMenu = document.getElementById('btnMenu');
    btnMenu.addEventListener('click', function() {
        navEle = document.getElementById("mySidenav");
        if (navEle.style.width == "" || navEle.style.width == "0" || navEle.style.width == "0px"){
            openNav();
        }else{
            closeNav();
        }
        

    });
     /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "220px";
        document.getElementById("mySidenav").style.height = "185px";
    }
    
    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.height = "0";

    }       



    // Personal blog carousel
    $('.fs-blog-carousel').each(function(){
        var $fs = $(this),
            _col = $fs.data('col'),
            _row = $fs.data('row'),
            _responsive = $fs.data('responsive'),
            _pager = 0,
            _perView = _col * _row,
            _arr_responsive = [3,2,1];

        var _space = 30;
        if( $fs.hasClass('testimonial-slider') == true ){
            _space = 0;
        }

        if( _responsive!=='undefined' ){
            var _exp = _responsive.split(',');
            if( _exp.length>2 ){
                _arr_responsive[0] = parseInt(_exp[0], 10);
                _arr_responsive[1] = parseInt(_exp[1], 10);
                _arr_responsive[2] = parseInt(_exp[2], 10);
            }
        }

        _pager = ($fs.find('.swiper-slide').length % _perView) > 0 ? parseInt($fs.find('.swiper-slide').length / _perView, 10)+1 : parseInt($fs.find('.swiper-slide').length / _perView, 10);

        $fs.find('.fs-current-total').html(_pager);
        //fs-current-index

        $fs.find('.swiper-container').swiper({
            pagination: '.swiper-pagination',
            slidesPerView: _col,
            slidesPerGroup:_col,
            slidesPerColumn: _row,
            paginationClickable: true,
            spaceBetween: _space,
            prevButton: $fs.find('.swiper-prev'),
            nextButton: $fs.find('.swiper-next'),
            onSlideChangeEnd: function(swiper){
                var _current = (swiper.activeIndex % _col)>0 ? parseInt(swiper.activeIndex / _col) + 2 : parseInt(swiper.activeIndex / _col) + 1;
                $fs.find('.fs-current-index').html(_current);
            },
            breakpoints: {
                768: {
                    slidesPerView: _arr_responsive[0]
                },
                640: {
                    slidesPerView: _arr_responsive[1]
                },
                320: {
                    slidesPerView: _arr_responsive[2]
                }
            }
        });
    });


   
    function playVid(){
        var ctrlVideo = document.getElementById("homevideo"); 
        var btn = document.getElementById("homevideoplaybtn"); 

        ctrlVideo.play();
        btn.style.display = 'none';
        if (btn.hasClass("active")){
            ctrlVideo.play();
        btn.toggleClass("active");
        btn.style.display = 'none';
        } else {
            ctrlVideo.pause();
        btn.toggleClass("active");
        btn.style.display = 'block';
        }  
    }

</script>
</body>
</html>
 
    
    <!-- $( document ).ready(function() {
    var ctrlVideo = document.getElementById("homevideo"); 
    var btn = document.getElementById("homevideoplaybtn"); 
    var bg = document.getElementById("homevideoplaybg"); 
    btn.click(function(){
      if (btn.hasClass("active")){
            ctrlVideo.play();
        btn.toggleClass("active");
        btn.style.display = 'none';
        } else {
            ctrlVideo.pause();
        btn.toggleClass("active");
        btn.style.display = 'block';
      }
    });
    });
     -->
    
        <!-- navBarCollapse = document.getElementById('navBarCollapse');
        navBarCollapse.Attributes('display') = 'inline-block';
        navBarCollapse.Attributes('width') = '40%'; -->

        <!-- navDesktop = document.getElementById('navDesktop');
        navMobile = document.getElementById('navMobile');
        navDesktop.hidden = true;
        navMobile.hidden = false; -->
