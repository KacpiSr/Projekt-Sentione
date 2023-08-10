<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <!-- !!!!!!!!! remove bellow after migrate to correct domain !!!!!!!!!!!!!-->
    <meta name="robots" content="noindex, nofollow">
    <!-- !!!!!!!!! remove bellow after migrate to correct domain !!!!!!!!!!!!!-->

    <!-- Google -->
    <meta name="description" content="<?php bloginfo('description'); ?>" />

    <!-- Facebook -->
    <meta property="og:title" content="<?php the_title(); ?>">
    <meta property="og:site_name" content="<?php the_title(); ?>">
    <meta property="og:url" content="<?php echo get_home_url(); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/dist/img/logo.svg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo get_home_url(); ?>">
    <meta property="twitter:title" content="<?php the_title(); ?>">
    <meta property="twitter:description" content="<?php bloginfo('description'); ?>">
    <meta property="twitter:image" content="<?php echo get_template_directory_uri(); ?>/dist/img/logo.svg">
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- styles and scripts in functions.php -->
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


    <header>
        <div class="container">
            <div class="header-logo">
                <a href="https://sentione.com/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/src/img/logo.png" width="" height="" alt="logo" /></a>
            </div>
        </div>
    </header>