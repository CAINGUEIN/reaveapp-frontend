<template>
  <div>
    <div name="identity" class="mt-[56px] flex flex-col">
      <p class="font-medium text-[32px] text-White">Appearance</p>
      <div class="bg-Gravel mt-4 h-1 rounded-full w-[730px]"></div>
      <div class="flex mt-6 mb-[78px]">
        <div name="rightContent" class="w-[661px]">
          <div class="bg-Gravel w-[661px] h-[150px] rounded-2xl">
            <div
              class="w-[661px] h-[150px] rounded-2xl overflow-hidden cursor-pointer"
              @click="openModal('banner')"
            >
              <ImgFormated
                :key="store.bannerKey"
                :size="'status'"
                :type="'banner'"
                class="h-auto"
              />

              <div
                class="absolute top-0 flex z-10 m-auto text-White w-[661px] h-[150px] bg-opacity-50 hover:bg-opacity-75 bg-black"
              >
                <p class="m-auto font-black text-White">Modify</p>
              </div>
            </div>
            <div class="absolute rounded-full z-20 left-8 -bottom-8">
              <ImgFormated
                :key="store.avatarKey"
                :size="'xl'"
                :type="'avatar'"
                class="rounded-full left-8 -bottom-8"
              />
              <div
                @click="openModal('avatar')"
                class="cursor-pointer absolute rounded-full flex z-30 m-auto text-White left-8 -bottom-8 h-[120px] w-[120px] bg-opacity-50 hover:bg-opacity-75 bg-black"
              >
                <p class="m-auto font-black text-White">Modify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//component
import ImgFormated from "@components/img/ImgFormated.vue";
//tool
import useStoreAuth from "@stores/auth";
export default {
  data() {
    const store = useStoreAuth();
    return {
      store,
      errors: "",
    };
  },
  methods: {
    openModal(e) {
      this.$emit("action", e);
    },
  },
  components: { ImgFormated },
};
</script>
