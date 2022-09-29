<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import list from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, list, timeGridPlugin],
        initialView: "timeGridWeek",
        height: 1310,
        headerToolbar: {
          left: "prev,today,next",
          center: "title",
          right:
            "dayGridMonth,timeGridWeek,timeGridDay",
        },
        selectable: true,
        navLinks: true,
        nowIndicator: true,
        dayMaxEvents: true,
        select: function (info) {
          console.log(info)
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
