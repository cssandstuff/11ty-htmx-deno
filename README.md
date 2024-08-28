Hi! thanks for checking this out, I&rsquo;ve also written [a little bit of background](https://cssandstuff.com/writing/pairing-eleventy-with-htmx-and-deno/) about this project as well as some help [getting deno working with 11ty](https://cssandstuff.com/writing/eleventy-with-a-basic-deno-static-server-setup/).

The project is also available to view at [11ty.deno.dev](https://11ty.deno.dev/)

# 11ty + Htmx + Deno starter.

Now that Eleventy supports ESM (from version 3.x), it means we can use it in places we couldn't previously.

## Deno

Deno is a fast, secure and great alternative to Node and now supports most of the node ecosystem, so it seems like a great time to try and bring the two together in a starter project, and that's exactly what this is. Deno.deploy is also a super great place to try out ideas and has native key-pair database for doing server-side like things.

## Htmx

I like what this project sets out to achieve and it pairs great with Eleventy... you can do client side routing pretty easily with minimal changes to your markup.

### Notes about WebC

At the time of writing WebC has only partial support at the moment when running in Deno, using attributes like @content etc seem to fail, so I've paired my WebC usage back to just the stuff that works. Hopefully there'll soon be a WebC release that is also ESM in which case it should all just work. In any case, nunjucks just works and you can still add things to a css bundle per file, so the only real thing I miss from using WebC is css scoping.
