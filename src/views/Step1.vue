<template>
  <div>
    <QuestionContainer
      id_number="step1"
      question_detail="お客様の情報を入力してください"
      step_number="STEP1"
    >
      <section>
        <p class="text-primary">-性別-</p>
        <RadioBtn radio_btn_name="step1-q1" :options="options"></RadioBtn>

        <p class="mt-5 text-primary">-生年月日-</p>
        <select v-model="year">
          <option v-for="imperialEra in yearsArr" :key="imperialEra.year">
            {{ imperialEra.label }}
          </option></select
        >年
        <select v-model="month">
          <option v-for="month in monthsArr" :key="month">
            {{ month }}
          </option></select
        >月
        <select v-model="date">
          <option v-for="date in datesArr" :key="date">
            {{ date }}
          </option></select
        >日
      </section>
    </QuestionContainer>
    
    <div class="text-center">
      <GoNextBtn :step_number="nextStepNumber" />
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import RadioBtn from "../components/RadioBtn.vue";
export default {
  name: "step1",
  components: { GoNextBtn, QuestionContainer, RadioBtn },
  data() {
    return {
      nextStepNumber: "STEP2",
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
  },
};
</script>