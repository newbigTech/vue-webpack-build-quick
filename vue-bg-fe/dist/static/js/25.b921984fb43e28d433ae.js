webpackJsonp([25],{GqVB:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Dd8w"),r=s.n(i),a=s("NYxO"),o={name:"orderDetail",created:function(){this.initView()},data:function(){return{orderDetail:{},modal:{isShow:!1,isOpacity:!1},modalLogistics:{isShow:!1,list:[]},IdCardModal:{isShow:!1},sendOrderConfig:{opts:{expressChannel:"",expressNumber:"",orderNumber:""},options:[]},orderExpress:[],rules:{expressChannel:[{required:!0,message:"请输入物流公司",trigger:"blur"}],expressNumber:[{required:!0,message:"请输入物流单号",trigger:"blur"}]},detailType:"",orderType:{1:"格格家",2:"格格团",3:"格格团全球购",4:"环球捕手",5:"燕网",6:"格格家供应链",7:"手q",8:"脉宝云店",10:"美食买手"},orderStatus:{1:"未付款",2:"待发货",3:"已发货",4:"交易成功",5:"用户取消",6:"超时取消",7:"团购进行中",9:"部分发货"},orderFreeze:{0:"未冻结",1:"已冻结",2:"未冻结"},tableList:[],productConfig:{0:[{key:"productImg",label:"商品主图",type:"image"},{key:"productName",label:"商品名称"},{key:"sendAddress",label:"发货地"},{key:"productCode",label:"发货编码"},{key:"productCount",label:"购买数量"},{key:"logisticsNumbers",label:"物流单号"},{key:"refundStatusStr",label:"退款状态"},{key:"refundProductCount",label:"退款数量"},{key:"hasReparation",label:"是否产生赔付",type:"hasReparation"}]},dataReady:!1,orderNumber:"",IdCardDetail:{}}},computed:{},methods:r()({},Object(a.b)(["setViewImage","getRefundApplyReason","getOrderDetail","sendOrder","getIdCardMsg","downLoadIdCardImg","callSetNotice","getOrderExpressList"]),{initView:function(){var e=this,t=this.$route.params.orderNumber;this.orderNumber=t;this.detailType="search";var s={link:"/order/getOrderDetail/",data:t};this.getOrderDetail(s).then(function(t){e.orderDetail=t,2==e.orderDetail.order.status&&e.sendOrderData(function(t){e.orderExpress=t,e.sendOrderConfig.options=e.orderExpress}),e.dataReady=!0})},showLogisticsDetail:function(e){this.modalLogistics.list=e,this.modalLogistics.isShow=!0},cancelLogisticsModal:function(){this.modalLogistics.isShow=!1,this.modalLogistics.list=[]},sendOrderData:function(e){this.getOrderExpressList({orderNumber:this.orderDetail.order.number}).then(function(t){e(t)})},setReloadSendOrder:function(){var e=this;this.sendOrderData(function(t){e.orderExpress=t,e.sendOrderConfig.options=e.orderExpress,e.sendOrderConfig.opts.expressChannel=e.orderDetail.logisticsChannel,e.sendOrderConfig.opts.expressNumber=e.orderDetail.logisticsNumber,e.sendOrderConfig.opts.orderNumber=e.orderDetail.order.number,e.modal.isShow=!0,e.modal.isOpacity=!1})},cancelModal:function(){this.sendOrderConfig.opts.expressChannel="",this.sendOrderConfig.opts.expressNumber="",this.sendOrderConfig.opts.orderNumber="",this.modal.isShow=!1,this.modalLogistics.isShow=!1},setSendOrder:function(){var e=this;return this.sendOrderConfig.opts.expressChannel?this.sendOrderConfig.opts.expressNumber?(this.sendOrderConfig.opts.orderNumber=this.orderDetail.order.number,this.modal.isOpacity=!0,void this.$confirm("物流公司："+this.sendOrderConfig.opts.expressChannel+"，快递单号："+this.sendOrderConfig.opts.expressNumber,"是否确认发货",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){e.sendOrder(e.sendOrderConfig.opts).then(function(){e.cancelModal(),e.initView()})}).catch(function(){e.modal.isOpacity=!1})):(this.getNotice("请填写物流单号"),!1):(this.getNotice("请选择物流公司"),!1)},showImage:function(e){var t={url:e,isShow:!0};this.setViewImage(t)},tableRowClassName:function(e,t){return t%2==1?"info-row":"positive-row"},getIdCard:function(e,t){var s=this;if(!e||!t)return this.getNotice("身份证信息不存在"),!1;var i={number:t,name:e};this.getIdCardMsg(i).then(function(e){s.IdCardDetail=e,s.IdCardModal.isShow=!0})},callDownLoadIdCardImg:function(e,t){var s={fileUrl:e+","+t,orderNumber:this.orderDetail.order.number};this.downLoadIdCardImg(s)},getNotice:function(e){var t={isShow:!0,msg:e};this.callSetNotice(t)},starString:function(e,t){var s="",i="";return e&&(e.length<t?s=e:(i=new Array(e.length-t+1).join("*"),s=e.substring(0,t)+i)),s}})},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),e._v(" "),e.dataReady?s("div",{staticClass:"section"},[s("div",{staticClass:"section-item"},[s("div",{staticClass:"base-data"},[s("div",{staticClass:"inline-item"},[s("span",[e._v("订单编号："+e._s(e.orderDetail.order.number||"暂无信息"))])]),e._v(" "),s("div",{staticClass:"inline-item"},[s("span",[e._v("销售渠道："+e._s(e.orderType[e.orderDetail.order.type]||"暂无信息"))])]),e._v(" "),s("div",{staticClass:"inline-item"},[s("span",[e._v("下单时间："+e._s(e.orderDetail.order.createTime||"暂无信息"))])]),e._v(" "),s("div",{staticClass:"inline-item"},[s("span",[e._v("付款时间："+e._s(e.orderDetail.order.payTime||"暂无信息"))])]),e._v(" "),s("div",{staticClass:"inline-item"},[s("span",[e._v("导出时间：\n            "),1==e.orderDetail.order.operationStatus?[e._v("\n              "+e._s(e.orderDetail.operationTime?e.orderDetail.operationTime:"未导出")+"\n            ")]:[e._v("\n              未导出\n            ")]],2)]),e._v(" "),s("div",{staticClass:"inline-item"},[s("span",[e._v("订单状态： "+e._s(e.orderStatus[e.orderDetail.order.status]))])]),e._v(" "),s("div",{staticClass:"inline-item"},[s("span",[e._v("冻结状态："+e._s(e.orderFreeze[e.orderDetail.order.isFreeze]?e.orderFreeze[e.orderDetail.order.isFreeze]:"暂无信息"))])])]),e._v(" "),s("div",{staticClass:"steps"},[s("el-steps",{attrs:{space:200,active:e.orderDetail.order.status>4?9==e.orderDetail.order.status?3:1:e.orderDetail.order.status,center:""}},[s("el-step",{attrs:{title:"提交订单",description:""}}),e._v(" "),s("el-step",{attrs:{title:"待发货",description:""}}),e._v(" "),s("el-step",{attrs:{title:"已发货",description:""}}),e._v(" "),s("el-step",{attrs:{title:"交易成功",description:""}})],1)],1)]),e._v(" "),s("div",{staticClass:"section-item"},[s("div",{staticClass:"receiving-msg"},[e._m(1),e._v(" "),e.orderDetail.orderReceiveAddress?s("div",{staticClass:"detail-box"},[s("div",{staticClass:"block-item"},[s("span",[e._v("收货人："+e._s(e.orderDetail.orderReceiveAddress.fullName))])]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("收货手机号："+e._s(e.orderDetail.orderReceiveAddress.mobileNumber))])]),e._v(" "),s("div",{staticClass:"block-item"},[3==e.orderDetail.order.status||1==e.orderDetail.order.operationStatus&&e.orderDetail.operationTime?s("span",[e._v("收货地址："+e._s(e.orderDetail.orderReceiveAddress.totalAddress))]):s("span",[e._v("收货地址："+e._s(e.starString(e.orderDetail.orderReceiveAddress.totalAddress,6)))])]),e._v(" "),e.orderDetail.isNeedIdCardNumber||e.orderDetail.isNeedIdCardImage?s("div",{staticClass:"block-item"},[s("span",[e._v("身份证号：\n              "),e.orderDetail.isNeedIdCardNumber?s("span",[e._v(e._s(e.orderDetail.orderReceiveAddress.idCard))]):e._e()]),e._v(" "),e.orderDetail.isNeedIdCardImage?s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.getIdCard(e.orderDetail.orderReceiveAddress.fullName,e.orderDetail.orderReceiveAddress.idCard)}}},[e._v("获取身份证信息")]):e._e()],1):e._e()]):e._e()])]),e._v(" "),s("div",{staticClass:"section-item"},[s("div",{staticClass:"logistics-msg"},[e._m(2),e._v(" "),e.orderDetail.orderLogisticsShipmentList&&e.orderDetail.orderLogisticsShipmentList.length?e._l(e.orderDetail.orderLogisticsShipmentList,function(t,i){return s("div",{staticClass:"detail-box"},[s("div",{staticClass:"block-item"},[s("span",[e._v("发货时间："+e._s(t.sendTime?t.sendTime:"待发货"))])]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("物流公司：")]),e._v(" "),s("span",[e._v(e._s(t.logisticsChannel?t.logisticsChannel:"暂无信息"))])]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("物流单号：")]),e._v(" "),s("span",[e._v(e._s(t.logisticsNumber?t.logisticsNumber:"暂无信息"))])]),e._v(" "),s("div",{staticClass:"block-item"},[e._m(3,!0),e._v(" "),s("div",{staticStyle:{display:"inline-block"}},[t.logisticsDetailList&&t.logisticsDetailList.length?[e._l(t.logisticsDetailList,function(t,i){return[i<3?s("div",[e._v("\n                      "+e._s(t.operateTime)+" "+e._s(t.content)+"\n                    ")]):e._e()]}),e._v(" "),t.logisticsDetailList.length>3?[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){e.showLogisticsDetail(t.logisticsDetailList)}}},[e._v("查看完整物流")])]:e._e()]:s("span",[e._v("暂无物流信息")])],2)])])}):[s("div",{staticClass:"detail-box"},[e._m(4),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("物流公司：")]),e._v(" "),2==e.orderDetail.order.status?[s("el-select",{staticClass:"input-item",attrs:{size:"small",placeholder:"请选择"},model:{value:e.sendOrderConfig.opts.expressChannel,callback:function(t){e.$set(e.sendOrderConfig.opts,"expressChannel",t)},expression:"sendOrderConfig.opts.expressChannel"}},[e._l(e.sendOrderConfig.options,function(e){return[s("el-option",{attrs:{label:e.desc,value:e.desc}})]})],2)]:s("span",[e._v("暂无信息")])],2),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("物流单号：")]),e._v(" "),2==e.orderDetail.order.status?[s("el-input",{staticClass:"input-item-middle",attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.sendOrderConfig.opts.expressNumber,callback:function(t){e.$set(e.sendOrderConfig.opts,"expressNumber",t)},expression:"sendOrderConfig.opts.expressNumber"}}),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.setSendOrder()}}},[e._v("发货")])]:[s("span",[e._v("暂无信息")])]],2),e._v(" "),e._m(5)])]],2)]),e._v(" "),e._m(6),e._v(" "),s("div",{staticClass:"result-view"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderDetail.orderProductList,"row-class-name":e.tableRowClassName}},[e._l(e.productConfig[0],function(t,i){return["image"==t.type?s("el-table-column",{attrs:{label:t.label,label:"商品主图",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("div",{staticClass:"el-table-image"},[s("img",{attrs:{src:e.row.productImg,alt:""}})])]}}])}):"hasReparation"==t.type?s("el-table-column",{attrs:{width:t.width,label:t.label,prop:t.key,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.hasReparation?"是":"否"))])]}}])}):s("el-table-column",{attrs:{label:t.label,width:t.width,prop:t.key,align:"center"}})]})],2)],1),e._v(" "),s("div",{staticClass:"modal"},[s("el-dialog",{attrs:{size:"tiny",title:"重新发货",visible:e.modal.isShow},on:{"update:visible":function(t){e.$set(e.modal,"isShow",t)}}},[s("el-form",{ref:"sendOrderConfig.opts",attrs:{model:e.sendOrderConfig.opts,rules:e.rules}},[s("el-form-item",{attrs:{label:"物流公司",prop:"expressChannel","label-width":"100px"}},[s("el-select",{attrs:{filterable:"",placeholder:"物流公司"},model:{value:e.sendOrderConfig.opts.expressChannel,callback:function(t){e.$set(e.sendOrderConfig.opts,"expressChannel",t)},expression:"sendOrderConfig.opts.expressChannel"}},[e._l(e.sendOrderConfig.options,function(e){return[s("el-option",{attrs:{label:e.desc,value:e.desc}})]})],2)],1),e._v(" "),s("el-form-item",{attrs:{label:"快递单号",prop:"expressNumber","label-width":"100px"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.sendOrderConfig.opts.expressNumber,callback:function(t){e.$set(e.sendOrderConfig.opts,"expressNumber",t)},expression:"sendOrderConfig.opts.expressNumber"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.cancelModal()}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.setSendOrder()}}},[e._v("确 定")])],1)],1)],1),e._v(" "),s("div",{staticClass:"modal"},[s("el-dialog",{attrs:{title:"物流信息",visible:e.modalLogistics.isShow},on:{"update:visible":function(t){e.$set(e.modalLogistics,"isShow",t)}}},[s("div",{staticClass:"log-detail"},[e._l(e.modalLogistics.list,function(t,i){return[s("div",0==i?{staticClass:"log-item cur-log"}:{staticClass:"log-item"},[s("p",{staticClass:"log-msg"},[e._v(e._s(t.content))]),e._v(" "),s("p",{staticClass:"log-time"},[e._v(e._s(t.operateTime))]),e._v(" "),s("i",{staticClass:"sign"})])]})],2),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.cancelLogisticsModal()}}},[e._v("确定")])],1)])],1),e._v(" "),s("div",{staticClass:"modal"},[s("el-dialog",{attrs:{title:"身份证信息",visible:e.IdCardModal.isShow},on:{"update:visible":function(t){e.$set(e.IdCardModal,"isShow",t)}}},[s("div",{staticClass:"card-item"},[s("span",[e._v("身份证正面:")]),e._v(" "),s("img",{attrs:{src:e.IdCardDetail.imgFront,alt:""}})]),e._v(" "),s("div",{staticClass:"card-item"},[s("span",[e._v("身份证反面:")]),e._v(" "),s("img",{attrs:{src:e.IdCardDetail.imgBack,alt:""}})]),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.callDownLoadIdCardImg(e.IdCardDetail.imgFront,e.IdCardDetail.imgBack)}}},[e._v("下载")])],1)])],1)]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("订单详情")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-title"},[t("span",[this._v("收货信息")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-title"},[t("span",[this._v("物流信息")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-item-sign-wrap"},[t("span",[this._v("物流追踪：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"block-item"},[t("span",[this._v("发货时间：待发货")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"block-item"},[t("div",{staticClass:"section-item-sign-wrap"},[t("span",[this._v("物流追踪：")])]),this._v(" "),t("div",{staticStyle:{display:"inline-block"}},[t("span",[this._v("暂无物流信息")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-item"},[t("div",{staticClass:"product-list"},[t("div",{staticClass:"section-title"},[t("span",[this._v("商品清单")])])])])}]};var n=s("VU/8")(o,l,!1,function(e){s("X3rK")},"data-v-cded163a",null);t.default=n.exports},X3rK:function(e,t){}});
//# sourceMappingURL=25.b921984fb43e28d433ae.js.map