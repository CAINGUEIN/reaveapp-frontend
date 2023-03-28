<template>
  <div class="w-[732px] mx-auto">
    <div class="my-9">
      <div class="flex justify-between">
        <p class="font-bold text-xl text-white">Jobs (5)</p>
        <p class="font-normal text-sm text-LightGrey">
          View all Hiring Positions
        </p>
      </div>
      <div class="grid grid-cols-2 px-4 justify-between mt-6">
        <div class="flex">
          <div>
            <img
              src="/img/KarmineCorp/KC_pp.png"
              alt=""
              class="rounded-md h-[50px] w-[50px]"
            />
          </div>
          <div class="ml-3">
            <p class="text-white font-bold text-base">Partnerships Manager</p>
            <p class="text-LightGrey text-base font-normal">Paris, France</p>
          </div>
        </div>
        <div class="flex">
          <div>
            <img
              src="/img/KarmineCorp/KC_pp.png"
              alt=""
              class="rounded-md h-[50px] w-[50px]"
            />
          </div>
          <div class="ml-3">
            <p class="text-white font-bold text-base">Community Manager</p>
            <p class="text-LightGrey text-base font-normal">Paris, France</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-0.5 bg-LightRock"></div>
    <div class="my-9">
      <div>
        <p class="font-bold text-xl text-white">Members (18)</p>
      </div>
      <div class="flex justify-between mt-6">
        <div
          class="flex items-center"
          @click="LolState === true ? (LolState = false) : (LolState = true)"
        >
          <SvgTarget target="LOLIcon"></SvgTarget>
          <div class="w-[128px] h-0.5 bg-LightRock mx-4"></div>
          <SvgTarget
            target="Chevron"
            :class="
              LolState === true
                ? 'transition-all ease-in-out'
                : 'transition-all ease-in-out rotate-180'
            "
          ></SvgTarget>
        </div>
        <p class="font-normal text-sm text-LightGrey">
          View League of Legends Career
        </p>
      </div>
      <div
        class="relative text-gray-400 border-White"
        :class="
          LolState
            ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 h-auto'
            : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 h-0'
        "
      >
        <div class="grid grid-cols-5 gap-y-6 justify-between mt-6">
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Cabochard.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Cabochard</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Lucas Simon-Meslet</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Top Laner</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Skeanz.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Skeanz</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Duncan Marquet</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Jungler</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Saken.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Saken</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Lucas Fayard</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Mid Laner</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Kaori.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Kaori</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Muhammed Şentürk</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Bot Laner</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/whiteinn.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">whiteinn</p>
            <p class="mt-1 text-Gravel text-xs font-bold">
              Alexandru Kolozsvari
            </p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Support</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Nerroh.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Nerroh</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Stefan Pereira</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Head Coach</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Nalkya.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Nalkya</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Clément Guillemard</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">
              Strategy Coach
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Reha.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Reha</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Rehareha Ramanana</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">
              Assistant Coach
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/BenWSKY.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">BenWSKY</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Benjamin Quandalle</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Manager</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-6">
        <div
          class="flex items-center"
          @click="ValoState === true ? (ValoState = false) : (ValoState = true)"
        >
          <SvgTarget target="VALOIcon"></SvgTarget>
          <div class="w-[128px] h-0.5 bg-LightRock mx-4"></div>
          <SvgTarget
            target="Chevron"
            :class="
              ValoState === true
                ? 'transition-all ease-in-out'
                : 'transition-all ease-in-out rotate-180'
            "
          ></SvgTarget>
        </div>
        <p class="font-normal text-sm text-LightGrey">View Valorant Career</p>
      </div>
      <div
        class="relative text-gray-400 border-White"
        :class="
          ValoState
            ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 h-auto'
            : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 h-0'
        "
      >
        <div class="grid grid-cols-5 gap-y-6 justify-between mt-6">
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Scream.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Scream</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Adil Benrlitom</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Captain</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/sh1n.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">sh1n</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Ryad Ensaad</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Initiator</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/mikee.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">mikee</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Michael Lim</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Sentinel</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Newzera.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Newzera</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Alexis Humbert</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Initiator</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Nivera.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Nivera</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Nabil Benrlitom</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Controller</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Amilwa.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Amilwa</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Amine Saidi</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Initiator</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/xms.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">xms</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Alexandre Forté</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Sentinel</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/pm.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">pm</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Arthur Guillermet</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">Head Coach</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/ZEISH.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">ZE1SH</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Ahmed El Sheikh</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">
              Assistant Coach
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-6">
        <div
          class="flex items-center"
          @click="
            staffState === true ? (staffState = false) : (staffState = true)
          "
        >
          <p class="text-LightGrey text-base font-bold">Staff</p>
          <div class="w-[128px] h-0.5 bg-LightRock mx-4"></div>
          <SvgTarget
            target="Chevron"
            :class="
              staffState === true
                ? 'transition-all ease-in-out'
                : 'transition-all ease-in-out rotate-180'
            "
          ></SvgTarget>
        </div>
        <p class="font-normal text-sm text-LightGrey">View Orgchart</p>
      </div>
      <div
        class="relative text-gray-400 border-White"
        :class="
          staffState
            ? 'transition-all ease-in-out duration-200 transform opacity-100 scale-100 h-auto'
            : 'transition-all ease-in-out duration-100 transform opacity-0 scale-0 h-0'
        "
      >
        <div class="grid grid-cols-5 gap-y-6 justify-between mt-6">
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Kameto.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Kameto</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Kamel Kebir</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">
              Co-Owner & President
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Prime.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Prime</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Amine Mekri</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">
              Co-Owner & Director
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Kotei.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Kotei</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Zouhaïr Darji</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">
              Co-Owner & COO
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/ArthurPerticoz.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Arthur Perticoz</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">CEO</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="/img/KarmineCorp/Erwin.png" alt="" />
            <p class="mt-1 text-white text-sm font-bold">Erwin</p>
            <p class="mt-1 text-Gravel text-xs font-bold">Erwin Hamayada</p>
            <p class="mt-2 text-LightGrey text-sm font-medium">
              Lead Content Producer
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-0.5 bg-LightRock"></div>
    <div class="my-9">
      <div class="flex justify-between">
        <p class="font-bold text-xl text-white">Sponsors (7)</p>
      </div>
      <div class="grid grid-cols-5 px-4 gap-y-6 justify-between mt-6">
        <div class="flex flex-col items-center text-center">
          <img src="/img/KarmineCorp/Orange.png" alt="" />
          <p class="mt-2 text-white text-sm font-bold">Orange</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <img src="/img/KarmineCorp/Logitech.png" alt="" />
          <p class="mt-2 text-white text-sm font-bold">Logitech</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <img src="/img/KarmineCorp/Ekwateur.png" alt="" />
          <p class="mt-2 text-white text-sm font-bold">Ekwateur</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <img src="/img/KarmineCorp/ChupaChups.png" alt="" />
          <p class="mt-2 text-white text-sm font-bold">Chupa Chups</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <img src="/img/KarmineCorp/Michelin.png" alt="" />
          <p class="mt-2 text-white text-sm font-bold">Michelin</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <img src="/img/KarmineCorp/Samsung.png" alt="" />
          <p class="mt-2 text-white text-sm font-bold">Samsung</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <img src="/img/KarmineCorp/Rhinoshield.png" alt="" />
          <p class="mt-2 text-white text-sm font-bold">Rhinoshield</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <img src="/img/KarmineCorp/DirectAssurance.png" alt="" />
          <p class="mt-2 text-white text-sm font-bold">Direct Assurance</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgTarget from "@components/SvgTarget.vue";

export default {
  components: { SvgTarget },
  data() {
    return {
      LolState: true,
      ValoState: true,
      staffState: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
