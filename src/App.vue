<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="cyan darken-2" >
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
            <WarnCard v-for="(item, i) in co2" :key="i" type="co2" :title="item.name" :val="item.value"/>
          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <img src="/static/img/temp.png" class="icon temp" alt="">
            <span>溫度</span>

          </div>
          <div class="card_wrapper">
            <WarnCard v-for="(item, i) in temp" :key="i" type="temp" :title="item.name" :val="item.value"/>
          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <img src="/static/img/humidity.png" class="icon humidity" alt="">
            <span>濕度</span>

          </div>
          <div class="card_wrapper">
            <WarnCard v-for="(item, i) in humidity" :key="i" type="humidity" :title="item.name" :val="item.value"/>
          </div>
        </span>
        <span class="col">
          <div class="caterogy_title">
            <img src="/static/img/pm25.png" class="icon pm25" alt="">
            <span>PM2.5</span>
          </div>
          <div class="card_wrapper">
            <WarnCard v-for="(item, i) in pm25" :key="i" type="pm25" :title="item.name" :val="item.value"/>
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
import axios from 'axios'

export default {
  name: 'App',
  components: {
    WarnCard
  },
  data () {
    return {
      time: '1234',
      co2: [],
      temp: [],
      humidity: [],
      pm25: []
    }
  },
  created () {
    this.getCo2()
    this.getTemp()
    this.getHumidity()
    this.getPm25()
  },
  methods: {
    getCo2 () {
      let co2Url = 'http://localhost:3000/co2'
      axios.get(co2Url).then(res => {
        if (res.status === 200) {
          this.co2 = res.data.sort((a, b) => (a.id - b.id))
          console.log(this.co2)
        } else {
          throw new Error('抓Co2 API發生錯誤')
        }
      }).catch(e => {
        alert(e)
      })
    },
    getTemp () {
      let tempUrl = 'http://localhost:3000/temperature'
      axios.get(tempUrl).then(res => {
        if (res.status === 200) {
          this.temp = res.data
          console.log('ok')
        } else {
          throw new Error('抓tempUrl API發生錯誤')
        }
      }).catch(e => {
        alert(e)
      })
    },
    getHumidity () {
      let tempUrl = 'http://localhost:3000/humidity'
      axios.get(tempUrl).then(res => {
        if (res.status === 200) {
          this.humidity = res.data
          console.log('ok')
        } else {
          throw new Error('抓Humidity  API發生錯誤')
        }
      }).catch(e => {
        alert(e)
      })
    },
    getPm25 () {
      let tempUrl = 'http://localhost:3000/pm25'
      axios.get(tempUrl).then(res => {
        if (res.status === 200) {
          this.pm25 = res.data
          console.log('ok')
        } else {
          throw new Error('抓 pm25 API發生錯誤')
        }
      }).catch(e => {
        alert(e)
      })
    }
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
.logo{
  width: 130px;
}
.my_container{
  width: 100vw;
  height: calc( 100vh - 64px);
  background-color: #f2f2f2;
  display: flex;
  .caterogy_title{
    color: #424242;
    font-size: 31px;
    text-align: center;
    padding: 23px 20px;
    font-weight: bolder;
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
    margin: 20px 0;
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
  }
}
</style>
