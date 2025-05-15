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
        <title>Services - Garderie Les Z'Heureux</title>
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
                           <a class="nav-link" href="/pricing">Tarifs</a>
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
               <!-- jumbo-heading -->
               <div class="jumbo-heading" data-aos="fade-down">
                  <h1>Services</h1>
                  <!-- Breadcrumbs -->
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Acceuil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Services</li>
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
         <div class="page">
            <div class="container-fluid block-padding">
               <div class="container ">
                  <div class="row">
                     <div class="col-lg-7 justify-content-center align-self-center">
                        <h3><span class="text-secondary">Un environnement d’apprentissage</span> sain et sécuritaire pour tous les enfants</h3>
                        <p>
                           Nous offrons un milieu chaleureux, sécuritaire et stimulant où chaque enfant peut s’épanouir à son rythme. Nos installations sont conçues pour favoriser le bien-être, l’autonomie et la curiosité naturelle des enfants, tout en respectant les normes d’hygiène et de sécurité.
                        </p>
                        <p>Des activités variées sont proposées selon l’âge : jeux d’éveil et exploration sensorielle pour les poupons, ateliers de motricité, d’arts plastiques, de musique et de lecture pour les plus grands. Chaque journée est pensée pour encourager la créativité, la socialisation et le plaisir d’apprendre.</p>
                        <p>Nos heures d’ouverture sont du lundi au vendredi, de 7h à 18h.</p>
                        <!-- Button -->	 
                        <a href="/contact" class="btn btn-quaternary mt-2">Contactez Nous</a>
                     </div>
                     <!-- /col-lg -->
                     <div class="col-lg-5 res-margin">
                        <img src="img/services/lz21.jpg" alt="" class="moving-blob img-fluid">
                     </div>
                     <!-- /col-lg -->
                  </div>
                  <!-- /row -->
               </div>
               <!-- /container -->
            </div>
            <!-- /container-fluid -->
            <!-- SVG divider  -->
            <svg version="1.1" id="divider"  class="primary" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 1440 126" preserveAspectRatio="none slice" xml:space="preserve">
               <path class="st0" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"></path>
            </svg>
            <!-- services carousel -->
            <div class="container-fluid bg-primary block-padding pattern2 pt-lg-0">
               <h2 class="text-light text-center">Nos Services</h2>
               <!-- image  -->
               <div class="container">
                  <div class="carousel-3items owl-carousel owl-theme col-lg-12">
                     <!-- service 1  -->
                     <div class="serviceBox2">
                        <!-- service icon -->
                        <div class="service-icon">
                           <a href="/">
                           <img src="img/services/lz20.jpg" alt="" class="blob img-fluid">
                           </a>
                        </div>
                        <!-- service content -->
                        <div class="service-content">
                           <a href="/">
                              <h4 class="service-head">Garderie</h4>
                           </a>
                           <p>
                              Depuis 2012, notre garderie accueille les enfants dans un cadre chaleureux, sécuritaire et stimulant. Chaque journée est pensée pour favoriser le développement global de l’enfant tout en respectant son rythme et sa personnalité.
                           </p>
                           <!-- Button -->	 
                           <a href="/contact" class="btn btn-quaternary  btn-sm mt-2 ml-1">En Savoir Plus</a>
                        </div>
                     </div>
                     <!-- service 2  -->
                     <div class="serviceBox2">
                        <!-- service icon -->
                        <div class="service-icon">
                           <a href="/">
                           <img src="img/services/lz18.jpg" alt="" class="blob2 img-fluid">
                           </a>
                        </div>
                        <!-- service content -->
                        <div class="service-content">
                           <a href="/">
                              <h4 class="service-head">Été</h4>
                           </a>
                           <p>
                              Chaque été, nous offrons des activités amusantes et enrichissant pour les enfants. Notre programme est conçu pour stimuler leur curiosité, renforcer leur autonomie et leur permettre de créer de merveilleux souvenirs avec leurs amis.
                           </p>
                           <!-- Button -->	 
                           <a href="/contact" class="btn btn-quaternary btn-sm mt-2 ml-1">En Savoir Plus</a>
                        </div>
                     </div>
                     <!-- service 3  -->
                     <div class="serviceBox2">
                        <!-- service icon -->
                        <div class="service-icon">
                           <a href="/">
                           <img src="img/services/lz11.webp" alt="" class="blob img-fluid">
                           </a>			   
                        </div>
                        <!-- service content -->
                        <div class="service-content">
                           <a href="/">
                              <h4 class="service-head">Groupe poupons</h4>
                           </a>
                           <p>
                              Nous offrons un service spécialisé pour les poupons dans un environnement calme, sécuritaire et stimulant. L’accent est mis sur l’attention individuelle, la régularité des routines et le développement sensoriel dès les premiers mois. Conformément aux normes provinciales, nous accueillons jusqu’à 5 poupons, ce qui permet à notre équipe de leur offrir une attention de qualité et un encadrement chaleureux.
                           </p>
                           <!-- Button -->	 
                           <a href="/contact" class="btn btn-quaternary btn-sm mt-2 ml-1">En Savoir Plus</a>
                        </div>
                     </div>
                     <!-- service 4  -->
                     <div class="serviceBox2">
                        <!-- service icon -->
                        <div class="service-icon">
                           <a href="/">
                           <img src="img/services/lz19.jpg" alt="" class="blob2 img-fluid">
                           </a>
                        </div>
                        <!-- service content -->
                        <div class="service-content">
                           <a href="/">
                              <h4 class="service-head">Éducation par groupes</h4>
                           </a>
                           <p>
                              Nous proposons une éducation structurée selon des groupes d’âge, permettant à chaque enfant de progresser à son propre rythme dans un environnement stimulant. Les activités sont adaptées au développement de chaque tranche d’âge.
                           </p>
                           <!-- Button -->	 
                           <a href="/contact" class="btn btn-quaternary btn-sm mt-2 ml-1">En Savoir Plus</a>
                        </div>
                     </div>
                     <!-- service 5 -->
                     <div class="serviceBox2">
                        <!-- service icon -->
                        <div class="service-icon">
                           <a href="/">
                           <img src="img/services/lz13.jpg" alt="" class="blob img-fluid">
                           </a>
                        </div>
                        <!-- service content -->
                        <div class="service-content">
                           <a href="/">
                              <h4 class="service-head">Activités</h4>
                           </a>
                           <p>
                              Nous offrons un service spécialisé pour les poupons dans un environnement calme, sécuritaire et stimulant. L’attention individuelle, les routines régulières et l’éveil sensoriel sont au cœur de notre approche. Nous accueillons un maximum de 5 poupons, assurant un encadrement de qualité.

Les plus jeunes profitent de jeux d’éveil et de moments de tendresse. En grandissant, les activités évoluent vers le dessin, la motricité et la découverte, toujours selon leur rythme.
                           </p>
                           <!-- Button -->	 
                           <a href="/contact" class="btn btn-quaternary btn-sm mt-2 ml-1">En Savoir Plus</a>
                        </div>
                     </div>
                  </div>
                  <!-- /owl-services -->      
               </div>
               <!-- /container -->
            </div>
            <!-- /mt-5 -->
            <!-- container-->
            <div class="container block-padding">
               <div class="row">
                  <div class="col-lg-6">
                     <img src="img/services/lz24.jpg" alt="" class="img-fluid rounded">
                     <!-- ornament-->
                     <div class="ornament-stars" data-aos="fade-up-right"></div>
                  </div>
                  <div class="col-lg-6 res-margin my-auto">
  <h3 class="res-margin">Questions fréquemment posées</h3>
  <div class="accordion mt-5">
    <!-- collapsible accordion 1 -->
    <div class="card">
      <div class="card-header">
        <a class="card-link" data-bs-toggle="collapse" href="#collapseOne">
          Quelle est votre philosophie éducative ?
        </a>
      </div>
      <div id="collapseOne" class="collapse show" data-bs-parent=".accordion">
        <div class="card-body">
          <p>Nous croyons en un environnement d’apprentissage sécuritaire et stimulant qui respecte le rythme de chaque enfant, favorise leur autonomie et encourage la créativité et la curiosité naturelle.</p>
        </div>
      </div>
    </div>
    <!-- /card -->
    <!-- collapsible accordion 2 -->
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-bs-toggle="collapse" href="#collapseTwo">
          Comment fonctionne votre organisation ?
        </a>
      </div>
      <div id="collapseTwo" class="collapse" data-bs-parent=".accordion">
        <div class="card-body">
          <p>Notre équipe est composée d’éducatrices qualifiés qui travaillent en étroite collaboration avec les parents. Nous offrons un programme adapté selon l’âge des enfants, avec des activités variées et des routines régulières.</p>
        </div>
      </div>
    </div>
    <!-- /card -->
    <!-- collapsible accordion 3 -->
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-bs-toggle="collapse" href="#collapseThree">
          Comment se passe la collaboration avec les parents ?
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-bs-parent=".accordion">
        <div class="card-body">
          <p>Nous favorisons une communication ouverte et régulière avec les parents via des rencontres, rapports et échanges quotidiens afin d’assurer le bien-être et le développement optimal de chaque enfant.</p>
        </div>
      </div>
    </div>
    <!-- /card -->
    <!-- collapsible accordion 4 -->
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-bs-toggle="collapse" href="#collapseFour">
          Quels sont les horaires d’ouverture ?
        </a>
      </div>
      <div id="collapseFour" class="collapse" data-bs-parent=".accordion">
        <div class="card-body">
          <p>Nous sommes ouverts du lundi au vendredi, de 7h00 à 18h00, pour accueillir vos enfants dans un environnement sûr et encadré.</p>
        </div>
      </div>
    </div>
    <!-- /card -->
    <!-- collapsible accordion 5 -->
    <div class="card">
      <div class="card-header">
        <a class="collapsed card-link" data-bs-toggle="collapse" href="#collapseFive">
          Combien d’enfants pouvez-vous accueillir par groupe d’âge ?
        </a>
      </div>
      <div id="collapseFive" class="collapse" data-bs-parent=".accordion">
        <div class="card-body">
          <p>Nous respectons les normes provinciales : un maximum de 23 enfants accueillis en tout, avec par exemple une limite de 5 poupons par éducatrice dans un environnement calme et sécuritaire, ainsi que des ratios adaptés aux autres groupes d’âge.</p>
        </div>
      </div>
    </div>
                        <!-- /card -->
                     </div>
                     <!-- /accordion -->
                  </div>
                  <!-- /col-lg-8 -->
               </div>
               <!-- /row -->
            </div>
            <!-- /container -->
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
                                    <button class="btn btn-tertiary" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">S'abonner</button>
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
      <script src="js/custom.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/UseCustomCursor.js"></script>
      <!-- Prefix free -->
      <script src="js/prefixfree.min.js"></script>
   </body>
</html>` } } />
    </>
  );
}
