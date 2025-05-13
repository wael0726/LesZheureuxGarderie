
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Index3 - ABC Tots</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div dangerouslySetInnerHTML={ { __html: `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <!--[if IE]>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <![endif]-->
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- page title -->
      <title>ABC Tots</title>
      <!--[if lt IE 9]>
      <script src="js/respond.js"></script>
      <![endif]-->
      <!-- Font files -->
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700%7CNunito:400,700,900&display=swap" rel="stylesheet">
      <link href="fonts/flaticon/flaticon.css" rel="stylesheet" type="text/css">
      <link href="fonts/fontawesome/fontawesome-all.min.css" rel="stylesheet" type="text/css">
      <!-- Fav icons -->
      <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png">
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
      <!-- Bootstrap core CSS -->
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <!-- style CSS -->
      <link href="css/style.css" rel="stylesheet">
      <!-- plugins CSS -->
      <link href="css/plugins.css" rel="stylesheet">
      <!-- Colors CSS -->
      <link href="styles/maincolors.css" rel="stylesheet">
      <!-- LayerSlider CSS -->
      <link rel="stylesheet" href="vendor/layerslider/css/layerslider.css">
   </head>
   <!-- ==== body starts ==== -->
   <body id="top">
      <!-- Preloader -->
      <div id="preloader">
         <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
               <div class="preloader-logo">
                  <!-- spinner -->
                  <div class="spinner">
                     <div class="dot1"></div>
                     <div class="dot2"></div>
                  </div>
               </div>
               <!--/preloader logo -->
            </div>
            <!--/row -->
         </div>
         <!--/container -->
      </div>
      <!--/Preloader ends -->
      <nav id="main-nav" class="navbar-expand-xl">
         <div class="row">
            <!-- Start Top Bar -->
            <div class="container-fluid top-bar" >
               <div class="container">
                  <div class="row">
                     <div class="col-md-9">
                        <!-- Start Contact Info -->
                        <ul class="contact-details float-left">
                           <li><i class="fa fa-map-marker"></i>Street name 123 - New York</li>
                           <li><i class="fa fa-envelope"></i><a href="mailto:email@site.com">email@yoursite.com</a></li>
                           <li><i class="fa fa-phone"></i>(123) 456-789</li>
                        </ul>
                        <!-- End Contact Info -->
                     </div>
                     <!-- col -->
                     <div class="col-md-3">
                        <!-- Start Social Links -->
                        <ul class="social-list float-end list-inline">
                           <li class="list-inline-item"><a title="Facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
                           <li class="list-inline-item"><a title="Twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                           <li class="list-inline-item"><a  title="Instagram" href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                        <!-- /End Social Links -->
                     </div>
                     <!-- col -->
                  </div>
                  <!-- /row -->
               </div>
               <!-- /container -->
            </div>
            <!-- End Top bar --> 
            <!-- Navbar Starts -->
            <div class="navbar container-fluid">
               <div class="container ">
                  <!-- logo -->
                  <a class="nav-brand" href="index3.html">
                  <img src="img/logo.png" alt="" class="img-fluid">
                  </a>
                  <!-- Navbar toggler -->
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggle-icon">
                  <i class="fas fa-bars"></i>
                  </span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                     <ul class="navbar-nav ms-auto">
                        <!-- menu item -->
                        <li class="nav-item home-menu">
                           <a class="nav-link" href="index3.html">Home
                           </a>
                        </li>
                        <!-- menu item -->
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="services-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Services
                           </a>
                           <div class="dropdown-menu" aria-labelledby="services-dropdown">
                              <a class="dropdown-item" href="services.html">Services Style 1</a>
                              <a class="dropdown-item" href="services2.html">Services Style 2</a>
                              <a class="dropdown-item" href="services-single.html">Services Single</a>
                           </div>
                        </li>
                        <!-- menu item -->
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="about-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           About
                           </a>
                           <div class="dropdown-menu" aria-labelledby="about-dropdown">
                              <a class="dropdown-item" href="about.html">About Style 1</a>
                              <a class="dropdown-item" href="about2.html">About Style 2</a>
                              <a class="dropdown-item" href="team.html">Our Team</a>
                              <a class="dropdown-item" href="team-single.html">Team Single Page</a>
                              <a class="dropdown-item" href="careers.html">Careers</a>
                              <a class="dropdown-item" href="pricing.html">Pricing</a>
                           </div>
                        </li>
                        <!-- menu item -->
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="gallery-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Gallery
                           </a>
                           <div class="dropdown-menu" aria-labelledby="gallery-dropdown">
                              <a class="dropdown-item" href="gallery.html">Gallery Style 1</a>
                              <a class="dropdown-item" href="gallery2.html">Gallery Style 2</a>
                              <a class="dropdown-item" href="gallery3.html">Gallery Style 3</a>
                           </div>
                        </li>
                        <!-- menu item -->
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="contact-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Contact
                           </a>
                           <div class="dropdown-menu" aria-labelledby="contact-dropdown">
                              <a class="dropdown-item" href="contact.html">Contact Style 1</a>
                              <a class="dropdown-item" href="contact2.html">Contact Style 2</a>
                              <a class="dropdown-item" href="contact3.html">Contact Style 3</a>
                           </div>
                        </li>
                        <!-- menu item -->
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="others-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Other pages
                           </a>
                           <div class="dropdown-menu" aria-labelledby="others-dropdown">
                              <a class="dropdown-item" href="blog.html">Blog Home 1</a>
                              <a class="dropdown-item" href="blog2.html">Blog Home 2</a>
                              <a class="dropdown-item" href="blog-single.html">Blog Single</a>
                              <a class="dropdown-item" href="elements.html">Elements Page</a>
                              <a class="dropdown-item" href="404.html">404 Page</a>
                           </div>
                        </li>
                     </ul>
                     <!--/ul -->
                  </div>
                  <!--collapse -->
               </div>
               <!-- /container -->
            </div>
            <!-- /navbar -->
         </div>
         <!--/row -->
      </nav>
      <!-- /nav -->
      <!-- page wrapper starts -->
      <div id="page-wrapper">
         <!-- ==== Slider ==== -->
         <div class="container-fluid p-0">
            <!-- Draggable Slider -->
            <div class="slider-container">
               <!-- Controls -->
               <div class="slider-control left inactive"></div>
               <div class="slider-control right"></div>
               <ul class="slider-pagi"></ul>
               <!--Slider -->
               <div class="slider">
                  <!-- Slide 0 -->
                  <div class="slide slide-0 active" style="background-image:url('img/slider/dragslider-0.jpg')">
                     <div class="slide__bg"></div>
                     <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <!-- slide text-->
                        <div class="slide__text">
                           <h1 class="slide__text-heading">Welcome to ABC TOTS</h1>
                           <div class="hidden-small">
                              <p class="lead">We offer high quality Daycare Services, contact us or visit us today for more information</p>
                              <a href="services.html" class="btn btn-quaternary">our services</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Slide 1 -->
                  <div class="slide slide-1" style="background-image:url('img/slider/dragslider-1.jpg')">
                     <div class="slide__bg"></div>
                     <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <!-- slide text-->
                        <div class="slide__text">
                           <h1 class="slide__text-heading">Fun and Safe</h1>
                           <div class="hidden-small">
                              <p class="lead">Get inspired by seeing the children excited about learning, book a visit and experience our curriculum in action</p>
                              <a href="contact.html" class="btn btn-quaternary">Contact us</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Slide 2 -->
                  <div class="slide slide-2" style="background-image:url('img/slider/dragslider-2.jpg')">
                     <div class="slide__bg"></div>
                     <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <!-- slide text-->
                        <div class="slide__text">
                           <h1 class="slide__text-heading">Social & Fun Enviroment</h1>
                           <div class="hidden-small">
                              <p class="lead">ABC Tots ignite children’s natural curiosity to be self-learners in engaging environments and activities.</p>
                              <a href="about.html" class="btn btn-quaternary">About Us</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!--/Slide2 -->
               </div>
               <!--/Slider-->
            </div>
            <!--/ Draggable Slider ends -->
         </div>
         <!-- /container-fluid -->
         <!-- ==== Page Content ==== -->
         <!-- section -->
         <section id="about-home" class="container-fluid pb-0">
            <div class="container">
               <!-- section heading -->  
               <div class="section-heading text-center" data-aos="fade-down">
                  <h2>About Us</h2>
                  <p class="subtitle">Get to know us</p>
               </div>
               <!-- /section-heading -->
               <div class="row">
                  <div class="col-lg-5 res-margin">
                     <!-- image -->
                     <img class="img-fluid moving-blob" src="img/about/about2.jpg" alt="">
                     <!-- ornament starts-->
                     <div class="ornament-bubbles" data-aos="zoom-out"></div>
                  </div>
                  <!-- /col-lg -->
                  <div class="col-lg-7 ">
                     <h3>Our Mission</h3>
                     <p class="mt-4 res-margin">Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecena Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                     <p>Nec elementum ipsum convall. Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecen Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.</p>
                     <a href="contact.html" class="btn btn-primary ">Contact us</a>
                  </div>
                  <!-- /col-lg -->
               </div>
               <!-- /row -->
            </div>
            <!-- /container-->
            <div class="container">
               <!-- section -->  
               <section id="intro-cards"  class="row cards-no-margin">
                  <!-- card 1 -->  
                  <div class="col-lg-4" data-aos="zoom-out">
                     <div class="card card-flip">
                        <!-- front of card  -->  
                        <div class="card bg-secondary text-light ">
                           <div class="p-5">
                              <h5 class="card-title text-light">Licensed Child Care</h5>
                              <p class="card-text">
                                 In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat lorem
                              </p>
                              <!-- button show on mobile only,where flip is disabled -->
                              <a href="contact.html" class="btn d-lg-none">Contact us</a>
                           </div>
                           <!-- /p-5 -->
                           <!-- image -->
                           <img class="card-img" src="img/intro1.jpg" alt="">
                        </div>
                        <!-- /card -->
                        <!-- back of card -->  			
                        <div class="card bg-secondary text-light card-back">
                           <div class="card-body d-flex justify-content-center align-items-center">
                              <div class="p-4">
                                 <h5 class="card-title text-light">Since 2004</h5>
                                 <p class="card-text">enas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. 
                                    In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat
                                 </p>
                                 <!-- button -->
                                 <a href="contact.html" class="btn">contact us</a>
                              </div>
                              <!-- /p-4 -->
                           </div>
                           <!-- /card-body -->
                        </div>
                        <!-- /card -->
                     </div>
                     <!--/col-lg -->
                  </div>
                  <!--/card 1 -->  
                  <!-- card 2-->  
                  <div class="col-lg-4" data-aos="zoom-out" data-aos-delay="300">
                     <div class="card card-flip ">
                        <!-- front of card  -->  
                        <div class="card bg-primary text-light">
                           <div class="p-5">
                              <h5 class="card-title text-light">High Quality learning</h5>
                              <p class="card-text">
                                 In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat lorem
                              </p>
                              <!-- button show on mobile only,where flip is disabled -->
                              <a href="services.html" class="btn d-lg-none">Our Services</a>
                           </div>
                           <!-- /p-5 -->
                           <!-- image -->
                           <img class="card-img" src="img/intro2.jpg" alt="">
                        </div>
                        <!-- /card -->
                        <!-- back of card -->  			
                        <div class="card bg-primary text-light card-back">
                           <div class="card-body d-flex justify-content-center align-items-center">
                              <div class="p-4">
                                 <h5 class="card-title text-light">Quality daycare</h5>
                                 <p class="card-text">enas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. 
                                    In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat
                                 </p>
                                 <!-- button -->
                                 <a href="services.html" class="btn">Our Services</a>
                              </div>
                              <!-- /p-4 -->
                           </div>
                           <!-- /card-body -->
                        </div>
                        <!-- /card -->
                     </div>
                     <!--/card 2 -->
                  </div>
                  <!--/col-lg -->
                  <!-- card 3-->  
                  <div class="col-lg-4" data-aos="zoom-out" data-aos-delay="600">
                     <div class="card card-flip ">
                        <!-- front of card  -->  
                        <div class="card bg-tertiary text-light">
                           <div class="p-5">
                              <h5 class="card-title text-light">Talented Staff</h5>
                              <p class="card-text">
                                 In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat lorem
                              </p>
                              <!-- button show on mobile only,where flip is disabled -->
                              <a href="team.html" class="btn d-lg-none">Our Team</a>
                           </div>
                           <!-- /p-5 -->
                           <!-- image -->
                           <img class="card-img" src="img/intro3.jpg" alt="">
                        </div>
                        <!-- /card -->
                        <!-- back of card -->  			
                        <div class="card bg-tertiary text-light card-back">
                           <div class="card-body d-flex justify-content-center align-items-center">
                              <div class="p-4">
                                 <h5 class="card-title text-light">Meet our Staff</h5>
                                 <p class="card-text">enas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. 
                                    In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat
                                 </p>
                                 <!-- button -->
                                 <a href="team.html" class="btn">Our Team</a>
                              </div>
                              <!-- /p-4 -->
                           </div>
                           <!-- /card-body -->
                        </div>
                        <!-- /card -->
                     </div>
                     <!--/card 3 -->
                  </div>
                  <!--/col-lg -->
               </section>
               <!-- #intro-cards --> 
            </div>
            <!-- /container --> 
            <!-- whale in water scene -->
            <!-- whale -->
            <img src="img/ornaments/whale.png" class="floating-whale" alt="">
            <!-- waves -->
            <div class="waveHorizontals">
               <div id="waveHorizontal1" class="waveHorizontal"></div>
               <div id="waveHorizontal2" class="waveHorizontal"></div>
               <div id="waveHorizontal3" class="waveHorizontal"></div>
            </div>
            <!-- sea -->
            <div class="sea"></div>
            <!--/ whale in water scene ends -->
         </section>
         <!-- /section ends -->
         <!-- section -->
         <section id="services-home" class="bg-secondary ">
            <div class="container pb-5">
               <!-- section heading -->  
               <div class="section-heading text-center text-light" data-aos="fade-down">
                  <h2>Our Services</h2>
                  <p class="subtitle">what we offer</p>
               </div>
               <!-- /section heading -->
               <div class="carousel-3items owl-carousel owl-theme col-lg-12">
                  <!-- service 1  -->
                  <div class="serviceBox2">
                     <!-- service icon -->
                     <div class="service-icon">
                        <a href="services-single.html">
                        <img src="img/services/service1.jpg" alt="" class="blob img-fluid">
                        </a>
                     </div>
                     <!-- service content -->
                     <div class="service-content">
                        <a href="services-single.html">
                           <h4 class="service-head">Daycare</h4>
                        </a>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit integer dictum malesuada Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus Etiam rhoncus.
                        </p>
                        <!-- Button -->	 
                        <a href="services-single.html" class="btn btn-quaternary  btn-sm mt-2 ml-1">Read More</a>
                     </div>
                  </div>
                  <!-- service 2  -->
                  <div class="serviceBox2">
                     <!-- service icon -->
                     <div class="service-icon">
                        <a href="services-single.html">
                        <img src="img/services/service2.jpg" alt="" class="blob2 img-fluid">
                        </a>
                     </div>
                     <!-- service content -->
                     <div class="service-content">
                        <a href="services-single.html">
                           <h4 class="service-head">Summer Camp</h4>
                        </a>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit integer dictum malesuada Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus Etiam rhoncus.
                        </p>
                        <!-- Button -->	 
                        <a href="services-single.html" class="btn btn-quaternary btn-sm mt-2 ml-1">Read More</a>
                     </div>
                  </div>
                  <!-- service 3  -->
                  <div class="serviceBox2">
                     <!-- service icon -->
                     <div class="service-icon">
                        <a href="services-single.html">
                        <img src="img/services/service3.jpg" alt="" class="blob img-fluid">
                        </a>			   
                     </div>
                     <!-- service content -->
                     <div class="service-content">
                        <a href="services-single.html">
                           <h4 class="service-head">Infant Care</h4>
                        </a>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit integer dictum malesuada Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus Etiam rhoncus.
                        </p>
                        <!-- Button -->	 
                        <a href="services-single.html" class="btn btn-quaternary btn-sm mt-2 ml-1">Read More</a>
                     </div>
                  </div>
                  <!-- service 4  -->
                  <div class="serviceBox2">
                     <!-- service icon -->
                     <div class="service-icon">
                        <a href="services-single.html">
                        <img src="img/services/service4.jpg" alt="" class="blob2 img-fluid">
                        </a>
                     </div>
                     <!-- service content -->
                     <div class="service-content">
                        <a href="services-single.html">
                           <h4 class="service-head">Classes</h4>
                        </a>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit integer dictum malesuada Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus Etiam rhoncus.
                        </p>
                        <!-- Button -->	 
                        <a href="services-single.html" class="btn btn-quaternary btn-sm mt-2 ml-1">Read More</a>
                     </div>
                  </div>
                  <!-- service 5 -->
                  <div class="serviceBox2">
                     <!-- service icon -->
                     <div class="service-icon">
                        <a href="services-single.html">
                        <img src="img/services/service5.jpg" alt="" class="blob img-fluid">
                        </a>
                     </div>
                     <!-- service content -->
                     <div class="service-content">
                        <a href="services-single.html">
                           <h4 class="service-head">Activities</h4>
                        </a>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit integer dictum malesuada Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus Etiam rhoncus.
                        </p>
                        <!-- Button -->	 
                        <a href="services-single.html" class="btn btn-quaternary btn-sm mt-2 ml-1">Read More</a>
                     </div>
                  </div>
               </div>
               <!-- /owl-services --> 
            </div>
            <!-- /container -->
         </section>
         <!-- /section ends -->
         <!-- Section  -->
         <section id="counter-section" class="container-fluid counter-calltoaction bg-fixed overlay"  data-100-bottom="background-position: 50% 100px;"
            data-top-bottom="background-position: 50% -100px;" >
            <div id="counter" class="container">
               <div  class="row col-lg-10 offset-lg-1">
                  <!-- Counter -->
                  <div class="col-xl-4 col-md-4">
                     <div class="counter">
                        <div class="counter-wrapper bg-primary">
                           <i class="counter-icon flaticon-teacher"></i>
                           <!-- insert your final value on data-count= -->
                           <div class="counter-value" data-count="30">0</div>
                           <h3 class="title">Professionals</h3>
                        </div>
                     </div>
                     <!-- /counter -->
                  </div>
                  <!-- /col-lg -->
                  <!-- Counter -->
                  <div class="col-xl-4 col-md-4">
                     <div class="counter">
                        <div class="counter-wrapper bg-secondary">
                           <i class="counter-icon  flaticon-family"></i>
                           <!-- insert your final value on data-count= -->
                           <div class="counter-value" data-count="74">0</div>
                           <h3 class="title">Happy parents</h3>
                        </div>
                     </div>
                     <!-- /counter -->
                  </div>
                  <!-- /col-lg -->
                  <!-- Counter -->
                  <div class="col-xl-4 col-md-4">
                     <div class="counter">
                        <div class="counter-wrapper bg-tertiary">
                           <i class="counter-icon flaticon-children"></i>
                           <!-- insert your final value on data-count= -->
                           <div class="counter-value" data-count="104">0</div>
                           <h3 class="title">Students</h3>
                        </div>
                     </div>
                     <!-- /counter -->
                  </div>
                  <!-- /col-lg -->		 
               </div>
               <!-- /row -->
            </div>
            <!-- /container -->
         </section>
         <!-- /section ends--><!-- section-->
         <section id="team-home" class="container">
            <!-- section heading -->  
            <div class="section-heading text-center" data-aos="fade-down">
               <h2>Our Team</h2>
               <p class="subtitle">Qualified Professionals</p>
            </div>
            <!-- /section-heading -->  
            <div class="row">
               <div class="col-lg-7">
                  <h3>Meet our Talented Team</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <ul class="checkmark ps-0 font-weight-bold">
                     <li>Over 30 Qualified professionals</li>
                     <li>We offer you our quality services since 2002</li>
                     <li>Fun and educational activities in our daily plan</li>
                  </ul>
                  <!-- /ul-->
               </div>
               <!-- /col-lg-->
               <div class="col-lg-5 res-margin">
                  <img src="img/team/team-home.jpg" alt="" class="img-fluid blob2">
                  <!-- ornament starts-->
                  <div class="ornament-stars" data-aos="fade-down"></div>
               </div>
               <!-- /col-lg-->
               <div class="col-lg-12 mt-4">
                  <!-- team carousel -->  
                  <div class="carousel-3items owl-carousel owl-theme mt-5 col-md-12">
                     <!-- Team member 1 -->
                     <div class="col-lg-12 team-style3 bg-secondary pattern2">
                        <!-- image -->
                        <a href="team-single.html">
                        <img src="img/team/team1.jpg" class="img-fluid rounded" alt="">
                        </a>
                        <!-- caption -->
                        <div class="team-caption">
                           <a href="team-single.html">
                              <h4>Laura Smith</h4>
                           </a>
                           <h6>Teacher</h6>
                           <p>
                              Incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic, obcaecati, ullam, laboriosa    
                           </p>
                        </div>
                        <!-- social icons -->
                        <div class="icons bg-primary">
                           <a href="#"><i class="fa fa-envelope"></i></a>
                           <a href="#"><i class="fab fa-facebook-f"></i></a>
                           <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                     </div>
                     <!-- /team-style3 -->
                     <!-- Team member 2 -->
                     <div class="col-lg-12 team-style3 bg-secondary pattern2">
                        <!-- image -->
                        <a href="team-single.html">
                        <img src="img/team/team2.jpg" class="img-fluid rounded" alt="" >
                        </a>
                        <!-- caption -->
                        <div class="team-caption">
                           <a href="team-single.html">
                              <h4>John Doe</h4>
                           </a>
                           <h6>Administrator</h6>
                           <p>
                              Incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic, obcaecati, ullam, laboriosa    
                           </p>
                        </div>
                        <!-- social icons -->
                        <div class="icons bg-tertiary">
                           <a href="#"><i class="fa fa-envelope"></i></a>
                           <a href="#"><i class="fab fa-facebook-f"></i></a>
                           <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                     </div>
                     <!-- /team-style3 -->
                     <!-- Team member 3 -->
                     <div class="col-lg-12 team-style3 bg-secondary pattern2">
                        <!-- image -->
                        <a href="team-single.html">
                        <img src="img/team/team3.jpg" class="img-fluid rounded" alt="" >
                        </a>
                        <!-- caption -->
                        <div class="team-caption">
                           <a href="team-single.html">
                              <h4>Meghan Smith</h4>
                           </a>
                           <h6>Assistant Teacher</h6>
                           <p>
                              Incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic, obcaecati, ullam, laboriosa    
                           </p>
                        </div>
                        <!-- social icons -->
                        <div class="icons bg-primary">
                           <a href="#"><i class="fa fa-envelope"></i></a>
                           <a href="#"><i class="fab fa-facebook-f"></i></a>
                           <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                     </div>
                     <!-- /team-style3 -->
                     <!-- Team member 4 -->
                     <div class="col-lg-12 team-style3 bg-secondary pattern2">
                        <!-- image -->
                        <a href="team-single.html">
                        <img src="img/team/team4.jpg" class="img-fluid rounded" alt="" >
                        </a>
                        <!-- caption -->
                        <div class="team-caption">
                           <a href="team-single.html">
                              <h4>Mika Doe</h4>
                           </a>
                           <h6>Teacher</h6>
                           <p>
                              Incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic, obcaecati, ullam, laboriosa    
                           </p>
                        </div>
                        <!-- social icons -->
                        <div class="icons bg-tertiary">
                           <a href="#"><i class="fa fa-envelope"></i></a>
                           <a href="#"><i class="fab fa-facebook-f"></i></a>
                           <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                     </div>
                     <!-- /team-style3 -->
                     <!-- Team member 5-->
                     <div class="col-lg-12 team-style3 bg-secondary pattern2">
                        <!-- image -->
                        <a href="team-single.html">
                        <img src="img/team/team5.jpg" class="img-fluid rounded" alt="" >
                        </a>
                        <!-- caption -->
                        <div class="team-caption">
                           <a href="team-single.html">
                              <h4>Jillian Smith</h4>
                           </a>
                           <h6>Assistant teacher</h6>
                           <p>
                              Incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic, obcaecati, ullam, laboriosa    
                           </p>
                        </div>
                        <!-- social icons -->
                        <div class="icons bg-primary">
                           <a href="#"><i class="fa fa-envelope"></i></a>
                           <a href="#"><i class="fab fa-facebook-f"></i></a>
                           <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                     </div>
                     <!-- /team-style3 -->
                  </div>
                  <!-- /owl-carousel --> 
               </div>
               <!-- /col-lg-->
            </div>
            <!-- /row-->
         </section>
         <!-- /section ends-->
         <!-- section --> 
         <section id="gallery-home" class="container-fluid bg-tertiary no-bg-sm">
            <div class="container">
               <!-- section heading -->  
               <div class="section-heading text-center text-light" data-aos="fade-down">
                  <h2>Gallery</h2>
                  <p class="subtitle">Our facilities</p>
               </div>
               <!-- /section-heading -->
               <!-- gallery -->
               <div class="container magnific-popup mt-5">
                  <!-- row starts -->
                  <div class="row">
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery1.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery1.jpg" class="blob img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery2.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery2.jpg" class="blob2 img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery3.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery3.jpg" class="blob img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery4.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery4.jpg" class="blob2 img-fluid" alt="">
                        </a>
                     </div>
                  </div>
                  <!-- /row -->
                  <!-- row starts -->
                  <div class="row mt-4">
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery5.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery5.jpg" class="blob2 img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery6.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery6.jpg" class="blob img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery7.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery7.jpg" class="blob2 img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery8.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery8.jpg" class="blob img-fluid" alt="">
                        </a>
                     </div>
                  </div>
                  <!-- /row -->
                  <!-- row starts -->
                  <div class="row mt-4">
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery9.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery9.jpg" class="blob img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery10.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery10.jpg" class="blob2 img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery11.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery11.jpg" class="blob img-fluid" alt="">
                        </a>
                     </div>
                     <!-- image -->
                     <div class="col-lg-3">
                        <a href="img/gallery/gallery12.jpg" title="You can add caption to pictures.">
                        <img src="img/gallery/gallery12.jpg" class="blob2 img-fluid" alt="">
                        </a>
                     </div>
                  </div>
                  <!-- /row -->
               </div>
               <!-- /container -->
            </div>
            <!-- /container-->
         </section>
         <!-- /section ends -->
         <!-- section -->
         <section id="blogprev-home" data-100-bottom="background-position: 0% 120%;"
            data-top-bottom="background-position: 0% 100%;">
            <div class="container">
               <!-- section heading -->  
               <div class="section-heading text-center" data-aos="fade-down">
                  <h2>Latest Blog Posts</h2>
                  <p class="subtitle">Our Updates</p>
               </div>
               <!-- /section-heading -->
               <!-- blog carousel -->
               <div class="carousel-3items owl-carousel owl-theme mt-0">
                  <!-- blog-box -->
                  <div class="blog-box">
                     <!-- image -->
                     <a href="blog-single.html">
                        <div class="image"><img src="img/blog/blogstyle2-1.jpg" alt=""></div>
                     </a>
                     <!-- blog-box-caption -->
                     <div class="blog-box-caption">
                        <!-- date -->
                        <div class="date"><span class="day">12</span><span class="month">May</span></div>
                        <a href="blog-single.html">
                           <h4>Helping Your Child with Socialization</h4>
                        </a>
                        <!-- /link -->
                        <p>
                           Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis...
                        </p>
                     </div>
                     <!-- blog-box-footer -->
                     <div class="blog-box-footer">
                        <div class="author">Posted by<a href="#"><i class="fas fa-user"></i>Lauren Smith</a></div>
                        <div class="comments"><a href="blog-single.html"><i class="fas fa-comment"></i>23</a></div>
                        <!-- Button -->	 
                        <div class="text-center col-md-12">
                           <a href="blog-single.html" class="btn btn-primary ">Read more</a>
                        </div>
                     </div>
                     <!-- /blog-box-footer -->
                  </div>
                  <!-- /blog-box -->
                  <!-- blog-box -->
                  <div class="blog-box">
                     <!-- image -->
                     <a href="blog-single.html">
                        <div class="image"><img src="img/blog/blogstyle2-2.jpg" alt=""></div>
                     </a>
                     <!-- blog-box-caption -->
                     <div class="blog-box-caption">
                        <!-- date -->
                        <div class="date"><span class="day">28</span><span class="month">June</span></div>
                        <a href="blog-single.html">
                           <h4>Our Healthy meals that toddlers love</h4>
                        </a>
                        <!-- /link -->
                        <p>
                           Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis...
                        </p>
                     </div>
                     <!-- blog-box-footer -->
                     <div class="blog-box-footer">
                        <div class="author">Posted by<a href="#"><i class="fas fa-user"></i>Jonas Doe</a></div>
                        <div class="comments"><a href="blog-single.html"><i class="fas fa-comment"></i>5</a></div>
                        <!-- Button -->	 
                        <div class="text-center col-md-12">
                           <a href="blog-single.html" class="btn btn-primary ">Read more</a>
                        </div>
                     </div>
                     <!-- /blog-box-footer -->
                  </div>
                  <!-- /blog-box -->
                  <!-- blog-box -->
                  <div class="blog-box">
                     <!-- image -->
                     <a href="blog-single.html">
                        <div class="image"><img src="img/blog/blogstyle2-3.jpg" alt=""></div>
                     </a>
                     <!-- blog-box-caption -->
                     <div class="blog-box-caption">
                        <!-- date -->
                        <div class="date"><span class="day">02</span><span class="month">July</span></div>
                        <a href="blog-single.html">
                           <h4>20 Fun Activities to Do With Your Kids</h4>
                        </a>
                        <!-- /link -->
                        <p>
                           Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis...
                        </p>
                     </div>
                     <!-- blog-box-footer -->
                     <div class="blog-box-footer">
                        <div class="author">Posted by<a href="#"><i class="fas fa-user"></i>Lauren Smith</a></div>
                        <div class="comments"><a href="blog-single.html"><i class="fas fa-comment"></i>10</a></div>
                        <!-- Button -->	 
                        <div class="text-center col-md-12">
                           <a href="blog-single.html" class="btn btn-primary ">Read more</a>
                        </div>
                     </div>
                     <!-- /blog-box-footer -->
                  </div>
                  <!-- /blog-box -->
                  <!-- blog-box -->
                  <div class="blog-box">
                     <!-- image -->
                     <a href="blog-single.html">
                        <div class="image"><img src="img/blog/blogstyle2-4.jpg" alt=""></div>
                     </a>
                     <!-- blog-box-caption -->
                     <div class="blog-box-caption">
                        <!-- date -->
                        <div class="date"><span class="day">18</span><span class="month">June</span></div>
                        <a href="blog-single.html">
                           <h4>Brain-Boosting Activities for Children</h4>
                        </a>
                        <!-- /link -->
                        <p>
                           Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis...
                        </p>
                     </div>
                     <!-- blog-box-footer -->
                     <div class="blog-box-footer">
                        <div class="author">Posted by<a href="#"><i class="fas fa-user"></i>Jonas Doe</a></div>
                        <div class="comments"><a href="blog-single.html"><i class="fas fa-comment"></i>11</a></div>
                        <!-- Button -->	 
                        <div class="text-center col-md-12">
                           <a href="blog-single.html" class="btn btn-primary ">Read more</a>
                        </div>
                     </div>
                     <!-- /blog-box-footer -->
                  </div>
                  <!-- /blog-box -->
               </div>
               <!-- /owl-carousel -->
            </div>
            <!-- /container -->
         </section>
         <!-- /section ends-->
         <!-- section -->		   
         <section id="callout" class=" container-fluid bg-fixed">
            <div class="container">
               <!-- row -->
               <div class="row">
                  <div class="col-lg-6 p-0" data-start="right: 50%;" 
                     data-center="right:-5%;">
                     <!-- image  -->
                     <img src="img/call-to-action/calltoactionbg.jpg" class="img-fluid img-rounded" alt="">
                  </div>
                  <!-- text box  -->
                  <div class="col-lg-6 bg-secondary p-5 justify-content-center align-self-center"  data-start="left: 50%;" 
                     data-center="left:-5%;">
                     <div class="text-light justify-content-center align-self-center">
                        <h3>Enroll Today</h3>
                        <p>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus vi tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <a href="contact.html" class="btn btn-tertiary">Contact us</a>
                     </div>
                     <!-- /text-light  -->
                  </div>
                  <!-- /col-lg  -->
               </div>
               <!-- /row -->
            </div>
            <!-- /container -->
         </section>
         <!-- /section ends -->
         <!-- Section -->
         <section id="contact-home" class="container">
            <!-- section heading -->  
            <div class="section-heading text-center" data-aos="fade-down">
               <h2>Contact Us</h2>
               <p class="subtitle">Get in Touch</p>
            </div>
            <!-- /section-heading -->  
            <div class="container">
               <div class="row">
                  <div class="col-lg-7">
                     <h3>Contact Information</h3>
                     <p>In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                     <p>
                        <!-- contact icons-->
                     <ul class="list-inline mt-3 list-contact colored-icons">
                        <li class="list-inline-item"><i class="fa fa-envelope margin-icon"></i><a href="mailto:email@yoursite.com">email@yoursite.com</a></li>
                        <li class="list-inline-item"><i class="fa fa-phone margin-icon"></i>(123) 456-789</li>
                        <li class="list-inline-item" ><i class="fa fa-map-marker margin-icon"></i>Street Name 123 - New York</li>
                     </ul>
                     <!-- /list-->
                     <!-- map-->
                     <div id="map-canvas" class="mt-5"></div>
                     <!-- /map-->
                  </div>
                  <!-- /col-lg- -->
                  <!-- contact box -->  
                  <div class="col-lg-4 contact-form3 offset-lg-1 bg-light h-100">
                     <div class="contact-image bg-light">
                        <!-- envelope icon-->
                        <i class="fas fa-envelope"></i>
                     </div>
                     <h5 class="text-center mt-3">Send us a message</h5>
                     <!-- Form Starts -->
                     <div id="contact_form">
                        <div class="form-group">
                           <div class="row">
                              <div class="col-md-12">
                                 <label>Name<span class="required">*</span></label>
                                 <input type="text" name="name" class="form-control input-field" required=""> 
                              </div>
                              <div class="col-md-12">
                                 <label>Email Address <span class="required">*</span></label>
                                 <input type="email" name="email" class="form-control input-field" required=""> 
                              </div>
                              <div class="col-md-12">
                                 <label>Subject</label>
                                 <input type="text" name="subject" class="form-control input-field"> 
                              </div>
                              <div class="col-md-12">
                                 <label>Message<span class="required">*</span></label>
                                 <textarea name="message" id="message" class="textarea-field form-control" rows="3"  required=""></textarea>
                              </div>
                           </div>
                           <!-- button -->
                           <button type="submit" id="submit_btn" value="Submit" class="btn btn-primary d-block mt-3">Send message</button>
                        </div>
                        <!-- /form-group-->
                        <!-- Contact results -->
                        <div id="contact_results"></div>
                     </div>
                     <!-- /contact-form-->
                  </div>
                  <!-- /col-lg-->
               </div>
               <!-- /row -->
            </div>
            <!-- /container -->  
         </section>
         <!-- /Section -->
      </div>
      <!--/ page-wrapper -->
      <div id="footer"  class="footer-1 1-footer">
         <svg version="1.1" id="footer-divider"  class="secondary" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1440 126" xml:space="preserve" preserveAspectRatio="none slice">
            <path class="st0" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"></path>
         </svg>
         <!-- ==== footer ==== -->
         <footer class="bg-secondary text-light">
            <div class="container">
               <!-- row -->
               <div class="row">
                  <div class="col-lg-4 text-center">
                     <!-- logo -->
                     <img src="img/logo_light.png"  class="logo-footer img-fluid" alt="">
                     <h5 class="mt-3">Subscribe to our newsletter</h5>
                     <!-- Mailist Form -->				
                     <div id="mc_embed_signup">
                        <!-- your mailist address in the line bellow -->
                        <form action="//listname.list-manage.com/subscribe/post?u=04e646927a196552aaee78a7b&amp;id=0dae358e08" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                           <div id="mc_embed_signup_scroll">
                              <div class="mc-field-group">
                                 <div class="input-group">
                                    <input class="form-control input-lg required email" type="email" value="" name="EMAIL" placeholder="Your email here" id="mce-EMAIL">
                                    <span class="input-group-btn">
                                    <button class="btn btn-tertiary" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
                                    </span>
                                 </div>
                                 <!-- Subscription results -->
                                 <div id="mce-responses" class="mailchimp">
                                    <div class="alert alert-danger response" id="mce-error-response"></div>
                                    <div class="alert alert-success response" id="mce-success-response"></div>
                                 </div>
                              </div>
                              <!-- /mc-fiel-group -->									
                           </div>
                           <!-- /mc_embed_signup_scroll -->
                        </form>
                        <!-- /form ends -->
                     </div>
                     <!-- /mc_embed_signup -->		  
                  </div>
                  <!--/ col-lg -->
                  <div class="col-lg-4 text-center res-margin">
                     <h5>Contact Us</h5>
                     <ul class="list-unstyled mt-3">
                        <li class="mb-1"><i class="fas fa-phone margin-icon "></i>(123) 456-789</li>
                        <li class="mb-1"><i class="fas fa-envelope margin-icon"></i><a href="mailto:email@yoursite.com">email@yoursite.com</a></li>
                        <li><i class="fas fa-map-marker margin-icon"></i>Street Name 123 - New York </li>
                     </ul>
                     <!--/ul -->
                     <!-- Start Social Links -->
                     <ul class="social-list text-center list-inline mt-2">
                        <li class="list-inline-item"><a title="Facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a title="Twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a  title="Instagram" href="#"><i class="fab fa-instagram"></i></a></li>
                     </ul>
                     <!-- /End Social Links -->
                  </div>
                  <!--/ col-lg -->
                  <div class="col-lg-4 text-center">
                     <h5>Working Hours</h5>
                     <ul class="list-unstyled mt-3">
                        <li class="mb-1">Monday to Friday</li>
                        <li class="mb-1">Open from 9am - 6pm</li>
                        <li class="mb-1">Holidays - Closed</li>
                        <li>Weekends - Closed</li>
                     </ul>
                     <!--/ul -->
                  </div>
                  <!--/ col-lg -->
               </div>
               <!--/ row-->
               <hr>
               <div class="row">
                  <div class="credits col-sm-12">
                     <p>Designed by <a href="http://www.ingridkuhn.com">Ingrid Kuhn</a></p>
                  </div>
               </div>
               <!--/row-->
            </div>
            <!--/ container -->
            <!-- Go To Top Link -->
            <div class="d-none d-md-block">
               <a href="#top" class="back-to-top"><i class="fa fa-angle-up"></i></a>
            </div>
            <!--/page-scroll-->
         </footer>
         <!--/ footer-->
      </div>
      <!-- Bootstrap core & Jquery -->
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      <!-- Custom Js -->
      <script src="js/custom.js"></script>
      <script src="js/plugins.js"></script>
      <!-- Prefix free -->
      <script src="js/prefixfree.min.js"></script>
      <!-- number counter script -->
      <script src="js/counter.js"></script>
      <!-- maps -->
      <script src="js/map.js"></script>
      <!-- GreenSock -->
      <script src="vendor/layerslider/js/greensock.js"></script>
      <!-- LayerSlider script files -->
      <script src="vendor/layerslider/js/layerslider.transitions.js"></script>
      <script src="vendor/layerslider/js/layerslider.kreaturamedia.jquery.js"></script>
      <script src="vendor/layerslider/js/layerslider.load.js"></script>
   </body>
</html>` } } />
    </>
  );
}
