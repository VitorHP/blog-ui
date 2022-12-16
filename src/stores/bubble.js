import { defineStore } from "pinia";

export const useBubbleStore = defineStore("bubble", {
  state: () => {
    return {
      posts: [
        {
          text: "this is a small post",
          when: "Há 4 meses",
        },
        {
          text: "this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much",
          when: "Há 4 meses",
        },
        {
          text: "this is a small post",
          when: "Há 4 meses",
        },
        {
          src: "images/image3.jpg",
          when: "Há 4 meses",
        },
        {
          text: "this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much",
          when: "Há 4 meses",
        },
        {
          text: "this is a small post",
          when: "Há 4 meses",
        },
        {
          src: "images/image1.jpg",
          when: "Há 4 meses",
        },
        {
          text: "this is a small post",
          when: "Há 4 meses",
        },
        {
          text: "this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much",
          when: "Há 4 meses",
        },
        {
          text: "this is a small post",
          when: "Há 4 meses",
        },
        {
          text: "this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much this is a very very big post man this one is really big ain't it? what do you think? what a post. yeah maybe not so much",
          when: "Há 4 meses",
        },
        {
          src: "images/image2.jpg",
          when: "Há 4 meses",
        },
        {
          text: "this is a small post",
          when: "Há 4 meses",
        },
      ],
    };
  },
  getters: {
    typedPosts: (state) => {
      return state.posts.map((post) => ({
        ...post,
        type: post.text ? "Text" : "Image",
      }));
    },
  },
  actions: {
    createPost(value) {
      this.posts.unshift({ text: value, when: "Agora mesmo" });
    },
  },
});
