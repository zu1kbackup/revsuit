(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ffb84ba"],{"266a":function(t,e,a){"use strict";a("6eb7")},"2e08":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-button",{attrs:{id:"add-rule",type:"primary"},on:{click:t.addRule}},[a("a-icon",{attrs:{type:"plus"}}),t._v(" New Rule ")],1),a("a-drawer",{attrs:{title:t.formAction+" DNS rule",width:490,visible:t.formVisible,"body-style":{paddingBottom:"80px"}},on:{close:t.closeDrawer}},[a("a-form-model",{ref:"form",attrs:{model:t.form,layout:"vertical"},on:{submit:t.handleSubmit}},[a("BasicRule",{attrs:{form:t.form,readOnly:t.formReadOnly,flagFormat:"domain"}}),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"Type",rules:t.rules.type}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type"],expression:"['type']"}],staticStyle:{width:"100%"},attrs:{disabled:t.formReadOnly,placeholder:"A"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("a-select-option",{attrs:{value:1}},[t._v("A")]),a("a-select-option",{attrs:{value:28}},[t._v("AAAA")]),a("a-select-option",{attrs:{value:5}},[t._v("CNAME")]),a("a-select-option",{attrs:{value:16}},[t._v("TXT")]),a("a-select-option",{attrs:{value:2}},[t._v("NS")]),a("a-select-option",{attrs:{value:99}},[t._v("REBINDING")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"TTL",rules:t.rules.ttl}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["ttl"],expression:"['ttl']"}],staticStyle:{width:"100%"},attrs:{disabled:t.formReadOnly,placeholder:"10",value:99===t.form.type?t.form.ttl=0:null},model:{value:t.form.ttl,callback:function(e){t.$set(t.form,"ttl",e)},expression:"form.ttl"}})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{rules:t.rules.value}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" Value "),a("a-tooltip",{attrs:{title:"Support template such as ${flag}/${custom_varname}"}},[a("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),a("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:99===t.form.type?"8.8.8.8,127.0.0.1":"please enter resolve value",readOnly:t.formReadOnly},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}})],1)],1)],1)],1),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:t.handleCancel}},[t._v(" Cancel ")]),a("a-button",{attrs:{type:"primary",disabled:t.formReadOnly},on:{click:t.handleSubmit}},[t._v(" Submit ")])],1)],1),a("a-table",{staticStyle:{"overflow-x":"auto"},attrs:{columns:t.columns,"data-source":t.data,loading:t.loading,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"filterDropdown",fn:function(e){var o=e.setSelectedKeys,r=e.selectedKeys,n=(e.clearFilters,e.column);return a("div",{staticStyle:{padding:"8px"}},[a("a-input",{staticStyle:{width:"188px","margin-bottom":"8px",display:"block"},attrs:{placeholder:"Search "+n.dataIndex,value:r[0]},on:{change:function(t){return o(t.target.value?[t.target.value]:[])},pressEnter:function(){t.filters[n.dataIndex]=r[0],t.fetch()}}}),a("a-button",{staticStyle:{width:"90px","margin-right":"8px"},attrs:{type:"primary",icon:"search",size:"small"},on:{click:function(){t.filters[n.dataIndex]=r[0],t.fetch()}}},[t._v(" Search ")])],1)}},{key:"filterIcon",fn:function(t){return a("a-icon",{style:{color:t?"#108ee9":void 0},attrs:{type:"search"}})}},{key:"rank",fn:function(e){return a("span",{},[a("a-tag",{attrs:{color:"#"+(2996213+80*e).toString(16)}},[t._v(" "+t._s(e)+" ")])],1)}},{key:"type",fn:function(e){return a("span",{},[a("a-tag",{attrs:{color:t.colors[e]}},[t._v(" "+t._s(t.resolveTypes[e])+" ")])],1)}},{key:"switchRender",fn:function(e,o,r,n){return a("span",{},[a("a-switch",{attrs:{checked:e},on:{click:function(e){return t.clickSwitch(o,n.dataIndex)}}})],1)}},{key:"valueRender",fn:function(e){return a("span",{},t._l(e.split(","),(function(e){return a("span",{key:e},[t._v(t._s(e)),a("br")])})),0)}},{key:"action",fn:function(e,o,r){return a("span",{},[a("a-button",{staticStyle:{color:"#67C23A","background-color":"transparent","border-color":"#67C23A","text-shadow":"none",margin:"0 10px 3px 0"},attrs:{size:"small",ghost:""},on:{click:function(e){return t.viewRule(o)}}},[t._v("View")]),a("a-button",{staticStyle:{color:"#909399","background-color":"transparent","border-color":"#909399","text-shadow":"none",margin:"0 10px 3px 0"},attrs:{size:"small",ghost:""},on:{click:function(e){return t.editRule(o,r)}}},[t._v("Edit")]),a("a-popconfirm",{attrs:{title:"Are you sure delete this task?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(e){return t.deleteRule(o,r)}}},[a("a-button",{attrs:{type:"danger",size:"small",ghost:""}},[t._v("Delete")])],1)],1)}}])})],1)},r=[],n=a("5530"),i=(a("a434"),a("34c6")),s=a("56d7"),l=a("2084"),c="View",d="Edit",u="Create",p={1:"geekblue",28:"green",5:"red",16:"pink",2:"purple",99:"orange"},f={1:"A",28:"AAAA",5:"CNAME",16:"TXT",2:"NS",99:"RB"},m=[{title:"ID",dataIndex:"id",key:"id",sorter:!0,sortDirections:["descend","ascend"]},{title:"NAME",dataIndex:"name",key:"name",scopedSlots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon"}},{title:"FLAG FORMAT",dataIndex:"flag_format",key:"flag_format",ellipsis:!0},{title:"RANK",dataIndex:"rank",key:"rank",scopedSlots:{customRender:"rank"}},{title:"TYPE",dataIndex:"type",key:"type",scopedSlots:{customRender:"type"}},{title:"TTL",dataIndex:"ttl",key:"ttl"},{title:"VALUE",dataIndex:"value",key:"value",scopedSlots:{customRender:"valueRender"}},{title:"PUSH TO CLIENT",dataIndex:"push_to_client",key:"push_to_client",scopedSlots:{customRender:"switchRender"}},{title:"NOTICE",dataIndex:"notice",key:"notice",scopedSlots:{customRender:"switchRender"}},{title:"Action",key:"action",scopedSlots:{customRender:"action"}}],h={value:[{required:!1,message:"please enter resolve value"}],type:[{required:!1,message:"please enter resolve type"}],ttl:[{required:!1,message:"please enter resolve ttl"}]},y={name:"DnsRules",data:function(){return{store:s["store"],data:[],formVisible:!1,pagination:{current:1,showSizeChanger:!0,pageSize:s["store"].pageSize,onShowSizeChange:function(t,e){s["store"].pageSize=e}},filters:{},loading:!1,columns:m,colors:p,resolveTypes:f,form:{},rules:h,formReadOnly:!1,formAction:""}},methods:{handleTableChange:function(t,e,a){var o=Object(n["a"])({},this.pagination);o.current=t.current,this.pagination=o,this.order="ascend"===a.order?"asc":"desc",this.fetch()},fetch:function(){var t=this,e=Object(n["a"])(Object(n["a"])({},this.filters),{},{page:this.pagination.current,pageSize:this.pagination.pageSize,order:this.order});this.loading=!0,Object(i["f"])(e).then((function(e){var a=e.data.result;t.data=a.data;var o=Object(n["a"])({},t.pagination);o.total=a.count,t.pagination=o,t.loading=!1})).catch((function(e){403!==e.response.status&&t.$message.error("Unknown error with status code: "+e.response.status)}))},clickSwitch:function(t,e){var a=this;t[e]=!t[e],Object(i["k"])(t).then().catch((function(t){a.$notification.error({message:"Edit failed",description:t.response.data.error,style:{width:"600px",marginLeft:"".concat(-265,"px")},duration:4})}))},addRule:function(){this.form={},this.showForm(u)},viewRule:function(t){this.form=t,this.showForm(c)},editRule:function(t){this.form=JSON.parse(JSON.stringify(t)),this.showForm(d)},deleteRule:function(t,e){var a=this;Object(i["a"])(t).then((function(){a.data.splice(e,1)})).catch((function(t){a.$notification.error({message:"Error",description:t.response.data.error,style:{width:"600px",marginLeft:"".concat(-265,"px")},duration:4})}))},showForm:function(t){this.formAction=t,this.formReadOnly=t===c,this.formVisible=!0},closeDrawer:function(){this.formVisible=!1},handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&Object(i["k"])(t.form).then((function(){t.closeDrawer(),t.fetch({page:t.pagination.current}),t.$notification.info({message:"Success",style:{width:"600px",marginLeft:"".concat(-265,"px")},duration:2.5})})).catch((function(e){t.$notification.error({message:t.formAction+" failed",description:e.response.data.error,style:{width:"600px",marginLeft:"".concat(-265,"px")},duration:4})}))}))},handleCancel:function(){this.form={},this.closeDrawer()}},mounted:function(){this.fetch({page:"1"})},components:{BasicRule:l["a"]}},g=y,v=(a("266a"),a("2877")),b=Object(v["a"])(g,o,r,!1,null,"3819ffac",null);e["default"]=b.exports},"6eb7":function(t,e,a){}}]);