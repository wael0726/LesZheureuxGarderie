"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import { useCustomCursor } from '../../public/js/UseCustomCursor';

export default function Page() {
  useEffect(() => {
    const { initCustomCursor } = useCustomCursor();
    initCustomCursor();
  }, []); // Cette fonction ne se déclenche qu'une seule fois, à l'initialisation du composant

  return (
    <>
      <Head>
        <title>Prix - Garderie Les Z'Heureux</title>
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
                           <a class="nav-link" href="/">Acceuil</a>
                        </li>
                        
                        <!-- menu item - Services -->
                        <li class="nav-item">
                           <a class="nav-link" href="/services">Services</a>
                        </li>
                        
                        <!-- menu item - About -->
                        <li class="nav-item">
                           <a class="nav-link" href="/about">À propos</a>
                        </li>
                        
                        <!-- menu item - Our Team -->
                        <li class="nav-item">
                           <a class="nav-link" href="/team">Notre équipe</a>
                        </li>
                        
                        <!-- menu item - Careers -->
                        <li class="nav-item">
                           <a class="nav-link" href="/careers">Carrières</a>
                        </li>
                        
                        <!-- menu item - Pricing -->
                        <li class="nav-item">
                           <a class="nav-link" href="/pricing">Prix</a>
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
         <!-- Jumbotron -->
         <div class="jumbotron jumbotron-fluid">
            <div class="row d-flex justify-content-center">
               <div class="jumbo-heading" data-aos="fade-down">
                  <h1>Pricing</h1>
                  <!-- Breadcrumbs -->
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="about.html">About</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Pricing</li>
                     </ol>
                  </nav>
               </div>
            </div>
            <!-- /jumbo-heading -->
         </div>
         <!-- /jumbotron -->
         <!-- ==== Page Content ==== -->
         <div class="page container">
            <!-- row-->
            <div class="row mb-5">
               <div class="col-lg-5">
                  <img src="img/about/pricing.jpg" alt="" class="img-fluid rounded d-block mx-auto">
               </div>
               <!-- /col-lg-->
               <div class="col-lg-7 mt-3">
                  <h2>Our Rates & Fees </h2>
                  <p>
                     Etiam vestibulum sit amet nulla vel ornare. Vestibulum vitae turpis ac sapien pharetra facilisis. Curabitur non libero justo.
                     <!-- alert-->
                  <div class="alert alert-warning mt-3" role="alert">
                     <h6> Payment information</h6>
                     <p>Curabitur et quam felis. Nulla rhoncus laoreet dolor, et vestibulum sem consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt turpis ut sagittis tempor.
                  </div>
               </div>
               <!-- /col-lg-->
            </div>
            <!-- /row-->
            <!-- pricing tables -->
            <div class="col-lg-12 mt-5">
               <!-- row -->
               <div class="row">
                  <!-- pricing table 1 -->
                  <div class="col-lg-4 col-md-12">
                     <div class="pricingTable">
                        <div class="pricingTable-header bg-primary">
                           <h3 class="title">Daily Plan</h3>
                        </div>
                        <!-- /pricingTable-header -->
                        <div class="pricing-content bg-primary">
                           <div class="price-value">
                              <span class="amount">$40</span>
                              <span class="month">Price per day</span>
                           </div>
                           <!-- /price-value -->
                           <ul>
                              <li>No Contracts</li>
                              <li>10 hours/day</li>
                              <li>Drop In</li>
                              <li>Activities Included</li>
                           </ul>
                           <a href="contact.html" class="btn">Sign Up</a>
                        </div>
                        <!-- /pricing content -->
                     </div>
                     <!-- /pricing-table -->
                  </div>
                  <!-- /col-md -->
                  <!-- pricing table 2 -->
                  <div class="col-lg-4 col-md-12 res-margin">
                     <div class="pricingTable">
                        <div class="pricingTable-header bg-secondary">
                           <h3 class="title">Weekly Plan</h3>
                        </div>
                        <!-- /pricingTable-header -->
                        <div class="pricing-content bg-secondary">
                           <div class="price-value">
                              <span class="amount">$200</span>
                              <span class="month">Price per week</span>
                           </div>
                           <!-- /price-value -->
                           <ul>
                              <li>No Contracts</li>
                              <li>12 hours/day</li>
                              <li>Drop In</li>
                              <li>Activities Included</li>
                           </ul>
                           <a href="contact.html" class="btn">Sign Up</a>
                        </div>
                        <!-- /pricing content -->
                     </div>
                     <!-- /pricing-table -->
                  </div>
                  <!-- /col-md -->
                  <!-- pricing table 3 -->
                  <div class="col-lg-4 col-md-12 res-margin">
                     <div class="pricingTable">
                        <div class="pricingTable-header bg-tertiary">
                           <h3 class="title">Monthy Plan</h3>
                        </div>
                        <!-- /pricingTable-header -->
                        <div class="pricing-content bg-tertiary">
                           <div class="price-value">
                              <span class="amount">$600</span>
                              <span class="month">Price per month</span>
                           </div>
                           <!-- /price-value -->
                           <ul>
                              <li>No registration fee</li>
                              <li>12 hours/day</li>
                              <li>Drop In</li>
                              <li>Activities Included</li>
                           </ul>
                           <a href="contact.html" class="btn">Sign Up</a>
                        </div>
                        <!-- /pricing content -->
                     </div>
                     <!-- /pricing-table -->
                  </div>
                  <!-- /col-md -->
               </div>
               <!-- /row  -->
            </div>
            <!-- /col-lg-12 -->   <!-- row -->
            <div class="col-lg-12 mt-5">
               <h4>Administrative charges</h4>
               <p>
                  Etiam vestibulum sit amet nulla vel ornare. Vestibulum vitae turpis ac sapien pharetra facilisis. Curabitur non libero justo. Suspendisse at ultrices velit. Quisque aliquet quis nibh sed feugiat. Curabitur et quam felis. Nulla rhoncus laoreet dolor, et vestibulum sem consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt turpis ut sagittis tempor.
                  <!-- table -->
               <table class="table table-striped">
                  <thead>
                     <tr>
                        <th>Ages</th>
                        <th>Fee Type</th>
                        <th>Value</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>12months to 2 years</td>
                        <td>Registration fee (one time only)</td>
                        <td>$40</td>
                     </tr>
                     <tr>
                        <td>2 years to 8 years</td>
                        <td>Registration fee (one time only)</td>
                        <td>$20</td>
                     </tr>
                     <tr>
                        <td>8 years to 12 years</td>
                        <td>Registration fee (one time only)</td>
                        <td>$20</td>
                     </tr>
                  </tbody>
               </table>
               <!-- /table-->
            </div>
            <!-- /col-lg-12-->
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
                     <img src="img/logoZrm.png"  class="logo-footer img-fluid" alt="" style="height: 80px;">
                     <h5 class="mt-3">Abonnez-vous à notre infolettre</h5>
                     <!-- Mailist Form -->				
                     <div id="mc_embed_signup">
                        <!-- your mailist address in the line bellow -->
                        <form action="//listname.list-manage.com/subscribe/post?u=04e646927a196552aaee78a7b&amp;id=0dae358e08" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                           <div id="mc_embed_signup_scroll">
                              <div class="mc-field-group">
                                 <div class="input-group">
                                    <input class="form-control input-lg required email" type="email" value="" name="EMAIL" placeholder="Votre e-mail ici" id="mce-EMAIL">
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
                     <h5>Contactez Nous</h5>
                     <ul class="list-unstyled mt-3">
                        <li class="mb-1"><i class="fas fa-phone margin-icon "></i>514-507-4015</li>
                        <li class="mb-1"><i class="fas fa-envelope margin-icon"></i><a href="mailto:Leszheureuxgarderie@gmail.com">Leszheureuxgarderie@gmail.com</a></li>
                        <li><i class="fas fa-map-marker margin-icon"></i>6001, rue Hochelaga, Montréal. Québec, H1N 1X5 </li>
                     </ul>
                     <!--/ul -->
                     <!-- Start Social Links -->
                     <!-- /End Social Links -->
                  </div>
                  <!--/ col-lg -->
                  <div class="col-lg-4 text-center">
                     <h5>Working Hours</h5>
                     <ul class="list-unstyled mt-3">
                        <li class="mb-1">Lundi au vendredi</li>
                        <li class="mb-1">Ouvert de 7h à 18h</li>
                        <li class="mb-1">Jours fériés – Fermé</li>
                        <li>Fins de semaine – Fermé</li>
                     </ul>
                     <!--/ul -->
                  </div>
                  <!--/ col-lg -->
               </div>
               <!--/ row-->
               <hr>
               <div class="row">
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
      <script src="js/UseCustomCursor.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/plugins.js"></script>
      <!-- Prefix free -->
      <script src="js/prefixfree.min.js"></script>
   </body>
</html>` } } />
    </>
  );
}
