
import Head from 'next/head';

export default function Page() {
   return (
      <>
         <Head>
            <title>Index - ABC Tots</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         </Head>
         <div dangerouslySetInnerHTML={{
  __html: `<!DOCTYPE html>
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
               <div class="container d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <a class="nav-brand" href="/">
        <img src="/img/logoZrm.png" alt="Logo" style="height: 100px !important;" class="img-fluid me-2">
      </a>
      <!-- titre -->
      <span style="font-size: 1.8rem; font-weight: bold; color: #28a745;">Les Z'heureux</span>
    </div>
                  <!-- Navbar toggler -->
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggle-icon">
                  <i class="fas fa-bars"></i>
                  </span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                     <ul class="navbar-nav ms-auto">
                        <!-- menu item - Home -->
                        <li class="nav-item">
                           <a class="nav-link" href="/">Home</a>
                        </li>
                        
                        <!-- menu item - Services -->
                        <li class="nav-item">
                           <a class="nav-link" href="/services">Services</a>
                        </li>
                        
                        <!-- menu item - About -->
                        <li class="nav-item">
                           <a class="nav-link" href="/about">About</a>
                        </li>
                        
                        <!-- menu item - Our Team -->
                        <li class="nav-item">
                           <a class="nav-link" href="/team">Our Team</a>
                        </li>
                        
                        <!-- menu item - Careers -->
                        <li class="nav-item">
                           <a class="nav-link" href="/careers">Careers</a>
                        </li>
                        
                        <!-- menu item - Pricing -->
                        <li class="nav-item">
                           <a class="nav-link" href="/pricing">Pricing</a>
                        </li>
                        
                        <!-- menu item - Contact -->
                        <li class="nav-item">
                           <a class="nav-link" href="/contact">Contact</a>
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
            <!-- Parallax Slider -->
            <div id="slider" class="parallax-slider" style="width:1200px;margin:0 auto;margin-bottom: 0px;">
               <!-- Slide 1 -->
               <div class="ls-slide" data-ls="duration:4000; transition2d:7;">
                  <!-- background image  -->
                  <img src="img/slider/parallaxslider/slide1.jpg" class="ls-bg" alt="" />
                  <!-- clouds  -->
                  <img  src="img/slider/parallaxslider/clouds.png" class="ls-l" alt="" style="top:56px;left:-100px;" data-ls="parallax:true; parallaxlevel:-5;">
                  <!-- butterflies  -->
                  <img  src="img/slider/parallaxslider/butterflies.png" class="ls-l" alt="" style="top:16px;left:0px;" data-ls=" parallax:true; parallaxlevel:4;">
                  <!-- sun  -->
                  <img  src="img/slider/parallaxslider/sun.png" class="ls-l" alt="" style="top:-190px;left:650px;" data-ls="parallax:true; parallaxlevel:-3;">
                  <!--child image  -->
                  <img  src="img/slider/parallaxslider1.png" class="ls-l" alt="" style="top:166px;left:520px;" data-ls="offsetxin:10; offsetyin:120; durationin:1100; rotatein:5; transformoriginin:59.3% 80.3% 0; offsetxout:-80; durationout:400; parallax:true; parallaxlevel:10;">
                  <!-- text  -->
                  <div class="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400;">
                     <div class="header-text">
                        <span>Bienvenue à la garderie</span> 
                        <h1> Les Z'heureux</h1>
                        <!--the div below is hidden on small screens  -->
                        <div class="hidden-small">
                           <p class="header-p">We offer high quality Daycare Services, contact us or visit us today for more information</p>
                           <a class="btn btn-secondary" href="contact.html">Contact us</a>
                        </div>
                        <!--/hidden-small -->
                     </div>
                     <!-- header-text  -->
                  </div>
                  <!-- ls-l  -->
               </div>
               <!-- ls-slide -->
            </div>
            <!-- /slider -->
            <svg version="1.1" id="divider"  class="slider-divider" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 1440 126" preserveAspectRatio="none slice" xml:space="preserve">
               <path class="st0" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"></path>
            </svg>
         </div>
         <!-- /container-fluid -->
         <!-- ==== Page Content ==== -->
         <div class="container">
            <!-- section -->  
            <section id="intro-cards"  class="row pb-0">
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
         <!-- section -->
         <section id="about-home" class="container-fluid pb-0">
            <div class="container">
               <!-- section heading -->  
               <div class="section-heading text-center">
                  <h2>About Us</h2>
                  <p class="subtitle">Get to know us</p>
               </div>
               <!-- /section-heading -->
               <div class="row">
                  <div class="col-lg-7 ">
                     <h3>Our Mission</h3>
                     <p class="mt-4 res-margin">Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecena Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                     <p>Nec elementum ipsum convall. Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecen Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.</p>
                     <a href="contact.html" class="btn btn-secondary ">Contact us</a>
                  </div>
                  <!-- /col-lg -->
                  <div class="col-lg-5 res-margin">
                     <!-- image -->
                     <img class="img-fluid rounded" src="img/about/about2.jpg" alt="">
                     <!-- ornament starts-->
                     <div class="ornament-rainbow" data-aos="zoom-out"></div>
                  </div>
                  <!-- /col-lg -->
               </div>
               <!-- /row -->
               <h3 class="mt-5 text-center">What Parents say:</h3>
               <div class="row">
                  <!-- testimonials -->
                  <!-- testimonial carousel -->
                  <div class="carousel-2items owl-carousel owl-theme col-md-12">
                     <!-- testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.                        
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/team1.jpg" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">Lucianna Smith</h5>
                           <span class="post">Teacher</span>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                     <!-- testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.                        
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/team2.jpg" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">John Sadana</h5>
                           <span class="post">Doctor</span>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                     <!-- testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.                        
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/team3.jpg" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">Jane Janeth</h5>
                           <span class="post">Librarian</span>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                  </div>
                  <!-- /owl-testimonial -->      
               </div>
               <!-- /row -->
            </div>
            <!-- /container-->
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
         <section id="features" class="bg-secondary text-light">
            <div class="container">
               <!-- section heading -->  
               <div class="section-heading text-center">
                  <h2>Our Features</h2>
                  <p class="subtitle">Benefits for you</p>
               </div>
               <!-- /section-heading -->
               <!-- features -->
               <div class="row ">
                  <div class="col-lg-6">
                     <div class="row ">
                        <div class="col-md-6 col-lg-6">
                           <!-- feature -->
                           <div class="feature-with-icon">
                              <div class="icon-features">
                                 <!-- icon -->
                                 <i class="flaticon-maternity text-primary"></i>
                              </div>
                              <h5>Safe Enviroment</h5>
                              <p>Etiam rhoncus leo a dolor placerat, nec elem entum ipsum convall.</p>
                           </div>
                           <!-- /feature-with-icon-->
                           <!-- feature -->
                           <div class="feature-with-icon mt-5">
                              <div class="icon-features">
                                 <!-- icon -->
                                 <i class="flaticon-open-book-1 text-primary"></i>
                              </div>
                              <h5>Educational activities</h5>
                              <p>Etiam rhoncus leo a dolor placerat, nec elem entum ipsum convall.</p>
                           </div>
                           <!-- /feature-with-icon-->
                        </div>
                        <div class="col-md-6 col-lg-6">
                           <!-- feature -->
                           <div class="feature-with-icon">
                              <div class="icon-features">
                                 <!-- icon -->
                                 <i class="flaticon-classroom-1 text-primary"></i>
                              </div>
                              <h5>Qualified teachers</h5>
                              <p>Etiam rhoncus leo a dolor placerat, nec elem entum ipsum convall.</p>
                           </div>
                           <!-- /feature-with-icon-->
                           <!-- feature -->
                           <div class="feature-with-icon mt-5">
                              <div class="icon-features">
                                 <!-- icon -->
                                 <i class="flaticon-baby-boy text-primary"></i>
                              </div>
                              <h5>Infant care</h5>
                              <p>Etiam rhoncus leo a dolor placerat, nec elem entum ipsum convall.</p>
                           </div>
                           <!-- /feature-with-icon-->
                        </div>
                        <!-- /col-l -->
                     </div>
                     <!-- /row-->
                  </div>
                  <!-- /col-l -->
                  <div class="col-lg-6 features-bg">
                     <!-- image -->
                     <img src="img/features.png" alt="" class="img-fluid"  data-aos="zoom-out"   data-aos-delay="300">
                  </div>
                  <!-- /col-l -->
               </div>
               <!-- /row -->
            </div>
            <!-- /container -->
         </section>
         <!-- /section ends -->
         <!-- section -->
         <section id="services-home" class="container-fluid">
            <div class="container pb-5">
               <!-- section heading -->  
               <div class="section-heading text-center">
                  <h2>Our Services</h2>
                  <p class="subtitle">what we offer</p>
               </div>
               <!-- /section heading -->
               <!-- row -->
               <div class="row vertical-tabs">
                  <div class="col-lg-12">
                     <!-- navigation -->
                     <div class="tabs-with-icon">
                        <nav>
                           <div class="nav nav-tabs" id="nav-tab" role="tablist">
                              <a class="nav-item nav-link active" id="tab1-tab" data-bs-toggle="tab" href="#tab1"><i class="flaticon-abc-block"></i>Daycare</a>
                              <a class="nav-item nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tab2" ><i class="flaticon-kids-1"></i>Summer Camp</a>
                              <a class="nav-item nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tab3" ><i class="flaticon-smiling-baby"></i>Infant care</a>
                              <a class="nav-item nav-link" id="tab4-tab" data-bs-toggle="tab" href="#tab4"><i class="flaticon-blackboard"></i>Classes</a>
                              <a class="nav-item nav-link" id="tab5-tab" data-bs-toggle="tab" href="#tab5" ><i class="flaticon-kids"></i>Activities</a>
                           </div>
                        </nav>
                        <!-- tab-content -->
                        <div class="tab-content block-padding bg-light" id="nav-tabContent">
                           <div class="tab-pane active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                              <!-- row -->
                              <div class="row">
                                 <div class="col-lg-6">
                                    <!-- image -->
                                    <img src="img/services/service1.jpg" alt="" class="rounded img-fluid">
                                    <!-- ornament starts-->
                                    <div class="ornament-rainbow" data-aos="fade-right"></div>
                                 </div>
                                 <!-- col-lg -->
                                 <div class="col-lg-6">
                                    <h3>Daycare</h3>
                                    <p>Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                                    <ul class="custom ps-0">
                                       <li>Over 30 Qualified professionals</li>
                                       <li>We offer you our quality services since 2002</li>
                                       <li>Educational activities in our daily plan</li>
                                    </ul>
                                    <!-- Button -->	 
                                    <a href="services-single.html" class="btn btn-secondary mt-4">Read More</a>
                                 </div>
                                 <!-- /col-lg -->
                              </div>
                              <!-- row -->
                           </div>
                           <!-- ./Tab-pane -->
                           <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <h3>Summer Camp</h3>
                                    <p>Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                                    <ul class="custom ps-0">
                                       <li>Over 30 Qualified professionals</li>
                                       <li>We offer you our quality services since 2002</li>
                                       <li>Educational activities in our daily plan</li>
                                    </ul>
                                    <!-- Button -->	 
                                    <a href="services-single.html" class="btn btn-secondary mt-4">Read More</a>
                                 </div>
                                 <!-- /col-lg -->
                                 <div class="col-lg-6 res-margin">
                                    <!-- image -->
                                    <img src="img/services/service2.jpg" alt="" class="rounded img-fluid">
                                    <!-- ornament starts-->
                                    <div class="ornament-stars" data-aos="fade-right"></div>
                                 </div>
                                 <!-- col-lg -->
                              </div>
                              <!-- row -->
                           </div>
                           <!-- ./Tab-pane -->
                           <div class="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <!-- image -->
                                    <img src="img/services/service3.jpg" alt="" class="rounded img-fluid">
                                    <!-- ornament starts-->
                                    <div class="ornament-bubbles" data-aos="fade-right"></div>
                                 </div>
                                 <!-- col-lg -->
                                 <div class="col-lg-6">
                                    <h3>Infant Care</h3>
                                    <p>Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                                    <ul class="custom ps-0">
                                       <li>Over 30 Qualified professionals</li>
                                       <li>We offer you our quality services since 2002</li>
                                       <li>Educational activities in our daily plan</li>
                                    </ul>
                                    <!-- Button -->	 
                                    <a href="services-single.html" class="btn btn-secondary mt-4">Read More</a>
                                 </div>
                                 <!-- /col-lg -->
                              </div>
                              <!-- row -->
                           </div>
                           <!-- ./Tab-pane -->
                           <div class="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <h3>Classes</h3>
                                    <p>Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                                    <ul class="custom ps-0">
                                       <li>Over 30 Qualified professionals</li>
                                       <li>We offer you our quality services since 2002</li>
                                       <li>Educational activities in our daily plan</li>
                                    </ul>
                                    <!-- Button -->	 
                                    <a href="services-single.html" class="btn btn-secondary mt-4">Read More</a>
                                 </div>
                                 <!-- /col-lg -->
                                 <div class="col-lg-6 res-margin">
                                    <!-- image -->
                                    <img src="img/services/service4.jpg" alt="" class="rounded img-fluid">
                                    <!-- ornament starts-->
                                    <div class="ornament-stars" data-aos="fade-right"></div>
                                 </div>
                                 <!-- col-lg -->
                              </div>
                              <!-- row -->
                           </div>
                           <!-- ./Tab-pane -->
                           <div class="tab-pane" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <!-- image -->
                                    <img src="img/services/service5.jpg" alt="" class="rounded img-fluid">
                                    <!-- ornament starts-->
                                    <div class="ornament-rainbow" data-aos="fade-right"></div>
                                 </div>
                                 <!-- col-lg -->
                                 <div class="col-lg-6">
                                    <h3>Activities</h3>
                                    <p>Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                                    <ul class="custom ps-0">
                                       <li>Over 30 Qualified professionals</li>
                                       <li>We offer you our quality services since 2002</li>
                                       <li>Educational activities in our daily plan</li>
                                    </ul>
                                    <!-- Button -->	 
                                    <a href="services-single.html" class="btn btn-secondary mt-4">Read More</a>
                                 </div>
                                 <!-- /col-lg -->
                              </div>
                              <!-- row -->
                           </div>
                           <!-- ./Tab-pane -->
                        </div>
                        <!-- ./Tab-content -->
                     </div>
                     <!-- vertical-tabs -->
                  </div>
                  <!-- /col-lg-6 -->
               </div>
               <!-- /row --> 
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
            <div class="section-heading text-center">
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
               <div class="col-lg-12">
                  <!-- team carousel -->  
                  <div class="carousel-4items owl-carousel owl-theme mt-5">
                     <!-- Team member 1 -->
                     <div class="col-md-12 team-style1 notepad">
                        <div class="team_img">
                           <a href="team-single.html">
                           <img src="img/team/team1.jpg" class="img-fluid" alt="">
                           </a>
                           <!-- social icons -->
                           <ul class="social">
                              <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                           </ul>
                        </div>
                        <!-- /team_img -->
                        <div class="team-content">
                           <a href="team-single.html">
                              <h5 class="title">Laura Smith</h5>
                           </a>
                           <span class="post">Teacher</span>
                           <p>Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                        </div>
                        <!-- /team-content -->
                     </div>
                     <!-- /team-style1 -->
                     <!-- Team member 2 -->
                     <div class="col-md-12 team-style1 notepad">
                        <div class="team_img">
                           <a href="team-single.html">
                           <img src="img/team/team2.jpg" class="img-fluid" alt="">
                           </a>
                           <!-- social icons -->
                           <ul class="social">
                              <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                           </ul>
                        </div>
                        <!-- /team_img -->
                        <div class="team-content">
                           <a href="team-single.html">
                              <h5 class="title">John Doe</h5>
                           </a>
                           <span class="post">Administrator</span>
                           <p>Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                        </div>
                        <!-- /team-content -->
                     </div>
                     <!-- /team-style1 -->
                     <!-- Team member 3 -->
                     <div class="col-md-12 team-style1 notepad">
                        <div class="team_img">
                           <a href="team-single.html">
                           <img src="img/team/team3.jpg" class="img-fluid" alt="">
                           </a>
                           <!-- social icons -->
                           <ul class="social">
                              <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                           </ul>
                        </div>
                        <!-- /team_img -->
                        <div class="team-content">
                           <a href="team-single.html">
                              <h5 class="title">Meghan Smith</h5>
                           </a>
                           <span class="post">Assitant Teacher</span>
                           <p>Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                        </div>
                        <!-- /team-content -->
                     </div>
                     <!-- /team-style1 -->
                     <!-- Team member 4 -->
                     <div class="col-md-12 team-style1 notepad">
                        <div class="team_img">
                           <a href="team-single.html">
                           <img src="img/team/team4.jpg" class="img-fluid" alt="">
                           </a>
                           <!-- social icons -->
                           <ul class="social">
                              <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                           </ul>
                        </div>
                        <!-- /team_img -->
                        <div class="team-content">
                           <a href="team-single.html">
                              <h5 class="title">Mika Doe</h5>
                           </a>
                           <span class="post">Teacher</span>
                           <p>Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                        </div>
                        <!-- /team-content -->
                     </div>
                     <!-- /team-style1 -->
                     <!-- Team member 5 -->
                     <div class="col-md-12 team-style1 notepad">
                        <div class="team_img">
                           <a href="team-single.html">
                           <img src="img/team/team5.jpg" class="img-fluid" alt="">
                           </a>
                           <!-- social icons -->
                           <ul class="social">
                              <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                           </ul>
                        </div>
                        <!-- /team_img -->
                        <div class="team-content">
                           <a href="team-single.html">
                              <h5 class="title">Jillian Smith</h5>
                           </a>
                           <span class="post">Asssitant Teacher</span>
                           <p>Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.</p>
                        </div>
                        <!-- /team-content -->
                     </div>
                     <!-- /team-style1 -->
                  </div>
                  <!-- /owl-team--> 
               </div>
               <!-- /col-lg-->
            </div>
            <!-- /row-->
         </section>
         <!-- /section ends-->
            
            </div>
            <!-- /container-->
         </section>
         <!-- /section ends -->
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
            <div class="row">
               <div class="col-lg-10 offset-lg-1 text-center">
                  <!-- section heading -->  
                  <div class="section-heading text-center">
                     <h2>Contact Us</h2>
                     <p class="subtitle">Get in Touch</p>
                  </div>
                  <!-- /section-heading -->  
                  <!-- contact info boxes start-->
                  <div class="contact-info res-margin">
                     <div class="row res-margin">
                        <div class="col-lg-4 contact-box">
                           <div class="contact-icon bg-secondary text-light">
                              <!---icon-->
                              <i class="fa fa-envelope top-icon"></i>
                              <!-- contact-icon info-->
                              <div class="contact-icon-info">
                                 <h5>Write us</h5>
                                 <p><a href="mailto:email@yoursite.com">email@yoursite.com</a></p>
                              </div>
                           </div>
                           <!-- /contact-icon-->
                        </div>
                        <!-- /col-lg-->
                        <div class="col-lg-4 contact-box res-margin">
                           <div class="contact-icon bg-secondary text-light">
                              <!---icon-->
                              <i class="fa fa-map-marker top-icon"></i>
                              <!-- contact-icon info-->
                              <div class="contact-icon-info">
                                 <h5>Visit us</h5>
                                 <p>Street Name 123 - New York</p>
                              </div>
                           </div>
                           <!-- /contact-icon-->
                        </div>
                        <!-- /col-lg -->
                        <div class="col-lg-4 contact-box res-margin">
                           <div class="contact-icon bg-secondary text-light">
                              <!---icon-->
                              <i class="fa fa-phone top-icon"></i>
                              <!-- contact-icon info-->
                              <div class="contact-icon-info">
                                 <h5>Call us</h5>
                                 <p>(123) 456-789</p>
                              </div>
                           </div>
                           <!-- /contact-icon-->
                        </div>
                        <!-- /col-lg-->
                     </div>
                     <!-- /row -->
                  </div>
                  <!-- /contact-info-->
               </div>
               <!-- /col-lg-->
               <!--notepad -->
               <div class="col-lg-12 mt-5 block-padding force notepad pl-5 pr-5" >
                  <div class="row">
                     <div class="col-lg-7">
                        <!-- contact-info-->
                        <h4>Send us a message</h4>
                        <!-- Form Starts -->
                        <div id="contact_form">
                           <div class="form-group">
                              <div class="row">
                                 <div class="col-md-6">
                                    <label>Name<span class="required">*</span></label>
                                    <input type="text" name="name" class="form-control input-field" required=""> 
                                 </div>
                                 <div class="col-md-6">
                                    <label>Email Address <span class="required">*</span></label>
                                    <input type="email" name="email" class="form-control input-field" required=""> 
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-md-12">
                                    <label>Subject</label>
                                    <input type="text" name="subject" class="form-control input-field"> 
                                 </div>
                                 <div class="col-md-12">
                                    <label>Message<span class="required">*</span></label>
                                    <textarea name="message" id="message" class="textarea-field form-control" rows="3"  required=""></textarea>
                                 </div>
                              </div>
                              <button type="submit" id="submit_btn" value="Submit" class="btn btn-tertiary">Send message</button>
                           </div>
                           <!-- /form-group-->
                           <!-- Contact results -->
                           <div id="contact_results"></div>
                        </div>
                        <!-- /contact-form-->
                     </div>
                     <!-- /contact-info-->
                     <div class="col-lg-5">
                        <!-- map-->
                        <div id="map-canvas" class="mt-5 rounded"></div>
                     </div>
                     <!-- ornament starts-->
                     <div class="ornament-stars mt-8 d-none d-md-block" data-aos="zoom-out"></div>
                  </div>
                  <!-- /row-->
               </div>
               <!-- /col-lg-->
            </div>
            <!-- /.row-->
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
</html>` }} />
      </>
   );
}
