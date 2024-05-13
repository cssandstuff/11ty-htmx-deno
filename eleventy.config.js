// Eleventy 3!
import pluginWebc from "npm:@11ty/eleventy-plugin-webc";
import { EleventyRenderPlugin } from "npm:@11ty/eleventy@canary";

export default function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css/*.css");
	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(pluginWebc,{
		components: "src/_includes/webc/**/*.webc",
	});

	return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  }
};