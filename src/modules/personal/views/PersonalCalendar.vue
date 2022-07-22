<template>
<div class="flex justify-between m-4">
  <FullCalendar class="m-auto w-2/3" :options="calendarOptions" />
  <CreateEventCalendarSide class=" h-[800px]"/>
</div>
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import list from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateEventCalendarSide from "@core/components/elements/CreateEventCalendarSide.vue";
export default {
  components: {
    FullCalendar,
    CreateEventCalendarSide
},
  props: ["action"],
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, list, timeGridPlugin],
        initialView: "timeGridWeek",
        height: 1290,
        headerToolbar: {
          left: "prev,today,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        selectable: true,
        navLinks: true,
        nowIndicator: true,
        dayMaxEvents: true,
        select: (info) => this.emit(info),
      },
    };
  },
  methods: {
    emit(info) {
      this.$emit("action", info);
      console.log(info);
    },
  },
};
</script>

<style lang="scss" scoped></style>
