<template>
  <div>
    <div v-for="typeTicket in tickets" class="m-auto">
      <div
        v-if="typeTicket.type === 'Sitting'"
        class="flex justify-center gap-2"
      >
        <div
          v-for="(ligne, indexRow) in typeTicket.row"
          class="flex flex-col justify-center"
        >
          <div
          class="relative h-[35px] "
            v-for="(seat, indexColumn) in typeTicket.column"
            @click.prevent="
              verifySoldable(indexRow, indexColumn, typeTicket.category)
                ? ''
                : addTicket(indexRow, indexColumn, typeTicket)
            "
          >
            <Seat
              :color1="
                verifyTicketColor(indexRow, indexColumn, typeTicket.category, typeTicket.color)
              "
              :width="30"
              :height="35"
              class="-rotate-90"
              :class="
                verifyTicketClass(indexRow, indexColumn, typeTicket.category)
              "
            ></Seat>
            <p class="text-black text-xs bottom-1 absolute">
              {{ indexRow + " " + indexColumn }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Seat from "@assets/icons/Seat.vue";

export default {
  props: ["tickets", "listTicket"],
  methods: {
    addTicket(row, column, ticket) {
      let data = { row: row, column: column, ticket: ticket };
      if (this.listTicket.length === 0) {
        return this.$emit("push", data);
      }
      for (let index = 0; index < this.listTicket.length; index++) {
        console.log(this.listTicket[index]);
        if (
          this.listTicket[index].row === row &&
          this.listTicket[index].column === column &&
          this.listTicket[index].ticket.category === ticket.category
        ) {
          return this.$emit("remove", index);
        }
      }
      this.$emit("push", data);
    },
    verifyTicketClass(verifRow, verifColumn, verifcategory) {
      let verifTicket = false;
      let verifListTicket = false;
      for (let index = 0; index < this.listTicket.length; index++) {
        if (
          this.listTicket[index].row === verifRow &&
          this.listTicket[index].column === verifColumn &&
          this.listTicket[index].ticket.category === verifcategory
        ) {
          return "cursor-pointer";
        }
      }
      for (let index = 0; index < this.tickets.length; index++) {
        if (this.tickets[index].category === verifcategory) {
          for (
            let index2 = 0;
            index2 < this.tickets[index].soldTickets.length;
            index2++
          ) {
            if (
              this.tickets[index].soldTickets[index2].row === verifRow &&
              this.tickets[index].soldTickets[index2].column === verifColumn
            ) {
              return "opacity-60 cursor-not-allowed";
            }
          }
        }
      }
      return "cursor-pointer"
    },
    verifyTicketColor(verifRow, verifColumn, verifcategory, color) {
      let verifTicket = false;
      let verifListTicket = false;
      for (let index = 0; index < this.listTicket.length; index++) {
        if (
          this.listTicket[index].row === verifRow &&
          this.listTicket[index].column === verifColumn &&
          this.listTicket[index].ticket.category === verifcategory
        ) {
          return "#CD6DFB" ;
        }
      }
      for (let index = 0; index < this.tickets.length; index++) {
        if (this.tickets[index].category === verifcategory) {
          for (
            let index2 = 0;
            index2 < this.tickets[index].soldTickets.length;
            index2++
          ) {
            if (
              this.tickets[index].soldTickets[index2].row === verifRow &&
              this.tickets[index].soldTickets[index2].column === verifColumn
            ) {
              return "#" + color;
            }
          }
        }
      }
      return "#" + color;
    },
    verifySoldable(verifRow, verifColumn, verifcategory) {
      for (let index = 0; index < this.tickets.length; index++) {
        if (this.tickets[index].category === verifcategory) {
          for (
            let index2 = 0;
            index2 < this.tickets[index].soldTickets.length;
            index2++
          ) {
            if (
              this.tickets[index].soldTickets[index2].row === verifRow &&
              this.tickets[index].soldTickets[index2].column === verifColumn
            ) {
              return true;
            }
          }
        }
      }
    },
  },
  components: { Seat },
};
</script>

<style scoped>
</style>
