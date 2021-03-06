<?php 
session_start();
$_SESSION['decode_result']  = "";
?>

<!DOCTYPE html>
<html> 
    <head>
        <meta charset="utf-8">
<meta name="google-site-verification" content="X_GNh9HTupy8SmNy3bNH8AlUgksI0z_TkGJB1K-Q4ec" />
		<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, minimum-scale = 1, maximum-scale = 1, user-scalable = no" >
    <!-- App pour apple -->

    <meta name="apple-mobile-web-app-title" content="Cui-cui.ml" />

    <meta name="apple-mobile-web-app-capable" content="yes">

    <meta name="apple-mobile-web-app-status-bar-style" content="#F8FCF8" />

    <link rel="apple-touch-icon" href="/resources/pwa/icons-cuicui-192.png">

    <link rel="apple-touch-icon" sizes="512x512" href="/resources/pwa/icons-cuicui-512.png">
    <link rel="apple-touch-icon" sizes="192x192" href="/resources/pwa/icons-cuicui-192.png">
    <!-- App pour apple -->
        <title>Home - Cui-cui</title>
      <link rel="manifest" href="/manifest.json">
        <link rel="stylesheet" media="screen and (min-device-width: 11px)" href="styles/style_home.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sen:wght@400;700;800&display=swap" rel="stylesheet">
      <script src= "/js/handler2.js" defer="defer"></script>
      <link rel="shortcut icon" type="image/png" href="/resources/pwa/icons-cuicui-192.png"/>

    <meta property="og:type" content="website">
  <meta property="og:title" content="Cui-Cui.ml">
  <meta property="og:description" content="Cui-Cui.ml l'application qui permet d'identifier des oiseaux à partir de leurs chants">
  <meta property="og:url" content="https://cui-cui.ml">
  <meta name="theme-color" content="#8ad3eb">
  <meta property="og:image" content="https://cui-cui.ml/resources/pwa/icons-cuicui-192.png">
  <meta name="keywords" content="birds">
  <meta name="description" content="Cui-Cui.ml l'application qui permet d'identifier des oiseaux à partir de leurs chants">
	</head>
	<body onload="document.getElementById('fileSelect').focus();document.getElementById('fileSelectMic').focus();">
		<nav>
            <div class="group_nav">
                <img src="resources/nav_icon/home_select.svg" alt="home">
              <input type="file" name="audio" id="fileSelectMic" accept="audio/*" style="display: none;">
              <label for="fileSelectMic" onclick="">
                <div class="btn_micro">
                    <img src="resources/nav_icon/microphone.svg" alt="microphone">
                </div>
              </label>
                <img src="resources/nav_icon/search.svg" alt="search">
            </div>
        </nav>
        <div class="up_bar">
            <div class="empty block"></div>
            <p class="title_page">Accueil</p>
            <img src="resources/nav_icon/nav_side.svg" alt="nav_side">
        </div>
        <div class="group_fonction">
                <div  onclick="erreur()" class="block_button_record">
                    <div class="button_record">
                        <img src="resources/logo.svg" alt="logo_button">
                    </div>
                </div>
            <p class="aide">Appuyez ici pour démarrer l’enregistrement</p>
            <div class="block_or">
                <div class="sep_or"></div>
                <p class="or">OU</p>
                <div class="sep_or"></div>
            </div>
            <p class="aide">Uploader votre fichier son directement</p>
            <input type="file" name="audio" id="fileSelect" accept="audio/*" style="display: none;">
            <label for="fileSelect" onclick="">
              <div class="btn_upload">
                  <img class ="img_btn_upload" src="resources/upload.svg" alt="upload">
                  <img class ="img_analyse" src="resources/analyse.svg" alt="analyse">
                  <p class="txt_upload">Ouvrir un fichier</p>
              </div>
            </label>
        </div>
      <script src="js/app.js"></script>
    </body>
</html>
