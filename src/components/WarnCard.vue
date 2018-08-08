<template>
  <v-card v-if="type!=='pm25'" :color="color" class="white--text myCard" :width="width" >
    <div class="title">{{ title }}</div>
    <v-divider light></v-divider>
    <div class="val">{{ val }} {{ getUnit }}</div>
  </v-card>

  <v-card v-else :color="getPm25Color" class="white--text myCard" :width="width" >
    <div class="title">{{ title }}</div>
    <v-divider light></v-divider>
    <div class="val">{{ getPm25Text }}</div>
  </v-card>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: function () {
        return '預設標題'
      }
    },
    val: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'd_cyan'

    },
    width: {
      type: String,
      default: '120'
    },
    type: {
      type: String,
      default: 'co2'
    }
  },
  computed: {
    getUnit () {
      if (this.type === 'co2') return 'ppm'
      else if (this.type === 'temp') return '℃'
      else if (this.type === 'humidity') return '%'
      else return ''
    },
    getPm25Text () {
      if (this.val >= 0 && this.val <= 35) {
        return `😀 ${this.val} 良好`
      } else if (this.val >= 36 && this.val <= 53) {
        return `😐 ${this.val} 對過敏族群不健康`
      } else if (this.val >= 54) {
        return `😡 ${this.val} 對所有族群不健康`
      } else {
        return `${this.val} 錯誤`
      }
    },
    getPm25Color () {
      if (this.val >= 0 && this.val <= 35) {
        return `d_green`
      } else if (this.val >= 36 && this.val <= 53) {
        return `d_orange`
      } else if (this.val >= 54) {
        return `d_red`
      } else {
        return `d_green`
      }
    }
  }

}
</script>

<style lang="scss">
  .myCard{
    border-radius: 10px;
    display: inline-block;
    margin: 10px 6px;
  }
  .title{
    padding: 8px;
  }
  .val{
    padding: 2px;
    padding-left: 8px;
    color: black;
    font-size: 16px;

  }
</style>
