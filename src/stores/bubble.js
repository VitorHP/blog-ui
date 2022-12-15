import { defineStore } from "pinia";

export const useBubbleStore = defineStore("bubble", () => {
  return {
    posts: [
      {
        text: "this is a small post",
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
        text: "this is a small post",
        when: "Há 4 meses",
      },
    ],
  };
});
