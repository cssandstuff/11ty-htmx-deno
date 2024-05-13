// You can loop through KV content so that its available for Eleventy which is kind of neat.
// At the moment this is local only.
const kv = await Deno.openKv();

type Likes = {
  value: {
    likes: number;
  }
}

const currentLikes = await kv.get(["likes"]) as Likes;
const likes = currentLikes?.value?.likes ?? 0;


const data = `export default {
  likes: ${likes}
}`;

await Deno.writeTextFile("./src/_data/likes.js", data);