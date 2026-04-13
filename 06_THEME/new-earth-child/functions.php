<?php
/**
 * New Earth Child Theme functions
 *
 * Keep this file lean.
 * Add only what is needed to support the New Earth build.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue child theme stylesheet.
 */
function new_earth_child_enqueue_styles(): void
{
    $parent_style = 'parent-style';

    wp_enqueue_style(
        $parent_style,
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme(get_template())->get('Version')
    );

    wp_enqueue_style(
        'new-earth-child-style',
        get_stylesheet_uri(),
        array($parent_style),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'new_earth_child_enqueue_styles');

/**
 * Theme setup.
 */
function new_earth_child_theme_setup(): void
{
    add_theme_support('editor-styles');
    add_editor_style('style.css');

    add_theme_support('responsive-embeds');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');

    load_child_theme_textdomain(
        'new-earth-child',
        get_stylesheet_directory() . '/languages'
    );
}
add_action('after_setup_theme', 'new_earth_child_theme_setup');

/**
 * Register a block pattern category for New Earth sections.
 */
function new_earth_child_register_pattern_category(): void
{
    if (!function_exists('register_block_pattern_category')) {
        return;
    }

    register_block_pattern_category(
        'new-earth',
        array(
            'label' => __('New Earth', 'new-earth-child'),
        )
    );
}
add_action('init', 'new_earth_child_register_pattern_category');

/**
 * Optional helper: add a body class for easier styling hooks.
 */
function new_earth_child_body_classes(array $classes): array
{
    $classes[] = 'new-earth-site';
    return $classes;
}
add_filter('body_class', 'new_earth_child_body_classes');