<template>
  <div>
    <QuestionContainer
      idNumber="step1"
      questionDetail="お客様の情報を入力してください"
      stepNumber="STEP1"
    >
      <section>
        <b-form-group label="-性別-">
          <RadioBtn :options="options" />
        </b-form-group>

        <b-form-group class="mt-5" label="-生年月日-">
          <b-form-select
            v-model="year"
            :options="yearsArr"
            class="mb-3"
          ></b-form-select>
          <b-form-select
            v-model="month"
            :options="monthsArr"
            class="mb-3"
          ></b-form-select>
          <b-form-select
            v-model="date"
            :options="datesArr"
          ></b-form-select>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <GoNextBtn :stepNumber="nextStepNumber" />
    </div>
  </div>
</template>

<script>
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import RadioBtn from "../components/RadioBtn.vue";
import dayjs from "dayjs";
dayjs.locale("ja");
const isLeapYear = require("dayjs/plugin/isLeapYear");
dayjs.extend(isLeapYear);
export default {
  name: "step1",
  components: { GoNextBtn, QuestionContainer, RadioBtn },
  data() {
    return {
      nextStepNumber: "STEP2",
      year: null,
      month: null,
      date: null,
      yearsArr: [],
      monthsArr: [],
      datesArr: [],
      options: [
        {
          text: "男性",
          value: "1",
        },
        {
          text: "女性",
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
      yearsArr.push({
        value: null,
        text: "-年を選択してください-",
        disabled: true,
      });
      for (let i = dayjs().year(); i >= dayjs().year() - 100; i--) {
        if (i > 2018) {
          yearsArr.push({ value: i, text: `${i}年 (令和${i - 2018}年)` });
        } else if (i > 1988) {
          yearsArr.push({ value: i, text: `${i}年 (平成${i - 1988}年)` });
        } else if (i > 1925) {
          yearsArr.push({ value: i, text: `${i}年 (昭和${i - 1925}年)` });
        } else if (i > 1911) {
          yearsArr.push({ value: i, text: `${i}年 (大正${i - 1911}年)` });
        }
      }
      return yearsArr;
    },
    createMonths() {
      const monthsArr = [];
      monthsArr.push({
        value: null,
        text: "-月を選択してください-",
        disabled: true,
      });
      for (let i = 1; i <= 12; i++) {
        monthsArr.push({ value: i, text: `${i}月` });
      }
      return monthsArr;
    },
    createDates() {
      const datesArr = [];
      const shortMonth = [2, 4, 6, 9, 11];
      datesArr.push({
        value: null,
        text: "-日を選択してください-",
        disabled: true,
      });

      /* 閏年かつ2月を選択した場合 */
      if (dayjs(String(this.year)).isLeapYear() && this.month === 2)
        for (let i = 1; i <= 29; i++) {
          datesArr.push({ value: i, text: `${i}日` });
        }

      /* 小の月を選択した場合 */
      else if (shortMonth.includes(this.month))
        for (let i = 1; i <= 30; i++) {
          datesArr.push({ value: i, text: `${i}日` });
        }

      /* 大の月を選択した場合 */
      else
        for (let i = 1; i <= 31; i++) {
          datesArr.push({ value: i, text: `${i}日` });
        }
      return datesArr;
    },
  },

  /* 年と月変更時に、datesArrを再作成する処理 */
  watch: {
    year: function () {
      this.datesArr = this.createDates();
      if (this.date >= this.datesArr.length) this.date = null;
    },
    month: function () {
      this.datesArr = this.createDates();
      if (this.date >= this.datesArr.length) this.date = null;
    },
  },
};
</script>