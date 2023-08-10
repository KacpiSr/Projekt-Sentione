<?php 

function sentistarter_allow_svg($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'sentistarter_allow_svg');

?>