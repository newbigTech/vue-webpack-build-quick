webpackJsonp([43],{"6HVh":function(e,l){},GSoL:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("Dd8w"),r=t.n(a),i=t("dJOE"),s=t("NOQh"),c=t("7sCf"),p=t("NYxO"),y={name:"orderSearch",created:function(){this.initSearch()},computed:r()({},Object(p.d)(["currentSearch"])),data:function(){return{orderSearch:{searchList:{public:[{type:"",key:"page",intKey:1},{type:"",key:"rows",intKey:20},{type:"input",label:"订单编号",placeholder:"请输入订单编号",key:"orderNumber"},{type:"select",label:"订单状态",placeholder:"请选择",key:"orderStatus",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"2",label:"待发货"},{value:"9",label:"部分发货"},{value:"3",label:"已发货"},{value:"4",label:"交易成功"},{value:"5",label:"用户取消"},{value:"6",label:"超时取消"}]},{type:"select",label:"销售渠道",placeholder:"请选择",key:"orderType",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"1",label:"格格家"},{value:"4",label:"环球捕手"},{value:"6",label:"格格家供应链"},{value:"8",label:"脉宝云店"},{value:"10",label:"美食买手"}]},{type:"select",label:"退款状态",placeholder:"请选择",key:"freezeStatus",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"0",label:"未冻结"},{value:"1",label:"已冻结"}]},{type:"input",label:"物流编号",placeholder:"请输入物流编号",key:"logisticsNumber"},{type:"input",label:"发货编码",placeholder:"请输入内容",key:"productCode"},{type:"input",label:"商品名称",placeholder:"请输入商品名称",key:"productName",width:"323.5"},{type:"input",label:"手机号",placeholder:"收货人手机号",key:"receiverMobileNumber"},{type:"input",label:"姓名",placeholder:"收货人姓名",key:"receiverFullName"}],private:[{type:"date-picker",label:"付款时间",placeholder:"请选择",key:"payTimeStart",checkNextDate:"payTimeEnd",split:!0},{type:"date-picker",label:"",placeholder:"请选择",key:"payTimeEnd",checkPreDate:"payTimeStart"},{type:"date-picker",label:"发货时间",placeholder:"请选择",key:"sendTimeStart",checkNextDate:"sendTimeEnd",split:!0},{type:"date-picker",label:"",placeholder:"请选择",key:"sendTimeEnd",checkPreDate:"sendTimeStart"}]},searchMenu:{public:[{label:"查询",style:"primary",type:"submit"},{label:"重置",type:"reset"}],private:[{label:"导出规则",style:"primary",type:"exportRule"},{label:"导出",type:"export"},{label:"批量发货",style:"primary",type:"batchDeliver"},{label:"重新发货",style:"primary",type:"batchReDeliver"}]},resultItem:{type:"search",option:[{fixed:"left",label:"订单编号",key:"orderNumber",width:"150"},{label:"订单状态",key:"status",width:"90"},{label:"销售渠道",key:"type",width:"90"},{label:"退款状态",key:"isFreeze",width:"80"},{label:"付款时间",key:"payTime",width:"120",type:"time"},{label:"发货时间",key:"sendTime",width:"120",type:"time"},{label:"收件人",key:"receiverFullName",width:"80"},{label:"手机号码",key:"receiverMobileNumber",width:"140",type:"time"},{label:"快递单号",key:"logisticsNumber",width:"140"},{fixed:"right",type:"opera",label:"操作",width:"200"}],opera:{items:[{type:"toDetail",label:"查看详情",key:"orderNumber",val:"orderNumber",source:"search"},{type:"sendOrder",label:"发货",key:"status",val:"orderNumber"}]}}}}},methods:r()({},Object(p.b)(["setSearch"]),{initSearch:function(){this.setSearch(this.orderSearch)}}),components:{vSearchItem:i.a,vSearchMenu:s.a,vSearchResult:c.a}},b={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[e._m(0),e._v(" "),t("div",{staticClass:"section"},[t("div",{staticClass:"block-item mg-l mg-t primary-color",staticStyle:{"font-size":"16px"}},[e._v("\n      注：导出待发货订单时，请筛选订单状态为待发货，退款状态为未冻结，点击【查询】后再【导出】\n    ")]),e._v(" "),t("v-search-item"),e._v(" "),t("div",{staticClass:"market-box"},[e._m(1),e._v(" "),t("v-search-menu")],1),e._v(" "),t("v-search-result")],1)])},staticRenderFns:[function(){var e=this.$createElement,l=this._self._c||e;return l("div",{staticClass:"title"},[l("span",[this._v("订单查询")])])},function(){var e=this.$createElement,l=this._self._c||e;return l("div",{staticClass:"market-sign primary-color"},[l("span",[this._v("提示：")]),this._v(" "),l("p",[this._v("如某一个订单分多包裹发出，请按发货模板样式在批量发货时上传多物流单号"),l("br"),this._v("\n          详见商家系统--规则中心--订单多包裹发货说明"),l("br"),this._v("\n          如操作有疑问请在格家商家系统问题解决群反馈（群QQ:644506774）")])])}]};var d=t("VU/8")(y,b,!1,function(e){t("6HVh")},"data-v-365afb06",null);l.default=d.exports}});
//# sourceMappingURL=43.749149ea9534b331271c.js.map