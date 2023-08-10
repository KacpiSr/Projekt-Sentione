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

<!-- <script>
let initialParent = null;

function moveDiv() {
  const sourceDiv = document.getElementById("transfer-timer");
  const destinationDiv = document.getElementById("destination-timer");
  const screenWidth = window.innerWidth;

  const thresholdWidth = 991;
  const resetWidth = 991;

  if (screenWidth < thresholdWidth) {
    if (!destinationDiv.contains(sourceDiv)) {
      initialParent = sourceDiv.parentElement;
      destinationDiv.appendChild(sourceDiv);
    }
  } else if (initialParent) {
    initialParent.appendChild(sourceDiv);
    initialParent = null;
  }
}
window.onload = moveDiv;
window.onresize = moveDiv;

</script> -->



<?php wp_footer(); ?>

</body>

</html>