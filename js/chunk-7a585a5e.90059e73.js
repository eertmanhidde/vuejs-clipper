(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a585a5e"],{"09b5":function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"c",function(){return s}),t.d(n,"b",function(){return l}),t.d(n,"d",function(){return c});var i={initapp:{}};i.initapp.html='<div id="app">\n  <clipper-basic class="my-clipper" src="example.jpg"></clipper-basic>\n</div>',i.initapp.js="new Vue({\n  el: '#app'\n})",i.initapp.css=".my-clipper {\n  width: 100%;\n  max-width: 700px;\n}",i.upload={},i.upload.html='<div id="app">\n  <input type="file" @change="upload($event)">\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',i.upload.js="new Vue({\n  el: '#app',\n  data: {\n    imgURL: ''\n  },\n  methods: {\n    upload: function(e){\n      if (e.target.files.length !== 0) {\n        if(this.imgURL) URL.revokeObjectURL(this.imgURL)\n        this.imgURL = window.URL.createObjectURL(e.target.files[0]);\n      }\n    }\n  }\n})",i.upload.css=".placeholder {\n  text-align: center;\n  padding: 20px;\n  background-color: lightgray;\n}",i.upload2={},i.upload2.html='<div id="app">\n  <clipper-upload v-model="imgURL">upload image</clipper-upload>\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',i.upload2.js="new Vue({\n    el: '#app',\n    data: {\n      imgURL: ''\n    }\n})",i.result={},i.result.html='<button @click="getResult">clip image</button>\n<clipper-basic class="my-clipper" ref="clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n    <div>result:</div>\n    <img class="result" :src="resultURL" alt="">\n</div>',i.result.js1="data: {\n  imgURL: '',\n  resultURL: ''\n}",i.result.js='getResult: function () {\n  const canvas = this.$refs.clipper.clip();//call component\'s clip method\n  this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n}',i.preview={},i.preview.html='<clipper-basic \n  class="my-clipper" \n  ref="clipper" \n  :src="imgURL" \n  preview="my-preview" >\n  <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n  <div>preview:</div>\n  <clipper-preview name="my-preview" class="my-clipper">\n    <div class="placeholder" slot="placeholder">preview area</div>\n  </clipper-preview>\n</div>',i.full='<meta charset="utf-8">\n<title>vuejs-clipper demo</title>\n<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"><\/script>\n<script src="./vuejs-clipper.umd.js"><\/script>\n<link rel="stylesheet" href="./vuejs-clipper.css">\n<div id="app">\n    <button>\n      <clipper-upload v-model="imgURL">upload image</clipper-upload>\n    </button>\n    <button @click="getResult">clip image</button>\n    <clipper-basic class="my-clipper" ref="clipper" :src="imgURL" preview="my-preview">\n        <div class="placeholder" slot="placeholder">No image</div>\n    </clipper-basic>\n    <div>\n        <div>preview:</div>\n        <clipper-preview name="my-preview" class="my-clipper">\n            <div class="placeholder" slot="placeholder">preview area</div>\n        </clipper-preview>\n    </div>\n    <div>\n        <div>result:</div>\n        <img class="result" :src="resultURL" alt="">\n    </div>\n</div>\n<script>\n    new Vue({\n        el: \'#app\',\n        data: {\n            imgURL: \'\',\n            resultURL: \'\'\n        },\n        methods: {\n            getResult: function () {\n                const canvas = this.$refs.clipper.clip();//call component\'s clip method\n                this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n            }\n        }\n    })\n<\/script>\n<style>\n    .my-clipper {\n        width: 100%;\n        max-width: 700px;\n    }\n\n    .placeholder {\n        text-align: center;\n        padding: 20px;\n        background-color: lightgray;\n    }\n</style>';var s={html:'<clipper-basicref="clipper" \n  ref="clipper"\n  @load="imgLoad" \n  :style="basicStyle" \n  src="long.jpg">\n</clipper-basic>',js:"data: () => {\n  return {\n      maxWidth: 700,\n      maxHeight: 500,\n      based: 850\n  };\n},\nmethods: {\n  imgLoad: function() {\n      const imgRatio = this.$refs.clipper.imgRatio;\n      if(imgRatio < 1) this.based =  this.maxHeight*imgRatio;\n      else this.based = this.maxWidth;\n  },\n},\ncomputed: {\n  basicStyle : function() {\n      return {\n          maxWidth: this.based + 'px'\n      }\n  }\n}"},l={const:"const canvas = this.$refs.clipper.clip();",durl:'const jpgURL = canvas.toDataURL("image/jpeg")//to jpg\nconst pngURL = canvas.toDataURL("image/png", 1)//to png',blob:"canvas.toBlob(function(blob) {\n  //...\n});",url:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    if(vm.resultURL)\n      URL.revokeObjectURL(vm.resultURL)\n    vm.resultURL = URL.createObjectURL(blob)\n})",urles6:"this.$refs.clipper.clip().toBlob(blob=>{\n  if(this.resultURL) URL.revokeObjectURL(this.resultURL)\n  this.resultURL = URL.createObjectURL(blob)\n})",reader:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    const reader = new FileReader()\n    reader.addEventListener('load' ,function(){\n        vm.resultURL = this.result;\n    })\n    reader.readAsDataURL(blob);\n})"},c={ex1:'<clipper-fixed \n  src="ex2.jpg" \n  shadow="transparent" \n  border-color="transparent"\n  :grid="false"></clipper-fixed>'}},"27d3":function(e,n,t){},"386b":function(e,n,t){var i=t("5ca1"),s=t("79e5"),l=t("be13"),c=/"/g,a=function(e,n,t,i){var s=String(l(e)),a="<"+n;return""!==t&&(a+=" "+t+'="'+String(i).replace(c,"&quot;")+'"'),a+">"+s+"</"+n+">"};e.exports=function(e,n){var t={};t[e]=n(a),i(i.P+i.F*s(function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",t)}},ab2a:function(e,n,t){"use strict";t("b54a");var i=t("795b"),s=t.n(i);n["a"]={methods:{clipToURL:function(){var e=this;return new s.a(function(n,t){var i=e.$refs.clipper.clip();i.toBlob?i.toBlob(function(t){e.clipResult&&URL.revokeObjectURL(e.clipResult),e.clipResult=URL.createObjectURL(t),e.link=e.clipResult,e.resultDone(),n()},"image/png",1):(e.clipResult=i.toDataURL("image/png",1),e.link=e.clipResult,e.resultDone(),n())})},resultDone:function(){this.done=!0}}}},b54a:function(e,n,t){"use strict";t("386b")("link",function(e){return function(n){return e(this,"a","href",n)}})},c65a:function(e,n,t){"use strict";var i=t("27d3"),s=t.n(i);s.a},d930:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.popup?t("div",{staticClass:"popup"},[t("div",{staticClass:"popup-content"},[t("div",{staticClass:"flow"},[t("clipper-fixed",{ref:"clipper",staticClass:"clipper-fixed",attrs:{src:e.src,round:!0}}),t("div",{staticClass:"flex-center"},[t("button",{staticClass:"btn g",on:{click:e.confirm}},[e._v("confirm")]),t("button",{staticClass:"btn r",on:{click:e.cancel}},[e._v("cancel")])])],1),t("img",{staticClass:"close",attrs:{src:"icon/cancel.png",alt:""},on:{click:e.cancel}})])]):e._e(),t("div",{staticClass:"list-content content"},[t("div",{staticClass:"area"},[t("h3",{staticClass:"tc"},[e._v("Edit Profile")]),t("div",{staticClass:"flex center"},[t("div",{staticClass:"pic-con"},[t("img",{attrs:{src:e.clipResult}}),t("clipper-upload",{staticClass:"upload",on:{input:e.open},model:{value:e.src,callback:function(n){e.src=n},expression:"src"}},[t("span",[e._v("upload image")])]),e.done?e._e():t("div",{staticClass:"flex-center cen"},[t("loader",[e._v("Converting")])],1)],1),e._m(0)])])])])},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"edit-area mt"},[t("div",[t("label",[e._v("First Name: ")]),t("input",{attrs:{type:"text"}})]),t("div",[t("label",[e._v("Last Name: ")]),t("input",{attrs:{type:"text"}})]),t("div",[t("label",[e._v("Tel: ")]),t("input",{attrs:{type:"text"}}),t("br")]),t("div",[t("label",[e._v("Address: ")]),t("input",{attrs:{type:"text"}}),t("br")])])}],l=t("09b5"),c=t("ab2a"),a=t("555f"),p={components:{Loader:a["default"]},extends:{mixins:[c["a"]]},data:function(){return{popup:!1,clipResult:"profile.png",src:"",link:"",done:!0,code:l["b"]}},methods:{open:function(){this.popup=!0},close:function(){this.popup=!1},confirm:function(){this.done=!1,this.clipResult=null,this.clipToURL(),this.close()},cancel:function(){this.close()}}},r=p,o=(t("c65a"),t("2877")),d=Object(o["a"])(r,i,s,!1,null,"1ed025d4",null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7a585a5e.90059e73.js.map