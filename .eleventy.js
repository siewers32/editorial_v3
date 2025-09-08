import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { RenderPlugin } from "@11ty/eleventy";
import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItContainer from "markdown-it-container";
import pluginTOC from 'eleventy-plugin-toc'; 
import CleanCSS from "clean-css";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import path from "node:path";


const markdownItOptions = {
    html:true,
    breaks: false,
}
const markdownItAnchorOptions = {
    permalink: false,
    tabIndex: false,
}

const markdownItContainerOptions = [
    "section",
]

const markdownLib = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
)

markdownItContainerOptions.forEach(name => {
    markdownLib.use(markdownItContainer, name);
});



export default function(eleventyConfig) {
        // Order matters, put this at the top of your configuration file.
        // This is relative to your input directory!
    eleventyConfig.setServerOptions({
		port: 8081
    });

    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(RenderPlugin);

    eleventyConfig.addPlugin(pluginTOC, {
        tags:['h2','h3'], 
        wrapper:'div',
        ul: true,
        flat: false
    })

    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        // output image formats
		formats: ["avif", "webp", "jpeg", "svg"]
    });

    eleventyConfig.setLibrary("md", markdownLib);


    // eleventyConfig.addCollection("pages", function(collection) {
    //     const coll = collection.getFilteredByTag("pages");
    //     for(let i = 0; i < coll.length ; i++) {
    //         const prevPost = coll[i-1];
    //         const nextPost = coll[i + 1];

    //         coll[i].data["prevPost"] = prevPost;
    //         coll[i].data["nextPost"] = nextPost;
    //     }
    //     return coll;
    // });

    eleventyConfig.addFilter("postsAscending", (collection) => {
        return collection.sort((a,b) => {
            // console.log(a.data.page.inputPath)
            if (a.data.page.inputPath > b.data.page.inputPath) return 1;
            else if (a.data.page.inputPath < b.data.page.inputPath) return -1;
            else return 0;
        })
    });
    
    eleventyConfig.addPassthroughCopy("./src/_assets");
    eleventyConfig.addPassthroughCopy("./src/_fonts");
    eleventyConfig.addPassthroughCopy("./src/_css");
    // eleventyConfig.addPassthroughCopy("manifest.json");
    // eleventyConfig.addPassthroughCopy("service-worker.js");

    eleventyConfig.addShortcode("video", (yt_id, width=640, height=480, align="left") => {
        return `<p class="lti-embed" style="text-align: ${align}; margin-top:40px; margin-bottom:0px"><strong>
        <iframe class="lti-embed" style="width:${width}px; height:${height}px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen frameborder="0" height="auto"
                src="https://www.youtube-nocookie.com/embed/${yt_id}">
            </iframe></strong></p>`
    });

    eleventyConfig.addShortcode("afbeelding", (afbeelding, width=100, height=100, align="left") => {
        return `<div class="deltionv2-addcontentarea" style="text-align:${align}; padding:40px;"><img src="/_assets/${afbeelding}" alt="${afbeelding}" style="min-width:${width}%; width: ${width}%; height: ${height}%; object-fit: cover;" /></div>`
    });

    // eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });

    return {
        pathPrefix: "//",
        // pathPrefix: "//",
        dir: {
            input: "src",
            output: "docs",
        },
    };
}