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
          right: "custom1,custom2,addEventButton dayGridMonth,timeGridWeek,timeGridDay",
        },
        selectable: true,
        navLinks: true,
        nowIndicator: true,
        dateClick: function (info) {
          alert("clicked " + info.dateStr);
        },
        select: function (info) {
          alert("selected " + info.startStr + " to " + info.endStr);
        },
        customButtons: {
          custom1: {
            text: "custom 1",
            click: function () {
              alert("clicked custom button 1!");
            },
          },
          custom2: {
            text: "custom 2",
            click: function () {
              alert("clicked custom button 2!");
            },
          },
          addEventButton: {
            text: "add event...",
            click: function () {
              var dateStr = prompt("Enter a date in YYYY-MM-DD format");
              var date = new Date(dateStr + "T00:00:00"); // will be in local time

              if (!isNaN(date.valueOf())) {
                // valid?
                calendar.addEvent({
                  title: "dynamic event",
                  start: date,
                  allDay: true,
                });
                alert("Great. Now, update your database...");
              } else {
                alert("Invalid date.");
              }
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
