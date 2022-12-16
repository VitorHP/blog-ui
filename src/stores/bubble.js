import { defineStore } from "pinia";

export const useBubbleStore = defineStore("bubble", {
  state: () => {
    return {
      posts: [
        {
          decoration: "vine-top-left",
          content: [
            {
              type: "bio",
              data: {
                picture: "images/bio.jpg",
                name: "Vitor Bittencourt",
                role: "Illustrator | Concept Artist",
                email: "vitorhp2@gmail.com",
                socialLinks: {
                  instagram: "https://www.instagram.com/sambarilov_/",
                  artstation: "https://www.artstation.com/sambarilov",
                  twitter: "https://twitter.com/sambarilov",
                },
              },
              when: "Agora a pouco",
            },
          ],
        },
        {
          content: [
            {
              data: "images/image1.jpg",
              type: "image",
            },
            {
              data: "this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much",
              type: "text",
            },
            {
              data: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/aeWyp2vXxqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              type: "video",
            },
          ],
        },
      ],
    };
  },
  getters: {
    typedPosts: (state) => {
      return state.posts.map((post) => ({
        ...post,
      }));
    },
  },
  actions: {
    createPost(value) {
      this.posts.unshift({ text: value, when: "Agora mesmo" });
    },
  },
});
