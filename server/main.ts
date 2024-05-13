import { Application, Router, staticFileRoutes, Status } from "./deps.ts";

const app = new Application();
const router = new Router();

// checks for static routes (real html files generated by 11ty in the _site directory) and uses them if they exist
app.use(staticFileRoutes);
app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "404 - These aren't the droids you're looking for";
  ctx.response.status = Status.NotFound;
});

app.addEventListener("listen", () => {
  console.log("💖Server started");
});

await app.listen({ port: 8000 });
