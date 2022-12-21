<template>
  <div>
    <p class="flex text-H4 text-White font-black leading-none mt-4">
      {{ data.label }}
    </p>
    <div class="flex space-x-6">
      <div class="flex mt-3 space-x-2">
        <div class="flex flex-col">
          <Menu as="div" class="relative" v-slot="{ open }">
            <div>
              <MenuButton class="flex max-w-xs items-center rounded-full"
                ><button
                  class="text-sm py-2 px-3 w-44 rounded-2xl font-normal items-center flex justify-between cursor-pointer border-2"
                  :class="!open ? 'border-DarkRock' : 'border-LightRock'"
                >
                  <div class="text-left">
                    <label class="font-bold text-Gravel" for="">Month</label>
                    <p class="font-bold text-White">
                      {{ month === "" ? "choice month" : month }}
                    </p>
                  </div>
                  <span class="ml-2"
                    ><ChevronUpIcon
                      class="h-7"
                      :class="
                        open === false
                          ? 'transition-all ease-in-out'
                          : 'transition-all ease-in-out rotate-180'
                      "
                  /></span>
                </button>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-for="(item, index) in months" :key="item">
                  <button
                    class="text-White block px-4 py-2 text-sm"
                    @click="(month = item), updateDaysInMonth(index)"
                  >
                    {{ item }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="flex flex-col">
          <Menu as="div" class="relative" v-slot="{ open }">
            <div>
              <MenuButton class="flex max-w-xs items-center rounded-full"
                ><button
                  class="text-sm py-2 px-3 w-24 rounded-2xl font-normal items-center flex justify-between cursor-pointer border-2"
                  :class="!open ? 'border-DarkRock' : 'border-LightRock'"
                >
                  <div class="text-left">
                    <label class="font-bold text-Gravel" for="">Day</label>
                    <p class="font-bold text-White">
                      {{ day === "" ? "choice month" : day }}
                    </p>
                  </div>
                  <span class="ml-2"
                    ><ChevronUpIcon
                      class="h-7"
                      :class="
                        open === false
                          ? 'transition-all ease-in-out'
                          : 'transition-all ease-in-out rotate-180'
                      "
                  /></span>
                </button>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-96 overflow-y-auto scrollbarV overflow-x-hidden"
              >
                <MenuItem v-for="item in daysInMonth" :key="item">
                  <button
                    class="text-White block px-4 py-2 text-sm"
                    @click="day = item"
                  >
                    {{ item }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="flex flex-col">
          <Menu as="div" class="relative" v-slot="{ open }">
            <div>
              <MenuButton class="flex max-w-xs items-center rounded-full"
                ><button
                  class="text-sm py-2 px-3 w-32 rounded-2xl font-normal items-center flex justify-between cursor-pointer border-2"
                  :class="!open ? 'border-DarkRock' : 'border-LightRock'"
                >
                  <div class="text-left">
                    <label class="font-bold text-Gravel" for="">Year</label>
                    <p class="font-bold text-White">
                      {{ year === "" ? "choice month" : year }}
                    </p>
                  </div>
                  <span class="ml-2"
                    ><ChevronUpIcon
                      class="h-7"
                      :class="
                        open === false
                          ? 'transition-all ease-in-out'
                          : 'transition-all ease-in-out rotate-180'
                      "
                  /></span>
                </button>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="
                  data.yearsBefore + data.yearAfter > 9
                    ? 'overflow-y-auto scrollbarV overflow-x-hidden h-96'
                    : ''
                "
              >
                <MenuItem v-for="item in data.yearsBefore" :key="item">
                  <button
                    class="text-White block px-4 py-2 text-sm"
                    @click="year = $dayjs().year() + item"
                  >
                    {{ $dayjs().year() + (item - data.yearsBefore) }}
                  </button>
                </MenuItem>
                <div v-if="data.yearsBefore === 0">
                  <MenuItem :key="$dayjs().year()">
                    <button
                      class="text-White block px-4 py-2 text-sm"
                      @click="year = $dayjs().year()"
                    >
                      {{ $dayjs().year() }}
                    </button>
                  </MenuItem>
                </div>

                <div v-if="data.yearAfter !== 0">
                  <MenuItem v-for="item in data.yearAfter" :key="item">
                    <button
                      class="text-White block px-4 py-2 text-sm"
                      @click="
                        (year = $dayjs().year() + item),
                          updateDaysInMonth(this.monthIndex)
                      "
                    >
                      {{ $dayjs().year() + item }}
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
      <div class="flex mt-3 space-x-2">
        <div class="flex flex-col">
          <Menu as="div" class="relative" v-slot="{ open }">
            <div>
              <MenuButton class="flex max-w-xs items-center rounded-full"
                ><button
                  class="text-sm py-2 px-3 w-24 rounded-2xl font-normal items-center flex justify-between cursor-pointer border-2"
                  :class="!open ? 'border-DarkRock' : 'border-LightRock'"
                >
                  <div class="text-left">
                    <label class="font-bold text-Gravel" for="">Hour</label>
                    <p class="font-bold text-White">
                      {{ hour === "" ? "choice month" : hour }}
                    </p>
                  </div>
                  <span class="ml-2"
                    ><ChevronUpIcon
                      class="h-7"
                      :class="
                        open === false
                          ? 'transition-all ease-in-out'
                          : 'transition-all ease-in-out rotate-180'
                      "
                  /></span>
                </button>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-96 overflow-y-auto scrollbarV overflow-x-hidden"
              >
                <MenuItem v-for="item in 24" :key="item">
                  <button
                    class="text-White block px-4 py-2 text-sm"
                    @click="hour = item"
                  >
                    {{ item }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="flex flex-col">
          <Menu as="div" class="relative" v-slot="{ open }">
            <div>
              <MenuButton class="flex max-w-xs items-center rounded-full"
                ><button
                  class="text-sm py-2 px-3 w-32 rounded-2xl font-normal items-center flex justify-between cursor-pointer border-2"
                  :class="!open ? 'border-DarkRock' : 'border-LightRock'"
                >
                  <div class="text-left">
                    <label class="font-bold text-Gravel" for="">Minute</label>
                    <p class="font-bold text-White">
                      {{
                        minute.toString().length === 1 ? "0" + minute : minute
                      }}
                    </p>
                  </div>
                  <span class="ml-2"
                    ><ChevronUpIcon
                      class="h-7"
                      :class="
                        open === false
                          ? 'transition-all ease-in-out'
                          : 'transition-all ease-in-out rotate-180'
                      "
                  /></span>
                </button>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-LightRock py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-96 overflow-y-auto scrollbarV overflow-x-hidden"
              >
                <MenuItem v-for="item in 60" :key="item">
                  <button
                    class="text-White block px-4 py-2 text-sm"
                    @click="minute = item - 1"
                  >
                    {{
                      (item - 1).toString().length === 1
                        ? "0" + (item - 1)
                        : item - 1
                    }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//yearsBefore et yearAfter doit etre egal a zero au minimum

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronUpIcon,
  },
  props: ["data"],
  data() {
    return {
      month: "January",
      monthIndex: 0,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      day: 31,
      daysInMonth: 31,
      year: "",
      hour: 12,
      minute: 0,
    };
  },
  methods: {
    updateDaysInMonth(value) {
      this.monthIndex = value;
      this.daysInMonth = this.$dayjs(
        this.year + "-" + (value + 1)
      ).daysInMonth();
      console.log(this.daysInMonth, this.day);
      if (this.daysInMonth < this.day) {
        this.day = this.daysInMonth;
      }
    },
    setDate() {
      return (
        this.year +
        "-" +
        this.numberLenght(this.monthIndex + 1) +
        "-" +
        this.numberLenght(this.day) +
        "T" +
        this.numberLenght(this.hour) +
        ":" +
        this.numberLenght(this.minute) +
        ":00.000Z"
      );
    },
    numberLenght(value) {
      return value.toString().length === 1 ? "0" + value : value;
    },
  },
  watch: {
    day() {
      this.$emit("update:modelValue", this.setDate());
    },
    monthIndex() {
      this.$emit("update:modelValue", this.setDate());
    },
    year() {
      this.$emit("update:modelValue", this.setDate());
    },
    hour() {
      this.$emit("update:modelValue", this.setDate());
    },
    minute() {
      this.$emit("update:modelValue", this.setDate());
    },
  },
  mounted() {
    this.year = this.$dayjs().year();
  },
};
</script>
