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
        <title>Alimentation - Garderie Les Z'Heureux</title>
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
      <meta name="description" content="Découvrez notre approche nutritionnelle à la Garderie Les Z'Heureux : repas équilibrés selon le Guide alimentaire canadien, gestion des allergies et menus adaptés aux besoins des enfants.">
      <meta name="author" content="">
      <!-- page title -->
      <title>Alimentation - Garderie Les Z'Heureux</title>
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
                           <a class="nav-link" href="/">Accueil</a>
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
                        
                        <!-- menu item - Alimentation -->
                        <li class="nav-item">
                           <a class="nav-link" href="/alimentation">Alimentation</a>
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
                  <h1>Alimentation</h1>
                  <!-- Breadcrumbs -->
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Alimentation</li>
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
                     <h2 class="mb-4">Une alimentation saine et équilibrée pour nos petits</h2>
                     <p class="lead">À la Garderie Les Z'Heureux, nous accordons une importance primordiale à l'alimentation des enfants. Notre approche nutritionnelle est basée sur le Guide alimentaire canadien et vise à offrir des repas équilibrés, savoureux et adaptés aux besoins de chaque enfant.</p>
                     <div class="spacer-2"></div>
                  </div>
               </div>

               <!-- Section Guide alimentaire canadien -->
               <div class="row">
                  <div class="col-lg-12">
                     <div class="bg-light pattern2 p-4 rounded nutrition-box">
                        <h3 class="mb-3 text-primary">
                           <i class="fas fa-leaf text-success me-2"></i>
                           Guide alimentaire canadien
                        </h3>
                        <div class="row">
                           <div class="col-md-8">
                              <p>Nous suivons rigoureusement les recommandations du Guide alimentaire canadien pour assurer une nutrition optimale à tous les enfants de notre garderie. Cette approche garantit que chaque repas contient les éléments essentiels à leur croissance et développement.</p>
                              <p>Nos menus sont conçus pour inclure une variété d'aliments des quatre groupes alimentaires principaux, en privilégiant les aliments frais, locaux et de saison autant que possible.</p>
                           </div>
                           <div class="col-md-4 text-center">
                              <div class="food-icon-container">
                                 <i class="fas fa-apple-alt text-danger" style="font-size: 3rem;"></i>
                                 <i class="fas fa-carrot text-warning mx-3" style="font-size: 3rem;"></i>
                                 <i class="fas fa-bread-slice text-warning" style="font-size: 3rem;"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Section Repas équilibrés -->
               <div class="row mt-5">
                  <div class="col-lg-12">
                     <div class="bg-secondary text-light p-4 rounded">
                        <h3 class="mb-3">
                           <i class="fas fa-balance-scale text-light me-2"></i>
                           Repas équilibrés et sains
                        </h3>
                        <p>Nos repas sont soigneusement planifiés pour être nutritifs et équilibrés, sans excès de sucre ou de sel. Nous privilégions les saveurs naturelles des aliments et évitons les produits transformés.</p>
                        <div class="row mt-3">
                           <div class="col-md-4">
                              <div class="feature-box bg-primary text-white p-3 rounded">
                                 <i class="fas fa-apple-alt text-light" style="font-size: 2rem;"></i>
                                 <h5 class="mt-3">Fruits et légumes</h5>
                                 <p>Variété de fruits et légumes frais à chaque repas pour les vitamines et minéraux essentiels.</p>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="feature-box bg-tertiary text-white p-3 rounded">
                                 <i class="fas fa-fish text-light" style="font-size: 2rem;"></i>
                                 <h5 class="mt-3">Protéines</h5>
                                 <p>Sources variées de protéines : viande, poisson, volaille, tofu, légumineuses et produits laitiers.</p>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="feature-box bg-info text-white p-3 rounded">
                                 <i class="fas fa-seedling text-light" style="font-size: 2rem;"></i>
                                 <h5 class="mt-3">Grains entiers</h5>
                                 <p>Céréales complètes et grains entiers pour l'énergie et les fibres nécessaires.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Section Gestion des allergies -->
               <div class="row mt-5">
                  <div class="col-lg-12">
                     <div class="bg-warning text-dark p-4 rounded allergy-box">
                        <h3 class="mb-3">
                           <i class="fas fa-shield-alt text-danger me-2"></i>
                           Gestion des allergies alimentaires
                        </h3>
                        <div class="row">
                           <div class="col-md-8">
                              <p><strong>Sécurité avant tout :</strong> Nous prenons très au sérieux toutes les allergies alimentaires. Chaque allergie est documentée et communiquée à toute l'équipe.</p>
                              <ul class="mt-3">
                                 <li>Plans d'action individualisés pour chaque enfant allergique</li>
                                 <li>Formation du personnel sur la reconnaissance et la gestion des réactions allergiques</li>
                                 <li>Séparation stricte des aliments allergènes lors de la préparation</li>
                                 <li>Étiquetage clair de tous les repas et collations</li>
                                 <li>Communication régulière avec les parents</li>
                              </ul>
                           </div>
                           <div class="col-md-4 text-center">
                              <div class="alert-icons">
                                 <i class="fas fa-exclamation-triangle text-danger" style="font-size: 3rem;"></i>
                                 <p class="mt-2"><small>Vigilance constante pour la sécurité de tous</small></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Section Menus affichés -->
               <div class="row mt-5">
                  <div class="col-lg-12">
                     <div class="bg-light p-4 rounded menu-display-box">
                        <h3 class="mb-3 text-primary">
                           <i class="fas fa-calendar-alt text-primary me-2"></i>
                           Menus hebdomadaires affichés
                        </h3>
                        <div class="row">
                           <div class="col-md-8">
                              <p>Les menus de la semaine sont affichés bien en vue dans notre garderie pour que les parents puissent s'informer des repas servis à leurs enfants.</p>
                              <p><strong>Vous y trouverez :</strong></p>
                              <ul>
                                 <li>Le menu complet de la semaine (déjeuner, dîner, collations)</li>
                                 <li>Les ingrédients principaux de chaque plat</li>
                                 <li>Les allergènes présents (clairement identifiés)</li>
                                 <li>Les alternatives pour les enfants avec restrictions alimentaires</li>
                                 <li>Les informations nutritionnelles pertinentes</li>
                              </ul>
                           </div>
                           <div class="col-md-4 text-center">
                              <div class="menu-icons">
                                 <i class="fas fa-utensils text-success" style="font-size: 2.5rem;"></i>
                                 <i class="fas fa-clipboard-list text-primary mx-3" style="font-size: 2.5rem;"></i>
                                 <i class="fas fa-eye text-info" style="font-size: 2.5rem;"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Section Nos principes -->
               <div class="row mt-5">
                  <div class="col-lg-12 text-center">
                     <h3>Nos principes alimentaires</h3>
                     <p>Voici ce qui guide notre approche nutritionnelle au quotidien</p>
                     <ul class="list-inline mt-4">
                        <li class="list-inline-item"><span class="badge bg-success p-2 m-1"><i class="fas fa-ban me-1"></i>Pas de sucre ajouté</span></li>
                        <li class="list-inline-item"><span class="badge bg-success p-2 m-1"><i class="fas fa-ban me-1"></i>Faible en sel</span></li>
                        <li class="list-inline-item"><span class="badge bg-primary p-2 m-1"><i class="fas fa-leaf me-1"></i>Aliments frais</span></li>
                        <li class="list-inline-item"><span class="badge bg-primary p-2 m-1"><i class="fas fa-home me-1"></i>Fait maison</span></li>
                        <li class="list-inline-item"><span class="badge bg-info p-2 m-1"><i class="fas fa-heart me-1"></i>Avec amour</span></li>
                        <li class="list-inline-item"><span class="badge bg-warning p-2 m-1"><i class="fas fa-users me-1"></i>Adapté à tous</span></li>
                     </ul>
                  </div>
               </div>

               <!-- Call To Action -->
               <div class="row mt-5">
                  <div class="col-lg-12">
                     <div class="bg-tertiary text-light p-5 rounded text-center pattern1">
                        <h3>Des questions sur l'alimentation?</h3>
                        <p class="lead">N'hésitez pas à nous contacter pour discuter des besoins alimentaires spécifiques de votre enfant!</p>
                        <a href="/contact" class="btn btn-primary btn-lg mt-3">Nous contacter</a>
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
         .nutrition-box, .allergy-box, .menu-display-box {
            margin-bottom: 20px;
            height: 100%;
            transition: all 0.3s ease;
         }
         .nutrition-box:hover, .allergy-box:hover, .menu-display-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
         }
         .feature-box {
            transition: all 0.3s ease;
         }
         .feature-box:hover {
            transform: translateY(-5px);
         }
         .food-icon-container i {
            margin: 0 10px;
            animation: bounce 2s infinite;
         }
         .food-icon-container i:nth-child(2) {
            animation-delay: 0.3s;
         }
         .food-icon-container i:nth-child(3) {
            animation-delay: 0.6s;
         }
         @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
               transform: translateY(0);
            }
            40% {
               transform: translateY(-10px);
            }
            60% {
               transform: translateY(-5px);
            }
         }
         .menu-icons i, .alert-icons i {
            transition: all 0.3s ease;
         }
         .menu-icons i:hover, .alert-icons i:hover {
            transform: scale(1.1);
         }
      </style>
   </body>
</html>` } } />
    </>
  );
}