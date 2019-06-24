(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2018742f"],{"09b5":function(e,i,t){"use strict";t.d(i,"a",function(){return s}),t.d(i,"d",function(){return a}),t.d(i,"c",function(){return l}),t.d(i,"e",function(){return c}),t.d(i,"b",function(){return n});var s={initapp:{}};s.initapp.html='<div id="app">\n  <clipper-basic class="my-clipper" src="example.jpg" />\n</div>',s.initapp.js="new Vue({\n  el: '#app'\n})",s.initapp.css=".my-clipper {\n  width: 100%;\n  max-width: 700px;\n}",s.upload={},s.upload.html='<div id="app">\n  <input type="file" @change="upload($event)">\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',s.upload.js="new Vue({\n  el: '#app',\n  data: {\n    imgURL: ''\n  },\n  methods: {\n    upload: function(e){\n      if (e.target.files.length !== 0) {\n        if(this.imgURL) URL.revokeObjectURL(this.imgURL)\n        this.imgURL = window.URL.createObjectURL(e.target.files[0]);\n      }\n    }\n  }\n})",s.upload.css=".placeholder {\n  text-align: center;\n  padding: 20px;\n  background-color: lightgray;\n}",s.upload2={},s.upload2.html='<div id="app">\n  <clipper-upload v-model="imgURL">upload image</clipper-upload>\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',s.upload2.js="new Vue({\n    el: '#app',\n    data: {\n      imgURL: ''\n    }\n})",s.result={},s.result.html='<button @click="getResult">clip image</button>\n<clipper-basic class="my-clipper" ref="clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n    <div>result:</div>\n    <img class="result" :src="resultURL" alt="">\n</div>',s.result.js1="data: {\n  imgURL: '',\n  resultURL: ''\n}",s.result.js='getResult: function () {\n  const canvas = this.$refs.clipper.clip();//call component\'s clip method\n  this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n}',s.preview={},s.preview.html='<clipper-basic \n  class="my-clipper" \n  ref="clipper" \n  :src="imgURL" \n  preview="my-preview" >\n  <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n  <div>preview:</div>\n  <clipper-preview name="my-preview" class="my-clipper">\n    <div class="placeholder" slot="placeholder">preview area</div>\n  </clipper-preview>\n</div>',s.full='<meta charset="utf-8">\n<title>vuejs-clipper demo</title>\n<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"><\/script>\n<script src="./vuejs-clipper.umd.js"><\/script>\n<link rel="stylesheet" href="./vuejs-clipper.css">\n<div id="app">\n    <button>\n      <clipper-upload v-model="imgURL">upload image</clipper-upload>\n    </button>\n    <button @click="getResult">clip image</button>\n    <clipper-basic class="my-clipper" ref="clipper" :src="imgURL" preview="my-preview">\n        <div class="placeholder" slot="placeholder">No image</div>\n    </clipper-basic>\n    <div>\n        <div>preview:</div>\n        <clipper-preview name="my-preview" class="my-clipper">\n            <div class="placeholder" slot="placeholder">preview area</div>\n        </clipper-preview>\n    </div>\n    <div>\n        <div>result:</div>\n        <img class="result" :src="resultURL" alt="">\n    </div>\n</div>\n<script>\n    new Vue({\n        el: \'#app\',\n        data: {\n            imgURL: \'\',\n            resultURL: \'\'\n        },\n        methods: {\n            getResult: function () {\n                const canvas = this.$refs.clipper.clip();//call component\'s clip method\n                this.resultURL = canvas.toDataURL("image/jpg", 1);//canvas->image\n            }\n        }\n    })\n<\/script>\n<style>\n    .my-clipper {\n        width: 100%;\n        max-width: 700px;\n    }\n\n    .placeholder {\n        text-align: center;\n        padding: 20px;\n        background-color: lightgray;\n    }\n</style>';var a={html:'<clipper-basicref="clipper" \n  ref="clipper"\n  :style="basicStyle" \n  src="long.jpg"\n  @load="imgLoad" \n/>',js:"data: () => {\n  return {\n      maxWidth: 700,\n      maxHeight: 500,\n      based: 850\n  };\n},\nmethods: {\n  imgLoad: function() {\n      const imgRatio = this.$refs.clipper.imgRatio;\n      if(imgRatio < 1) this.based =  this.maxHeight*imgRatio;\n      else this.based = this.maxWidth;\n  },\n},\ncomputed: {\n  basicStyle : function() {\n      return {\n          maxWidth: this.based + 'px'\n      }\n  }\n}",html2:'<clipper-basic\n  src="long.jpg"\n  :wrapRatio="1"\n/>'},l={const:"const canvas = this.$refs.clipper.clip();",durl:'const jpgURL = canvas.toDataURL("image/jpeg")//to jpg\nconst pngURL = canvas.toDataURL("image/png", 1)//to png',blob:"canvas.toBlob(function(blob) {\n  //...\n});",url:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    if(vm.resultURL)\n      URL.revokeObjectURL(vm.resultURL)\n    vm.resultURL = URL.createObjectURL(blob)\n})",urles6:"this.$refs.clipper.clip().toBlob(blob=>{\n  if(this.resultURL) URL.revokeObjectURL(this.resultURL)\n  this.resultURL = URL.createObjectURL(blob)\n})",reader:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    const reader = new FileReader()\n    reader.addEventListener('load' ,function(){\n        vm.resultURL = this.result;\n    })\n    reader.readAsDataURL(blob);\n})"},c={ex1:'<clipper-fixed \n  src="ex2.jpg" \n  shadow="transparent" \n  border-color="transparent"\n  :grid="false"\n/>'},n={basicHtml:'<clipper-basic ref="clipper" src="ex2.jpg" />',basic:"//click buttons",fixed:"//click buttons"}},7851:function(e,i,t){},7967:function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"list-content content"},[t("div",{staticClass:"area"},[t("h2",[e._v("Quick Start")]),t("h3",[e._v("First setup")]),e._m(0),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.initapp.html,expression:"code.initapp.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Js")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.initapp.js,expression:"code.initapp.js"}]},[t("code",{staticClass:"javascript"})]),t("div",{staticClass:"title"},[e._v("Css")]),t("div",[e._v("set clipper width")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.initapp.css,expression:"code.initapp.css"}]},[t("code",{staticClass:"css"})]),t("div",{staticClass:"title"},[e._v("Result")]),t("clipper-basic",{staticClass:"my-clipper",attrs:{src:"ex1.jpg"}})],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("Upload image")]),t("div",[e._v("\n            You can use clipper-upload directly or implement by yourself.\n        ")]),t("h4",[e._v("(1) implement by yourself")]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("div",[e._v("add a file input")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload.html,expression:"code.upload.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Js")]),t("div",[e._v("tranfrom file to URL")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload.js,expression:"code.upload.js"}]},[t("code",{staticClass:"javascript"})]),t("div",{staticClass:"title"},[e._v("Css")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload.css,expression:"code.upload.css"}]},[t("code",{staticClass:"css"})])]),t("h4",[e._v("(2) Use clipper-upload")]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("div",[e._v("add clipper-upload, bind data.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload2.html,expression:"code.upload2.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Js")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload2.js,expression:"code.upload2.js"}]},[t("code",{staticClass:"javascript"})])]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Result (use clipper-upload)")]),t("div",{staticClass:"btn"},[t("clipper-upload",{model:{value:e.imgURL[0],callback:function(i){e.$set(e.imgURL,0,i)},expression:"imgURL[0]"}},[e._v("upload image")])],1),t("clipper-basic",{staticClass:"my-clipper",attrs:{src:e.imgURL[0]}},[t("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("No image")])])],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("Get clipping result")]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("div",[e._v("Add a button")]),t("div",[e._v("Set 'ref' to use component's methods.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.result.html,expression:"code.result.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Js")]),t("div",[e._v("Add data")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.result.js1,expression:"code.result.js1"}]},[t("code",{staticClass:"javascript"})]),t("div",[e._v("Add getResult method")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.result.js,expression:"code.result.js"}]},[t("code",{staticClass:"javascript"})]),t("div",{staticClass:"title"},[e._v("Result")]),t("div",{staticClass:"btn"},[t("clipper-upload",{model:{value:e.imgURL[1],callback:function(i){e.$set(e.imgURL,1,i)},expression:"imgURL[1]"}},[e._v("upload image")])],1),t("button",{staticClass:"btn",on:{click:function(i){e.getResult(1)}}},[e._v("clip image")]),t("clipper-basic",{ref:e.refs[1],staticClass:"my-clipper",attrs:{src:e.imgURL[1]}},[t("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("No image")])]),t("div",[t("div",[e._v("result:")]),t("img",{staticClass:"result",attrs:{src:e.resultURL[1],alt:""}})]),t("div",[e._v("There are many ways to transform canvas to URL,")]),t("div",[e._v("See more about "),t("router-link",{attrs:{to:"/examples/canvas-to-image"}},[e._v("canvas to image")]),e._v(".")],1)],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("Preview clipping result")]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("div",[e._v("Add clipper-preview component, set name.")]),t("div",[e._v("Add preview prop to clipper-basic that matches clipper-preview's name")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.preview.html,expression:"code.preview.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Result")]),t("div",{staticClass:"btn"},[t("clipper-upload",{model:{value:e.imgURL[2],callback:function(i){e.$set(e.imgURL,2,i)},expression:"imgURL[2]"}},[e._v("upload image")])],1),t("button",{staticClass:"btn",on:{click:function(i){e.getResult(2)}}},[e._v("clip image")]),t("clipper-basic",{ref:e.refs[2],staticClass:"my-clipper",attrs:{src:e.imgURL[2],preview:"my-preview"}},[t("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("No image")])]),t("div",[t("div",[e._v("preview:")]),t("clipper-preview",{staticClass:"my-clipper",attrs:{name:"my-preview"}},[t("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("preview area")])])],1),t("div",[t("div",[e._v("result:")]),t("img",{staticClass:"result",attrs:{src:e.resultURL[2],alt:""}})])],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("Full code")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.full,expression:"code.full"}]},[t("code",{staticClass:"html"})])])])},a=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"p"},[e._v("Use components after "),t("a",{attrs:{href:"https://www.npmjs.com/package/vuejs-clipper",target:"_blank"}},[e._v("installation")]),e._v(".")])}],l=t("09b5"),c={data:function(){return{code:l["a"],refs:["clipper1","clipper2","clipper3"],imgURL:["","",""],resultURL:["","",""]}},methods:{getResult:function(e){var i=this.$refs[this.refs[e]].clip();this.$set(this.resultURL,e,i.toDataURL("image/jpg",1))}}},n=c,r=(t("888c"),t("2877")),p=Object(r["a"])(n,s,a,!1,null,"7d01c10f",null);i["default"]=p.exports},"888c":function(e,i,t){"use strict";var s=t("7851"),a=t.n(s);a.a}}]);
//# sourceMappingURL=chunk-2018742f.85b62b64.js.map