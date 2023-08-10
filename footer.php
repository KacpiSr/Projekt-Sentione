<footer>
    <div class="container">
        <div class="footer-content">To participate in giveaway you need to register on our website and complete your profile. Read the <a href="#" target="_blank"> Terms & Conditions</a> .</div>
    </div>
</footer>

<script>
<?php
if ($data = get_field('end_date_and_time_of_event')) : ?>
    let data = '<?php echo $data ?>';
<?php endif;
?>
</script>

<?php wp_footer(); ?>

</body>

</html>