<?php
/**
 * Template Name: Contact Page
 * Description: Page template without sidebar
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Yvonne's Theme 1.0
 *
 * If you are looking for the map, it's in the header
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			// Include the page content template.
			get_template_part( 'template-parts/content', 'page' );

			// End of the loop.
		endwhile;
		?>

	</main><!-- .site-main -->

</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
