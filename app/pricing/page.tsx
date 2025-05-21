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
        <title>Tarifs - Garderie Les Z'Heureux</title>
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
               <div class="jumbo-heading" data-aos="fade-down">
                  <h1>Nos tarifs</h1>
                  <!-- Breadcrumbs -->
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Tarifs</li>
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
                  <img src="img/about/lz29.jpg" alt="Enfants jouant à la garderie" class="img-fluid rounded d-block mx-auto">
               </div>
               <!-- /col-lg-->
               <div class="col-lg-7 mt-3">
                  <h2>Nos tarifs et frais</h2>
                  <p>
                     À la Garderie Les Z'heureux, nous offrons des tarifs compétitifs adaptés à l'âge de votre enfant. Nous proposons un environnement chaleureux, stimulant et sécuritaire pour le développement de votre enfant, encadré par une équipe qualifiée et attentionnée.
                  </p>
                  <!-- alert-->
                  <div class="alert alert-warning mt-3" role="alert">
                     <h6>Information de paiement et crédit d'impôt</h6>
                     <p>Les parents bénéficient de crédits d'impôt pour frais de garde. Avec les versements anticipés de Revenu Québec, vous recevrez des remboursements le 15 de chaque mois pour les frais de garde de votre enfant. N'hésitez pas à nous contacter pour plus d'informations sur ce programme.
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
                  <div class="col-lg-6 col-md-12">
                     <div class="pricingTable">
                        <div class="pricingTable-header bg-primary">
                           <h3 class="title">Poupons (6-18 mois)</h3>
                        </div>
                        <!-- /pricingTable-header -->
                        <div class="pricing-content bg-primary">
                           <div class="price-value">
                              <span class="amount">49$</span>
                              <span class="month">Prix par jour</span>
                           </div>
                           <!-- /price-value -->
                           <ul>
                              <li>Ratio d'encadrement optimal</li>
                              <li>Programme éducatif adapté</li>
                              <li>Repas et collations inclus</li>
                              <li>Activités de stimulation précoce</li>
                           </ul>
                           <a href="/contact" class="btn">Nous contacter</a>
                        </div>
                        <!-- /pricing content -->
                     </div>
                     <!-- /pricing-table -->
                  </div>
                  <!-- /col-md -->
                  <!-- pricing table 2 -->
                  <div class="col-lg-6 col-md-12 res-margin">
                     <div class="pricingTable">
                        <div class="pricingTable-header bg-secondary">
                           <h3 class="title">Enfants (18 mois et +)</h3>
                        </div>
                        <!-- /pricingTable-header -->
                        <div class="pricing-content bg-secondary">
                           <div class="price-value">
                              <span class="amount">45$</span>
                              <span class="month">Prix par jour</span>
                           </div>
                           <!-- /price-value -->
                           <ul>
                              <li>Programme éducatif complet</li>
                              <li>Activités variées et enrichissantes</li>
                              <li>Repas et collations inclus</li>
                              <li>Préparation à la maternelle</li>
                           </ul>
                           <a href="/contact" class="btn">Nous contacter</a>
                        </div>
                        <!-- /pricing content -->
                     </div>
                     <!-- /pricing-table -->
                  </div>
                  <!-- /col-md -->
               </div>
               <!-- /row  -->
            </div>
            <!-- /col-lg-12 -->   
            
            <!-- row -->
            <div class="col-lg-12 mt-5">
               <h4>Crédit d'impôt pour frais de garde</h4>
               <p>
                  Les frais de garde d'enfants vous donnent droit à un crédit d'impôt remboursable de Revenu Québec. Ce crédit peut représenter jusqu'à 75 % de vos frais de garde admissibles, selon votre revenu familial.
               </p>
               <p>
                  Avec les versements anticipés, vous n'avez pas à attendre votre déclaration de revenus pour bénéficier de ce crédit. Revenu Québec peut vous verser des paiements le 15 de chaque mois directement dans votre compte bancaire.
               </p>
               <p>
                  Pour bénéficier de ces versements anticipés, vous devez en faire la demande auprès de Revenu Québec. Nous pouvons vous aider à remplir le formulaire nécessaire et vous fournir les reçus de frais de garde requis.
               </p>
               <!-- table -->
               <table class="table table-striped mt-4">
                  <thead>
                     <tr>
                        <th>Type de service</th>
                        <th>Tarif journalier</th>
                        <th>Crédit d'impôt potentiel</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Poupons (6-18 mois)</td>
                        <td>49$</td>
                        <td>Jusqu'à 75% selon le revenu familial</td>
                     </tr>
                     <tr>
                        <td>Enfants (18 mois et +)</td>
                        <td>45$</td>
                        <td>Jusqu'à 75% selon le revenu familial</td>
                     </tr>
                  </tbody>
               </table>
               <!-- /table-->
               
               <div class="alert alert-info mt-4" role="alert">
                  <h6>Documentation requise pour l'inscription</h6>
                  <ul>
                     <li>Certificat de naissance de l'enfant</li>
                     <li>Carnet de vaccination à jour</li>
                     <li>Carte d'assurance maladie</li>
                     <li>Coordonnées en cas d'urgence</li>
                     <li>Informations sur les allergies ou besoins particuliers</li>
                  </ul>
               </div>
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
                     <h5>Contactez-nous</h5>
                     <ul class="list-unstyled mt-3">
                        <li class="mb-1"><i class="fas fa-phone margin-icon "></i>514-507-4015</li>
                        <li class="mb-1"><i class="fas fa-envelope margin-icon"></i><a href="mailto:Leszheureuxgarderie@gmail.com">Leszheureuxgarderie@gmail.com</a></li>
                        <li><i class="fas fa-map-marker margin-icon"></i>6001, rue Hochelaga, Montréal, Québec, H1N 1X5 </li>
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
                  <div class="col-lg-12 text-center">
                     <p>© 2025 Garderie Les Z'heureux. Tous droits réservés.</p>
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