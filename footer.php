		</div><!-- End Main row -->
		
		<footer id="content-info" role="contentinfo" class="row hide-for-small">
			<div class="twelve columns">
				<?php dynamic_sidebar("Footer"); ?>
			</div>
		</footer>
			
	</div><!-- Container End -->
	
	
	<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
	     chromium.org/developers/how-tos/chrome-frame-getting-started -->
	<!--[if lt IE 7]>
		<script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
		<script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
	<![endif]-->
	<?php 
	wp_enqueue_script( 'foundation', get_template_directory_uri()."/js/foundation.js",array('jquery'),,true );
	wp_enqueue_script( 'foundationapp', get_template_directory_uri()."/js/app.js",array('jquery','foundation'),,true );
	wp_enqueue_script( 'equalheights', get_template_directory_uri()."/js/jquery.equalheights.js",array('jquery','foundation','foundationapp'),,true );
	?>
	<?php wp_footer(); ?>
		<script type="text/javascript">
			jquery(document).ready(function() {
				if (matchMedia('only screen and (min-width: 767px)').matches) {
					jquery.getScript("<?php echo get_template_directory_uri(); ?>/js/jquery.equalheights.js");

					jquery('#weather').load('<?php echo get_template_directory_uri(); ?>/weather.php');
						var auto_refresh = setInterval(
						function () {
							$('#weather').load('<?php echo get_template_directory_uri(); ?>/weather.php');
						}, 600000);	// 10 minutes in milliseconds

				} // end matchMedia
			});
		</script>
</body>
</html>




