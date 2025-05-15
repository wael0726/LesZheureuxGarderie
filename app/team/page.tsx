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
        <title>Notre Équipe - Garderie Les Z'Heureux</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div dangerouslySetInnerHTML={{
  __html: `<!DOCTYPE html>
<html lang="fr">
   <head>
      <meta charset="utf-8">
      <!--[if IE]>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <![endif]-->
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta name="description" content="Rencontrez l'équipe dévouée de la Garderie Les Z'Heureux à Montréal, formée de professionnelles qualifiées qui s'occupent avec passion du bien-être et du développement des enfants.">
      <meta name="author" content="">
      <!-- page title -->
      <title>Notre Équipe - Garderie Les Z'Heureux</title>
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
               <!-- jumbo-heading -->
               <div class="jumbo-heading" data-aos="fade-down">
                  <h1>Notre Équipe</h1>
                  <!-- Breadcrumbs -->
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Notre Équipe</li>
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
            <div class="container block-padding">
               <div class="row">
                  <div class="col-lg-12 text-center">
                     <h2 class="mb-4">Une équipe passionnée au service de vos enfants</h2>
                     <p class="lead">Notre équipe se compose de professionnelles qualifiées et passionnées qui s'engagent à offrir un environnement stimulant, sécuritaire et chaleureux pour les enfants de notre garderie.</p>
                     <div class="spacer-2"></div>
                  </div>
               </div>

               <!-- Section Notre équipe éducative -->
               <div class="row">
                  <div class="col-lg-12">
                     <div class="bg-light pattern2 p-4 rounded team-box">
                        <h3 class="mb-3 text-primary">Notre équipe d'éducatrices</h3>
                        <div class="row">
                           <div class="col-md-6">
                              <p><strong>Éducatrices du groupe des poupons (0-18 mois)</strong></p>
                              <p>Notre équipe de deux éducatrices spécialisées pour les poupons est diplômée en techniques d'éducation à l'enfance et formée spécifiquement pour l'éveil des tout-petits. Elles apportent douceur et sécurité aux plus jeunes enfants, avec une connaissance approfondie du développement des nourrissons.</p>
                           </div>
                           <div class="col-md-6">
                              <p><strong>Éducatrice du groupe des trottineurs (18-36 mois)</strong></p>
                              <p>Passionnée par l'apprentissage par le jeu, notre éducatrice pour les trottineurs accompagne les tout-petits dans leurs premières découvertes. Son approche centrée sur le développement moteur et langagier favorise l'autonomie et la socialisation.</p>
                           </div>
                        </div>
                        <div class="row mt-4">
                           <div class="col-md-6">
                              <p><strong>Éducatrice du groupe des 3-4 ans</strong></p>
                              <p>Avec une formation en arts et en éducation préscolaire, notre éducatrice propose des activités créatives variées qui stimulent l'imagination des enfants. Son approche ludique permet d'aborder les prémices de l'apprentissage académique.</p>
                           </div>
                           <div class="col-md-6">
                              <p><strong>Éducatrice du groupe des 4-5 ans</strong></p>
                              <p>Spécialiste de la préparation à la maternelle, notre éducatrice accompagne les enfants dans leur dernière année à la garderie. Son programme riche en activités cognitives, motrices et sociales prépare efficacement les enfants à leur entrée à l'école.</p>
                           </div>
                        </div>
                        <div class="row mt-4">
                           <div class="col-md-6">
                              <p><strong>Éducatrice de soutien et remplaçante</strong></p>
                              <p>Polyvalente et expérimentée, notre éducatrice de soutien intervient auprès de tous les groupes d'âge selon les besoins. Elle apporte son expertise lors des activités spéciales, des sorties et assure la continuité pédagogique lors des absences.</p>
                           </div>
                           <div class="col-md-6">
                              <p><strong>Éducatrice spécialisée en besoins particuliers</strong></p>
                              <p>Formée pour accompagner les enfants ayant des besoins spécifiques, notre éducatrice spécialisée travaille en collaboration avec l'équipe pour assurer l'inclusion et le développement optimal de chaque enfant, quelles que soient ses particularités.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
                  
               <!-- Formation et approche -->
               <div class="row mt-5">
                  <div class="col-lg-12">
                     <div class="bg-secondary text-light p-4 rounded">
                        <h3 class="mb-3">Notre approche éducative</h3>
                        <p>Toute notre équipe adhère à une philosophie éducative basée sur le programme éducatif québécois "Accueillir la petite enfance". Nous croyons fermement au développement global de l'enfant à travers:</p>
                        <div class="row mt-3">
                           <div class="col-md-4">
                              <div class="feature-box bg-primary text-white p-3 rounded">
                                 <i class="flaticon-brain-2 text-light"></i>
                                 <h5 class="mt-3">Développement cognitif</h5>
                                 <p>Activités stimulantes qui favorisent la réflexion, la curiosité et l'acquisition de connaissances.</p>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="feature-box bg-tertiary text-white p-3 rounded">
                                 <i class="flaticon-dance text-light"></i>
                                 <h5 class="mt-3">Développement physique</h5>
                                 <p>Jeux et activités qui développent la motricité fine et globale ainsi que la coordination.</p>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="feature-box bg-info text-white p-3 rounded">
                                 <i class="flaticon-friendship text-light"></i>
                                 <h5 class="mt-3">Développement social</h5>
                                 <p>Interactions qui favorisent le partage, la coopération et le respect des autres.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Formation continue -->
               <div class="row mt-5">
                  <div class="col-lg-12 text-center">
                     <h3>Perfectionnement professionnel</h3>
                     <p>Nos éducatrices suivent régulièrement des formations pour améliorer leurs compétences et se tenir informées des meilleures pratiques en éducation préscolaire.</p>
                     <ul class="list-inline mt-4">
                        <li class="list-inline-item"><span class="badge bg-primary p-2 m-1">Premiers soins et RCR</span></li>
                        <li class="list-inline-item"><span class="badge bg-primary p-2 m-1">Gestion des comportements</span></li>
                        <li class="list-inline-item"><span class="badge bg-primary p-2 m-1">Intervention précoce</span></li>
                        <li class="list-inline-item"><span class="badge bg-primary p-2 m-1">Pédagogie par le jeu</span></li>
                        <li class="list-inline-item"><span class="badge bg-primary p-2 m-1">Intégration des arts</span></li>
                        <li class="list-inline-item"><span class="badge bg-primary p-2 m-1">Éveil à la lecture</span></li>
                     </ul>
                  </div>
               </div>

               <!-- Call To Action -->
               <div class="row mt-5">
                  <div class="col-lg-12">
                     <div class="bg-tertiary text-light p-5 rounded text-center pattern1">
                        <h3>Envie de nous rencontrer?</h3>
                        <p class="lead">Venez visiter notre garderie et découvrir notre équipe chaleureuse en personne!</p>
                        <a href="/contact" class="btn btn-primary btn-lg mt-3">Prendre rendez-vous</a>
                     </div>
                  </div>
               </div>
            </div>
            <!-- /container-->
         </div>
         <!-- /page -->
      </div>
      <!--/ page-wrapper -->
      <div id="footer" class="footer-1 1-footer">
         <svg version="1.1" id="footer-divider" class="secondary" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                     <img src="img/logoZrm.png" class="logo-footer img-fluid" alt="" style="height: 80px;">
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
                     <h5>Heures d'ouverture</h5>
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
      
      <style>
         .team-box {
            margin-bottom: 20px;
            height: 100%;
            transition: all 0.3s ease;
         }
         .team-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
         }
         .feature-box {
            transition: all 0.3s ease;
         }
         .feature-box:hover {
            transform: translateY(-5px);
         }
      </style>
   </body>
</html>` } } />
    </>
  );
}