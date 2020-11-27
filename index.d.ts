import Vue from "vue";
import tagplayer, { TagPlayerOptions } from "tagplayer";

export default class VueTagplayer extends Vue {
  static install(vue: typeof Vue): void;
  options: TagPlayerOptions;
  initTagPlayer: (player: tagplayer) => void;
}

export { tagplayer as ITagplayer };
