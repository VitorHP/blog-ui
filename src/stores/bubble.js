import { defineStore } from "pinia";

export const useBubbleStore = defineStore("bubble", {
  state: () => {
    return {
      posts: [
        {
          decoration: "/images/decorations/vine.png",
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
              data: "images/sketches/title.png",
              type: "title",
            },
            {
              data: "Anatomia esquisita edition",
              type: "text",
            },
            {
              data: "images/sketches/image2.jpg",
              type: "image",
            },
            {
              data: "images/sketches/image3.jpg",
              type: "image",
            },
            {
              data: "images/sketches/image1.jpg",
              type: "image",
            },
          ],
        },
        {
          decoration: "/images/kabuto/decoration.png",
          content: [
            {
              data: "images/kabuto/title.png",
              type: "title",
            },
            {
              data: "Exercício para a aula de character design da ICS. Era pra ser só um guerreiro besouro genérico, mas curti tanto que resolvi tentar buscar alguma coisa a mais.",
              type: "text",
            },
            {
              data: "images/kabuto/kabuto.png",
              type: "image",
            },
            {
              data: "this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much",
              type: "text",
            },
            {
              data: "images/kabuto/eggs.png",
              type: "image",
            },
          ],
        },
        {
          content: [
            {
              data: "images/knight_heart/group.jpg",
              type: "image",
            },
            {
              data: "Coração de cavaleiro é bom demais. Quem não gosta tá maluco",
              type: "text",
            },
            {
              data: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/_KzsTKqTq1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              type: "video",
            },
            {
              data: "Tum tum pla",
              type: "text",
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
