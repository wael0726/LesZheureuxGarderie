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
            <title>Acceuil - Garderie Les Z'Heureux</title>
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
                  <img  src="img/slider/lz2.png" class="ls-l" alt="" style="top:166px;left:520px;" data-ls="offsetxin:10; offsetyin:120; durationin:1100; rotatein:5; transformoriginin:59.3% 80.3% 0; offsetxout:-80; durationout:400; parallax:true; parallaxlevel:10;">
                  <!-- text  -->
                  <div class="ls-l header-wrapper" data-ls="offsetyin:150; durationin:700; delayin:200; easingin:easeOutQuint; rotatexin:20; scalexin:1.4; offsetyout:600; durationout:400;">
                     <div class="header-text">
                        <span>Bienvenue à la garderie</span> 
                        <h1> Les Z'heureux</h1>
                        <!--the div below is hidden on small screens  -->
                        <div class="hidden-small">
                           <p class="header-p">Nous offrons des services de garderie de haute qualité. Contactez-nous ou venez nous visiter dès aujourd’hui pour en savoir plus.</p>
                           <a class="btn btn-secondary" href="/contact">Contactez Nous</a>
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
                           <h5 class="card-title text-light">Garderie Accréditée</h5>
                           <p class="card-text">
                              Notre garderie est entièrement accréditée, ce qui garantit un environnement sécuritaire et conforme aux normes les plus strictes. Vous pouvez avoir l’esprit tranquille en nous confiant votre enfant.
                           </p>
                           <!-- button show on mobile only,where flip is disabled -->
                           <a href="contact.html" class="btn d-lg-none">Contactez Nous</a>
                        </div>
                        <!-- /p-5 -->
                        <!-- image -->
                        <img class="card-img" src="img/lz6.avif" alt="">
                     </div>
                     <!-- /card -->
                     <!-- back of card -->  			
                     <div class="card bg-secondary text-light card-back">
                        <div class="card-body d-flex justify-content-center align-items-center">
                           <div class="p-4">
                              <h5 class="card-title text-light">Since 2012</h5>
                              <p class="card-text">Depuis notre accréditation, nous nous assurons de respecter les plus hauts standards en matière de sécurité et d'éducation. Cela vous garantit un environnement stable et conforme aux exigences légales pour le bien-être de votre enfant.
                              </p>
                              <!-- button -->
                              <a href="/contact" class="btn">contactez Nous</a>
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
                           <h5 class="card-title text-light">Apprentissage de Qualité</h5>
                           <p class="card-text">
                              Nous offrons un programme éducatif axé sur le jeu et adapté à l’âge, qui stimule la curiosité et favorise le développement global de l’enfant à son rythme.
                           </p>
                           <!-- button show on mobile only,where flip is disabled -->
                           <a href="services.html" class="btn d-lg-none">Our Services</a>
                        </div>
                        <!-- /p-5 -->
                        <!-- image -->
                        <img class="card-img" src="img/lz3.jpg" alt="">
                     </div>
                     <!-- /card -->
                     <!-- back of card -->  			
                     <div class="card bg-primary text-light card-back">
                        <div class="card-body d-flex justify-content-center align-items-center">
                           <div class="p-4">
                              <h5 class="card-title text-light">Apprentissage de Qualité</h5>
                              <p class="card-text">Notre approche éducative repose sur l'apprentissage par le jeu, ce qui permet à chaque enfant de s'épanouir à son rythme. Nous mettons l'accent sur la créativité et l'exploration pour stimuler leur curiosité naturelle.
                              </p>
                              <!-- button -->
                              <a href="/services" class="btn">Our Services</a>
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
                           <h5 class="card-title text-light">Équipe Talentueuse</h5>
                           <p class="card-text">
                              Nos éducatrices passionnées et expérimentées s’engagent pleinement dans l’épanouissement de chaque enfant. Elles créent un climat chaleureux et rassurant où chacun se sent valorisé.
                           </p>
                           <!-- button show on mobile only,where flip is disabled -->
                           <a href="/team" class="btn d-lg-none">Our Team</a>
                        </div>
                        <!-- /p-5 -->
                        <!-- image -->
                        <img class="card-img" src="img/lz7.jpg" alt="">
                     </div>
                     <!-- /card -->
                     <!-- back of card -->  			
                     <div class="card bg-tertiary text-light card-back">
                        <div class="card-body d-flex justify-content-center align-items-center">
                           <div class="p-4">
                              <h5 class="card-title text-light">Équipe Talentueuse</h5>
                              <p class="card-text">Nos éducatrices sont non seulement expérimentées, mais également dévouées à créer une atmosphère bienveillante et inspirante. Elles sont présentes pour guider chaque enfant, en les accompagnant dans leurs découvertes quotidiennes avec une attention particulière.
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
                  <h2>À propos</h2>
                  <p class="subtitle">Apprenez à nous connaître</p>
               </div>
               <!-- /section-heading -->
               <div class="row">
                  <div class="col-lg-7 ">
                     <h3>Our Mission</h3>
                     <p class="mt-4 res-margin">Depuis 2012, notre garderie offre un cadre sécuritaire et bienveillant pour les enfants. Notre équipe d’éducatrices qualifiées met un point d’honneur à accompagner chaque enfant dans son développement, en stimulant sa curiosité et son autonomie.</p>
                     <p>Nous croyons en l'importance d'une collaboration étroite avec les parents pour garantir le bien-être de chaque petit. Chez nous, chaque moment est une occasion d'apprendre, de s’amuser et de grandir dans un environnement de confiance et de joie.</p>
                     <a href="/contact" class="btn btn-secondary ">Contactez Nous</a>
                  </div>
                  <!-- /col-lg -->
                  <div class="col-lg-5 res-margin">
                     <!-- image -->
                     <img class="img-fluid rounded" src="img/about/lz8.jpg" alt="">
                     <!-- ornament starts-->
                     <div class="ornament-rainbow" data-aos="zoom-out"></div>
                  </div>
                  <!-- /col-lg -->
               </div>
               <!-- /row -->
               <h3 class="mt-5 text-center"><span style="color:#1a73e8">G</span><span style="color:#ea4335">o</span><span style="color:#fbbc05">o</span><span style="color:#1a73e8">g</span><span style="color:#34a853">l</span><span style="color:#ea4335">e</span> Reviews ★★★★☆ 4.7</h3>
               <div class="row">
                  <!-- testimonials -->
                  <!-- testimonial carousel -->
                  <div class="carousel-2items owl-carousel owl-theme col-md-12">
                     <!-- testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Ma fille a fréquenté le service de garde de ses 11 mois à ses 19 mois. Les éducatrices sont aimantes et s'occupent très bien des enfants. Elles sont a l'écoute également des parents ce qui est top. Beaucoup d'activités variées et des photos de tant en tant pour voir notre petit bout, des supers repas et même un petit cahier rempli chaque jour pour savoir comment s'est déroulée la journée.
Nous avons du déménagé, mais j'aurais voulu ramener la garderie et les educatrices avec nous :(
Je recommande à 100%!!!                        
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/fatimatou.png" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">Begue Fatimatou</h5>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                     <!-- testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Super garderie ! Les éducatrices sont formidables et prennent soin de nos enfants avec beaucoup d'attention. Je recommande cette garderie sans hésitation. Mes enfants y ont passé trois belles années remplies d'amour, de passion et d'activités éducatives enrichissantes.                        
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/frank.png" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">Frank Pham</h5>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Nos enfants fréquentent cette super garderie depuis maintenant un peu plus de deux ans et ils adorent les éducatrices! Nous sommes très contents d'avoir trouvé cet endroit sûr et joyeux pour nos petits cocos!                        
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/mathieu.png" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">Mathieu Dumont</h5>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Les éducatrices font un travail exceptionnel. Les enfants les adorent et elles donnent toujours de bons conseils. Elles prennent vraiment le temps pour chaque enfant, et les horaires sont très flexibles pour les parents. Les repas sont appréciés par tous, et chaque matin, les enfants sautent de joie à l’idée de retrouver leurs gardiennes préférées.                      
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/marc.png" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">marc-philippe freeman</h5>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Je n'ai que de bons commentaires pour ce petit bijou de garderie. Les éducatrices sont exceptionnelles et ont réellement à coeur d'offrir un service hors pair. Elles sont disponibles, affectueuses, professionnelles, dévouées autant envers les enfants qui fréquentent la garderie qu'envers les parents. Nous avons de la chance d'avoir une place pour notre poupon et il ne fait aucun doute qu'il s'y plait. Le travail de cette équipe est absolument remarquable.                      
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/g.png" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">Geneviève Gravel</h5>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Ma fille à été a la garderie les Z'heureux pendant à peu près 2 ans et elle à adoré! C'était une super expérience non seulement pour elle mais pour les parents, les éducatrices font un travail exceptionnel et ma fille les aimait beaucoup. Un bon suivi sur sa progression, une super communication entre les éducatrices et les parents et je sentais vraiment qu'elles aimaient ma fille. Sans oublier qu'elle adorait les repas! Elle s'est fait un super groupe d'amies et les enfants s'amusait beaucoup ensemble! Ma fille s'est épanouie à cette garderie et c'est grâce à vous. Merci encore mille fois pour ses belles années et tout vos efforts. ❤️                      
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/y.png" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">Yoanna Fitoussi</h5>
                        </div>
                        <!-- /testimonial-review -->
                     </div>
                     <!-- /testimonial -->
                     <!-- testimonial -->
                     <div class="testimonial">
                        <div class="content">
                           <p class="description">
                              Cet endroit est tout simplement parfait. Beaucoup d'activités pour les enfants et de temps de jeu. Ma fille a passé de très bons moments ici pendant plus d'un an. C’était très agréable de voir ma fille heureuse d’aller à la garderie tous les jours, cela nous met à l’aise pour aller travailler et nous savons qu’on s’occupe bien d’elle.                        
                           </p>
                        </div>
                        <!-- /content -->
                        <div class="testimonial-pic">
                           <img src="img/team/flipe.png" class="img-fluid" alt="">
                        </div>
                        <!-- /testimonial-pic -->
                        <div class="testimonial-review">
                           <h5 class="testimonial-title">Felipe de leo</h5>
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
                  <h2>Nos caractéristiques</h2>
                  <p class="subtitle">Les avantages pour vous</p>
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
                              <h5>Environnement Sûr</h5>
<p>Nous offrons un environnement sécurisé où chaque enfant peut s’épanouir en toute confiance, entouré de professionnels qualifiés et bienveillants.</p>
                           </div>
                           <!-- /feature-with-icon-->
                           <!-- feature -->
                           <div class="feature-with-icon mt-5">
                              <div class="icon-features">
                                 <!-- icon -->
                                 <i class="flaticon-open-book-1 text-primary"></i>
                              </div>
                              <h5>Activités Éducatives</h5>
<p>Nous proposons des activités éducatives stimulantes qui favorisent le développement cognitif, social et émotionnel de chaque enfant, tout en encourageant la curiosité et l’apprentissage à travers le jeu.</p>
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
                              <h5>Éducatrices Qualifiées</h5>
<p>Nos éducatrices sont hautement qualifiées et passionnées par l'éducation des jeunes enfants, offrant un environnement d'apprentissage enrichissant et sécuritaire.</p>
                           </div>
                           <!-- /feature-with-icon-->
                           <!-- feature -->
                           <div class="feature-with-icon mt-5">
                              <div class="icon-features">
                                 <!-- icon -->
                                 <i class="flaticon-baby-boy text-primary"></i>
                              </div>
                              <h5>Soins aux nourrissons</h5>
<p>Nous offrons des soins attentionnés et adaptés aux besoins des nourrissons, garantissant un environnement calme, sûr et propice à leur développement.</p>

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
                     <img src="img/lz10.png" alt="" class="img-fluid"  data-aos="zoom-out"   data-aos-delay="300">
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
                  <h2>Nos Services</h2>
                  <p class="subtitle">Ce que nous offrons</p>
               </div>
               <!-- /section heading -->
               <!-- row -->
               <div class="row vertical-tabs">
                  <div class="col-lg-12">
                     <!-- navigation -->
                     <div class="tabs-with-icon">
                        <nav>
                           <div class="nav nav-tabs" id="nav-tab" role="tablist">
                              <a class="nav-item nav-link active" id="tab1-tab" data-bs-toggle="tab" href="#tab1"><i class="flaticon-abc-block"></i>Garderie</a>
                              <a class="nav-item nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tab2" ><i class="flaticon-kids-1"></i>Été</a>
                              <a class="nav-item nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tab3" ><i class="flaticon-smiling-baby"></i>Groupe poupons</a>
                              <a class="nav-item nav-link" id="tab4-tab" data-bs-toggle="tab" href="#tab4"><i class="flaticon-blackboard"></i>Éducation</a>
                              <a class="nav-item nav-link" id="tab5-tab" data-bs-toggle="tab" href="#tab5" ><i class="flaticon-kids"></i>Activitiées</a>
                           </div>
                        </nav>
                        <!-- tab-content -->
                        <div class="tab-content block-padding bg-light" id="nav-tabContent">
                           <div class="tab-pane active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                              <!-- row -->
                              <div class="row">
                                 <div class="col-lg-6">
                                    <!-- image -->
                                    <img src="img/services/lz11.webp" alt="" class="rounded img-fluid">
                                    <!-- ornament starts-->
                                    <div class="ornament-rainbow" data-aos="fade-right"></div>
                                 </div>
                                 <!-- col-lg -->
                                 <div class="col-lg-6">
                                    <h3>Garderie</h3>
<p>Depuis 2012, notre garderie accueille les enfants dans un cadre chaleureux, sécuritaire et stimulant. Chaque journée est pensée pour favoriser le développement global de l’enfant tout en respectant son rythme et sa personnalité.</p>
<ul class="custom ps-0">
   <li>6 éducatrices professionnelles qualifiées et attentionnées</li>
   <li>Un encadrement bienveillant depuis plus de 10 ans</li>
   <li>Activités éducatives, créatives et motrices au programme chaque jour</li>
</ul>

                                    <!-- Button -->	 
                                    <a href="/services" class="btn btn-secondary mt-4">En Savoir Plus</a>
                                 </div>
                                 <!-- /col-lg -->
                              </div>
                              <!-- row -->
                           </div>
                           <!-- ./Tab-pane -->
                           <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <h3>Été</h3>
<p>Chaque été, nous offrons des activités amusantes et enrichissant pour les enfants. Notre programme est conçu pour stimuler leur curiosité, renforcer leur autonomie et leur permettre de créer de merveilleux souvenirs avec leurs amis.</p>
<ul class="custom ps-0">
   <li>Activités extérieures quotidiennes et sorties éducatives</li>
   <li>Encadrement par nos 6 éducatrices qualifiées et passionnées</li>
   <li>Ateliers créatifs, jeux d’eau, jardinage et bien plus encore</li>
</ul>

                                    <!-- Button -->	 
                                    <a href="/services" class="btn btn-secondary mt-4">En Savoir Plus</a>
                                 </div>
                                 <!-- /col-lg -->
                                 <div class="col-lg-6 res-margin">
                                    <!-- image -->
                                    <img src="img/services/lz18.jpg" alt="" class="rounded img-fluid">
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
                                    <img src="img/services/lz12.jpg" alt="" class="rounded img-fluid">
                                    <!-- ornament starts-->
                                    <div class="ornament-bubbles" data-aos="fade-right"></div>
                                 </div>
                                 <!-- col-lg -->
                                 <div class="col-lg-6">
                                    <h3>Groupe poupons</h3>
<p>Nous offrons un service spécialisé pour les poupons dans un environnement calme, sécuritaire et stimulant. L’accent est mis sur l’attention individuelle, la régularité des routines et le développement sensoriel dès les premiers mois.</p>
<ul class="custom ps-0">
   <li>Accueil des enfants dès 3 mois</li>
   <li>Éducatrices attentives à chaque besoin</li>
   <li>Activités simples : éveil musical, manipulation, exploration douce</li>
</ul>

                                    <!-- Button -->	 
                                    <a href="/services" class="btn btn-secondary mt-4">En Savoir Plus</a>
                                 </div>
                                 <!-- /col-lg -->
                              </div>
                              <!-- row -->
                           </div>
                           <!-- ./Tab-pane -->
                           <div class="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <h3>Éducation par groupes</h3>
<p>Nous proposons une éducation structurée selon des groupes d’âge, permettant à chaque enfant de progresser à son propre rythme dans un environnement stimulant. Les activités sont adaptées au développement de chaque tranche d’âge.</p>
<ul class="custom ps-0">
   <li>Groupes pédagogiques selon l’âge</li>
   <li>Activités éducatives variées chaque jour</li>
   <li>Encadrement par 6 éducatrices qualifiées</li>
</ul>

                                    <!-- Button -->	 
                                    <a href="/services" class="btn btn-secondary mt-4">En Savoir Plus</a>
                                 </div>
                                 <!-- /col-lg -->
                                 <div class="col-lg-6 res-margin">
                                    <!-- image -->
                                    <img src="img/services/lz19.jpg" alt="" class="rounded img-fluid">
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
                                    <img src="img/services/lz13.jpg" alt="" class="rounded img-fluid">
                                    <!-- ornament starts-->
                                    <div class="ornament-rainbow" data-aos="fade-right"></div>
                                 </div>
                                 <!-- col-lg -->
                                 <div class="col-lg-6">
                                    <h3>Activités</h3>
<p>Nous organisons chaque jour une variété d’activités ludiques et éducatives qui favorisent la créativité, l’autonomie et le développement moteur des enfants. Jeux, arts plastiques, sorties et ateliers sont au programme.</p>
<ul class="custom ps-0">
   <li>Programme d'activités enrichissantes et variées</li>
   <li>Encadrement par 6 éducatrices qualifiées</li>
   <li>Développement de la créativité et de la motricité</li>
</ul>

                                    <!-- Button -->	 
                                    <a href="/services" class="btn btn-secondary mt-4">En Savoir Plus</a>
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
         <section id="counter-section" class="container-fluid counter-calltoaction bg-fixed overlay"  data-100-bottom="background-position: 50% 100px; "
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
                           <h3 class="title">Kids</h3>
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
               <h2>Notre Équipe</h2>
               <p class="subtitle">6 éducatrices qualifiées</p>
            </div>
            <!-- /section-heading -->  
            <div class="row">
               <div class="col-lg-7">
                  <h3>Rencontrez notre équipe dévouée</h3>
<p>Depuis notre ouverture en 2012, notre service de garde repose sur l’expertise et l’engagement d’une équipe exceptionnelle. Composée de six éducatrices qualifiées, notre équipe travaille chaque jour avec passion pour créer un environnement stimulant, sécuritaire et chaleureux où chaque enfant peut s’épanouir à son rythme. Nos éducatrices ne se contentent pas de superviser : elles écoutent, soutiennent, encouragent et accompagnent les tout-petits dans leurs apprentissages, en tenant compte de leurs besoins uniques. Leur professionnalisme et leur bienveillance font toute la différence dans la qualité des services que nous offrons, et dans le lien de confiance que nous bâtissons avec les familles.</p>
<ul class="checkmark ps-0 font-weight-bold">
   <li>6 éducatrices diplômées et expérimentées</li>
   <li>Un service de qualité offert depuis 2012</li>
   <li>Des activités éducatives variées et enrichissantes</li>
</ul>

                  <!-- /ul-->
               </div>
               <!-- /col-lg-->
               <div class="col-lg-5 res-margin">
                  <img src="img/team/lz16.jpg" alt="" class="img-fluid blob2">
                  <!-- ornament starts-->
                  <div class="ornament-stars" data-aos="fade-down"></div>
               </div>
               <!-- /col-lg-->
               <div class="col-lg-12">
                  <!-- team carousel -->  
                  
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
                     <img src="img/call-to-action/lz17.jpg" class="img-fluid img-rounded" alt="">
                  </div>
                  <!-- text box  -->
                  <div class="col-lg-6 bg-secondary p-5 justify-content-center align-self-center"  data-start="left: 50%;" 
                     data-center="left:-5%;">
                     <div class="text-light justify-content-center align-self-center">
                        <h3>Inscrivez-vous dès aujourd'hui</h3>
<p>Ne laissez pas passer l'opportunité d'offrir à votre enfant un environnement sûr et stimulant. Notre garderie est prête à accueillir votre petit dans un cadre chaleureux, où l'épanouissement et l'apprentissage se font main dans la main. Inscrivez-vous aujourd'hui pour garantir une place à votre enfant et rejoindre notre communauté de familles satisfaites. N'attendez plus pour offrir à votre enfant l'attention et l'éducation qu'il mérite.</p>
                        <a href="/contact" class="btn btn-tertiary">Contactez Nous</a>
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
                     <h2>Contactez Nous</h2>
                     <p class="subtitle">Entrons en contact</p>
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
                                 <h5>Écrivez Nous</h5>
                                 <p><a href="mailto:Leszheureuxgarderie@gmail.com">Leszheureuxgarderie@gmail.com</a></p>
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
                                 <h5>Visitez Nous</h5>
                                 <p>6001, rue Hochelaga, Montréal, H1N 1X5</p>
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
                                 <h5>Contactez Nous</h5>
                                 <p>514-507-4015</p>
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
               <!-- CDN EmailJS -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

<script type="text/javascript">
  (function() {
    // Initialiser EmailJS avec la nouvelle méthode d'initialisation
    emailjs.init("swf70I3j-nFvFNFlH");  // Remplace par ta clé publique
  })();
</script>


<!-- FORMULAIRE -->
<div class="col-lg-12 mt-5 block-padding force notepad pl-5 pr-5" style="position: relative; z-index: 1;">
    <div class="row">
        <div class="col-lg-7">
            <h4>Envoyez-nous un message</h4>
            <form id="contact-form" onsubmit="submitForm(event)">
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="name">Nom<span class="required">*</span></label>
                            <input type="text" id="name" name="name" class="form-control input-field" required>
                        </div>
                        <div class="col-md-6">
                            <label for="email">Adresse E-mail <span class="required">*</span></label>
                            <input type="email" id="email" name="email" class="form-control input-field" required>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label for="subject">Sujet</label>
                            <input type="text" id="subject" name="subject" class="form-control input-field">
                        </div>
                        <div class="col-md-12 mt-2">
                            <label for="message">Message<span class="required">*</span></label>
                            <textarea name="message" id="message" class="textarea-field form-control" rows="3" required></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-tertiary mt-3">Envoyer le message</button>
                </div>
            </form>
        </div>

        <div class="col-lg-5">
            <div id="map-canvas" class="mt-5 rounded" style="z-index: 0;"></div>
        </div>
    </div>
</div>

<!-- SCRIPT D'ENVOI -->
<script>
    function submitForm(event) {
        event.preventDefault();

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_leszheureux", "template_leszheureux", params)
            .then(function(response) {
                alert("Message envoyé avec succès !");
                document.getElementById("contact-form").reset();
            }, function(error) {
                console.error("Échec de l'envoi :", error);
                alert("Erreur lors de l'envoi du message.");
            });
    }
</script>


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
                        <li class="mb-1">Ouvert de 8h à 17h</li>
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
      <!-- Prefix free -->
      <script src="js/prefixfree.min.js"></script>
      <!-- number counter script -->
      <script src="js/counter.js"></script>
      <script src="js/UseCustomCursor.js"></script>
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
function onMounted(arg0: () => void) {
   throw new Error('Function not implemented.');
}

