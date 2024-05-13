# 11ty + Htmx + Deno starter.

Now that Eleventy supports ESM (from version 3.x), it means we can use it in places we couldn't previously.

## Deno

Deno is a fast, secure and great alternative to Node and now supports most of the node ecosystem, so it seems like a great time to try and bring the two together in a starter project, and that's exactly what this is. Deno.deploy is also a super great place to try out ideas and has native key-pair database for doing server-side like things.

## Htmx

Not really neccessary, but I like what this project sets out to acheive and it pairs great with Eleventy... you can do client side routing pretty easily with minimal changes to your markup.

### Notes about WebC

At the time of writing WebC has only partial support at the moment when running in Deno, using attributes like @content etc seem to fail, so I've paired my WebC usage back to just the stuff that works. Hopefully there'll soon be a WebC release that is also ESM in which case it should all just work. In any case, nunjucks just works and you can still add things to a css bundle per file, so the only real thing I miss from using WebC is css scoping.

### the nolayout template

I wanted to see if I could run 11ty twice over my build to essentially generate two sets of html files - one for full page refreshes, and one for htmx-requests. The beauty of 11ty is that you can do this relatively easily by running the build twice and just setting an Environment variable so that the chosen templates are different each time. In reality I didn't really need to do this as in htmx you can select which part of the full response you want to use, but it was just an itch I had to scratch, so I made 11ty export two versions of every page an index.html (full page) and a slim.html (just essential content).

