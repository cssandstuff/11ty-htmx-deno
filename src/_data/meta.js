export default {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: Deno.env.get("Host") || "http://localhost:8080",
  siteName: "11ty deno htmx",
  siteDescription: "",
  authorName: "",
  twitterUsername: "", // no `@`
};