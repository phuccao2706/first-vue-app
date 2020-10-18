<template>
  <div class="mx-auto">
    <div>{{ this.formatedDate }}</div>
  </div>
</template>

<script>
import moment from "moment";

let interval;

export default {
  name: "TilThatDate",
  data() {
    return {
      date: moment(),
    };
  },
  computed: {
    formatedDate() {
      let month = moment().month();
      const day = moment().date();
      month = day > 28 ? month++ : month;

      return this.date.to(moment([2020, month, 28]));
    },
  },
  methods: {
    calculatedTime() {
      this.date = moment();
    },
  },
  created() {
    interval = setInterval(this.calculatedTime, 1000);
  },
  beforeDestroy() {
    clearInterval(interval);
  },
};
</script>
