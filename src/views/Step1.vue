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
    <div>
      <select id="select_year" name="year"></select>年
      <select id="select_month" name="month"></select>月
      <select id="select_day" name="day"></select>日
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "STEP1",
  data: () => {},
};
</script>