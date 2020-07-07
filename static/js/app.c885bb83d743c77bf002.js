webpackJsonp([1],{"1sSq":function(t,a){},"6FUv":function(t,a){},"7zck":function(t,a){},GptK:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),s=e("Xxa5"),n=e.n(s),r=e("exGp"),l=e.n(r),o={props:{title:{type:String,default:function(){return"預設標題"}},val:{type:Number,default:0},color:{type:String,default:"card"},width:{type:String,default:"164"},type:{type:String,default:"co2"}},computed:{getUnit:function(){return"co2"===this.type?"ppm":"temp"===this.type?"℃":"humidity"===this.type?"%":""},getPm25Text:function(){return this.val>=0&&this.val<=35?'<span class="icon icon-smile"></span> '+this.val+" 良好":this.val>=36&&this.val<=53?'<span class="icon icon-sad"></span> '+this.val+" 對過敏族群不健康":this.val>=54?'<span class="icon icon-sad"></span> '+this.val+" 對所有族群不健康":this.val+" 錯誤"},getPm25Color:function(){return this.val>=0&&this.val<=35?"d_green":this.val>=36&&this.val<=53?"d_orange":this.val>=54?"d_red":"d_green"}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return"pm25"!==t.type?e("v-card",{staticClass:"white--text myCard",attrs:{color:t.color,width:t.width,height:73}},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"val"},[t._v(t._s(t.val)+" "+t._s(t.getUnit))])]):e("v-card",{staticClass:"white--text pm25Card",class:{gray_text:"d_orange"===t.getPm25Color},attrs:{color:t.getPm25Color,width:t.width}},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("v-divider",{attrs:{light:""}}),t._v(" "),e("div",{staticClass:"val",domProps:{innerHTML:t._s(t.getPm25Text)}})],1)},staticRenderFns:[]};var u=e("VU/8")(o,c,!1,function(t){e("yUVZ")},null,null).exports,d=e("/6nX"),p=e.n(d),v=(e("mtWM"),e("v2ns"),e("7QTg")),m=e("M4fF"),_=e.n(m),h=e("PNMV"),g=e.n(h),f={name:"App",components:{WarnCard:u,swiper:v.swiper,swiperSlide:v.swiperSlide},data:function(){return{swiperOption:{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,a){return'<span class="ddddd '+a+' swiper-pagination-bullet-custom"></span>'}}},time:"",co2:[],temp:[],humidity:[],pm25:[]}},created:function(){this.getData();var t=this;setTimeout(function a(){t.getData(),setTimeout(a,3e4)},3e4)},computed:{version:function(){return"1.0.0"},numOfCo2Slider:function(){var t=Math.floor(this.co2.length/14);return 0!==this.co2.length%14?t+1:t},numOfTempSlider:function(){var t=Math.floor(this.temp.length/14);return 0!==this.temp.length%14?t+1:t},numOfHumiditySlider:function(){var t=Math.floor(this.humidity.length/14);return 0!==this.humidity.length%14?t+1:t},numOfPm25Slider:function(){var t=Math.floor(this.pm25.length/7);return 0!==this.pm25.length%7?t+1:t}},methods:{getData:function(){var t=this;return l()(n.a.mark(function a(){var e;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=g.a.air;try{t.co2=_.a.get(e,"co2")?e.co2.sort(function(t,a){return t.id-a.id}):[],t.temp=_.a.get(e,"temperature")?e.temperature:[],t.humidity=_.a.get(e,"humidity")?e.humidity:[],t.pm25=_.a.get(e,"pm25")?e.pm25:[]}catch(t){p.a.error(t.message)}case 2:case"end":return a.stop()}},a,t)}))()}}},y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("v-app",[e("v-toolbar",{style:{flexGrow:"0",boxShadow:"none"},attrs:{dark:"",color:"toolbar"}},[e("div",{staticClass:"my_container"},[e("v-toolbar-title",[t._v("教室空氣異常"),e("span",{style:{fontSize:"12px"}},[t._v(t._s(t.version))])]),t._v(" "),e("v-spacer"),t._v("\n          "+t._s(t.time)+"\n          "),e("div",{staticClass:"img_down"},[e("img",{staticClass:"logo",attrs:{src:"/static/img/Bxb_Logo.svg",alt:"logo"}})])],1)]),t._v(" "),e("div",{staticClass:"my_main"},[e("div",{staticClass:"my_container"},[e("span",{staticClass:"col"},[e("div",{staticClass:"caterogy_title"},[e("img",{staticClass:"icon co2",attrs:{src:"/static/img/co2.png",alt:""}}),t._v(" "),e("span",[t._v("二氧化碳")])]),t._v(" "),e("div",{staticClass:"card_wrapper"},[null!==t.co2&&t.co2.length?e("swiper",{staticClass:"swiper_ddddd",attrs:{options:t.swiperOption}},[t._l(this.numOfCo2Slider,function(a){return e("swiper-slide",{key:a},t._l(t.co2.slice(14*(a-1),14*(a-1)+14),function(t,a){return e("WarnCard",{key:a,attrs:{type:"co2",title:t.name,val:t.value}})}))}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):e("span",{staticClass:"nodata"},[t._v("沒有資料")])],1)]),t._v(" "),e("span",{staticClass:"col"},[e("div",{staticClass:"caterogy_title"},[e("img",{staticClass:"icon temp",attrs:{src:"/static/img/temp.png",alt:""}}),t._v(" "),e("span",[t._v("溫度")])]),t._v(" "),e("div",{staticClass:"card_wrapper"},[null!==t.temp&&t.temp.length?e("swiper",{staticClass:"swiper_ddddd",attrs:{options:t.swiperOption}},[t._l(this.numOfTempSlider,function(a){return e("swiper-slide",{key:a},t._l(t.temp.slice(14*(a-1),14*(a-1)+14),function(t,a){return e("WarnCard",{key:a,attrs:{type:"temp",title:t.name,val:t.value}})}))}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):e("span",{staticClass:"nodata"},[t._v("沒有資料")])],1)]),t._v(" "),e("span",{staticClass:"col"},[e("div",{staticClass:"caterogy_title"},[e("img",{staticClass:"icon humidity",attrs:{src:"/static/img/humidity.png",alt:""}}),t._v(" "),e("span",[t._v("濕度")])]),t._v(" "),e("div",{staticClass:"card_wrapper"},[null!==t.humidity&&t.humidity.length?e("swiper",{staticClass:"swiper_ddddd",attrs:{options:t.swiperOption}},[t._l(this.numOfHumiditySlider,function(a){return e("swiper-slide",{key:a},t._l(t.humidity.slice(14*(a-1),14*(a-1)+14),function(t,a){return e("WarnCard",{key:a,attrs:{type:"humidity",title:t.name,val:t.value}})}))}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):e("span",{staticClass:"nodata"},[t._v("沒有資料")])],1)]),t._v(" "),e("span",{staticClass:"col"},[e("div",{staticClass:"caterogy_title"},[e("img",{staticClass:"icon pm25",attrs:{src:"/static/img/pm25.png",alt:""}}),t._v(" "),e("span",{style:{fontWeight:"400"}},[t._v("PM2.5")])]),t._v(" "),e("div",{staticClass:"card_wrapper"},[null!==t.pm25&&t.pm25.length?e("swiper",{staticClass:"swiper_ddddd",attrs:{options:t.swiperOption}},[t._l(this.numOfPm25Slider,function(a){return e("swiper-slide",{key:a},t._l(t.pm25.slice(7*(a-1),7*(a-1)+7),function(t,a){return e("WarnCard",{key:a,attrs:{type:"pm25",title:t.name,val:t.value,width:"270"}})}))}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):e("span",{staticClass:"nodata"},[t._v("沒有資料")])],1)])])])],1)],1)},staticRenderFns:[]};var C=e("VU/8")(f,y,!1,function(t){e("a0m5")},null,null).exports,w=e("/ocq"),b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),e("br"),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var k=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},b,!1,function(t){e("1sSq")},"data-v-d8ec41bc",null).exports;i.default.use(w.a);var S=new w.a({routes:[{path:"/",name:"HelloWorld",component:k}]}),W=e("3EgV"),x=e.n(W);e("7zck"),e("WGpW"),e("WW0T"),e("6FUv"),e("GptK"),e("lXE1");i.default.config.productionTip=!1,i.default.use(x.a,{theme:{toolbar:"#2A99B7",card:"#3CC2C2",divider:"#94DEDE",d_cyan:"#2A99B7",d_green:"#09D342",d_orange:"#FFB600",d_red:"#BF0000"}}),new i.default({el:"#app",router:S,components:{App:C},template:"<App/>"})},PNMV:function(t,a){t.exports={air:{co2:[{id:1,name:"國一1",value:1300},{id:2,name:"國一2",value:1002},{id:3,name:"國二1",value:1300},{id:4,name:"國二2",value:1002},{id:5,name:"國二3",value:1300},{id:6,name:"國三1",value:1002},{id:7,name:"國3-2",value:1300},{id:8,name:"國3-3",value:1002},{id:9,name:"國3-4",value:1300},{id:10,name:"教務處",value:1002},{id:11,name:"自然教室A",value:1300},{id:12,name:"自然教室B",value:1002},{id:13,name:"校長室",value:1300},{id:14,name:"總務處",value:1002},{id:15,name:"自然教室15",value:1300},{id:16,name:"自然教室16",value:1002},{id:17,name:"校長室17",value:1300},{id:18,name:"總務處18",value:1002}],temperature:null,humidity:[{id:1,name:"國一1",value:90}],pm25:[{id:1,name:"操場東側",value:19},{id:2,name:"操場西側",value:20},{id:3,name:"活動中心A",value:40},{id:4,name:"活動中心B",value:43},{id:5,name:"體育館",value:151}]}}},WGpW:function(t,a){},WW0T:function(t,a){},a0m5:function(t,a){},lXE1:function(t,a){},v2ns:function(t,a){},yUVZ:function(t,a){}},["NHnr"]);