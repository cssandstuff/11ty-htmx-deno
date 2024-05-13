import { Context, send } from "https://deno.land/x/oak@14.2.0/mod.ts";

async function pathExists(path: string) {
  try {
    const stats = await Deno.lstat(path);
    return (stats.isDirectory || stats.isFile) && stats;
  } catch (e) {
    if (e && e instanceof Deno.errors.NotFound) {
      console.log("no file or folder routes");
      return false;
    } else {
      console.log("lonely");
      return false;
    }
  }
}

function hasTrailingSlash(str: string) {
  return str.endsWith("/");
}

export const staticFileRoutes = async (ctx: Context, next: () => void) => {
  
  const path = `${Deno.cwd()}/_site${ctx.request.url.pathname}`;
  const pathType = (await pathExists(path)) as unknown as Deno.FileInfo;

  if (pathType?.isFile) {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/_site`,
    });
  } else if (pathType?.isDirectory) {

    // dont want urls without trailing slashes thanks.
    if (!hasTrailingSlash(ctx.request.url.pathname)) {
      return await next();
    }

    const withExtension = `${ctx.request.url.pathname}index.html`;
    await send(ctx, withExtension, {
      root: `${Deno.cwd()}/_site`,
    });
  } else {
    await next();
  }
};
