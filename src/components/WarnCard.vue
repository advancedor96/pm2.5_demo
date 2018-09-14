<template>
  <v-card v-if="type!=='pm25'" :color="color" class="white--text myCard" :width="width" :height="73">
    <div class="title">{{ title }}</div>
    <div class="divider"></div>
    <!-- <v-divider :color="divider"></v-divider> -->
    <div class="val">{{ val }} {{ getUnit }}</div>
  </v-card>

  <v-card v-else :color="getPm25Color" class="white--text pm25Card" :width="width"
    :class="{'gray_text': getPm25Color==='d_orange'}"
  >
    <div class="title">{{ title }}</div>
    <v-divider light></v-divider>
    <div class="val" v-html="getPm25Text">
    </div>
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
      default: 'card'

    },
    width: {
      type: String,
      default: '164'
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
        return `<span class="icon icon-smile"></span> ${this.val} 良好`
      } else if (this.val >= 36 && this.val <= 53) {
        return `<span class="icon icon-sad"></span> ${this.val} 對過敏族群不健康`
      } else if (this.val >= 54) {
        return `<span class="icon icon-sad"></span> ${this.val} 對所有族群不健康`
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
    border-radius: 10px !important;
    display: inline-block !important;
    margin: 10px 6px !important;
    box-shadow: none !important;
  }
  .pm25Card{
    border-radius: 10px !important;
    display: inline-block !important;
    margin: 10px 6px !important;
    box-shadow: none !important;
    color: white !important;
    .val{
      color: inherit;
    }
    &.gray_text{
      color: #5E5E5E !important;
    }

  }
  .title{
    padding: 8px 4px 8px 17px;
    font-size: 21px !important;
    font-family: 'Roboto', 'Noto Sans', "Microsoft JhengHei" !important;
  }
  .divider{
    background-color: #94DEDE;
    height: 3px;
    width: 100%;
  }
  .val{
    padding: 2px;
    padding: 2px 4px 2px 17px;
    font-size: 21px;
    color: #800707;

  }
</style>
