// Eleventy 3!
import { VentoPlugin } from 'eleventy-plugin-vento';
import { EleventyRenderPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/*.css");

    eleventyConfig.addPlugin(EleventyRenderPlugin);
   
    eleventyConfig.addBundle("css", {
      toFileDirectory: "_site",
      // Add all <style> content to `css` bundle (use <style eleventy:ignore> to opt-out)
      // Supported selectors: https://www.npmjs.com/package/posthtml-match-helper
      bundleHtmlContentFromSelector: "style",
    });
  
    // Bundle <script> content and adds a {% js %} paired shortcode
    eleventyConfig.addBundle("js", {
      toFileDirectory: "_site",
      // Add all <script> content to the `js` bundle (use <script eleventy:ignore> to opt-out)
      // Supported selectors: https://www.npmjs.com/package/posthtml-match-helper
      bundleHtmlContentFromSelector: "script",
    });
  
    eleventyConfig.addPlugin(VentoPlugin, {
      // An array of Vento plugins to use when compiling
      plugins: [],
  
      // Enable/disable Eleventy Shortcodes, Paired Shortcodes,
      // and Filters in .vto templates
      shortcodes: true,
      pairedShortcodes: true,
      filters: true,
  
      // Define tags that should be trimmed, or set to true
      // to trim the default tags (see section on Auto-trimming)
      autotrim: false,
  
      // A Vento configuration object
      ventoOptions: {
        includes: eleventyConfig.directories.includes,
      },
    });

	return {
    templateFormats: ["md", "vto", "html"],
    htmlTemplateEngine: "vto",
    dir: {
      input: "src",
      output: "_site"
    }
  }
}