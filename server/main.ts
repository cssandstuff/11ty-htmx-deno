import { Application, Router } from "@oak/oak";

const app = new Application();

// First we try to serve static files from the _site folder. If that fails, we
// fall through to the router below.
app.use(async (ctx, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/_site`,
      index: "index.html",
    });
  } catch {
    next();
  }
});

const router = new Router();

// After creating the router, we can add it to the app.
app.use(router.routes());
app.use(router.allowedMethods());

console.log("✨ Server ready! Browse at http://localhost:8000 ✨");

await app.listen({ port: 8000 });