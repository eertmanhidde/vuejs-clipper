(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4993a684"],{"09b5":function(e,t,i){"use strict";i.d(t,"a",function(){return s}),i.d(t,"d",function(){return n}),i.d(t,"c",function(){return a}),i.d(t,"e",function(){return c}),i.d(t,"b",function(){return l});var s={initapp:{}};s.initapp.html='<div id="app">\n  <clipper-basic class="my-clipper" src="example.jpg" />\n</div>',s.initapp.js="new Vue({\n  el: '#app'\n})",s.initapp.css=".my-clipper {\n  width: 100%;\n  max-width: 700px;\n}",s.upload={},s.upload.html='<div id="app">\n  <input type="file" @change="upload($event)">\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',s.upload.js="new Vue({\n  el: '#app',\n  data: {\n    imgURL: ''\n  },\n  methods: {\n    upload: function(e){\n      if (e.target.files.length !== 0) {\n        if(this.imgURL) URL.revokeObjectURL(this.imgURL)\n        this.imgURL = window.URL.createObjectURL(e.target.files[0]);\n      }\n    }\n  }\n})",s.upload.css=".placeholder {\n  text-align: center;\n  padding: 20px;\n  background-color: lightgray;\n}",s.upload2={},s.upload2.html='<div id="app">\n  <clipper-upload v-model="imgURL">upload image</clipper-upload>\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',s.upload2.js="new Vue({\n    el: '#app',\n    data: {\n      imgURL: ''\n    }\n})",s.result={},s.result.html='<button @click="getResult">clip image</button>\n<clipper-basic class="my-clipper" ref="clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n    <div>result:</div>\n    <img class="result" :src="resultURL" alt="">\n</div>',s.result.js1="data: {\n  imgURL: '',\n  resultURL: ''\n}",s.result.js='getResult: function () {\n  const canvas = this.$refs.clipper.clip();//call component\'s clip method\n  this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n}',s.preview={},s.preview.html='<clipper-basic \n  class="my-clipper" \n  ref="clipper" \n  :src="imgURL" \n  preview="my-preview" >\n  <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n  <div>preview:</div>\n  <clipper-preview name="my-preview" class="my-clipper">\n    <div class="placeholder" slot="placeholder">preview area</div>\n  </clipper-preview>\n</div>',s.full='<meta charset="utf-8">\n<title>vuejs-clipper demo</title>\n<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"><\/script>\n<script src="./vuejs-clipper.umd.js"><\/script>\n<link rel="stylesheet" href="./vuejs-clipper.css">\n<div id="app">\n    <button>\n      <clipper-upload v-model="imgURL">upload image</clipper-upload>\n    </button>\n    <button @click="getResult">clip image</button>\n    <clipper-basic class="my-clipper" ref="clipper" :src="imgURL" preview="my-preview">\n        <div class="placeholder" slot="placeholder">No image</div>\n    </clipper-basic>\n    <div>\n        <div>preview:</div>\n        <clipper-preview name="my-preview" class="my-clipper">\n            <div class="placeholder" slot="placeholder">preview area</div>\n        </clipper-preview>\n    </div>\n    <div>\n        <div>result:</div>\n        <img class="result" :src="resultURL" alt="">\n    </div>\n</div>\n<script>\n    new Vue({\n        el: \'#app\',\n        data: {\n            imgURL: \'\',\n            resultURL: \'\'\n        },\n        methods: {\n            getResult: function () {\n                const canvas = this.$refs.clipper.clip();//call component\'s clip method\n                this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n            }\n        }\n    })\n<\/script>\n<style>\n    .my-clipper {\n        width: 100%;\n        max-width: 700px;\n    }\n\n    .placeholder {\n        text-align: center;\n        padding: 20px;\n        background-color: lightgray;\n    }\n</style>';var n={html:'<clipper-basicref="clipper" \n  ref="clipper"\n  :style="basicStyle" \n  src="long.jpg"\n  @load="imgLoad" \n/>',js:"data: () => {\n  return {\n      maxWidth: 700,\n      maxHeight: 500,\n      based: 850\n  };\n},\nmethods: {\n  imgLoad: function() {\n      const imgRatio = this.$refs.clipper.imgRatio;\n      if(imgRatio < 1) this.based =  this.maxHeight*imgRatio;\n      else this.based = this.maxWidth;\n  },\n},\ncomputed: {\n  basicStyle : function() {\n      return {\n          maxWidth: this.based + 'px'\n      }\n  }\n}",html2:'<clipper-basic\n  src="long.jpg"\n  :wrapRatio="1"\n/>'},a={const:"const canvas = this.$refs.clipper.clip();",durl:'const jpgURL = canvas.toDataURL("image/jpeg")//to jpg\nconst pngURL = canvas.toDataURL("image/png", 1)//to png',blob:"canvas.toBlob(function(blob) {\n  //...\n});",url:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    if(vm.resultURL)\n      URL.revokeObjectURL(vm.resultURL)\n    vm.resultURL = URL.createObjectURL(blob)\n})",urles6:"this.$refs.clipper.clip().toBlob(blob=>{\n  if(this.resultURL) URL.revokeObjectURL(this.resultURL)\n  this.resultURL = URL.createObjectURL(blob)\n})",reader:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    const reader = new FileReader()\n    reader.addEventListener('load' ,function(){\n        vm.resultURL = this.result;\n    })\n    reader.readAsDataURL(blob);\n})"},c={ex1:'<clipper-fixed \n  src="ex2.jpg" \n  shadow="transparent" \n  border-color="transparent"\n  :grid="false"\n/>'},l={basicHtml:'<clipper-basic ref="clipper" src="ex2.jpg" />',basic:"//click buttons",fixed:"//click buttons"}},"0d7f":function(e,t,i){},"1c01":function(e,t,i){var s=i("a7d3"),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},"386b":function(e,t,i){var s=i("5ca1"),n=i("79e5"),a=i("be13"),c=/"/g,l=function(e,t,i,s){var n=String(a(e)),l="<"+t;return""!==i&&(l+=" "+i+'="'+String(s).replace(c,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(l),s(s.P+s.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",i)}},"3c77":function(e,t,i){"use strict";var s=i("0d7f"),n=i.n(s);n.a},c5fd:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"list-content content"},[i("div",{staticClass:"area"},[i("h2",[e._v("Set clipping components zooming position")]),i("p",[e._v("You can programmatically set the position and size of the scalable/movable area in clipping components.")]),i("h4",[e._v("clipper-basic")]),i("p",[e._v("These rxjs subjects are merged after operations that calculate the valid positions(top, left, width, height), so you need to make sure that your positions are valid by yourself. For example, setting width 100 to (%) and left to 10 (%) is not a valid position because the clipping area will flow over the component.")]),i("h5",[e._v("click buttons to set the position and sizing of the clipping area")]),i("div",{staticClass:"flex"},e._l(e.pos,function(t,s){return i("div",{key:"btn-"+s,staticClass:"flex pd"},[i("span",{staticClass:"label"},[i("button",{on:{click:function(i){e.setBasicPos(t)}}},[e._v("pos: "+e._s(t.tl)+" size: "+e._s(t.wh))])])])})),i("div",{staticClass:"basic"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.basicHtml,expression:"code.basicHtml"}]},[i("code",{staticClass:"html"})]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.basic,expression:"code.basic"}]},[i("code",{staticClass:"javascript"})]),i("clipper-basic",{ref:"basic",attrs:{src:"ex2.jpg",grid:!1}})],1)]),i("div",{staticClass:"area"},[i("h4",[e._v("clipper-fixed")]),i("p",[e._v("You can also adjust clipper-fixed's images position and sizing.")]),i("div",{staticClass:"flex"},e._l(e.posFixed,function(t,s){return i("div",{key:"btn-"+s,staticClass:"flex pd"},[i("span",{staticClass:"label"},[i("button",{on:{click:function(i){e.setFixedPos(t)}}},[e._v("translate("+e._s(t.tl.left)+"%, "+e._s(t.tl.top)+"%), scale("+e._s(t.wh)+")")])])])})),i("div",{staticClass:"basic"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.basicHtml,expression:"code.basicHtml"}]},[i("code",{staticClass:"html"})]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.fixed,expression:"code.fixed"}]},[i("code",{staticClass:"javascript"})]),i("clipper-fixed",{ref:"fixed",attrs:{src:"ex2.jpg"}})],1)])])},n=[],a=i("5176"),c=i.n(a),l=(i("d263"),i("f499")),p=i.n(l),r=i("09b5"),o={data:function(){return{src:"ex1.jpg",clipResult:"",code:r["b"],pos:[{tl:{top:25,left:25},wh:{width:50,height:50}},{tl:{top:0,left:0},wh:{width:100,height:100}},{tl:{right:0,bottom:0},wh:{width:40,height:30}},{tl:{leftt:0,bottom:20},wh:{width:40,height:30}}],posFixed:[{tl:{top:0,left:0},wh:1},{tl:{top:50,left:50},wh:.6},{tl:{left:10,top:10},wh:2}]}},methods:{clip:function(){this.clipToURL()},setBasicPos:function(e){var t=this.$refs.basic;t&&(t.setTL$.next(e.tl),t.setWH$.next(e.wh),this.$set(this.code,"basic","this.$refs.clipper.setTL$.next(".concat(p()(e.tl),")\nthis.$refs.clipper.setWH$.next(").concat(p()(e.wh),")")))},setFixedPos:function(e){var t=this.$refs.fixed;t&&(t.setTL$.next(e.tl),t.setWH$.next(e.wh),this.$set(this.code,"fixed","this.$refs.clipper.setTL$.next(".concat(p()(e.tl),")\nthis.$refs.clipper.setWH$.next(").concat(p()(e.wh),")")))}},computed:{position:function(){return c()(this.pos,{right:100-this.pos.width-this.pos.left,bottom:100-this.pos.height-this.pos.top})},posBasic:function(){this.$refs.basic;var e=2,t={top:this.position.top.toFixed(e),left:this.position.left.toFixed(e),width:this.position.width.toFixed(e),height:this.position.height.toFixed(e)};return this.setBasicPos(),t}}},d=o,h=(i("3c77"),i("2877")),u=Object(h["a"])(d,s,n,!1,null,"4a53be12",null);t["default"]=u.exports},d263:function(e,t,i){"use strict";i("386b")("fixed",function(e){return function(){return e(this,"tt","","")}})},f499:function(e,t,i){e.exports=i("1c01")}}]);
//# sourceMappingURL=chunk-4993a684.87718c07.js.map