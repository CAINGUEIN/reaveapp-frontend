<template>
  <div>
    <div v-for="typeTicket in tickets" class="m-auto">
      <div v-if="typeTicket.type === 'Sitting'" class="flex">
        <div v-for="(ligne, indexRow) in typeTicket.row" class="space-y-2">
          <button
            v-for="(seat, indexColumn) in typeTicket.column"
            :style="'background: #' + typeTicket.color"
            class="space-x-1 rounded-2xl w-12 h-7 flex"
            :class="
              verifyTicketFree(indexRow, indexColumn, typeTicket.cathegory)
            "
            @click.prevent="
              verifySoldable(indexRow, indexColumn, typeTicket.cathegory)
                ? ''
                : addTicket(indexRow, indexColumn, typeTicket)
            "
          >
            <p class="m-auto text-black">{{ indexRow + "-" + indexColumn }}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          this.listTicket[index].ticket.cathegory === ticket.cathegory
        ) {
          return this.$emit("remove", index);
        }
      }
      this.$emit("push", data);
    },
    verifyTicketFree(verifRow, verifColumn, verifCathegory) {
      for (let index = 0; index < this.listTicket.length; index++) {
        if (
          this.listTicket[index].row === verifRow &&
          this.listTicket[index].column === verifColumn &&
          this.listTicket[index].ticket.cathegory === verifCathegory
        ) {
          return "border-2 border-Green opacity-60";
        }
      }
      for (let index = 0; index < this.tickets.length; index++) {
        if (this.tickets[index].cathegory === verifCathegory) {
          for (
            let index2 = 0;
            index2 < this.tickets[index].soldTickets.length;
            index2++
          ) {
            if (
              this.tickets[index].soldTickets[index2].row === verifRow &&
              this.tickets[index].soldTickets[index2].column === verifColumn
            ) {
              return "border-2 border-Gravel opacity-60 cursor-not-allowed";
            }
          }
        }
      }
    },
    verifySoldable(verifRow, verifColumn, verifCathegory) {
      for (let index = 0; index < this.tickets.length; index++) {
        if (this.tickets[index].cathegory === verifCathegory) {
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
};
</script>

<style lang="scss" scoped></style>
