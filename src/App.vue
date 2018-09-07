<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="cyan darken-2" :style="{flexGrow: '0'}">
        <v-toolbar-title>教室空氣異常</v-toolbar-title>
        <v-spacer></v-spacer>
        {{ time }}
        <img src="/static/Bxb_Logo.svg" alt="logo" class="logo">
      </v-toolbar>

      <div class="my_container">

        <span class="col">
          <div class="caterogy_title">
            <!-- <span class="icon co2"></span> -->
            <img src="/static/img/co2.png" class="icon co2" alt="">
            <span>二氧化碳</span>
          </div>
          <div class="card_wrapper">
            <span class="nodata" v-if="co2 === null">沒有資料</span>
            <swiper :options="swiperOption">
              <swiper-slide>
                <WarnCard v-for="(item, i) in co2.slice(0,14)" :key="i" type="co2" :title="item.name" :val="item.value"/>
              </swiper-slide>
              <swiper-slide>
                <WarnCard v-for="(item, i) in co2.slice(14, co2.length)" :key="i" type="co2" :title="item.name" :val="item.value"/>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>

          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <img src="/static/img/temp.png" class="icon temp" alt="">
            <span>溫度</span>

          </div>
          <div class="card_wrapper">
            <span  class="nodata" v-if="temp === null">沒有資料</span>
            <WarnCard v-for="(item, i) in temp" :key="i" type="temp" :title="item.name" :val="item.value"/>
          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <img src="/static/img/humidity.png" class="icon humidity" alt="">
            <span>濕度</span>

          </div>
          <div class="card_wrapper">
            <span class="nodata"  v-if="humidity === null">沒有資料</span>
            <WarnCard v-for="(item, i) in humidity" :key="i" type="humidity" :title="item.name" :val="item.value"/>
          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <img src="/static/img/pm25.png" class="icon pm25" alt="">
            <span>PM2.5</span>
          </div>
          <div class="card_wrapper">
            <span  class="nodata" v-if="pm25 === null">沒有資料</span>
            <WarnCard v-for="(item, i) in pm25" :key="i" type="pm25" :title="item.name" :val="item.value" width="200"/>
            <!-- <WarnCard title="操場東側" text="良好" color="d_green" width="200"/>
            <WarnCard title="操場西側" text="良好" color="d_green" width="200"/>
            <WarnCard title="活動中心A" text="良好" color="d_orange" width="200"/>
            <WarnCard title="活動中心B" text="良好" color="d_orange" width="200"/>
            <WarnCard title="體育館" text="良好" color="d_red" width="200"/> -->
          </div>
        </span>
      </div>
    </v-app>
  </div>
</template>

<script>
import WarnCard from '@/components/WarnCard'
import alertify from 'alertifyjs/build/alertify.min.js'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'App',
  components: {
    WarnCard, swiper, swiperSlide
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      time: '1234',
      co2: [],
      temp: [],
      humidity: [],
      pm25: []
    }
  },
  created () {
    this.getData()
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  },
  methods: {
    getData () {
      let Url = ''
      if (process.env.NODE_ENV === 'production') {
        Url = '/Client?data1=air'
      } else {
        Url = '/api/Client?data1=air'
      }
      axios.get(Url).then(res => {
        console.log('res:', res)

        if (res.status === 200 || res.status === 304) {
          alertify.success('成功連接資料')
          this.co2 = res.data.co2.sort((a, b) => (a.id - b.id))
          this.temp = res.data.temperature
          this.humidity = res.data.humidity
          this.pm25 = res.data.pm25
        } else {
          throw new Error('連接資料發生錯誤')
        }
      }).catch(e => {
        alertify.error(e.message)
      })
    }

  }
}
</script>

<style lang="scss">
*{
  font-family: 'Roboto', 'Noto Sans', "Microsoft JhengHei";
  box-sizing: border-box;
}
.swiper-slide{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
}
.v-toolbar__title{
  font-size: 30px;
}
.logo{
  width: 130px;
}
.my_container{
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-grow: 1;
  .caterogy_title{
    width: 100%;
    height: 92px;
    color: #424242;
    font-size: 31px;
    font-weight: 500;
    text-align: center;
    padding: 23px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon{
      margin-right: 30px;
      height:45px;
      &.co2{
        height:45px;
      }
    }

  }
  .col{
    display: inline-block;
    width: calc( 100vw / 4);
    padding: 20px 0 0 0;
    margin-bottom: 0;
    border-right: 1px solid rgba(0,0,0,0.2);
    &:nth-child(4){
      border-right: none;
    }

  }
  .card_wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    overflow-y: auto;
    align-content: flex-start;
    height: 730px;

  }
  .nodata{
    font-size: 20px;
  }
}
</style>
