<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="cyan darken-2" >
        <v-toolbar-title>教室空氣異常</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        </v-toolbar-items>
      </v-toolbar>

      <div class="my_container">
        <span class="col">
          <div class="caterogy_title">
            <v-icon x-large>accessibility</v-icon>
            二氧化碳
          </div>
          <div class="card_wrapper">
            <WarnCard v-for="i in 12" :key="i"/>
          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <v-icon x-large>accessibility</v-icon>
            溫度
          </div>
          <div class="card_wrapper">
            <WarnCard v-for="i in 12" :key="i"/>
          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <v-icon x-large>accessibility</v-icon>
            濕度
          </div>
          <div class="card_wrapper">
            <WarnCard v-for="i in 12" :key="i"/>
          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <v-icon x-large>accessibility</v-icon>
            PM2.5
          </div>
          <div class="card_wrapper">
            <WarnCard v-for="i in 12" :key="i"/>
          </div>
        </span>
      </div>
    </v-app>
  </div>
</template>

<script>
import WarnCard from '@/components/WarnCard'
export default {
  name: 'App',
  components: {
    WarnCard
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}
.v-toolbar__title{
  font-size: 30px;
}
.my_container{
  width: 100vw;
  height: calc( 100vh - 56px);
  background-color: #f2f2f2;
  display: flex;
  .caterogy_title{
    font-size: 31px;
    text-align: center;
    padding: 23px 20px;
    font-weight: bolder;
  }
  .col{
    display: inline-block;
    width: calc( 100vw / 4);
    height: 100%;
    margin: 20px 0;
    border-right: 1px solid rgba(0,0,0,0.2);
    &:nth-child(4){
      border-right: none;
    }
  }
  .card_wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
