
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Elements - ABC Tots</title>
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
               <!-- jumbo-heading -->
               <div class="jumbo-heading" data-aos="fade-down">
                  <h1>Elements</h1>
                  <!-- Breadcrumbs -->
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Elements</li>
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
               <h2 class="element-heading col-lg-12">Typography</h2>
               <div class="col-lg-6 col-sm-12">
                  <!-- headings -->
                  <h3 class="elements-subheader">Headers</h3>
                  <h1>h1 heading</h1>
                  <h2>h2 heading</h2>
                  <h3>h3 heading</h3>
                  <h4>h4 heading</h4>
                  <h5>h5 heading</h5>
                  <h6>h6 heading</h6>
                  <span class="h7">.h7 class</span>
                  <p class="lead">.lead class</p>
                  <p class="text-primary">.text-primary</p>
                  <p class="text-secondary">.text-secondary</p>
                  <p class="text-tertiary">.text-tertiary</p>
               </div>
               <!-- /col-lg-6 -->
               <div class="col-lg-6 col-sm-12">
                  <!-- Lists -->
                  <h3 class="elements-subheader">Lists</h3>
                  <div class="row">
                     <div class="col-sm-6">
                        <h5>Basic List</h5>
                        <ul>
                           <li>Over 30 Qualified professionals</li>
                           <li>We offer you our quality services since 2002</li>
                           <li>Fun and educational activities in our daily plan</li>
                        </ul>
                     </div>
                     <!--List Group-->
                     <div class="col-sm-6">
                        <h5>List Group</h5>
                        <div class="list-group">
                           <a href="#" class="list-group-item list-group-item-action">
                           Daycare
                           </a>
                           <a href="#" class="list-group-item list-group-item-action">News</a>
                           <a href="#" class="list-group-item list-group-item-action">Parent Alerts</a>
                           <a href="#" class="list-group-item list-group-item-action">Our Events</a>
                        </div>
                     </div>
                  </div>
                  <!-- /row -->
                  <div class="row">
                     <div class="col-sm-6">
                        <!-- Custom List -->
                        <h5 class="mt-4">Custom List</h5>
                        <ul class="custom ps-0">
                           <li>Over 30 Qualified professionals</li>
                           <li>We offer you our quality services since 2002</li>
                           <li>Fun and educational activities in our daily plan</li>
                        </ul>
                     </div>
                     <div class="col-sm-6">
                        <h5 class="mt-4">Checkmark List</h5>
                        <ul class="checkmark ps-0 font-weight-bold">
                           <li>Over 30 Qualified professionals</li>
                           <li>We offer you our quality services since 2002</li>
                           <li>Fun and educational activities in our daily plan</li>
                        </ul>
                     </div>
                  </div>
                  <!-- /row -->
               </div>
               <!-- /col-lg-6 -->
            </div>
            <!-- /row -->
            <div class="row mt-5">
               <h2 class="element-heading col-lg-12">Navigation</h2>
               <div class="col-lg-6">
                  <!-- pills -->
                  <h3 class="elements-subheader">Pills</h3>
                  <ul class="nav nav-pills">
                     <li class="nav-item"> <a class="nav-link active" href="#">Active</a> </li>
                     <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li>
                     <li class="nav-item"> <a class="nav-link disabled" href="#">Disabled</a> </li>
                  </ul>
                  <!-- pagination -->
                  <h3 class="elements-subheader">Pagination</h3>
                  <ul class="pagination">
                     <li class="page-item">
                        <a href="#" class="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        </a>
                     </li>
                     <li class="page-item"><a href="#" class="page-link">1</a></li>
                     <li class="page-item"><a href="#" class="page-link">2</a></li>
                     <li class="page-item"><a href="#" class="page-link">3</a></li>
                     <li class="page-item"><a href="#" class="page-link">4</a></li>
                     <li class="page-item"><a href="#" class="page-link">5</a></li>
                     <li class="page-item"><a href="#" class="page-link">6</a></li>
                     <li class="page-item"><a href="#" class="page-link">7</a></li>
                     <li class="page-item">
                        <a href="#" class="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        </a>
                     </li>
                  </ul>
                  <!-- Breadcrumbs -->
                  <h3 class="elements-subheader mt-5">Breadcrumb</h3>
                  <ul class="breadcrumb bg-secondary p-3">
                     <li class="breadcrumb-item"><a href="#">Home</a></li>
                     <li class="breadcrumb-item"><a href="#">Page 1</a></li>
                     <li class="breadcrumb-item active">Active page</li>
                  </ul>
               </div>
               <!-- nav tabs -->
               <div class="col-lg-6">
                  <h3 class="elements-subheader">Nav tabs</h3>
                  <!-- navigation -->
                  <nav>
                     <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab" aria-selected="true">tab1</a>
                        <a class="nav-item nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab"  aria-selected="false">tab2</a>
                     </div>
                  </nav>
                  <!-- tab-content -->
                  <div class="tab-content block-padding" id="nav-tabContent">
                     <div class="tab-pane  fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                        <!-- row -->
                        <div class="row">
                           <h3>tab1 header</h3>
                           <!--divider -->
                           <p>Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                        </div>
                        <!-- row -->
                     </div>
                     <!-- ./Tab-pane -->
                     <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                        <!-- row -->
                        <div class="row">
                           <h3>tab2 header</h3>
                           <p>Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                        </div>
                        <!-- /row -->
                     </div>
                     <!-- ./Tab-pane -->
                  </div>
                  <!-- ./Tab-content -->
               </div>
               <!-- /col-lg-6 -->
               <div class="col-lg-12">
                  <!-- accordions -->
                  <h3 class="elements-subheader mt-5">Accordions</h3>
                  <div class="accordion">
                     <!-- collapsible accordion 1 -->
                     <div class="card">
                        <div class="card-header">
                           <a class="card-link" data-bs-toggle="collapse" href="#collapseOne">
                           Our Philosophy
                           </a>
                        </div>
                        <!-- /card-header -->
                        <div id="collapseOne" class="collapse show" data-bs-parent=".accordion">
                           <div class="card-body">
                              <p>Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                           </div>
                        </div>
                     </div>
                     <!-- /card -->
                     <!-- collapsible accordion 2 -->
                     <div class="card">
                        <div class="card-header">
                           <a class="collapsed card-link" data-bs-toggle="collapse" href="#collapseTwo">
                           Our Organization
                           </a>
                        </div>
                        <div id="collapseTwo" class="collapse" data-bs-parent=".accordion">
                           <div class="card-body">
                              <p>Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                           </div>
                        </div>
                     </div>
                     <!-- /card -->
                     <!-- collapsible accordion 3 -->
                     <div class="card">
                        <div class="card-header">
                           <a class="collapsed card-link" data-bs-toggle="collapse" href="#collapseThree">
                           Partnerships with our team
                           </a>
                        </div>
                        <div id="collapseThree" class="collapse" data-bs-parent=".accordion">
                           <div class="card-body">
                              <p>Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.</p>
                           </div>
                        </div>
                     </div>
                     <!-- /card -->
                  </div>
                  <!-- /accordion -->
               </div>
               <!-- /col-lg-12 -->
            </div>
            <!-- /row -->
            <div class="row mt-5">
               <h2 class="element-heading col-lg-12">Indicators</h2>
               <div class="col-lg-12">
                  <h3 class="elements-subheader">Alerts</h3>
                  <div class="row">
                     <!-- Alerts -->
                     <div class="col-lg-6">
                        <div class="alert alert-primary" role="alert">
                           This is a primary alert—check it out!
                        </div>
                        <div class="alert alert-secondary" role="alert">
                           This is a secondary alert—check it out!
                        </div>
                        <div class="alert alert-success" role="alert">
                           This is a success alert—check it out!
                        </div>
                        <div class="alert alert-danger" role="alert">
                           This is a danger alert—check it out!
                        </div>
                     </div>
                     <!-- /col-lg-6 -->
                     <div class="col-lg-6">
                        <div class="alert alert-warning" role="alert">
                           This is a warning alert—check it out!
                        </div>
                        <div class="alert alert-info" role="alert">
                           This is a info alert—check it out!
                        </div>
                        <div class="alert alert-light" role="alert">
                           This is a light alert—check it out!
                        </div>
                        <div class="alert alert-dark" role="alert">
                           This is a dark alert—check it out!
                        </div>
                     </div>
                     <!-- /col-lg-6 -->
                  </div>
                  <!-- /row -->
               </div>
               <div class="col-lg-6">
                  <!-- Badges -->
                  <h3 class="elements-subheader">Badges</h3>
                  <span class="badge badge-pill badge-primary">Primary</span>
                  <span class="badge badge-pill badge-secondary">Secondary</span>
                  <span class="badge badge-pill badge-success">Success</span>
                  <span class="badge badge-pill badge-danger">Danger</span>
                  <span class="badge badge-pill badge-warning">Warning</span>
                  <span class="badge badge-pill badge-info">Info</span>
                  <span class="badge badge-pill badge-light">Light</span>
                  <span class="badge badge-pill badge-dark">Dark</span>
               </div>
               <!-- /col-lg-6 -->
               <div class="col-lg-6">
                  <!-- Progress bars  -->
                  <h3 class="elements-subheader">Progress bars</h3>
                  <div class="progress">
                     <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress">
                     <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress">
                     <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress">
                     <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress">
                     <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
               </div>
               <!-- /col-lg-6 -->
            </div>
            <!-- /row -->
            <div class="row mt-5">
               <h2 class="element-heading col-lg-12">Buttons and Forms</h2>
               <div class="col-lg-6 col-sm-12">
                  <!-- buttons -->
                  <h3 class="elements-subheader">Buttons</h3>
                  <button type="button" class="btn btn-primary">Primary</button>
                  <button type="button" class="btn btn-secondary">Secondary</button>
                  <button type="button" class="btn btn-tertiary">Tertiary</button>
                  <button type="button" class="btn btn-quaternary">Quaternary</button>
                  <button type="button" class="btn btn-warning">Warning</button>
                  <button type="button" class="btn btn-info">Info</button>
                  <button type="button" class="btn btn-light">Light</button>
                  <button type="button" class="btn btn-dark">Dark</button>
                  <button type="button" class="btn btn-link">Link</button>
                  <!-- button group -->
                  <h3 class="elements-subheader">Button group</h3>
                  <div class="btn-group" role="group" aria-label="Basic example">
                     <button type="button" class="btn btn-secondary">Left</button>
                     <button type="button" class="btn btn-secondary">Middle</button>
                     <button type="button" class="btn btn-secondary">Right</button>
                  </div>
                  <!-- button sizes -->
                  <h3 class="elements-subheader">Button sizes</h3>
                  <div class="bd-example" data-example-id="">
                     <button type="button" class="btn btn-primary btn-lg">Large button</button>
                     <button type="button" class="btn btn-primary btn-sm">Small button</button>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-12">
                  <h3 class="elements-subheader">Forms</h3>
                  <!-- Forms -->
                  <form>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">Text field</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="write here">
                     </div>
                     <div class="form-group">
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                        </select>
                     </div>
                     <div class="form-group">
                        <label for="exampleFormControlSelect2">Example multiple select</label>
                        <select multiple class="form-control" id="exampleFormControlSelect2">
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                        </select>
                     </div>
                     <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                     </div>
                  </form>
                  <h3 class="elements-subheader">Input group</h3>
                  <div class="input-group">
                     <input type="text" class="form-control" placeholder="Search for...">
                     <span class="input-group-btn">
                     <button class="btn btn-secondary" type="button">Go!</button>
                     </span>
                  </div>
               </div>
            </div>
            <!-- /row -->
            <div class="row mt-5">
               <h2 class="element-heading col-lg-12">Others</h2>
               <div class="col-lg-6">
                  <h3 class="elements-subheader">Cards</h3>
                  <!-- cards -->
                  <div class="card card-body">
                     <h4 class="card-title">Card example</h4>
                     <p class="card-text">Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                     <a href="#" class="btn btn-primary">More</a>
                  </div>
                  <!-- tables -->
                  <h3 class="elements-subheader">Tables</h3>
                  <table class="table table-striped">
                     <thead>
                        <tr>
                           <th>Firstname</th>
                           <th>Lastname</th>
                           <th>Email</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>John</td>
                           <td>Doe</td>
                           <td>john@example.com</td>
                        </tr>
                        <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>mary@example.com</td>
                        </tr>
                        <tr>
                           <td>July</td>
                           <td>Dooley</td>
                           <td>july@example.com</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <!-- /col-lg-6 -->
               <div class="col-lg-6">
                  <h3 class="elements-subheader">Overlays</h3>
                  <!-- overlay -->
                  <div class="col-md-12 overlay p-5 text-light overlay-background-image">
                     <h4>.overlay</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
                  <!-- overlay -->
                  <div class="col-md-12 overlay-dark p-5 text-light overlay-background-image">
                     <h4>.overlay-dark</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
                  <!-- overlay light -->
                  <div class="col-md-12 overlay-light p-5 text-dark overlay-background-image">
                     <h4>.overlay-light</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
               </div>
               <!-- /col-lg -->
            </div>
            <!-- /row -->
            <div class="col-md-12">
               <h3 class="elements-subheader">Background Colors</h3>
               <div class="row">
                  <!-- bg -->
                  <div class="col-md-6 bg-primary p-5 text-light">
                     <h4>.bg-primary</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
                  <!-- bg -->
                  <div class="col-md-6 bg-secondary p-5 text-light">
                     <h4>.bg-secondary</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
                  <!-- bg -->
                  <div class="col-md-6 bg-tertiary p-5 text-light">
                     <h4>.bg-tertiary</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
                  <!-- bg -->
                  <div class="col-md-6 bg-light p-5">
                     <h4>.bg-light</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
                  <!-- bg -->
                  <div class="col-md-12 bg-dark p-5 text-light">
                     <h4>.bg-dark</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
               </div>
            </div>
            <!-- /col-md-12 -->
            <div class="col-lg-12">
               <h3 class="elements-subheader">Background Patterns</h3>
               <div class="row">
                  <!-- pattern -->
                  <div class="col-md-12 bg-primary pattern1 p-5 text-light">
                     <h4>.pattern1</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
                  <!-- pattern -->
                  <div class="col-md-12 bg-primary pattern2 p-5 text-light">
                     <h4>.pattern2</h4>
                     <p>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                  </div>
               </div>
            </div>
            <!-- /col-lg-12-->
            <div class="col-lg-12 col-sm-12">
               <h3 class="elements-subheader">Image ornaments</h3>
               <!-- hover effects -->
               <div class="row">
                  <div class="col-lg-4">
                     <h6 class="mb-3">Stars ornament</h6>
                     <img src="img/example.jpg" class="rounded img-fluid" alt="">
                     <!-- ornament starts-->
                     <div class="ornament-stars" data-aos="fade-down"></div>
                  </div>
                  <div class="col-lg-4">
                     <!-- /col-md-4-->
                     <h6 class="mb-3">Rainbow ornament</h6>
                     <img src="img/example.jpg" class="rounded img-fluid" alt="">
                     <!-- ornament starts-->
                     <div class="ornament-rainbow" data-aos="fade-down"></div>
                  </div>
                  <!-- /col-md-4-->
                  <div class="col-lg-4">
                     <h6 class="mb-3">Bubbles ornament</h6>
                     <img src="img/example.jpg" class="rounded img-fluid" alt="">
                     <!-- ornament starts-->
                     <div class="ornament-bubbles" data-aos="fade-down"></div>
                  </div>
                  <!-- /col-md-4-->
               </div>
               <!-- /row-->
            </div>
            <!-- /col-lg-12-->
            <div class="container mt-5">
               <div class="row">
                  <section id="glyphs">
                     <div class="col-lg-12">
                        <!-- icons -->
                        <h3 class="elements-subheader">Icons</h3>
                        <p class="text-center">Usage example:  <strong>&lt;i class=&quot;icon-name-here&quot;&gt;&lt;/i&gt;</strong> </p>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-teddy-bear"></div>
                           <div class="class-name">flaticon-teddy-bear</div>
                           <div class="author-name">Author: <a data-file="001-teddy-bear" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-pencils"></div>
                           <div class="class-name">flaticon-pencils</div>
                           <div class="author-name">Author: <a data-file="002-pencils" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-classroom"></div>
                           <div class="class-name">flaticon-classroom</div>
                           <div class="author-name">Author: <a data-file="003-classroom" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-classroom-1"></div>
                           <div class="class-name">flaticon-classroom-1</div>
                           <div class="author-name">Author: <a data-file="004-classroom-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-block-with-letters"></div>
                           <div class="class-name">flaticon-block-with-letters</div>
                           <div class="author-name">Author: <a data-file="005-block-with-letters" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-kindergarten"></div>
                           <div class="class-name">flaticon-kindergarten</div>
                           <div class="author-name">Author: <a data-file="006-kindergarten" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-boy"></div>
                           <div class="class-name">flaticon-boy</div>
                           <div class="author-name">Author: <a data-file="007-boy" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-puzzle"></div>
                           <div class="class-name">flaticon-puzzle</div>
                           <div class="author-name">Author: <a data-file="008-puzzle" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-girl"></div>
                           <div class="class-name">flaticon-girl</div>
                           <div class="author-name">Author: <a data-file="009-girl" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-balloon-playing"></div>
                           <div class="class-name">flaticon-balloon-playing</div>
                           <div class="author-name">Author: <a data-file="010-balloon-playing" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-children"></div>
                           <div class="class-name">flaticon-children</div>
                           <div class="author-name">Author: <a data-file="011-children" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-kids"></div>
                           <div class="class-name">flaticon-kids</div>
                           <div class="author-name">Author: <a data-file="012-kids" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-jumping-rope"></div>
                           <div class="class-name">flaticon-jumping-rope</div>
                           <div class="author-name">Author: <a data-file="013-jumping-rope" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-football"></div>
                           <div class="class-name">flaticon-football</div>
                           <div class="author-name">Author: <a data-file="014-football" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-flowers"></div>
                           <div class="class-name">flaticon-flowers</div>
                           <div class="author-name">Author: <a data-file="015-flowers" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-swing"></div>
                           <div class="class-name">flaticon-swing</div>
                           <div class="author-name">Author: <a data-file="016-swing" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-clamber"></div>
                           <div class="class-name">flaticon-clamber</div>
                           <div class="author-name">Author: <a data-file="017-clamber" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-sand-box"></div>
                           <div class="class-name">flaticon-sand-box</div>
                           <div class="author-name">Author: <a data-file="018-sand-box" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-bicycle"></div>
                           <div class="class-name">flaticon-bicycle</div>
                           <div class="author-name">Author: <a data-file="019-bicycle" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-skipping-rope"></div>
                           <div class="class-name">flaticon-skipping-rope</div>
                           <div class="author-name">Author: <a data-file="020-skipping-rope" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-playing"></div>
                           <div class="class-name">flaticon-playing</div>
                           <div class="author-name">Author: <a data-file="021-playing" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-kids-1"></div>
                           <div class="class-name">flaticon-kids-1</div>
                           <div class="author-name">Author: <a data-file="022-kids-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-learning"></div>
                           <div class="class-name">flaticon-learning</div>
                           <div class="author-name">Author: <a data-file="023-learning" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-playing-1"></div>
                           <div class="class-name">flaticon-playing-1</div>
                           <div class="author-name">Author: <a data-file="024-playing-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-football-1"></div>
                           <div class="class-name">flaticon-football-1</div>
                           <div class="author-name">Author: <a data-file="025-football-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-studying"></div>
                           <div class="class-name">flaticon-studying</div>
                           <div class="author-name">Author: <a data-file="026-studying" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-kids-2"></div>
                           <div class="class-name">flaticon-kids-2</div>
                           <div class="author-name">Author: <a data-file="027-kids-2" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-learning-1"></div>
                           <div class="class-name">flaticon-learning-1</div>
                           <div class="author-name">Author: <a data-file="028-learning-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-baby-girl"></div>
                           <div class="class-name">flaticon-baby-girl</div>
                           <div class="author-name">Author: <a data-file="029-baby-girl" href="https://www.flaticon.com/authors/pixel-perfect">Pixel perfect</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-baby-boy"></div>
                           <div class="class-name">flaticon-baby-boy</div>
                           <div class="author-name">Author: <a data-file="030-baby-boy" href="https://www.flaticon.com/authors/pixel-perfect">Pixel perfect</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-block"></div>
                           <div class="class-name">flaticon-block</div>
                           <div class="author-name">Author: <a data-file="031-block" href="https://www.flaticon.com/authors/pixel-perfect">Pixel perfect</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-baby"></div>
                           <div class="class-name">flaticon-baby</div>
                           <div class="author-name">Author: <a data-file="032-baby" href="https://www.flaticon.com/authors/pixel-perfect">Pixel perfect</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-feeding-bottle"></div>
                           <div class="class-name">flaticon-feeding-bottle</div>
                           <div class="author-name">Author: <a data-file="033-feeding-bottle" href="https://www.flaticon.com/authors/pixel-perfect">Pixel perfect</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-block-1"></div>
                           <div class="class-name">flaticon-block-1</div>
                           <div class="author-name">Author: <a data-file="034-block-1" href="https://www.flaticon.com/authors/pixel-perfect">Pixel perfect</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-graduation-hat"></div>
                           <div class="class-name">flaticon-graduation-hat</div>
                           <div class="author-name">Author: <a data-file="035-graduation-hat" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-school"></div>
                           <div class="class-name">flaticon-school</div>
                           <div class="author-name">Author: <a data-file="036-school" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-calculator"></div>
                           <div class="class-name">flaticon-calculator</div>
                           <div class="author-name">Author: <a data-file="037-calculator" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-pen"></div>
                           <div class="class-name">flaticon-pen</div>
                           <div class="author-name">Author: <a data-file="038-pen" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-blackboard"></div>
                           <div class="class-name">flaticon-blackboard</div>
                           <div class="author-name">Author: <a data-file="039-blackboard" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-teacher"></div>
                           <div class="class-name">flaticon-teacher</div>
                           <div class="author-name">Author: <a data-file="040-teacher" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-walking-to-school"></div>
                           <div class="class-name">flaticon-walking-to-school</div>
                           <div class="author-name">Author: <a data-file="041-walking-to-school" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-books-stack-of-three"></div>
                           <div class="class-name">flaticon-books-stack-of-three</div>
                           <div class="author-name">Author: <a data-file="042-books-stack-of-three" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-open-book"></div>
                           <div class="class-name">flaticon-open-book</div>
                           <div class="author-name">Author: <a data-file="043-open-book" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-open-book-1"></div>
                           <div class="class-name">flaticon-open-book-1</div>
                           <div class="author-name">Author: <a data-file="044-open-book-1" href="https://www.flaticon.com/authors/zlatko-najdenovski">Zlatko Najdenovski</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-kids-couple"></div>
                           <div class="class-name">flaticon-kids-couple</div>
                           <div class="author-name">Author: <a data-file="045-kids-couple" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-children-1"></div>
                           <div class="class-name">flaticon-children-1</div>
                           <div class="author-name">Author: <a data-file="046-children-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-maternity"></div>
                           <div class="class-name">flaticon-maternity</div>
                           <div class="author-name">Author: <a data-file="047-maternity" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-baby-boy-1"></div>
                           <div class="class-name">flaticon-baby-boy-1</div>
                           <div class="author-name">Author: <a data-file="048-baby-boy-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-smiling-baby"></div>
                           <div class="class-name">flaticon-smiling-baby</div>
                           <div class="author-name">Author: <a data-file="049-smiling-baby" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-abc-block"></div>
                           <div class="class-name">flaticon-abc-block</div>
                           <div class="author-name">Author: <a data-file="050-abc-block" href="https://www.flaticon.com/authors/good-ware">Good Ware</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-baby-face"></div>
                           <div class="class-name">flaticon-baby-face</div>
                           <div class="author-name">Author: <a data-file="051-baby-face" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-feeding-bottle-1"></div>
                           <div class="class-name">flaticon-feeding-bottle-1</div>
                           <div class="author-name">Author: <a data-file="052-feeding-bottle-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-baby-food"></div>
                           <div class="class-name">flaticon-baby-food</div>
                           <div class="author-name">Author: <a data-file="053-baby-food" href="https://www.flaticon.com/authors/kiranshastry">Kiranshastry</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-baby-food-1"></div>
                           <div class="class-name">flaticon-baby-food-1</div>
                           <div class="author-name">Author: <a data-file="054-baby-food-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-feeding"></div>
                           <div class="class-name">flaticon-feeding</div>
                           <div class="author-name">Author: <a data-file="055-feeding" href="https://www.flaticon.com/authors/smashicons">Smashicons</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-food"></div>
                           <div class="class-name">flaticon-food</div>
                           <div class="author-name">Author: <a data-file="056-food" href="https://www.flaticon.com/authors/smashicons">Smashicons</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-friendship"></div>
                           <div class="class-name">flaticon-friendship</div>
                           <div class="author-name">Author: <a data-file="057-friendship" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-family"></div>
                           <div class="class-name">flaticon-family</div>
                           <div class="author-name">Author: <a data-file="058-family" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-calendar-with-a-clock-time-tools"></div>
                           <div class="class-name">flaticon-calendar-with-a-clock-time-tools</div>
                           <div class="author-name">Author: <a data-file="059-calendar-with-a-clock-time-tools" href="https://www.flaticon.com/authors/simpleicon">SimpleIcon</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-alarm-clock"></div>
                           <div class="class-name">flaticon-alarm-clock</div>
                           <div class="author-name">Author: <a data-file="060-alarm-clock" href="https://www.flaticon.com/authors/smashicons">Smashicons</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-help"></div>
                           <div class="class-name">flaticon-help</div>
                           <div class="author-name">Author: <a data-file="061-help" href="https://www.flaticon.com/authors/good-ware">Good Ware</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-conversation"></div>
                           <div class="class-name">flaticon-conversation</div>
                           <div class="author-name">Author: <a data-file="062-conversation" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-conversation-1"></div>
                           <div class="class-name">flaticon-conversation-1</div>
                           <div class="author-name">Author: <a data-file="063-conversation-1" href="https://www.flaticon.com/authors/gregor-cresnar">Gregor Cresnar</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-cubes"></div>
                           <div class="class-name">flaticon-cubes</div>
                           <div class="author-name">Author: <a data-file="064-cubes" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-cubes-1"></div>
                           <div class="class-name">flaticon-cubes-1</div>
                           <div class="author-name">Author: <a data-file="065-cubes-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-teddy-bear-1"></div>
                           <div class="class-name">flaticon-teddy-bear-1</div>
                           <div class="author-name">Author: <a data-file="066-teddy-bear-1" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-crayon"></div>
                           <div class="class-name">flaticon-crayon</div>
                           <div class="author-name">Author: <a data-file="067-crayon" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-notebook"></div>
                           <div class="class-name">flaticon-notebook</div>
                           <div class="author-name">Author: <a data-file="068-notebook" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-jigsaw"></div>
                           <div class="class-name">flaticon-jigsaw</div>
                           <div class="author-name">Author: <a data-file="069-jigsaw" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-bib"></div>
                           <div class="class-name">flaticon-bib</div>
                           <div class="author-name">Author: <a data-file="070-bib" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                        <div class="glyph">
                           <div class="glyph-icon flaticon-watercolor"></div>
                           <div class="class-name">flaticon-watercolor</div>
                           <div class="author-name">Author: <a data-file="071-watercolor" href="http://www.freepik.com">Freepik</a> </div>
                        </div>
                     </div>
                  </section>
                  <!-- /section -->
               </div>
               <!-- /row -->
            </div>
            <!-- /container -->
            <div class="col-lg-12 col-sm-12">
               <h3 class="elements-subheader">Image shapes / hover effect</h3>
               <!-- hover effects -->
               <div class="row">
                  <div class="col-lg-3 col-md-6">
                     <img src="img/example.jpg" class="rounded img-fluid" alt="">
                     <h6 class="mt-2">.rounded</h6>
                  </div>
                  <!-- /col-lg-3 col-md-6-->
                  <div class="col-lg-3 col-md-6">
                     <img src="img/example.jpg" class="rounded-circle img-fluid" alt="">
                     <h6 class="mt-2">.rounded-circle</h6>
                  </div>
                  <!-- /col-lg-3 col-md-6-->
                  <div class="col-lg-3 col-md-6">
                     <img src="img/example.jpg" class="img-thumbnail img-fluid" alt="">
                     <h6 class="mt-2">.img-thumbnail</h6>
                  </div>
                  <!-- /col-lg-3 col-md-6-->
                  <div class="col-lg-3 col-md-6">
                     <img src="img/example.jpg" class="rotate1 img-fluid" alt="">
                     <h6 class="mt-2">.rotate1</h6>
                  </div>
                  <!-- /col-lg-2 col-md-6-->
                  <div class="col-lg-2 col-md-6">
                     <div class="img-zoom-hover">
                        <img src="img/example.jpg" class="img-fluid" alt="">
                     </div>
                     <h6 class="mt-2">.img-zoom-hover</h6>
                  </div>
                  <!-- /col-lg-2 col-md-6-->
                  <div class="col-lg-2 col-md-6">
                     <img src="img/example.jpg" class="hover-opacity img-fluid" alt="">
                     <h6 class="mt-2">.hover-opacity</h6>
                  </div>
                  <!-- /col-lg-2 col-md-6-->
                  <div class="col-lg-2 col-md-6">
                     <div class="hover-border">
                        <img src="img/example.jpg" class="img-fluid" alt="">
                     </div>
                     <h6 class="mt-2">.hover-border</h6>
                  </div>
                  <!-- /col-lg-2 col-md-6-->
                  <div class="col-lg-2 col-md-6">
                     <img src="img/example.jpg" class="blob img-fluid" alt="">
                     <h6 class="mt-2">.blob</h6>
                  </div>
                  <!-- /col-lg-2 col-md-6-->
                  <div class="col-lg-2 col-md-6">
                     <img src="img/example.jpg" class="blob2 img-fluid" alt="">
                     <h6 class="mt-2">.blob2</h6>
                  </div>
                  <!-- /col-lg-2 col-md-6-->
                  <div class="col-lg-2 col-md-6">
                     <img src="img/example.jpg" alt="" class="moving-blob img-fluid">
                     <h6 class="mt-2">.moving-blob</h6>
                  </div>
                  <!-- /col-lg-12 -->
               </div>
               <!-- /row-->
            </div>
            <!-- /col-lg -->
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
