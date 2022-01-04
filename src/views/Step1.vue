<template>
  <div id="step1">
    <h1>STEP1</h1>
    <p>お客様の情報を入力してください</p>

    <div id="question-container">
      <h2>-性別-</h2>
      <RadioBtn :name="step1Q1" :options="options"></RadioBtn>
    </div>

    <div id="question-container">
      <h2>-生年月日-</h2>
      <select id="year" v-model="year">
        <option v-for="imperialEra in yearsArr" :key="imperialEra.year">
          {{ imperialEra.label }}
        </option></select
      >年
      <select id="month" v-model="month">
        <option v-for="month in monthsArr" :key="month">
          {{ month }}
        </option></select
      >月
      <select id="date" v-model="date">
        <option v-for="date in datesArr" :key="date">
          {{ date }}
        </option></select
      >日
    </div>

    <Btn label="次に進む" href="/STEP2" @click="() => $router.push('/STEP2')" />
  </div>
</template>

<style scoped>
</style>

<script>
import RadioBtn from "../components/RadioBtn.vue";
import Btn from "../components/Btn.vue";
export default {
  name: "step1",
  components: { Btn, RadioBtn },
  data() {
    return {
      step1Q1: "step1-q1",
      year: "",
      month: "",
      date: "",
      yearsArr: [],
      monthsArr: [],
      datesArr: [],
      options: [
        {
          label: "男性",
          value: "1",
        },
        {
          label: "女性",
          value: "2",
        },
      ],
    };
  },
  mounted() {
    this.yearsArr = this.createYears();
    this.monthsArr = this.createMonths();
    this.datesArr = this.createDates();
  },
  methods: {
    createYears() {
      const yearsArr = [];
      let getNowYear = new Date().getFullYear();
      for (let i = getNowYear; i >= getNowYear - 100; i--) {
        if (i > 2018) {
          yearsArr.push({ year: i, label: `${i}年 (令和${i - 2018})` });
        } else if (i > 1988) {
          yearsArr.push({ year: i, label: `${i}年 (平成${i - 1988})` });
        } else if (i > 1925) {
          yearsArr.push({ year: i, label: `${i}年 (昭和${i - 1925})` });
        } else if (i > 1911) {
          yearsArr.push({ year: i, label: `${i}年 (大正${i - 1911})` });
        }
      }
      return yearsArr;
    },
    createMonths() {
      const monthsArr = [];
      for (let i = 1; i <= 12; i++) {
        monthsArr.push(i);
      }
      return monthsArr;
    },
    createDates() {
      const datesArr = [];
      for (let i = 1; i <= 31; i++) {
        datesArr.push(i);
      }
      return datesArr;
    },
    test() {
      this.$router.push("/STEP2");
    },
  },
};
</script>