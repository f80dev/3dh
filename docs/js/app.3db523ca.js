(function(t){function e(e){for(var i,n,l=e[0],r=e[1],c=e[2],m=0,u=[];m<l.length;m++)n=l[m],s[n]&&u.push(s[n][0]),s[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,l=1;l<a.length;l++){var r=a[l];0!==s[r]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0f62":function(t,e,a){"use strict";var i=a("49e8"),s=a.n(i);s.a},4065:function(t,e,a){"use strict";var i=a("4f05"),s=a.n(i);s.a},"49e8":function(t,e,a){},"4f05":function(t,e,a){},"58ab":function(t,e,a){},"9dbc":function(t,e,a){"use strict";var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"0px",color:"white"}},[a("div",{staticClass:"md-layout md-gutter md-alignment-top",staticStyle:{margin:"0px"}},[a("div",{staticClass:"md-layout-item md-xlarge-size-30 md-large-size-40 md-medium-size-40 md-small-size-100 md-xsmall-size-100"},[a("div",{staticClass:"md-alignment-top-left"},[a("div",{staticClass:"md-layout"},[t._m(0),a("div",{staticClass:"md-layout-item md-size-40 md-alignment-center-left md-xlarge-size",staticStyle:{"font-size":"small","font-weight":"lighter"}},[t._v("\n                        "+t._s(t.hourglass)+"\n                    ")]),a("div",{staticClass:"md-layout-item md-size-20 md-alignment-centered"},[t.hourglass.length>0?a("md-progress-spinner",{attrs:{"md-diameter":30,"md-stroke":5,"md-mode":"indeterminate"}}):t._e()],1)]),a("md-snackbar",{attrs:{"md-position":t.centered,"md-duration":4e3,"md-active":t.toast_message.length>0},on:{"update:mdActive":function(e){t.$set(t.toast_message,"length>0",e)}}},[t._v("\n                    "+t._s(t.toast_message)+"\n                ")]),a("md-card",[a("md-card-header",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item"},[a("div",{staticClass:"md-title",staticStyle:{"text-align":"left"}},[t._v("Datas / Files")])]),a("div",{staticClass:"md-layout-item",staticStyle:{"text-align":"right"}},[a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){t.help()}}},[t._v("Help")])],1)])]),a("md-card-content",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item"},[0==t.url.length?a("md-field",[a("label",[t._v("Files")]),a("md-select",{attrs:{id:"_file",name:"_file"},on:{"md-selected":function(e){t.selectFile()}},model:{value:t.selected_file,callback:function(e){t.selected_file=e},expression:"selected_file"}},t._l(t.measures,function(e){return a("md-option",{attrs:{value:e}},[t._v(t._s(e))])}))],1):t._e(),t.url.length>0?a("md-field",[t._v("\n                                    "+t._s(t.url)+"\n                                ")]):t._e()],1),0==t.url.length?a("div",{staticClass:"md-layout-item",staticStyle:{"text-align":"right"}},[a("md-button",{directives:[{name:"show",rawName:"v-show",value:t.selected_file.length>0,expression:"selected_file.length>0"}],staticClass:"md-raised md-secondary",on:{click:function(e){t.deleteFile()}}},[t._v("Delete")]),a("md-button",{directives:[{name:"show",rawName:"v-show",value:t.measures.length>0,expression:"measures.length>0"}],staticClass:"md-raised md-secondary",on:{click:function(e){t.randomFile()}}},[t._v("Random")])],1):t._e(),t.url.length>0?a("div",{staticClass:"md-layout-item",staticStyle:{"text-align":"right"}},[a("md-button",{staticClass:"md-raised md-secondary",on:{click:function(e){t.clearURL()}}},[t._v("Clear")])],1):t._e()]),0==t.url.length?a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-50"},[a("label",{staticClass:"md-button md-primary md-alignment-center",attrs:{for:"_public_file"}},[a("md-icon",[t._v("backup")]),t._v("  Public")],1),a("md-file",{staticStyle:{visibility:"hidden",height:"0px"},attrs:{id:"_public_file"},on:{"md-change":function(e){t.upload(e,!0)}}})],1),a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-50"},[a("label",{staticClass:"md-button md-primary",attrs:{for:"_private_file"}},[a("md-icon",[t._v("backup")]),t._v("  Private")],1),a("md-file",{staticStyle:{visibility:"hidden",height:"0px"},attrs:{id:"_private_file"},on:{"md-change":function(e){t.upload(e,!1)}}})],1),a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-50"},[a("label",{staticClass:"md-button md-primary",on:{click:function(e){t.analyseClipboard()}}},[a("md-icon",[t._v("backup")]),t._v("  Paste")],1)])]):t._e(),(t.selected_file.length>0||t.url.length>0)&&"data"==t.type?a("FileFormat",{attrs:{cols:t.data_cols},on:{format:function(e){t.updateFormat(e)}}}):t._e()],1)],1),a("br"),t.selected_file.length>0?a("md-card",[a("md-card-header",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item"},[a("div",{staticClass:"md-title",staticStyle:{"text-align":"left"}},[t._v("Treatment")])]),a("div",{staticClass:"md-layout-item",staticStyle:{"text-align":"right"}},[a("md-button",{directives:[{name:"show",rawName:"v-show",value:0==t.hourglass.length,expression:"hourglass.length==0"}],staticClass:"md-raised md-primary",on:{click:function(e){t.preview()}}},[t._v("Preview")])],1)])]),a("md-card-content",[a("md-tabs",[a("md-tab",{attrs:{id:"tab-cluster","md-label":"Clustering"}},[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item"},[a("md-field",[a("md-select",{on:{"md-selected":function(e){t.showParameters()}},model:{value:t.treatment,callback:function(e){t.treatment=e},expression:"treatment"}},[a("md-option",{attrs:{value:"NOTREATMENT::::"}},[t._v("NOTREATMENT")]),"data"==t.type?a("md-option",{attrs:{value:"HDBSCAN::min_samples=2 min_cluster_size=3 alpha=0.5::https://hdbscan.readthedocs.io/en/latest/parameter_selection.html#"}},[t._v("\n                                                    HDBSCAN\n                                                ")]):t._e(),"data"==t.type?a("md-option",{attrs:{value:"NEURALGAS::passes=3 distance_toremove_edge=40::https://en.wikipedia.org/wiki/Neural_gas"}},[t._v("\n                                                    NEURALGAS\n                                                ")]):t._e(),"data"==t.type?a("md-option",{attrs:{value:"HAC::n_clusters=11,12,13::http://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html"}},[t._v("\n                                                    HAC\n                                                ")]):t._e(),"data"==t.type?a("md-option",{attrs:{value:"MEANSHIFT::bandwidth=0.1,0.3,0.2::http://scikit-learn.org/stable/modules/generated/sklearn.cluster.MeanShift.html"}},[t._v("\n                                                    MEANSHIFT\n                                                ")]):t._e(),"graph"==t.type?a("md-option",{attrs:{value:"mod:: ::https://networkx.github.io/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.modularity_max.greedy_modularity_communities.html#networkx.algorithms.community.modularity_max.greedy_modularity_communities"}},[t._v("\n                                                    Greedy Modularity\n                                                ")]):t._e(),"graph"==t.type?a("md-option",{attrs:{value:"async::k=5 max_iter=15::https://networkx.github.io/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.asyn_fluid.asyn_fluidc.html#networkx.algorithms.community.asyn_fluid.asyn_fluidc"}},[t._v("\n                                                    Async Fluid\n                                                ")]):t._e(),"graph"==t.type?a("md-option",{attrs:{value:"GN:: ::https://networkx.github.io/documentation/latest/reference/algorithms/generated/networkx.algorithms.community.centrality.girvan_newman.html"}},[t._v("\n                                                    Girvan Newman\n                                                ")]):t._e(),"graph"==t.type?a("md-option",{attrs:{value:"lab:: ::https://networkx.github.io/documentation/latest/reference/algorithms/generated/networkx.algorithms.community.label_propagation.label_propagation_communities.html"}},[t._v("\n                                                    Label Propagation\n                                                ")]):t._e()],1)],1),a("div",{staticClass:"md-layout-item"})],1)]),t.params.length>0?a("div",{staticClass:"md-layout md-gutter md-alignment-center"},t._l(t.params,function(e){return a("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"},[a("md-field",[a("label",[t._v(t._s(e.label))]),a("md-input",{attrs:{type:"text"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"param.value"}})],1)],1)})):t._e(),a("md-button",{directives:[{name:"show",rawName:"v-show",value:"data"==t.type&&0==t.hourglass.length,expression:"type=='data' && hourglass.length==0"}],staticClass:"md-raised md-secondary",on:{click:function(e){t.reduce()}}},[t._v("Reduce")])],1),a("md-tab",{attrs:{id:"tab-convert","md-label":"Convert"}},["data"==t.type?a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-30"},[a("md-button",{staticClass:"md-raised md-secondary",on:{click:function(e){t.convertToGraph()}}},[t._v("To graph")])],1),a("div",{staticClass:"md-layout-item md-size-70"},[a("md-field",[a("label",[t._v("Threshold distance")]),a("md-input",{attrs:{type:"number",step:"0.02"},model:{value:t.distance,callback:function(e){t.distance=e},expression:"distance"}})],1)],1)]):t._e(),a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-30"},["data"==t.type?a("md-button",{staticClass:"md-raised md-secondary",on:{click:function(e){t.convertToSubData()}}},[t._v("To subData")]):t._e(),"graph"==t.type?a("md-button",{staticClass:"md-raised md-secondary",on:{click:function(e){t.convertGraphToData()}}},[t._v("To data")]):t._e()],1)])]),"graph"==t.type?a("md-tab",{attrs:{id:"tab-graph","md-label":"Graph"}},[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item"},[a("md-field",[a("md-select",{model:{value:t.algo_loc,callback:function(e){t.algo_loc=e},expression:"algo_loc"}},[a("md-option",{attrs:{value:"fr"}},[t._v("Fruchterman Reingold")]),a("md-option",{attrs:{value:"Circular"}},[t._v("circular")]),a("md-option",{attrs:{value:"Spectral"}},[t._v("spectral")]),a("md-option",{attrs:{value:"Random"}},[t._v("random")])],1)],1)],1)])]):t._e()],1)],1)],1):t._e(),a("br"),t.selected_file.length>0?a("md-card",[a("md-card-header",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item"},[a("div",{staticClass:"md-title",staticStyle:{"text-align":"left"}},[t._v("Advanced")])]),a("div",{staticClass:"md-layout-item",staticStyle:{"text-align":"right"}},[a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){t.openIn(t.showLink())}}},[t._v("Execute")])],1)])]),a("md-card-content",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-40"},[a("md-field",[a("label",[t._v("Nb View")]),a("md-input",{attrs:{type:"number"},model:{value:t.pca,callback:function(e){t.pca=e},expression:"pca"}})],1)],1),a("div",{staticClass:"md-layout-item md-size-20"}),a("div",{staticClass:"md-layout-item md-size-40"},[a("md-field",[a("label",[t._v("Limit")]),a("md-input",{attrs:{type:"number"},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1)],1)]),a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-40"},[a("md-field",[a("label",[t._v("Processors")]),a("md-input",{attrs:{type:"number"},model:{value:t.processors,callback:function(e){t.processors=e},expression:"processors"}})],1)],1)]),a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item"},[a("md-checkbox",{attrs:{value:"1"},model:{value:t.notext,callback:function(e){t.notext=e},expression:"notext"}},[t._v("No text")])],1),a("div",{staticClass:"md-layout-item"},[a("md-checkbox",{attrs:{value:"1"},model:{value:t.nometrics,callback:function(e){t.nometrics=e},expression:"nometrics"}},[t._v("No metrics")])],1),a("div",{staticClass:"md-layout-item"},[a("md-checkbox",{attrs:{value:"1"},model:{value:t.add_property,callback:function(e){t.add_property=e},expression:"add_property"}},[t._v("Add Property")])],1),a("div",{staticClass:"md-layout-item"},[a("md-checkbox",{attrs:{value:"1"},model:{value:t.autorotate,callback:function(e){t.autorotate=e},expression:"autorotate"}},[t._v("Auto Rotate")])],1)])])],1):t._e()],1),null!=t.$route.params.api?a("span",[t._v("Server: "+t._s(t.$route.params.api))]):t._e()]),a("div",{staticClass:"md-layout-item md-xlarge-size-70 md-large-size-60 md-medium-size-60 md-small-size-100 md-xsmall-size-100"},[a("md-toolbar",{staticClass:"md-dense"},[a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("a")}}},[a("md-icon",[t._v("3d_rotation")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("A")}}},[a("md-icon",{staticStyle:{opacity:"0.4"}},[t._v("3d_rotation")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("s")}}},[a("md-icon",[t._v("highlight")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("S")}}},[a("md-icon",{staticStyle:{opacity:"0.4"}},[t._v("highlight")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("v")}}},[a("md-icon",[t._v("videocam")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("V")}}},[a("md-icon",{staticStyle:{opacity:"0.4"}},[t._v("videocam")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("n")}}},[a("md-icon",[t._v("cloud")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("N")}}},[a("md-icon",{staticStyle:{opacity:"0.4"}},[t._v("cloud")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("p")}}},[a("md-icon",[t._v("crop_free")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("P")}}},[a("md-icon",{staticStyle:{opacity:"0.4"}},[t._v("crop_free")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("+")}}},[a("md-icon",[t._v("zoom_in")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("-")}}},[a("md-icon",[t._v("zoom_out")])],1),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("E")}}},[t._v("Save")]),"1"==t.add_property||"graph"==t.type?a("div",[a("md-button",{staticClass:"md-toolbar-offset md-icon-button",on:{click:function(e){t.execCommand("0")}}},[t._v("0")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("1")}}},[t._v("1")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("2")}}},[t._v("2")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("3")}}},[t._v("3")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("4")}}},[t._v("4")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("5")}}},[t._v("5")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("6")}}},[t._v("6")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("7")}}},[t._v("7")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("8")}}},[t._v("8")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.execCommand("9")}}},[t._v("9")])],1):t._e()],1),a("iframe",{staticStyle:{padding:"10px","background-color":"lightgrey",border:"none","min-height":"800px",height:"90vh"},attrs:{width:"100%",id:"doc",name:"out"}}),a("iframe",{staticStyle:{padding:"10px","background-color":"lightgrey",border:"none","min-height":"800px",height:"300px"},attrs:{width:"100%",id:"clusterView",src:"/treeview.html"}})],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout-item md-size-40 md-alignment-top-center text-center"},[a("div",{staticClass:"md-layout-item",staticStyle:{"margin-bottom":"10px","font-size":"x-small"}},[a("span",{staticStyle:{"font-size":"x-large"}},[t._v("3DH")]),t._v("\n                            3D & Data Analysis - v0.0.1\n                        ")])])}],n=(a("7f7f"),a("28a5"),a("84b4"),a("ac6a"),a("a481"),a("aef6"),a("f559"),a("cadf"),a("551c"),a("097d"),a("9ab4")),l=a("bc3a"),r=a.n(l);i="https://ss.shifumix.com:5000";var c=r.a.create({baseURL:i}),d=i,m=Object({NODE_ENV:"production",BASE_URL:"/"}).version;console.log("root_api"+i),console.log("version"+m);var u=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"md-right"},[a("md-button",{staticClass:"md-raised md-secondary",on:{click:function(e){t.selectAll(!1)}}},[t._v("Deselect")]),a("md-button",{staticClass:"md-raised md-secondary",on:{click:function(e){t.selectAll(!0)}}},[t._v("Select")]),a("md-button",{staticClass:"md-raised md-secondary",on:{click:function(e){t.selectAdvanced(20,80)}}},[t._v("Optimal")]),a("md-checkbox",{on:{change:function(e){t.changeHide()}},model:{value:t.hideExcluded,callback:function(e){t.hideExcluded=e},expression:"hideExcluded"}},[t._v("Hide exluded")])],1),a("table",{attrs:{id:"data_table"}},[t._m(0),t._l(t.cols,function(e){return a("tr",{style:{color:e.color}},[a("td",[t._v(t._s(e.Names))]),a("td",[t._v(t._s(e["Empty(%)"])+"%")]),a("td",[t._v(t._s(e["Complexity(%)"])+"%")]),a("td",[t._v(t._s(e["dataType"]))]),a("td",[a("select",{staticStyle:{background:"grey",color:"white",border:"none"},attrs:{id:e.index},domProps:{value:e.format},on:{change:function(e){t.sendFormat()}}},[a("option",{attrs:{value:"measure"}},[t._v("Measure")]),a("option",{attrs:{value:"prop"}},[t._v("Property")]),a("option",{attrs:{value:"exclude"}},[t._v("Exclude")]),a("option",{attrs:{value:"index"}},[t._v("Index")])])])])})],2)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticStyle:{color:"darkgray"}},[a("td",[t._v("Column")]),a("td",[t._v("Default")]),a("td",[t._v("Complexity")]),a("td",[t._v("Type")]),a("td",[t._v("Format")])])}],f=function(t){function e(){var e=t.call(this)||this;return e.cols=[],e.format="",e.hideExcluded=!1,e}return n["b"](e,t),e.prototype.changeHide=function(){this.$forceUpdate()},e.prototype.updated=function(){},e.prototype.mounted=function(){this.selectAdvanced(),this.sendFormat()},e.prototype.sendFormat=function(){if(this.cols.length>0){var t={index:"",prop:"",measure:""},e=0;this.cols.forEach(function(a){var i=document.getElementById(a.index);t[i.value]=t[i.value]+e+",",e+=1}),this.$emit("format",t)}},e.prototype.changeHideExcluded=function(){this.$forceUpdate()},e.prototype.refreshStyle=function(){for(var t=0;t<this.cols.length;t++)"exclude"==this.cols[t].format?this.cols[t].color="darkgray":this.cols[t].color="white"},e.prototype.selectAdvanced=function(t,e){void 0===t&&(t=20),void 0===e&&(e=80);for(var a=0;a<this.cols.length;a++)"index"!=this.cols[a].Type&&(this.cols[a]["Complexity(%)"]>e&&this.cols[a]["Empty(%)"]<t?this.cols[a].format="measure":this.cols[a].format="exclude");this.refreshStyle(),this.$forceUpdate(),this.sendFormat()},e.prototype.selectAll=function(t){void 0===t&&(t=!0);for(var e=0;e<this.cols.length;e++)"index"!=this.cols[e].Type&&(this.cols[e].format=1==t?"measure":"exclude");this.refreshStyle(),this.$forceUpdate(),this.sendFormat()},n["a"]([Object(u["b"])()],e.prototype,"cols",void 0),e=n["a"]([Object(u["a"])({name:"FileFormat"})],e),e}(u["c"]),v=f,_=v,g=(a("4065"),a("2877")),y=Object(g["a"])(_,p,h,!1,null,"27841e84",null);y.options.__file="FileFormat.vue";var b=y.exports,x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.selected_file="",e.toast_message="",e.data_cols=[],e.measures=[],e.distance=.2,e.algo_loc="fr",e.limit=5e3,e.treatment="NOTREATMENT::::",e.params=[],e.notif="",e.url="",e.algo="",e.notext="1",e.nometrics="1",e.add_property="0",e.autorotate="1",e.pca=1,e.type="data",e.format="",e.lastRender=0,e.hRender=null,e.processors=2,e.hourglass="",e.rows=0,e.server_api=d,e}return n["b"](e,t),e.prototype.mounted=function(){var t=this;null!=this.$route.params["api"]&&(this.server_api=this.$route.params["api"]),this.server_api.startsWith("http")||(this.server_api="http://"+this.server_api),this.server_api.endsWith(":5000")||(this.server_api=this.server_api+":5000"),this.refreshFiles(),addEventListener("message",function(e){"string"==typeof e.data&&(console.log("Message:"+e.data),e.data.startsWith("message:")&&(t.hourglass=e.data.replace("message:","")),"event:loaded"==e.data&&(t.hourglass="",t.showClusters()))})},e.prototype.refreshFiles=function(){var t=this;this.hourglass="Files listing",c.get(this.server_api+"/datas/measures").then(function(e){t.measures=[],t.hourglass="",e.data.forEach(function(e){e.startsWith("temp")||t.measures.push(e)}),-1==t.measures.indexOf(t.selected_file)&&(t.measures.length>0?t.randomFile():t.selected_file="")}).catch(function(e){t.showMessage("Technical error")})},e.prototype.updateFormat=function(t){this.format="index:"+t.index+"_measures:"+t.measure+"_properties:"+t.prop},e.prototype.showClusters=function(){var t=this.showLink({pca:0},"clusters");fetch(t).then(function(t){return t.json()}).then(function(t){var e=document.getElementById("clusterView");e.contentWindow.postMessage(t[0])})},e.prototype.preview=function(){var t=this;setTimeout(function(){if(0==t.hourglass.length){t.hourglass="preview treatment";var e=document.getElementById("clusterView");e.contentWindow.location.reload(),t.openIn(t.showLink({autorotate:!0,pca:1}),"out")}},1e3)},e.prototype.reduce=function(){this.openIn(this.showLink({autorotate:!1,pca:1},"reduce"))},e.prototype.randomFile=function(){this.selected_file=this.measures[Math.trunc(Math.random()*this.measures.length)]},e.prototype.deleteFile=function(){var t=this;this.hourglass="File deleting",c.delete(this.server_api+"/datas/measure/"+this.selected_file).then(function(e){t.refreshFiles()}).catch(function(e){t.hourglass="",t.showMessage("Treatment error")})},e.prototype.showMessage=function(t,e){var a=this;void 0===e&&(e=4),this.toast_message=t,this.hourglass="",setTimeout(function(){a.toast_message=""},1e3*e)},e.prototype.raz=function(){this.selected_file="",this.algo="",this.algo_loc="fr"},e.prototype.selectFile=function(t){var e=this;void 0===t&&(t=""),t.length>0&&(this.selected_file=t),this.selected_file.length>0&&(this.treatment="NOTREATMENT::::",this.updateData(this.selected_file,function(){e.preview()}))},e.prototype.analyseClipboard=function(){var t=this,e=window.navigator;e.clipboard.readText().then(function(e){e.startsWith("http")&&t.updateData(e,function(){t.url=e,t.preview()})})},e.prototype.convertToGraph=function(){var t=this;this.hourglass="Converting to graphe",c.get(this.server_api+"/tograph/"+this.selected_file+"?distance="+this.distance).then(function(e){t.selected_file=e.data,t.refreshFiles()})},e.prototype.convertToSubData=function(){this.execCommand("E")},e.prototype.convertGraphToData=function(){var t=this.server_api+"/todata/"+this.selected_file;this.openIn(t)},e.prototype.updateData=function(t,e){var a=this;if(void 0===t&&(t=""),void 0===e&&(e=null),0==t.length&&(t=this.selected_file),t.replace("file:","").length>0){t=encodeURIComponent(t);var i=this.server_api+"/analyse?format=json&url="+t;this.hourglass="Data analyzing",c.get(i).then(function(t){a.hourglass="",a.data_cols=t.data.columns,a.rows=t.data.rows,a.type=t.data.type;for(var i=0;i<a.data_cols.length;i++)a.data_cols[i].index="radio"+i,a.data_cols[i].format=a.data_cols[i].Type;null!=e&&e()}).catch(function(){a.showMessage("Technical Error")})}},e.prototype.help=function(){this.openIn("./www/help.html","out")},e.prototype.clearList=function(){this.selected_file=""},e.prototype.execCommand=function(t){var e=document.getElementsByName("out")[0];e.contentWindow.postMessage({key:t},"*")},e.prototype.showLink=function(t,e){void 0===t&&(t={}),void 0===e&&(e="graph");var a=this.selected_file;if(0==a.length)return"";this.type="data",(a.indexOf(".gml")>-1||a.indexOf(".gexf")>-1||a.indexOf(".gephi")>-1||a.indexOf(".graphml")>-1)&&(this.type="graph"),a.startsWith("http")&&(a="b64="+btoa(a));var i=this.server_api+"/graph/"+a+"/"+this.algo_loc+"?algo_comm="+this.algo;if("data"==this.type){var s="";this.params.forEach(function(t){null!=t.label&&t.label.length>0&&(s=s+t.label+"="+t.value+"&")}),0==s.length&&(s="noparam",this.algo="NO"),i=this.server_api+"/job/"+a+"/"+this.algo+"/"+s+"/"+e+"?filter="+this.format}for(var o in console.log("ouverture de "+i),this.notif.length>0&&(i+="&notif="+this.notif),null==t.notext&&(t.notext="1"==this.notext),null==t.nometrics&&(t.nometrics="1"==this.nometrics),null==t.add_property&&(t.add_property="1"==this.add_property),null==t.autorotate&&(t.autorotate="1"==this.autorotate),null==t.limit&&(t.limit=this.limit),null==t.pca&&(t.pca=this.pca),null==t.processors&&(t.processors=this.processors),t)i=i+"&"+o+"="+t[o];for(var n=0;n<15;n++)i=i.replace("=true","=True").replace("=false","=False");return console.log("exec:"+i),i},e.prototype.showParameters=function(){var t=this;this.algo=this.treatment.split("::")[0],this.params=[],this.treatment.split("::")[1].split(" ").forEach(function(e){var a={label:e.split("=")[0],value:e.split("=")[1]};null!=a.label&&a.label.length>0&&t.params.push(a)});this.treatment.split("::")[2];"NEURALGAS"==this.algo&&""==this.notif&&(this.notif="dev@f80.fr")},e.prototype.clearURL=function(){this.url=""},e.prototype.openIn=function(t,e,a){if(void 0===e&&(e="_blank"),void 0===a&&(a=null),t.length>0){for(var i=0;i<15;i++)t=t.replace("=true","=True").replace("=false","=False");window.open(t,e),this.lastRender=(new Date).getTime()}},e.prototype.upload=function(t,e){var a=this,i=t[0],s=new FormData;s.append("files",i),this.raz(),this.hourglass="File uploading",c.post(this.server_api+"/datas/measure/"+i.name+"?public="+e,s).then(function(t){i.name.endsWith("zip")?a.refreshFiles():(a.measures.push(i.name),a.selectFile(i.name),a.hourglass="")}).catch(function(t){a.hourglass=""})},e=n["a"]([Object(u["a"])({name:"Files",components:{FileFormat:b}})],e),e}(u["c"]),C=x,k=C,w=(a("de14"),Object(g["a"])(k,s,o,!1,null,"54cd9b34",null));w.options.__file="Files.vue";e["a"]=w.exports},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=a("8c4f"),o=a("43f9"),n=a.n(o),l=(a("51de"),a("0759"),a("98eb")),r=a("9483");Object(r["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var c=a("9dbc");i["default"].use(n.a),i["default"].use(s["a"]),i["default"].config.productionTip=!1,i["default"].config.silent=!0;var d=new s["a"]({mode:"history",routes:[{path:"/",component:c["a"]},{path:"/:api",component:c["a"]}]});new i["default"]({router:d,render:function(t){return t(l["a"])}}).$mount("#app")},de14:function(t,e,a){"use strict";var i=a("58ab"),s=a.n(i);s.a},fdab:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"})},s=[],o=a("9ab4"),n=a("60a3"),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o["b"](e,t),o["a"]([Object(n["b"])()],e.prototype,"msg",void 0),e=o["a"]([n["a"]],e),e}(n["c"]),r=l,c=r,d=(a("0f62"),a("2877")),m=Object(d["a"])(c,i,s,!1,null,"64563220",null);m.options.__file="HelloWorld.vue";e["a"]=m.exports}});
//# sourceMappingURL=app.3db523ca.js.map