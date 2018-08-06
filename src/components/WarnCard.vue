<template>
<v-card :color="color" class="white--text myCard" :width="width" >
  <div class="title">{{ title }}</div>
  <v-divider light></v-divider>
  <div class="val">{{ text }}</div>
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
    text: {
      type: String,
      default: function () {
        return '預設內文'
      }
    },
    color: {
      type: String,
      default: 'd_cyan'

    },
    width: {
      type: String,
      default: '100'
    }
  }
}
</script>

<style>
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
