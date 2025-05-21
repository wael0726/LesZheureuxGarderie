
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
        <title>À propos - Garderie Les Z'Heureux</title>
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
                  <h1>À propos de nous</h1>
                  <!-- Breadcrumbs -->
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">À propos</li>
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
               <!--row -->
               <div class="row">
                  <div class="col-lg-8">
                     <h3>Notre Programme Éducatif</h3>
                     <p class="h7 mt-3 mb-4">Votre enfant développera l'estime de soi, l'autonomie et le langage.</p>
                     <p>La garderie LesZ’Heureux est une garderie privée non-subventionnée. Elle détient un
permis du ministère de la Famille du Québec de 23 places, pour des enfants de 06 mois
et plus.
Notre programme éducatif, est conçu de façon à assurer le bien-être de l’enfant, il est
basé sur le document « Accueillir la petite enfance » du ministère de la famille.
Voici la routine journalière de la garderie « Les Z’heureux ».
Avec cet horaire, les enfants et les éducatrices passent de belles journées remplies
d’activités bien organisées et bien structurées. En outre, il est important de spécifier
que cette routine varie bien entendu selon chaque thème, chaque éducatrice et chaque
groupe d’enfants. <br>
<p class="h7 mt-3 mb-4">Les objectifs du programme.</p>
Favoriser le développement global de l’enfant à travers les activités diversifiées
(culinaires, sorties éducatives, animations et développer son imagination et sa
créativité, etc.)
Assurer la santé, la sécurité et le bien-être de enfants.
Favoriser l’autonomie chez l’enfant, lui offrir une liberté d’action, de rythme,
d’expression et de faire des choix. L’encourager à prendre des initiatives et des
décisions. Lui confie des petites tâches selon ses capacités (exemple servir les
amis, vider les assiettes, s’habiller et se déshabiller seuls, choisir ses jouets).
Faire vivre l’enfant des expériences enrichissantes et stimulantes à travers les
sorties extérieures et éducatives (Sons des animaux, ramassage des feuilles,
observation des insectes etc.)
L’enfant apprend le respect de lui-même, des paires, des adultes et de
l’environnement. Cela se fait par la communication constante, de les sensibiliser
à adopter des attitudes d’écoute, d’échange pour mieux comprendre les autres
et les accepter dans leurs différences. <br>
<p class="h7 mt-3 mb-4">L’observation.</p>
C’est une étape essentielle et fondamentale car elle permet à l’éducatrice de faire
l’observation de chaque enfant pour mieux le connaître. C’est-à-dire connaître ses
préférences, ses besoins, ses habitudes, ses habiletés, ses forces, ses capacités et ses
faiblesses. Les données recueillies lui permettent d’utiliser les interventions appropriées
pour chaque enfant.
L’éducatrice doit prendre des notes et conserver les informations recueillies dans une
grille d’observation, rapport quotidien, carnet de note journal de bord et de feuille de
rythme. Nous pouvons citer quelques observations :
- Faire une observation objective sur l’enfant en posant plusieurs questions c’est-à-dire
qui est l’enfant du groupe de 3 ans capable de monter et descendre les escaliers en
alternat les pieds.
- Quels sujets de discussion qui intéressent les enfants de 4-5 ans (Exemples : Étoiles,
Planète, Plantes etc.)
- Quel moment de la journée l’enfant présente des signes d’anxiété et la fréquence de
ce comportement.
- L’endroit et le coin préféré chez l’enfant au moment de jeux actifs.
<p class="h7 mt-3 mb-4">L’action éducative.</p>
Cette étape met en application la planification et l’organisation faite par l’éducatrice, ce
qui se traduit par une interaction entre le parent, l’enfant et son éducatrice. L’éducatrice
accompagne les enfants dans leurs activités, elle intervient lorsque l’enfant rencontre
des difficultés, va le soutenir et l’encourager afin de l’aider à relever certains défis. Par
exemple l’éducatrice soutien un poupon qui touche et regarde un livre en tissu en
s’approchant de lui en faisant un commentaire sur les images et la texture du livre
(doux, épais, plumes). L’éducatrice pose des questions et ramène d’autres livres à la
disposition de l’enfant.
<p class="h7 mt-3 mb-4">La réflexion et la rétroaction.</p>
Cette étape permet à l’éducatrice de faire une réflexion sur l’efficacité des pratiques
utilisées en fonction des observations faites et au besoin, elle réajuste ces interventions.
Elle évalue les éléments qui ont été introduits afin d’assurer le bon développement de
l’enfant. L’éducatrice peut aussi voir si les expériences et le matériel utilisé ont aidé les
enfants à acquérir de nouvelles compétences, et si les actions éducatives posées ont favorisé un lien fort et positif avec l’enfant. Ainsi elle cherche de trouver d’autres pistes
afin d’améliorer le déroulement d’une journée ou certains jeux.
<p class="h7 mt-3 mb-4">L’intervention pédagogique.</p>
Être accueillant et disponible pour chaque enfant.
Être à l’écoute de l’enfant et l’aider à exprimer ses besoins et ses opinions.
Valoriser l’enfant qui joue et utiliser le jeu pour communiquer avec lui.
Obtenir son attention de façon positive, avant de lui formuler une demande.
Prévoir des périodes d’observation.
Observer chaque enfant.
Adopter une attitude positive à l’égard des parents. <br>
Ce sont les principes sur lesquels nous allons asseoir notre approche pédagogique à la
garderie Les Z’Heureux.
<p class="h7 mt-3 mb-4">L’intervention démocratique.</p>
Intervenir de manière démocratique, l’adulte partage le pouvoir avec l’enfant où
l’enfant est capable de faire des choix à partir de son champ d’intérêt, d’exprimer ses
idées librement, ses émotions, ses besoins et de prendre des décisions.
Par exemple l’enfant refuse de rejoindre le groupe pour réaliser un bricolage de Noël,
nous proposons à l’enfant de choisir un coin de jeu qui l’intéresse. L’enfant a décidé 
alors de jouer seul dans le coin de construction en manipulant les outils. L’enfant a
éprouvé énormément de plaisir.
Le style d’intervention démocratique a un impact positif sur le développement de la
personnalité de l’enfant, ce qui lui permet de développer un sentiment de fierté, de
sécurité, de confiance en soi et une estime de soi. Aussi l’enfant apprend à relever
certains défis et de développer des stratégies pour résoudre des conflits.
<p class="h7 mt-3 mb-4">Socialisation et sécurité.</p>
Pour favoriser les interactions positives entre l’enfant et l’adulte nous pouvons citer les
quelques moyens suivants :
- Initier l’enfant a la vie collective quotidienne de la garderie.
- Créer et assurer un climat de confiance, de stabilité et de respect.
- Être à l’écoute de chaque enfant pour répondre à son besoin et tisser des liens affectifs
avec lui.
- L’éducatrice se montre comme un modèle pour l’enfant dans la façon de gérer ses
émotions et éviter les réactions extrêmes (joie, frustration)
- Favoriser une bonne communication en utilisant un vocabulaire simple, claire et positif
(exemple : Marches doucement au lieu de dire ne cours pas)
- Répondre aux besoins de l’enfant dans un délais raisonnable pour créer un lien
d’attachement sécurisant.

La bonne communication entre le personnel éducateur, l’enfant et le parent fait partie
intégrante de la socialisation et de la sécurité affective. Elle est essentielle et permet
d’ajuster les interventions, d’assurer une continuité et de maximiser le potentiel de
l’enfant. L’éducatrice doit entretenir une relation privilégiée avec le parent car ce sont
des partenaires qui accompagnent l’enfant dans tous les domaines de développement.
Aux moments de l’accueil ou le départ de l’enfant, l’éducatrice tient à informer les
parents de l’évolution, des améliorations constatées et des efforts fournis par leur
enfant. L’accueil chaleureux facilite la communication avec le parent et l’enfant. Ce qui
mène à une séparation en douceur entre l’enfant et ses parents.
Également nous utilisons un agenda comme un moyen de communication où
l’éducatrice note le déroulement de la journée de l’enfant. Elle peut aussi laisser un
message particulier concernant l’enfant.

Le dossier éducatif de l’enfant est un outil additionnel de communication avec le parent
sur le développement de l’enfant. Il contient la date de naissance de l’enfant, le nom du
parent avec ses coordonnées, la date début de fréquentation de l’enfant au service de
garde. Notamment il contient les observations accueillies par l’éducatrice pour remplir
le porterait périodique (Domaines de développement de l’enfant : moteur, cognitive,
langagier et sociaux affectif). Ce portrait est produit deux fois par année et remis aux
parents au plus tard le 15 juin et le 15 décembre de chaque année.
                     </p>
                     <!-- /custom-ul-->          
                  </div>
                  <!-- /col-lg-->
                  <div class="col-lg-4">
                     <img src="img/about/lz25.webp" class="img-fluid blob" alt="">
                     <!-- ornament starts-->
                     <div class="ornament-bubbles" data-aos="fade-right"></div>
                  </div>
                  <!-- /col-lg-->
                  <!-- notepad -->
                  <div class="col-lg-12">
                     <div class="notepad mt-5"  data-aos="zoom-out">
                        <div class="row">
                           <div class="col-lg-4">
                              <img src="img/about/lz27.jpg" class="img-fluid rounded rotate1" alt="">
                              <!-- ornament starts-->
                              <div class="ornament-rainbow"  data-aos="zoom-out"></div>
                           </div>
                           <!-- /col-lg-->
                           <div class="col-lg-8 my-auto">
                              <h4 class="mt-3">Notre Programme Éducatif</h4>
                             <p class="res-margin">Si vous souhaitez obtenir plus d’informations concernant notre programme éducatif, n’hésitez pas à nous contacter. Notre équipe se fera un plaisir de répondre à toutes vos questions.</p>
<p>Nous croyons fermement en l’importance d’un encadrement bienveillant et stimulant pour favoriser le développement global de chaque enfant.</p>
                              <a href="/contact"  class="btn btn-tertiary">Contactez Nous</a>
                           </div>
                           <!-- /col-lg-->
                        </div>
                        <!-- /row -->
                     </div>
                     <!-- /notepad -->
                  </div>
                  <!-- /col-lg-->
               </div>
               <!-- /row -->		 
            </div>
            <!-- /container -->
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
                              <div class="counter-value" data-count="6">0</div>
                              <h3 class="title">Éducatrices</h3>
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
                              <div class="counter-value" data-count="214">0</div>
                              <h3 class="title">Parents Satisfaits</h3>
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
                              <h3 class="title">Enfants</h3>
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
            <!-- /section ends-->   
            <div class="container block-padding">
  <!-- row -->
  <div class="row">
    <div class="col-lg-6">
      <!-- accordion -->
      <div class="accordion">
        <!-- Question 1 -->
        <div class="card">
          <div class="card-header">
            <a class="card-link fs-4 fw-bold" data-bs-toggle="collapse" href="#questionOne">
              Quel est l’objectif principal du programme éducatif ?
            </a>
          </div>
          <div id="questionOne" class="collapse show" data-bs-parent=".accordion">
            <div class="card-body">
              <p>Favoriser le développement global de l’enfant tout en assurant sa santé, sécurité et bien-être à travers des activités variées et stimulantes.</p>
            </div>
          </div>
        </div>

        <!-- Question 2 -->
        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link fs-4 fw-bold" data-bs-toggle="collapse" href="#questionTwo">
              Comment l’enfant développe-t-il son autonomie à la garderie ?
            </a>
          </div>
          <div id="questionTwo" class="collapse" data-bs-parent=".accordion">
            <div class="card-body">
              <p>En prenant des initiatives, en accomplissant des tâches adaptées à son âge (comme s’habiller, choisir ses jouets ou servir ses amis), et en faisant des choix selon ses intérêts.</p>
            </div>
          </div>
        </div>

        <!-- Question 3 -->
        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link fs-4 fw-bold" data-bs-toggle="collapse" href="#questionThree">
              Pourquoi l’observation est-elle essentielle ?
            </a>
          </div>
          <div id="questionThree" class="collapse" data-bs-parent=".accordion">
            <div class="card-body">
              <p>Elle permet à l’éducatrice de mieux connaître chaque enfant, ses besoins, ses forces et ses préférences, afin de personnaliser ses interventions éducatives.</p>
            </div>
          </div>
        </div>

        <!-- Question 4 -->
        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link fs-4 fw-bold" data-bs-toggle="collapse" href="#questionFour">
              En quoi consiste l’intervention démocratique ?
            </a>
          </div>
          <div id="questionFour" class="collapse" data-bs-parent=".accordion">
            <div class="card-body">
              <p>C’est permettre à l’enfant d’exprimer ses idées, de faire des choix selon ses envies et de participer activement aux décisions, ce qui développe sa confiance en soi et son autonomie.</p>
            </div>
          </div>
        </div>

        <!-- Question 5 -->
        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link fs-4 fw-bold" data-bs-toggle="collapse" href="#questionFive">
              Comment la garderie favorise-t-elle la socialisation ?
            </a>
          </div>
          <div id="questionFive" class="collapse" data-bs-parent=".accordion">
            <div class="card-body">
              <p>En créant un climat de confiance, en valorisant les interactions positives et en assurant une bonne communication entre les enfants, les éducatrices et les parents.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- /accordion -->
    </div>

    <!-- Texte explicatif en parallèle -->
    <div class="col-lg-6">
      <h3 class="res-margin">À propos de notre programme éducatif</h3>
      <p class="h7 mt-3 mb-3">Basé sur le document « Accueillir la petite enfance » du Ministère de la Famille.</p>
      <p>Notre approche vise à stimuler l’imagination, encourager la créativité, renforcer l’estime de soi et offrir un encadrement bienveillant et sécuritaire. Chaque journée est structurée mais adaptée aux besoins et à l’énergie des enfants, avec des activités enrichissantes, des observations constantes et des interventions positives.</p>
      <!-- buttons -->
      <a href="/contact" class="btn btn-tertiary">Contactez-nous</a>
      <a href="/team" class="btn-margin btn btn-quaternary ms-1">Notre Équipe</a>
    </div>
    <!-- /col-lg -->
  </div>
  <!-- /row -->
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
      <script src="js/UseCustomCursor.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/plugins.js"></script>
      <!-- Prefix free -->
      <script src="js/prefixfree.min.js"></script>
      <!-- number counter script -->
      <script src="js/counter.js"></script>
   </body>
</html>` } } />
    </>
  );
}
