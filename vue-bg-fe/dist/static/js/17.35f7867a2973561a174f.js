webpackJsonp([17],{"ERC+":function(e,t,r){"use strict";var a=r("Dd8w"),i=r.n(a),l=r("NYxO"),n=r("tKaV"),s={created:function(){this.initView()},data:function(){return{tableList:[],paging:{currentPage:1,pageSizes:[20,30,50,100],pageSize:0,total:0,query:{}},pagingShow:!1,loading:!0}},computed:i()({},Object(l.d)(["currentSearch","currentSearchQuery"])),methods:i()({},Object(l.b)(["setCurrentSearchQuery","getTimeOutOrderRecordList","getAbnormalOrderRecordList","callSetNotice"]),{initView:function(){var e=this,t=this.$route.query;this.currentSearchOption=Util.searchQuery(t,this.currentSearch.searchList.public,this.currentSearch.searchList.private),this.setCurrentSearchQuery(this.currentSearchOption),this.pagingShow=!1,this.loading=!0;var r=this.currentSearch.resultItem.type;"abnormal"==r?this.getAbnormalOrderRecordList(this.currentSearchQuery).then(function(t){e.pagingShow=!0,e.setOrderList(t)}):"timeout"==r&&this.getTimeOutOrderRecordList(this.currentSearchQuery).then(function(t){e.pagingShow=!0,e.setOrderList(t)})},setOrderList:function(e){this.loading=!1,this.tableList=e.rows,this.paging.pageSize=Number(this.currentSearchQuery.rows),this.paging.currentPage=Number(this.currentSearchQuery.page),this.paging.total=e.total,this.paging.query=this.currentSearchQuery},downloadFile:function(e){},tableRowClassName:function(e,t){return t%2==1?"info-row":"positive-row"},getNotice:function(e){var t={isShow:!0,msg:e};this.callSetNotice(t)}}),components:{vPagination:n.a},watch:{$route:function(e,t){e.fullPath!==t.fullPath&&this.initView()}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"section-item section-item-no-padding"},[r("div",{staticClass:"result-view"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中",data:e.tableList,"row-class-name":e.tableRowClassName}},[e._l(e.currentSearch.resultItem.option,function(t,a){return["left"==t.fixed?[r("el-table-column",{attrs:{fixed:"",prop:t.key,label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["router"==t.type?r("router-link",{staticStyle:{cursor:"pointer"},attrs:{tag:"span",to:{path:"orderDetail",query:{orderNumber:a.row[t.key],source:"search"}}}},[e._v("\n                "+e._s(a.row[t.key])+"\n              ")]):r("span",[e._v("\n                "+e._s(a.row[t.key])+"\n              ")])]}}])})]:"right"==t.fixed?["opera"==t.type?r("el-table-column",{attrs:{fixed:"right",label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(e.currentSearch.resultItem.opera.items,function(a){return["download"==a.type&&t.row.fileUrl&&1==t.row.applyType?r("a",{attrs:{target:"_blank",href:t.row.fileUrl}},[r("el-button",{attrs:{type:"primary",size:"small"}},[e._v("预览")])],1):e._e(),e._v(" "),"download"==a.type&&t.row.fileUrl&&2==t.row.applyType?r("a",{attrs:{target:"_blank",href:t.row.fileUrl}},[r("el-button",{attrs:{type:"primary",size:"small"}},[e._v("下载")])],1):e._e()]})]}}])}):e._e()]:["time"==t.type?r("el-table-column",{attrs:{prop:t.key,label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[r("div",{staticClass:"time-item",staticStyle:{padding:"5px 20px"}},[e._v("\n                "+e._s(a.row[t.key])+"\n              ")])]}}])}):"InterValTime"==t.type?r("el-table-column",{attrs:{prop:t.key,label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.startTime?r("div",{staticClass:"time-item",staticStyle:{padding:"5px 20px 0"}},[e._v("\n                "+e._s(t.row.startTime)+"\n              ")]):e._e(),e._v(" "),t.row.endTime?r("div",{staticClass:"time-item",staticStyle:{padding:"0px 20px 5px"}},[e._v("\n                ~"+e._s(t.row.endTime)+"\n              ")]):e._e(),e._v("\n              "+e._s(t.row.startTime&&t.row.endTime?"":"--")+"\n\n            ")]}}])}):"sendAddress"==t.type?r("el-table-column",{attrs:{prop:t.key,label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.sendAddress?r("span",{staticStyle:{padding:"5px 20px"}},[e._v("\n                "+e._s(t.row.sendAddress)+"\n              ")]):r("span",[e._v(" -- ")])]}}])}):"diffTime"==t.type?r("el-table-column",{attrs:{prop:t.key,label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.applyType?r("span",[e._v(e._s(e._f("toDate")(t.row.diffTime)))]):r("span",[e._v("--")])]}}])}):r("el-table-column",{attrs:{prop:t.key,label:t.label,width:t.width,align:"center"}})]]})],2),e._v(" "),e.pagingShow?r("v-pagination",{attrs:{paging:e.paging}}):e._e()],1)])},staticRenderFns:[]};var c=r("VU/8")(s,o,!1,function(e){r("bp0r")},"data-v-40783623",null);t.a=c.exports},KylG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),i=r.n(a),l=r("dJOE"),n=r("NOQh"),s=r("ERC+"),o=r("NYxO"),c={name:"orderAbnormalRecord",created:function(){this.initSearch()},data:function(){return{orderSearch:{searchList:{public:[{type:"",key:"page",intKey:1},{type:"",key:"rows",intKey:20},{type:"input",label:"订单编号",placeholder:"请输入订单编号",key:"orderNumber"},{type:"select",label:"发货地",placeholder:"请选择",key:"sellerId",options:[]},{type:"input",label:"发货编码",placeholder:"请输入商品编码",key:"productCode"},{type:"select",label:"是否罚款",placeholder:"请选择",key:"isHasPenalty",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"0",label:"否"},{value:"1",label:"是"}]}],private:[{type:"date-picker",label:"申报时间",placeholder:"请选择",key:"createTimeStart",checkNextDate:"createTimeEnd"},{type:"date-picker",label:"",placeholder:"请选择",key:"createTimeEnd",checkPreDate:"createTimeStart"},{type:"date-picker",label:"付款时间",placeholder:"请选择",key:"orderPayTimeStart",checkNextDate:"orderPayTimeEnd"},{type:"date-picker",label:"",placeholder:"请选择",key:"orderPayTimeEnd",checkPreDate:"orderPayTimeStart"},{type:"input",label:"异常原因",placeholder:"请输入异常原因",key:"reason"}]},searchMenu:{public:[{label:"查询",style:"primary",type:"submit"},{label:"重置",type:"reset"}]},resultItem:{type:"abnormal",option:[{fixed:"left",label:"订单编号",key:"orderNumber",width:"140",type:"router"},{label:"发货地",key:"sendAddress",width:"100"},{label:"发货编码",key:"productCode",width:"120"},{label:"商品名称",key:"productName",width:"140"},{label:"超时时间点",key:"orderExpireTime",width:"140"},{label:"罚款金额（元）",key:"penaltyAmount",width:"140"},{label:"异常原因",key:"reason",width:""},{label:"申报时间",key:"penaltyStartTime",width:"140"}]}}}},methods:i()({},Object(o.b)(["setSearch","getDeliveryArea"]),{initSearch:function(){var e=this;this.getDeliveryArea().then(function(t){e.setDeliveryListOpt(t)}),this.setSearch(this.orderSearch)},setDeliveryListOpt:function(e){var t=[];e.forEach(function(e,r){var a={label:e.sendAddress,value:e.id+""};t.push(a)}),this.orderSearch.searchList.public[3].options=t}}),components:{vSearchItem:l.a,vSearchMenu:n.a,vSearchResult:s.a}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),this._v(" "),t("div",{staticClass:"section"},[t("v-search-item"),this._v(" "),t("v-search-menu"),this._v(" "),t("v-search-result")],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("异常订单报备记录")])])}]},u=r("VU/8")(c,d,!1,null,null,null);t.default=u.exports},bp0r:function(e,t){}});
//# sourceMappingURL=17.35f7867a2973561a174f.js.map