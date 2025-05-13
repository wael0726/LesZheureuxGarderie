
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Gallery - ABC Tots</title>
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
                  <a class="nav-brand" href="index.html">
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
                           <a class="nav-link" href="index.html">Home
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
         <!-- Jumbotron -->
         <div class="jumbotron jumbotron-fluid">
            <div class="row d-flex justify-content-center">
               <div class="jumbo-heading" data-aos="fade-down">
                  <h1>Gallery</h1>
                  <!-- Breadcrumbs -->
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Gallery </li>
                     </ol>
                  </nav>
                  <!-- /breadcrumb -->
               </div>
               <!-- /jumbo-heading -->
            </div>
            <!-- /container -->
         </div>
         <!-- /jumbotron -->
         <!-- ==== Page Content ==== -->
         <div class="page container">
            <div class="row">
               <div class="col-lg-6 text-center offset-lg-3 mb-5">
                  <h2>Our Photo Gallery</h2>
                  <p>In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
               </div>
               <!-- /col-lg -->
            </div>
            <!-- /row -->
            <!-- centered Gallery navigation -->
            <ul class="nav nav-pills category-isotope center-nav">
               <li class="nav-item">
                  <a class="nav-link active" href="#" data-toggle="tab" data-filter="*">All</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#" data-toggle="tab" data-filter=".school">Our School</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#" data-toggle="tab" data-filter=".activities">Activities</a>
               </li>
            </ul>
            <!-- /ul -->
            <!-- Gallery -->
            <div id="gallery-isotope" class="row mt-5 magnific-popup">
               <!-- Image 1 -->
               <div class="col-sm-6 col-md-6 col-lg-4 activities">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery1.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery1.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 2 -->
               <div class="col-sm-6 col-md-6 col-lg-4 school">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery2.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery2.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 3 -->
               <div class="col-sm-6 col-md-6 col-lg-4 school">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery3.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery3.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 4 -->
               <div class="col-sm-6 col-md-6 col-lg-4 activities">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery4.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery4.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 5 -->
               <div class="col-sm-6 col-md-6 col-lg-4 school">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery5.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery5.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 6 -->
               <div class="col-sm-6 col-md-6 col-lg-4 school">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery6.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery6.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 7 -->
               <div class="col-sm-6 col-md-6 col-lg-4 activities">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery7.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery7.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 8 -->
               <div class="col-sm-6 col-md-6 col-lg-4 activities">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery8.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery8.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 9 -->
               <div class="col-sm-6 col-md-6 col-lg-4 school">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery9.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery9.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 10 -->
               <div class="col-sm-6 col-md-6 col-lg-4 school">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery10.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery10.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 11 -->
               <div class="col-sm-6 col-md-6 col-lg-4 school">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery11.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery11.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
               <!-- Image 12 -->
               <div class="col-sm-6 col-md-6 col-lg-4 school">
                  <div class="portfolio-item">
                     <div class="gallery-thumb">
                        <img class="img-fluid " src="img/gallery/gallery12.jpg" alt="">
                        <span class="overlay-mask"></span>
                        <a href="img/gallery/gallery12.jpg" class="link centered" title="You can add caption to pictures.">
                        <i class="fa fa-expand"></i></a>
                     </div>
                  </div>
               </div>
            </div>
            <!-- /gallery-isotope-->	
         </div>
         <!-- /page -->
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
      <div id="footer" class="footer-1 2-footer">
         <!-- ==== footer ==== -->
         <footer class="footer2 bg-secondary text-light">
            <!-- container -->
            <div class="container">
               <div class="col-lg-12 text-center">
                  <!-- logo -->
                  <img src="img/logo_light.png"  class="logo-footer img-fluid" alt="">
               </div>
               <!-- row -->
               <div class="row mt-5">
                  <div class="col-lg-4 text-center">
                     <h5 class="mt-2">Subscribe to our newsletter</h5>
                     <p>We send emails once a week</p>
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
                  </div>
                  <!--/ col-lg -->
                  <div class="col-lg-4 text-center">
                     <h5>Working Hours</h5>
                     <ul class="list-unstyled mt-3">
                        <li class="mb-1">Monday to Friday</li>
                        <li class="mb-1">Open from 9am - 6pm</li>
                        <li class="mb-1">Holidays / Weekends - Closed</li>
                     </ul>
                     <!--/ul -->
                  </div>
                  <!--/ col-lg -->
               </div>
               <!--/ row-->
               <hr>
               <!-- col-md-12 -->
               <div class="col-md-12">
                  <div class="credits row">
                     <div class="col-md-6">
                        <p class="float-left mt-3">Designed by <a href="http://www.ingridkuhn.com">Ingrid Kuhn</a></p>
                     </div>
                     <!--/col-md-6 -->
                     <div class="col-md-6">
                        <!-- Start Social Links -->
                        <ul class="social-list float-end list-inline mb-0">
                           <li class="list-inline-item"><a title="Facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
                           <li class="list-inline-item"><a title="Twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                           <li class="list-inline-item"><a  title="Instagram" href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                        <!-- /End Social Links -->
                     </div>
                     <!--/col-md-6 -->
                  </div>
                  <!--/credits -->
               </div>
               <!--/col-md-12-->
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
   </body>
</html>` } } />
    </>
  );
}
