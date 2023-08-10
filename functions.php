<?php

add_theme_support('title-tag');
add_theme_support('post-thumbnails');



/*****************************************************************************************************/
/* INCLUDE SCRIP & ASSETS */
get_template_part('function-catalog/include-script-styles');

/*****************************************************************************************************/
/* MENU REGISTER */
get_template_part('function-catalog/menu-register');

/*****************************************************************************************************/
/* ADMIN AVATAR */
// get_template_part('function-catalog/avatar-change');

/*****************************************************************************************************/
/* SVG TO CMS */
get_template_part('function-catalog/svg-upload');

/*****************************************************************************************************/
/* ACF BLOCKS */
get_template_part('function-catalog/acf-blocks');

/*****************************************************************************************************/
/* ACF STYLING */
// get_template_part('function-catalog/acf-styling');

/*****************************************************************************************************/
/* ACF OPTION PAGES */
// get_template_part('function-catalog/acf-options-page');

/*****************************************************************************************************/
/* WP GUTENBERG WIDTH */
get_template_part('function-catalog/gutenberg-width');

/*****************************************************************************************************/

/* CUSTOM POST TYPE & TAXONOMIES */
// get_template_part('function-catalog/custom-post-type');

/*****************************************************************************************************/
/* REMOVE COMMENTS*/
get_template_part('function-catalog/remove-comments');

/*****************************************************************************************************/

/*  REMOVE H1 FROM TINY MCE */
// get_template_part('function-catalog/remove-tiny-h1');

/*****************************************************************************************************/
