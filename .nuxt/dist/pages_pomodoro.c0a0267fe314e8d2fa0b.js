webpackJsonp([3],{"/h5V":function(t,o,e){(t.exports=e("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-68933acb]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-68933acb]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-68933acb]{background-color:#f15d59}.button.button-primary-faded[data-v-68933acb]{color:#f15d59;background-color:#ffcdd2}.button.button-lp-primary[data-v-68933acb]{background-color:#b71e1e}.button.button-lp-primary-faded[data-v-68933acb]{background-color:#ea5351}.button.button-lp-secondary[data-v-68933acb]{color:#b71e1e;background-color:#fff}.button[data-v-68933acb]:hover{opacity:.8}.button[data-v-68933acb]:active,.button[data-v-68933acb]:focus{opacity:1}.input[data-v-68933acb]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-68933acb]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-68933acb]:-ms-input-placeholder{color:#757575}.input[data-v-68933acb]::-webkit-input-placeholder{color:#757575}.input.white[data-v-68933acb]{color:#fff;border-bottom-color:#fff}.input.white[data-v-68933acb]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-68933acb]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-68933acb]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-68933acb]:focus{outline:none}.bold[data-v-68933acb]{font-weight:700}.form[data-v-68933acb]{padding:40px 0}.min-full-height[data-v-68933acb]{min-height:calc(100vh - 225px)}.title[data-v-68933acb]{font-size:25px;color:#f15d59}.main-content[data-v-68933acb]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-68933acb]{width:760px;max-width:100%}}.logo[data-v-68933acb]{max-width:160px}@media (max-width:991px){.logo[data-v-68933acb]{max-width:80px}}",""])},"4NUZ":function(t,o,e){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("header-component"),e("div",{staticClass:"container min-full-height"},[e("div",{staticClass:"main-content row"},[e("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.state,expression:"state !== 0"}],staticClass:"col-sm-12 col-md-6 col-lg-4"},[e("div",{staticClass:"jumbotron text-center"},[e("div",{staticClass:"container"},[e("img",{staticClass:"img-fluid rounded",attrs:{src:t.chosenWorkout.picture,alt:t.chosenWorkout.name}}),e("h2",[t._v(t._s(t.chosenWorkout.name))]),e("p",{staticClass:"lead"},[t._v("\n              "+t._s(t.chosenWorkout.description)+"\n            ")])])])]),e("div",{staticClass:"countdown-holder col-sm-12",class:[0!==t.state?"col-md-6 col-lg-8":"col-md-12"]},[e("count-down-timer",{ref:"countdowntimer",attrs:{time:t.time},on:{finished:t.togglePomodoro}})],1)])]),e("footer-component")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},"5yNy":function(t,o,e){var a=e("rMqS");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("0eae3aa3",a,!1)},AFjI:function(t,o,e){var a=e("Tsie");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("1907e6e0",a,!1)},"G/iH":function(t,o,e){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar navbar-toggleable-md navbar-light row"},[t._m(0),e("div",{staticClass:"navbar-brand"},[e("logo")],1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarHeader"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home ")])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"about"}},[t._v("About ")])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:{disabled:!t.isAuthenticated},attrs:{to:"settings"}},[t._v("Settings ")])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:{disabled:!t.isAuthenticated},attrs:{to:"statistics"}},[t._v("Statistics ")])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:{disabled:!t.isAuthenticated},attrs:{to:"workouts"}},[t._v("Workouts ")])],1)]),e("form",{staticClass:"buttons-holder"},[t.isAuthenticated?e("span",{staticClass:"nav-link",on:{click:t.onLogout}},[t._v("Logout")]):t._e(),t.isAuthenticated?t._e():e("span",{staticClass:"nav-link",on:{click:t.onLogout}},[t._v("Go to the start page")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarHeader","aria-controls":"navbarHeader","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})])}]},t.exports.render._withStripped=!0},GR7j:function(t,o,e){t.exports={render:function(){var t=this.$createElement,o=this._self._c||t;return o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"logo",attrs:{src:this.src,alt:"ProFitOro"}})])},staticRenderFns:[]},t.exports.render._withStripped=!0},GcSZ:function(t,o,e){t.exports=e.p+"img/profitoro_logo.13ebd6a.svg"},Ieaj:function(t,o,e){t.exports=e.p+"img/play_icon.2328da1.svg"},JEbp:function(t,o,e){var a=e("h82G");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("1608c59b",a,!1)},KR96:function(t,o,e){t.exports=e.p+"img/pause_icon.a3a0641.svg"},Naz6:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("O5Mw"),n=e.n(a),i=e("s/GO"),r=0,c=1,s=2;o.default={props:["time"],data:function(){return{timestamp:this.time,interval:null,state:s,startTime:null,pauseTime:null,pauseSeconds:0,playIcon:e("Ieaj"),pauseIcon:e("KR96"),stopIcon:e("wliv")}},computed:{minutes:function(){return Math.floor(this.timestamp/60)},seconds:function(){return this.timestamp%60},angle:function(){return 360-360/this.time*this.timestamp},text:function(){return Object(i.b)(this.minutes)+":"+Object(i.b)(this.seconds)}},components:{SvgCircleSector:n.a},methods:{_reset:function(){this.pauseTime=null,this.state=s,this.interval&&clearInterval(this.interval)},start:function(){var t=this;this.state!==r&&this.state!==c&&(this.timestamp=this.time,this.startTime=Date.now()),this.pauseSeconds+=Object(i.c)(this.pauseTime),this._reset(),this.state=r,this.interval=setInterval(function(){var o=Object(i.c)(t.startTime);t.timestamp=t.time-o+t.pauseSeconds,t.timestamp<=0&&(t.stop(),t.$emit("finished"))},10)},pause:function(){this.pauseTime=Date.now(),clearInterval(this.interval),this.state=c},stop:function(){clearInterval(this.interval),this.timestamp=this.time,this.pauseSeconds=0,this.state=s}},watch:{time:function(){this.timestamp=this.time}}}},Ng7j:function(t,o,e){(t.exports=e("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-83818300]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-83818300]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-83818300]{background-color:#f15d59}.button.button-primary-faded[data-v-83818300]{color:#f15d59;background-color:#ffcdd2}.button.button-lp-primary[data-v-83818300]{background-color:#b71e1e}.button.button-lp-primary-faded[data-v-83818300]{background-color:#ea5351}.button.button-lp-secondary[data-v-83818300]{color:#b71e1e;background-color:#fff}.button[data-v-83818300]:hover{opacity:.8}.button[data-v-83818300]:active,.button[data-v-83818300]:focus{opacity:1}.input[data-v-83818300]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-83818300]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-83818300]:-ms-input-placeholder{color:#757575}.input[data-v-83818300]::-webkit-input-placeholder{color:#757575}.input.white[data-v-83818300]{color:#fff;border-bottom-color:#fff}.input.white[data-v-83818300]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-83818300]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-83818300]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-83818300]:focus{outline:none}.bold[data-v-83818300]{font-weight:700}.form[data-v-83818300]{padding:40px 0}.min-full-height[data-v-83818300]{min-height:calc(100vh - 225px)}.title[data-v-83818300]{font-size:25px;color:#f15d59}.main-content[data-v-83818300]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-83818300]{width:760px;max-width:100%}}.header[data-v-83818300]{height:160px;color:#f15d59}@media (max-width:991px){.header[data-v-83818300]{height:auto;min-height:80px;background-color:#fff}}.header .container[data-v-83818300],.header .navbar[data-v-83818300]{height:100%}.header .navbar[data-v-83818300]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}@media (max-width:991px){.header .navbar[data-v-83818300]{position:static}}.header .navbar-collapse[data-v-83818300]{margin-top:-50px}@media (max-width:991px){.header .navbar-collapse[data-v-83818300]{z-index:20;position:absolute;top:130px;left:0;width:100%;padding:20px;background-color:#fff}}.header .nuxt-link-active[data-v-83818300]{font-weight:700}.header .nav-link[data-v-83818300]{color:rgba(241,93,89,.7);cursor:pointer}@media (max-width:991px){.header .nav-link[data-v-83818300]{padding-right:0;padding-left:0}}.header .nav-link[data-v-83818300]:active,.header .nav-link[data-v-83818300]:focus,.header .nav-link[data-v-83818300]:hover{color:#f15d59}.header .buttons-holder[data-v-83818300]{margin-left:60px}@media (max-width:991px){.header .buttons-holder[data-v-83818300]{margin-left:0}}",""])},O5Mw:function(t,o,e){e("5yNy");var a=e("VU/8")(e("od/7"),e("b8si"),"data-v-327ec3cc",null);a.options.__file="C:\\xampp\\htdocs\\profitoro\\components\\timer\\SvgCircleSector.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] SvgCircleSector.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},PStm:function(t,o,e){e("AFjI");var a=e("VU/8")(e("fIj1"),e("4NUZ"),"data-v-7da6f029",null);a.options.__file="C:\\xampp\\htdocs\\profitoro\\pages\\pomodoro.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] pomodoro.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},QaVb:function(t,o,e){e("Y7Ok");var a=e("VU/8")(e("n88f"),e("GR7j"),"data-v-68933acb",null);a.options.__file="C:\\xampp\\htdocs\\profitoro\\components\\common\\Logo.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] Logo.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},QpDI:function(t,o,e){t.exports={render:function(){var t=this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"footer"},[o("div",{staticClass:"container"},[o("span",{staticClass:"copyright"},[this._v("Copyright")]),o("span",{staticClass:"fact"},[this._v("Working out sharpens your memory")]),o("span",{staticClass:"author bold"},[this._v("Workout Lovers")])])])}]},t.exports.render._withStripped=!0},R1jx:function(t,o,e){e("JEbp");var a=e("VU/8")(e("Naz6"),e("s9w/"),"data-v-ad04e11c",null);a.options.__file="C:\\xampp\\htdocs\\profitoro\\components\\timer\\CountDownTimer.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] CountDownTimer.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},Tsie:function(t,o,e){(t.exports=e("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-7da6f029]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-7da6f029]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-7da6f029]{background-color:#f15d59}.button.button-primary-faded[data-v-7da6f029]{color:#f15d59;background-color:#ffcdd2}.button.button-lp-primary[data-v-7da6f029]{background-color:#b71e1e}.button.button-lp-primary-faded[data-v-7da6f029]{background-color:#ea5351}.button.button-lp-secondary[data-v-7da6f029]{color:#b71e1e;background-color:#fff}.button[data-v-7da6f029]:hover{opacity:.8}.button[data-v-7da6f029]:active,.button[data-v-7da6f029]:focus{opacity:1}.input[data-v-7da6f029]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-7da6f029]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-7da6f029]:-ms-input-placeholder{color:#757575}.input[data-v-7da6f029]::-webkit-input-placeholder{color:#757575}.input.white[data-v-7da6f029]{color:#fff;border-bottom-color:#fff}.input.white[data-v-7da6f029]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-7da6f029]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-7da6f029]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-7da6f029]:focus{outline:none}.bold[data-v-7da6f029]{font-weight:700}.form[data-v-7da6f029]{padding:40px 0}.min-full-height[data-v-7da6f029]{min-height:calc(100vh - 225px)}.title[data-v-7da6f029]{font-size:25px;color:#f15d59}.main-content[data-v-7da6f029]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-7da6f029]{width:760px;max-width:100%}}",""])},UxWf:function(t,o,e){e("fiTO");var a=e("VU/8")(e("xB0I"),e("QpDI"),"data-v-53055232",null);a.options.__file="C:\\xampp\\htdocs\\profitoro\\components\\common\\FooterComponent.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] FooterComponent.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},WSUW:function(t,o,e){"use strict";var a=e("UxWf"),n=e.n(a);e.d(o,"a",function(){return n.a});var i=e("YVlf"),r=e.n(i);e.d(o,"b",function(){return r.a})},Y7Ok:function(t,o,e){var a=e("/h5V");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("d1e80d40",a,!1)},YVlf:function(t,o,e){e("bxaW");var a=e("VU/8")(e("iQXf"),e("G/iH"),"data-v-83818300",null);a.options.__file="C:\\xampp\\htdocs\\profitoro\\components\\common\\HeaderComponent.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] HeaderComponent.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},b8si:function(t,o,e){t.exports={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"timer-holder"},[o("div",{staticClass:"center-content"},[o("svg",{staticClass:"timer",attrs:{viewBox:"0 0 200 200",preserveAspectRatio:"xMinYMin meet",xmlns:"http://www.w3.org/2000/svg"}},[o("circle",{staticClass:"bigCircle",attrs:{r:"100",cx:"100",cy:"100"}}),o("circle",{staticClass:"smallCircle",attrs:{r:"90",cx:"100",cy:"100"}}),o("path",{staticClass:"segment",attrs:{d:this.path}}),this._t("default"),""!=this.text?o("text",{staticClass:"text",attrs:{x:"100",y:"100"}},[this._v("\n        "+this._s(this.text)+"\n      ")]):this._e()],2)])])},staticRenderFns:[]},t.exports.render._withStripped=!0},bxaW:function(t,o,e){var a=e("Ng7j");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("2f2c6c02",a,!1)},fIj1:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("Dd8w"),n=e.n(a),i=e("R1jx"),r=e.n(i),c=e("WSUW"),s=e("NYxO"),d=e("s/GO"),l=0,p=1,u=2;o.default={data:function(){return{state:l,pomodoros:0,source:e("maQQ"),chosenWorkout:{name:"",description:"",picture:""}}},computed:n()({},Object(s.mapGetters)({config:"getConfig",totalPomodoros:"getTotalPomodoros",workouts:"getWorkouts"}),{time:function(){var t=void 0;switch(this.state){case l:t=this.config.workingPomodoro;break;case p:t=this.config.shortBreak;break;case u:t=this.config.longBreak;break;default:t=this.config.workingPomodoro}return 60*t}}),components:{FooterComponent:c.a,HeaderComponent:c.b,CountDownTimer:r.a},methods:n()({},Object(s.mapActions)(["updateTotalPomodoros"]),{getRandomWorkout:function(){return this.workouts[Math.floor(Math.random()*this.workouts.length)]},togglePomodoro:function(){switch(Object(d.a)(),this.state){case l:this.pomodoros++,this.updateTotalPomodoros(this.totalPomodoros+1),this.state=this.pomodoros%this.config.pomodorosTillLongBreak==0?u:p,this.chosenWorkout=this.getRandomWorkout(),this.chosenWorkout.picture=this.chosenWorkout.pictures&&this.chosenWorkout.pictures.length&&this.chosenWorkout.pictures[0];break;default:this.state=l}this.$refs.countdowntimer.start()}})}},fiTO:function(t,o,e){var a=e("qeYD");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("a1b92306",a,!1)},h82G:function(t,o,e){(t.exports=e("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-ad04e11c],.content[data-v-ad04e11c]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-ad04e11c]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-ad04e11c]{background-color:#f15d59}.button.button-primary-faded[data-v-ad04e11c]{color:#f15d59;background-color:#ffcdd2}.button.button-lp-primary[data-v-ad04e11c]{background-color:#b71e1e}.button.button-lp-primary-faded[data-v-ad04e11c]{background-color:#ea5351}.button.button-lp-secondary[data-v-ad04e11c]{color:#b71e1e;background-color:#fff}.button[data-v-ad04e11c]:hover{opacity:.8}.button[data-v-ad04e11c]:active,.button[data-v-ad04e11c]:focus{opacity:1}.input[data-v-ad04e11c]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-ad04e11c]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-ad04e11c]:-ms-input-placeholder{color:#757575}.input[data-v-ad04e11c]::-webkit-input-placeholder{color:#757575}.input.white[data-v-ad04e11c]{color:#fff;border-bottom-color:#fff}.input.white[data-v-ad04e11c]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-ad04e11c]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-ad04e11c]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-ad04e11c]:focus{outline:none}.bold[data-v-ad04e11c]{font-weight:700}.form[data-v-ad04e11c]{padding:40px 0}.min-full-height[data-v-ad04e11c]{min-height:calc(100vh - 225px)}.title[data-v-ad04e11c]{font-size:25px;color:#f15d59}.main-content[data-v-ad04e11c]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-ad04e11c]{width:760px;max-width:100%}}.content[data-v-ad04e11c]{-webkit-box-direction:normal;-webkit-box-orient:vertical;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.controls .btn[data-v-ad04e11c]{cursor:pointer}",""])},iQXf:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("Dd8w"),n=e.n(a),i=e("NYxO"),r=e("QaVb"),c=e.n(r);o.default={name:"header-component",computed:n()({},Object(i.mapGetters)({name:"getDisplayName",isAuthenticated:"isAuthenticated"})),methods:n()({},Object(i.mapActions)(["logout"]),{onLogout:function(){this.logout(),this.$router.push("/")}}),components:{Logo:c.a}}},maQQ:function(t,o,e){t.exports=e.p+"img/pushups.9f94858.png"},n88f:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{src:e("GcSZ")}}}},"od/7":function(t,o,e){"use strict";function a(t){var o=function(t){return{x:100-100*Math.sin(Math.PI*t/180),y:100-100*Math.cos(Math.PI*t/180)}}(t),e=o.x,a=o.y;return t<=180?"M100,100 L100, 0 A100,100 0 0,0 "+e+", "+a+" z":"M100,100  L100, 0 A100,100 0 0,0 100, 200 A100,100 0 0,0 "+e+", "+a+" z"}Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["angle","text"],computed:{path:function(){return a(this.angle)}}}},qeYD:function(t,o,e){(t.exports=e("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-53055232],.footer .container[data-v-53055232]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-53055232]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-53055232]{background-color:#f15d59}.button.button-primary-faded[data-v-53055232]{color:#f15d59;background-color:#ffcdd2}.button.button-lp-primary[data-v-53055232]{background-color:#b71e1e}.button.button-lp-primary-faded[data-v-53055232]{background-color:#ea5351}.button.button-lp-secondary[data-v-53055232]{color:#b71e1e;background-color:#fff}.button[data-v-53055232]:hover{opacity:.8}.button[data-v-53055232]:active,.button[data-v-53055232]:focus{opacity:1}.input[data-v-53055232]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-53055232]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-53055232]:-ms-input-placeholder{color:#757575}.input[data-v-53055232]::-webkit-input-placeholder{color:#757575}.input.white[data-v-53055232]{color:#fff;border-bottom-color:#fff}.input.white[data-v-53055232]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-53055232]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-53055232]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-53055232]:focus{outline:none}.bold[data-v-53055232]{font-weight:700}.form[data-v-53055232]{padding:40px 0}.min-full-height[data-v-53055232]{min-height:calc(100vh - 225px)}.title[data-v-53055232]{font-size:25px;color:#f15d59}.main-content[data-v-53055232]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-53055232]{width:760px;max-width:100%}}.footer[data-v-53055232]{border-top:3px dotted #f15d59;min-height:65px;padding:15px 10px}.footer .container[data-v-53055232]{-webkit-box-pack:justify;-ms-flex-pack:justify;-moz-justify-content:space-between;justify-content:space-between;height:100%;min-height:30px;font-weight:lighter;color:#999}@media (max-width:767px){.footer .container[data-v-53055232]{-webkit-box-align:start;-ms-flex-align:start;-moz-align-items:flex-start;align-items:flex-start;-webkit-box-direction:normal;-webkit-box-orient:vertical;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.footer .author[data-v-53055232],.footer .copyright[data-v-53055232]{width:150px}@media (max-width:767px){.footer .author[data-v-53055232],.footer .copyright[data-v-53055232],.footer .fact[data-v-53055232]{margin-bottom:10px;width:auto}}",""])},rMqS:function(t,o,e){(t.exports=e("FZ+f")(!1)).push([t.i,"/*!\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.center-content[data-v-327ec3cc]{display:-webkit-box;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center}.button[data-v-327ec3cc]{border:none;display:block;width:100%;min-height:54px;padding:15px 50px;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;opacity:.9;color:#fff}.button.button-primary[data-v-327ec3cc]{background-color:#f15d59}.button.button-primary-faded[data-v-327ec3cc]{color:#f15d59;background-color:#ffcdd2}.button.button-lp-primary[data-v-327ec3cc]{background-color:#b71e1e}.button.button-lp-primary-faded[data-v-327ec3cc]{background-color:#ea5351}.button.button-lp-secondary[data-v-327ec3cc]{color:#b71e1e;background-color:#fff}.button[data-v-327ec3cc]:hover{opacity:.8}.button[data-v-327ec3cc]:active,.button[data-v-327ec3cc]:focus{opacity:1}.input[data-v-327ec3cc]{border:none;border-bottom:1px solid;display:block;width:100%;min-height:54px;padding:10px 0;font-size:16px;background-color:transparent;color:#757575;border-bottom-color:#757575}.input[data-v-327ec3cc]::-moz-placeholder{color:#757575;opacity:1}.input[data-v-327ec3cc]:-ms-input-placeholder{color:#757575}.input[data-v-327ec3cc]::-webkit-input-placeholder{color:#757575}.input.white[data-v-327ec3cc]{color:#fff;border-bottom-color:#fff}.input.white[data-v-327ec3cc]::-moz-placeholder{color:hsla(0,0%,100%,.7);opacity:1}.input.white[data-v-327ec3cc]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input.white[data-v-327ec3cc]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input[data-v-327ec3cc]:focus{outline:none}.bold[data-v-327ec3cc]{font-weight:700}.form[data-v-327ec3cc]{padding:40px 0}.min-full-height[data-v-327ec3cc]{min-height:calc(100vh - 225px)}.title[data-v-327ec3cc]{font-size:25px;color:#f15d59}.main-content[data-v-327ec3cc]{padding-top:30px;padding-bottom:30px}@media (max-width:991px){.container[data-v-327ec3cc]{width:760px;max-width:100%}}.timer-holder[data-v-327ec3cc]{margin:30px auto;display:table}@media (max-width:991px){.timer-holder[data-v-327ec3cc]{margin-top:80px;width:300px;height:300px}}.bigCircle[data-v-327ec3cc]{fill:#e23836}.smallCircle[data-v-327ec3cc]{fill:#f15d59}.segment[data-v-327ec3cc]{fill:#e23836;opacity:.6}.text[data-v-327ec3cc]{font-weight:lighter;opacity:.9;fill:#fff;text-anchor:middle}.timer[data-v-327ec3cc]{width:400px;height:400px;display:-webkit-box;display:-ms-flexbox;display:flex}@media (max-width:991px){.timer[data-v-327ec3cc]{width:300px;height:300px}}",""])},"s/GO":function(t,o,e){"use strict";e.d(o,"b",function(){return a}),e.d(o,"c",function(){return n}),e.d(o,"a",function(){return i});var a=function(t){return(""+t).length>1?t:"0"+t},n=function(t){return t?Math.floor((Date.now()-t)/1e3):0},i=function(){new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play()}},"s9w/":function(t,o,e){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"content"},[e("svg-circle-sector",{staticClass:"countdown-timer col-sm-12 col-md-10 col-lg-6",attrs:{angle:t.angle,text:t.text}}),e("div",{staticClass:"controls"},[e("div",{staticClass:"btn-group",attrs:{role:"group"}},[e("button",{staticClass:"btn btn-link",class:{disabled:0===t.state},attrs:{type:"button"},on:{click:t.start}},[e("img",{attrs:{src:t.playIcon}})]),e("button",{staticClass:"btn btn-link",class:{disabled:1===t.state||2===t.state},attrs:{type:"button"},on:{click:t.pause}},[e("img",{attrs:{src:t.pauseIcon}})]),e("button",{staticClass:"btn btn-link btn-stop",class:{disabled:2===t.state},attrs:{type:"button"},on:{click:t.stop}},[e("img",{attrs:{src:t.stopIcon}})])])])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},wliv:function(t,o,e){t.exports=e.p+"img/stop_icon.d337437.svg"},xB0I:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={}}});