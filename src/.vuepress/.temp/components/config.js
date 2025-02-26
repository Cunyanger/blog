import { hasGlobalComponent } from "D:/WorkSpace/MySpace/blog_theme/node_modules/vuepress-plugin-components/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/WorkSpace/MySpace/blog_theme/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/WorkSpace/MySpace/blog_theme/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/WorkSpace/MySpace/blog_theme/node_modules/vuepress-plugin-components/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
