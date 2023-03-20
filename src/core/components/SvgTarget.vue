<template>
  <div>
    <component
      :is="target"
      :width="width"
      :color1="color1"
      :height="height"
    ></component>
  </div>
</template>

<script>
import * as footer from "@assets/svg/footer/footerImport";
import * as general from "@assets/svg/general/generalImport";
import * as pricing from "@assets/svg/pricing/pricingImport";
import * as platforms from "@assets/svg/products/platforms/platformsImport";
import * as systems from "@assets/svg/products/systems/systemsImport";
import * as experiences from "@assets/svg/products/experiences/experiencesImport";
import * as tools from "@assets/svg/products/tools/toolsImport";
import * as wallet from "@assets/icons/Wallet/walletImport";
import * as iconsOld from "@assets/icons/iconsOldImport";

export default {
  components: {
    ...footer,
    ...general,
    ...pricing,
    ...platforms,
    ...systems,
    ...experiences,
    ...tools,
    ...wallet,
    ...iconsOld,
  },
  props: ["target", "width", "color1", "height"],
};
</script>
