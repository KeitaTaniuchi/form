<template>
  <div class="STEP1">
    <h1>STEP1</h1>
    <p>お客様の情報を入力してください</p>

    <h2>-性別-</h2>
    <div class="radio-button">
      <input type="radio" name="sex" id="male" value="1" />
      <label for="male">男性</label>
    </div>
    <div class="radio-button">
      <input type="radio" name="sex" id="female" value="2" />
      <label for="female">女性</label>
    </div>

    <h2>-生年月日-</h2>
    <select id="year" v-model="year">
      <option v-for="nengo in nengoes" :key="nengo.year" :value="nengo.year">
        {{ nengo.label }}
      </option>
    </select>
    
  </div>
</template>

<style scoped>
</style>

<script>
/* export default {
  name: "STEP1",
  data: () => {},
}; */

export default {
  data() {
    return {
      year: 2000,
      month: 1,
      date: 1,
      nengoes: [],
    };
  },
  mounted() {
    this.nengoes = this.genereate();
  },
  methods: {
    genereate() {
      const nengoes = [];
      for (let y = 2020; y > 1920; y--) {
        if (y > 2018) {
          nengoes.push({ year: y, label: `${y} (令和${y - 2018}年)` });
        } else if (y > 1988) {
          nengoes.push({ year: y, label: `${y} (平成${y - 1988}年)` });
        } else if (y > 1925) {
          nengoes.push({ year: y, label: `${y} (昭和${y - 1925}年)` });
        } else if (y > 1911) {
          nengoes.push({ year: y, label: `${y} (大正${y - 1911}年)` });
        }
      }
      return nengoes;
    },
  },
};
</script>