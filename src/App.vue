<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="toolbar" :style="{flexGrow: '0', boxShadow: 'none'}">
        <div class="my_container">
          <v-toolbar-title>教室空氣異常</v-toolbar-title>
            <v-spacer></v-spacer>
            {{ time }}
            <div class="img_down"><img src="/static/img/Bxb_Logo.svg" alt="logo" class="logo"></div>
        </div>
      </v-toolbar>

      <div class="my_main">
        <div class="my_container">
          <span class="col">
            <div class="caterogy_title">
              <!-- <span class="icon co2"></span> -->
              <img src="/static/img/co2.png" class="icon co2" alt="">
              <span>二氧化碳</span>
            </div>
            <div class="card_wrapper">
              <span class="nodata" v-if="co2 === null || !co2.length">沒有資料</span>

              <swiper v-else :options="swiperOption" class="swiper_ddddd">
                <swiper-slide v-for="i in this.numOfCo2Slider" :key="i">
                  <WarnCard v-for="(item, idx) in co2.slice( (i-1)*14, (i-1)*14+14)" :key="idx" type="co2" :title="item.name" :val="item.value"/>
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
              <span  class="nodata" v-if="temp === null || !temp.length">沒有資料</span>

              <swiper v-else :options="swiperOption" class="swiper_ddddd">
                <swiper-slide v-for="i in this.numOfTempSlider" :key="i">
                  <WarnCard v-for="(item, idx) in temp.slice( (i-1)*14, (i-1)*14+14)" :key="idx" type="temp" :title="item.name" :val="item.value"/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </span>
          <span class="col">
            <div class="caterogy_title">
              <img src="/static/img/humidity.png" class="icon humidity" alt="">
              <span>濕度</span>

            </div>
            <div class="card_wrapper">
              <span class="nodata"  v-if="humidity === null || !humidity.length">沒有資料</span>

              <swiper v-else :options="swiperOption" class="swiper_ddddd">
                <swiper-slide v-for="i in this.numOfHumiditySlider" :key="i">
                  <WarnCard v-for="(item, idx) in humidity.slice( (i-1)*14, (i-1)*14+14)" :key="idx" type="humidity" :title="item.name" :val="item.value"/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>

            </div>
          </span>
          <span class="col">
            <div class="caterogy_title">
              <img src="/static/img/pm25.png" class="icon pm25" alt="">
              <span :style="{fontWeight:'400'}">PM2.5</span>
            </div>
            <div class="card_wrapper">
              <span  class="nodata" v-if="pm25 === null || !pm25.length">沒有資料</span>
              <swiper v-else :options="swiperOption" class="swiper_ddddd">
                <swiper-slide v-for="i in this.numOfPm25Slider" :key="i">
                  <WarnCard v-for="(item, idx) in pm25.slice( (i-1)*7, (i-1)*7+7)" :key="idx" type="pm25" :title="item.name" :val="item.value" width="270" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>

              <!-- <WarnCard v-for="(item, i) in pm25" :key="i" type="pm25" :title="item.name" :val="item.value" width="200"/> -->
              <!-- <WarnCard title="操場東側" text="良好" color="d_green" width="200"/>
              <WarnCard title="操場西側" text="良好" color="d_green" width="200"/>
              <WarnCard title="活動中心A" text="良好" color="d_orange" width="200"/>
              <WarnCard title="活動中心B" text="良好" color="d_orange" width="200"/>
              <WarnCard title="體育館" text="良好" color="d_red" width="200"/> -->
            </div>
          </span>
        </div>
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
import _ from 'lodash'

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
          delay: 1000 * 6, // 切換頁面間隔幾秒
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet (index, className) {
            return `<span class="ddddd ${className} swiper-pagination-bullet-custom"></span>`
          }

        }
      },
      time: '',
      co2: [],
      temp: [],
      humidity: [],
      pm25: []
    }
  },
  created () {
    this.getData()
    let that = this
    setTimeout(function repeat () {
      that.getData()
      setTimeout(repeat, 30 * 1000)
    }, 30 * 1000)

    // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  },
  computed: {
    // 計算Co2 的Swiper 總共要有幾頁(每頁14個)
    numOfCo2Slider () {
      let divide_num = Math.floor(this.co2.length / 14)
      let mod_num = this.co2.length % 14
      let result = (mod_num !== 0) ? divide_num + 1 : divide_num
      return result
    },
    // 計算temp 的Swiper 總共要有幾頁(每頁14個)
    numOfTempSlider () {
      let divide_num = Math.floor(this.temp.length / 14)
      let mod_num = this.temp.length % 14
      let result = (mod_num !== 0) ? divide_num + 1 : divide_num
      return result
    },
    // 計算humidity 的Swiper 總共要有幾頁(每頁14個)
    numOfHumiditySlider () {
      let divide_num = Math.floor(this.humidity.length / 14)
      let mod_num = this.humidity.length % 14
      let result = (mod_num !== 0) ? divide_num + 1 : divide_num
      return result
    },
    // 計算 pm25 的Swiper 總共要有幾頁(每頁14個)
    numOfPm25Slider () {
      let divide_num = Math.floor(this.pm25.length / 7)
      let mod_num = this.pm25.length % 7
      let result = (mod_num !== 0) ? divide_num + 1 : divide_num
      return result
    }
  },
  methods: {
    async getData () {
      let Url = ''
      if (process.env.NODE_ENV === 'production') {
        Url = '/Client?data1=air'
      } else {
        Url = '/api/Client?data1=air' // 在本機讀真實資料
        // Url = 'http://localhost:3000/air' // 使用 json-server
      }
      try {
        const res = await axios.get(Url)
        // alertify.success('成功連接資料') // 有錯誤才顯示
        this.co2 = _.get(res.data, 'co2') ? res.data.co2.sort((a, b) => (a.id - b.id)) : []
        this.temp = _.get(res.data, 'temperature') ? res.data.temperature : []
        this.humidity = _.get(res.data, 'humidity') ? res.data.humidity : []
        this.pm25 = _.get(res.data, 'pm25') ? res.data.pm25 : []
      } catch (e) {
        alertify.error(e.message)
      }
    }

  }
}
</script>

<style lang="scss">
@import '@/sass/all.scss';

*{
  font-family: 'Roboto', 'Noto Sans', "Microsoft JhengHei" !important;
  box-sizing: border-box;
  user-select:none;
}
.swiper_ddddd{
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  .swiper-pagination-bullet-custom{
    background-color: #878787;
    width: 16px;
    height: 16px;
  }
}
.swiper-slide{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
}
.v-toolbar__content{ // v-toolbar 多出來的 div 樣式
  justify-content: center;
  .v-toolbar__title{
    font-size: 39px;
  }
}
.logo{
  width: 74px;
}
.my_container{
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .img_down{
    display: flex;
    height:77%;
    align-items: center;
  }

  @media screen and (max-width: 767px){
    flex-wrap: wrap;
  }
}
.my_main{
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  .caterogy_title{
    width: 100%;
    height: 92px;
    color: #424242;
    font-size: 31px;
    font-weight: 300;
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
    width:  $containerWidth / 4;
    min-width: $containerWidth / 4;
    max-width: $containerWidth / 4;
    padding: 20px 0 0 0;
    margin-bottom: 0;
    border-right: 1px solid rgba(0,0,0,0.2);
    &:nth-child(1){
      border-left: 1px solid rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 767px){
      width: 100%;
      min-width: none;
      max-width: none;
    }
  }
  .card_wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    overflow-y: auto;
    align-content: flex-start;
    align-items: flex-start;
    // height: 730px;
    min-height: 675px;
    height: 690px;

  }
  .nodata{
    font-size: 20px;
    opacity: 0.3;
    &:before{
      content:'\e9e5';
      font-family: 'IcoMoon-Free' !important;
      margin-right: 3px;
    }
  }
}
</style>
