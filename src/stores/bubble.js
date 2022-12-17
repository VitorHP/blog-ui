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
              data: "Exercício para a aula de character design da ICS. Era pra ser só um guerreiro besouro genérico, mas eu achei que valia a pena explorar alguma coisa a mais.",
              type: "text",
            },
            {
              data: "images/kabuto/kabuto-1.jpg",
              type: "image",
            },
            {
              data: "images/kabuto/kabuto-2.jpg",
              type: "image",
            },
            {
              data: "Parei pra pensar um pouquinho e cheguei numa história onde ele seria uma espécie de espadachim de um shogunato de besouros que foi arruinado por aranhas. Então ele seria um caçador de aranhas.",
              type: "text",
            },
            {
              data: "Com isso aí na cabeça eu comecei a explorar umas opções de vestimenta que contassem melhor a história.",
              type: "text",
            },
            {
              data: "images/kabuto/kabuto-3.jpg",
              type: "image",
            },
            {
              data: "Escolhida a segunda a opção eu decidir que o colar que ele usa seria feito de ovos das aranhas que ele mata e as roupas feitas de teias. Eu tb dei uma lida sobre que animais são predadores de aranha e fiz uma espada com tema de vespa e outra de escorpião.",
              type: "text",
            },
            {
              data: "images/kabuto/kabuto-4.jpg",
              type: "image",
            },
            {
              data: "E xablau",
              type: "text",
            },
            {
              data: "images/kabuto/kabuto-final.jpg",
              type: "image",
            },
            {
              data: "Valeu valeu o/",
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
