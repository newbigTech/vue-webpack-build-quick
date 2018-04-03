webpackJsonp([36],{"00UN":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("mvHQ"),a=s.n(i),r=s("Dd8w"),n=s.n(r),d=s("NYxO"),l={name:"deliveryArea",created:function(){this.initView()},computed:n()({},Object(d.d)(["allCity","logisticsChannel"])),data:function(){return{expressLayer:{show:!1,selectExpress:"",selected:""},priceLayer:{input:"",textarea:"",show:!1},tipsLayer:{textarea:"",start:"",end:"",show:!1},addressLayer:{show:!1,selectedProvince:"",selectedCity:"",selectedDistrict:"",inputAddress:"",inputPerson:"",inputTel:"",cityShow:!1,districtShow:!1},pickerOptions0:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}},localAllCity:{provinceList:[],cityList:[],districtList:[]},index:0,shippingAddressId:0,freightAuditTypeList:[],itemLogisticsChannel:[],sendType:[],deliveryList:[]}},methods:n()({},Object(d.b)(["getDeliveryArea","modifyPrice","modifyTips","modifyAddress","getAllCity","getSendType","callSetToast","callSetNotice","getLogisticsChannel","sellerExpressAudit"]),{initView:function(){var e=this;!localStorage.getItem("allCityStorage")||localStorage.getItem("allCityStorage").length<1e4?this.getAllCity().then(function(){localStorage.setItem("allCityStorage",a()(e.allCity.data)),e.getList()}):this.getList()},getList:function(){var e=this;this.getDeliveryArea({isAvailable:1}).then(function(t){e.deliveryList=t,e.getSendType().then(function(t){e.sendType=t})})},showLayer:function(e,t){var s=this;switch(this.index=e,this.shippingAddressId=this.deliveryList[e].id,t){case"price":this.priceLayer.show=!0;break;case"tips":var i=this.deliveryList[e];this.tipsLayer.show=!0,this.tipsLayer.textarea=i.holidayTips,this.tipsLayer.start=i.holidayStartTime,this.tipsLayer.end=i.holidayEndTime;break;case"address":i=this.deliveryList[e];this.addressLayer.show=!0,this.addressLayer.selectedProvince=this.codeTransName(i.expandInfo.receiveProvinceCode,1),this.addressLayer.selectedCity=this.codeTransName(i.expandInfo.receiveCityCode,2),this.addressLayer.selectedDistrict=this.codeTransName(i.expandInfo.receiveDistrictCode,3),this.addressLayer.inputAddress=i.expandInfo.receiveDetailAddress,this.addressLayer.inputPerson=i.expandInfo.receivePerson,this.addressLayer.inputTel=i.expandInfo.receiveTelephone,this.addressLayer.cityShow=!0,this.addressLayer.districtShow=!0;var a=JSON.parse(localStorage.getItem("allCityStorage"));this.localAllCity.provinceList=a.provinceList,this.localAllCity.cityList=a.cityList.filter(function(e){return e.provinceId==i.expandInfo.receiveProvinceCode}),this.localAllCity.districtList=a.districtList.filter(function(e){return e.cityId==i.expandInfo.receiveCityCode});break;case"express":this.logisticsChannel.length?this.setMapExpressId(e):this.getLogisticsChannel().then(function(){s.setMapExpressId(e)})}},setMapExpressId:function(e){var t=this.deliveryList[e];if(this.itemLogisticsChannel=JSON.parse(a()(this.logisticsChannel)),t.kuaidi){var s=t.kuaidi.indexOf("、")>-1?t.kuaidi.split("、"):t.kuaidi.split("，");this.itemLogisticsChannel=this.itemLogisticsChannel.filter(function(e){var t=!0;for(var i in s)if(s[i]==e.desc||s[i].indexOf(e.desc)>-1||e.desc.indexOf(s[i])>-1)return t=!1,!1;return t})}this.expressLayer.show=!0,this.expressLayer.selected=t.kuaidi},hideLayer:function(e){switch(e){case"price":this.priceLayer.show=!1,this.priceLayer.input=0,this.priceLayer.textarea="";break;case"tips":this.tipsLayer.show=!1,this.tipsLayer.textarea="",this.tipsLayer.start="",this.tipsLayer.end="";break;case"address":this.addressLayer.show=!1,this.addressLayer.selectedProvince="",this.addressLayer.selectedCity="",this.addressLayer.selectedDistrict="",this.addressLayer.inputAddress="",this.addressLayer.inputPerson="",this.addressLayer.inputTel="",this.addressLayer.cityShow=!1,this.addressLayer.districtShow=!1;break;case"express":this.expressLayer.show=!1,this.expressLayer.selected="",this.expressLayer.selectExpress=""}},submitModity:function(e){var t=this;switch(e){case"price":if(!this.priceLayer.input)return this.getToast("请填写订单运费"),!1;if(!this.priceLayer.textarea)return this.getToast("请填写调价原因"),!1;this.modifyPrice({shippingAddressId:this.shippingAddressId,freight:this.priceLayer.input,reason:this.priceLayer.textarea}).then(function(){t.deliveryList[t.index].sellerFreightAuditItem.status=1,t.priceLayer.show=!1});break;case"tips":this.modifyTips({shippingAddressId:this.shippingAddressId,desc:this.tipsLayer.textarea,showStart:Util.formatDate("yyyy-mm-dd hh:mm:ss",this.tipsLayer.start),showEnd:Util.formatDate("yyyy-mm-dd hh:mm:ss",this.tipsLayer.end)}).then(function(){t.tipsLayer.show=!1,t.deliveryList[t.index].holidayTips=t.tipsLayer.textarea,t.deliveryList[t.index].holidayStartTime=Util.formatDate("yyyy-mm-dd hh:mm:ss",t.tipsLayer.start),t.deliveryList[t.index].holidayEndTime=Util.formatDate("yyyy-mm-dd hh:mm:ss",t.tipsLayer.end)});break;case"address":var s=this.addressLayer;if(s.inputAddress.length>100)return this.getToast("详细地址字符过长"),!1;s.selectedProvince&&s.selectedCity&&s.selectedDistrict&&s.inputAddress&&s.inputPerson&&s.inputTel?this.modifyAddress({shippingAddressId:this.shippingAddressId,provinceCode:s.selectedProvince>0?s.selectedProvince:this.nameTransCode(s.selectedProvince,1),cityCode:s.selectedCity>0?s.selectedCity:this.nameTransCode(s.selectedCity,2),districtCode:s.selectedDistrict>0?s.selectedDistrict:this.nameTransCode(s.selectedDistrict,3),address:s.inputAddress,person:s.inputPerson,phone:s.inputTel}).then(function(){t.addressLayer.show=!1,t.getList()}):this.getToast("请填写完整");break;case"express":var i=this.expressLayer;if(!i.selectExpress.length)return this.getToast("请选择物流"),!1;this.sellerExpressAudit({shippingAddressId:this.shippingAddressId,expressIds:i.selectExpress.join(",")}).then(function(){t.deliveryList[t.index].expressAuditStatus=1,t.hideLayer("express")})}},changeProvinve:function(e){if(!e.match(/^\d*$/))return!1;var t=JSON.parse(localStorage.getItem("allCityStorage"));this.localAllCity.cityList=t.cityList.filter(function(t,s){if(t.provinceId==e)return t}),this.addressLayer.selectedCity="",this.addressLayer.selectedDistrict=""},changeCity:function(e){if(!e.match(/^\d*$/))return!1;var t=JSON.parse(localStorage.getItem("allCityStorage"));this.localAllCity.districtList=t.districtList.filter(function(t,s){if(t.cityId==e)return t}),this.addressLayer.selectedDistrict=""},dateTrans:function(e){var t=new Date(e);return t.getFullYear()+"-"+(parseInt(t.getMonth())+1)+"-"+t.getDate()},sendTypeTrans:function(e){return 0===this.sendType.length?"":this.sendType[e-1]?this.sendType[e-1].desc:""},getToast:function(e){var t={isShow:!0,msg:e};this.callSetToast(t)},getNotice:function(e){var t={isShow:!0,msg:e};this.callSetNotice(t)},codeTransExpress:function(e){for(var t=0;e!=this.logisticsChannel[t].code;)t++;return this.logisticsChannel[t].desc},codeTransName:function(e,t){var s=JSON.parse(localStorage.getItem("allCityStorage")),i=0;switch(t){case 1:for(;e!=s.provinceList[i].provinceId;)i++;return s.provinceList[i].name;case 2:for(;e!=s.cityList[i].cityId;)i++;return s.cityList[i].name;case 3:for(;e!=s.districtList[i].districtId;)i++;return s.districtList[i].name}},nameTransCode:function(e,t){var s=JSON.parse(localStorage.getItem("allCityStorage")),i=0;switch(t){case 1:for(;e!=s.provinceList[i].name;)i++;return s.provinceList[i].provinceId;case 2:for(;e!=s.cityList[i].name;)i++;return s.cityList[i].cityId;case 3:for(;e!=s.districtList[i].name;)i++;return s.districtList[i].districtId}}})},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),e._v(" "),s("div",{staticClass:"section"},e._l(e.deliveryList,function(t,i){return s("div",{staticClass:"section-item"},[s("div",{staticClass:"block-item"},[s("span",[e._v("发货地："+e._s(t.sendAddress))])]),e._v(" "),s("div",{staticClass:"block-item"},[1==t.sendCodeType?s("span",[e._v("发货依据：商品编码")]):2==t.sendCodeType?s("span",[e._v("发货依据：商品条码")]):3==t.sendCodeType?s("span",[e._v("发货依据：商品名称")]):4==t.sendCodeType?s("span",[e._v("发货依据：其他")]):e._e()]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("发货类型："+e._s(e.sendTypeTrans(t.sellerType)))])]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("发货物流："+e._s(t.kuaidi))]),e._v(" "),s("span",{staticClass:"mg-l disable-color"},[e._v("注：如需添加物流，请找类目运营提交申请")])]),e._v(" "),s("div",{staticClass:"block-item"},[1==t.expandInfo.freightSubmitType?[s("span",[e._v("运费模板：每订单运费"+e._s(t.expandInfo.freight)+"元")])]:2==t.expandInfo.freightSubmitType?[s("span",[e._v("运费模板：【"+e._s(t.expandInfo.freightTemplateName?t.expandInfo.freightTemplateName:t.sendAddress+"运费模板")+"】(按重量、配送区域计价)")])]:e._e(),e._v(" "),t.sellerFreightAuditItem?[1==t.sellerFreightAuditItem.status?[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"申请已提交，请等待审核",placement:"right-start"}},[s("span",{staticClass:"el-button is-disabled el-button--small"},[e._v("更改运费模板")])])]:2==t.sellerFreightAuditItem.status?[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上次审核于"+t.sellerFreightAuditItem.auditTime+"日审核通过，当天晚24点生效",placement:"right-start"}},[s("router-link",{attrs:{tag:"span",to:{path:"/edit/freight",query:{shipAddress:t.id}}}},[s("el-button",{attrs:{type:"primary",size:"small"}},[e._v("更改运费模板")])],1)],1)]:3==t.sellerFreightAuditItem.status?[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"审核不通过，如需调整，请重新提交审核",placement:"right-start"}},[s("router-link",{attrs:{tag:"span",to:{path:"/edit/freight",query:{shipAddress:t.id}}}},[s("el-button",{attrs:{type:"primary",size:"small"}},[e._v("更改运费模板")])],1)],1)]:e._e()]:s("router-link",{attrs:{tag:"span",to:{path:"/edit/freight",query:{shipAddress:t.id}}}},[s("el-button",{attrs:{type:"primary",size:"small"}},[e._v("更改运费模板")])],1)],2),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("发货时效：订单付款后当天剩余时间 + "+e._s(t.shippingValid)+"天揽件时效（请注意：若该时间段内若无物流揽件消息反馈，则判定为发货超时）")])]),e._v(" "),s("div",{staticClass:"block-item"},[1==t.isSendWeekend?s("span",[e._v("周末发货：周末不发货")]):2==t.isSendWeekend?s("span",[e._v("周末发货：周六发货")]):3==t.isSendWeekend?s("span",[e._v("周末发货：周日发货")]):4==t.isSendWeekend?s("span",[e._v("周末发货：周末发货")]):e._e()]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("超时罚款：\n              "),1==t.overtimeFineType?s("span",[e._v(e._s(t.overtimeFineRemark)+"元")]):2==t.overtimeFineType?s("span",[e._v("订单实付金额"+e._s(t.overtimeFineRemark)+"%")]):e._e(),e._v("\n              *订单*24小时（不足24小时按24小时计算）")]),e._v(" "),s("router-link",{attrs:{tag:"span",to:"/edit/timeout/record"}},[s("el-button",{attrs:{type:"primary",size:"small"}},[e._v("申请超时发货")])],1)],1),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("假期发货提示："+e._s(t.holidayTips))]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.showLayer(i,"tips")}}},[e._v("添加假期发货提示")])],1),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("APP展示开始时间："+e._s(t.holidayStartTime))])]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("APP展示结束时间："+e._s(t.holidayEndTime))])]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("退货地址："+e._s(e.codeTransName(t.expandInfo.receiveProvinceCode,1))+e._s(e.codeTransName(t.expandInfo.receiveCityCode,2))+e._s(e.codeTransName(t.expandInfo.receiveDistrictCode,3))+e._s(t.expandInfo.receiveDetailAddress))]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.showLayer(i,"address")}}},[e._v("修改退货地址")])],1),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("联系人："+e._s(t.expandInfo.receivePerson))])]),e._v(" "),s("div",{staticClass:"block-item"},[s("span",[e._v("联系电话："+e._s(t.expandInfo.receiveTelephone))])])])})),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.priceLayer.show,expression:"priceLayer.show"}],staticClass:"layer-bg price-layer"},[s("div",{staticClass:"price-ct"},[s("h1",[e._v("订单运费调价")]),e._v(" "),s("div",{staticClass:"input-ct"},[s("p",[s("span",[e._v("订单运费：")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.priceLayer.input,callback:function(t){e.$set(e.priceLayer,"input",t)},expression:"priceLayer.input"}}),e._v(" 元/单\n        ")],1),e._v(" "),s("p",{staticClass:"o-h"},[s("span",{staticClass:"fl-l"},[e._v("调价原因：")]),e._v(" "),s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.priceLayer.textarea,callback:function(t){e.$set(e.priceLayer,"textarea",t)},expression:"priceLayer.textarea"}})],1)]),e._v(" "),s("strong",[e._v("注：审核通过当天晚24点生效")]),e._v(" "),s("div",{staticClass:"btns-wrap"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitModity("price")}}},[e._v("确定")]),e._v(" "),s("el-button",{on:{click:function(t){e.hideLayer("price")}}},[e._v("取消")])],1)])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.tipsLayer.show,expression:"tipsLayer.show"}],staticClass:"layer-bg tips-layer"},[s("div",{staticClass:"price-ct",staticStyle:{height:"426px"}},[s("h1",[e._v("假期发货提示")]),e._v(" "),s("div",{staticClass:"input-ct"},[s("p",{staticClass:"o-h"},[s("span",{staticClass:"fl-l"},[e._v("假期发货提示：")]),e._v(" "),s("el-input",{attrs:{type:"textarea",rows:5,placeholder:"假期临近时填写。若正常发货可填：XX节期间可正常发货；若不发货可填：XX节期间不发货，X月X日发货"},model:{value:e.tipsLayer.textarea,callback:function(t){e.$set(e.tipsLayer,"textarea",t)},expression:"tipsLayer.textarea"}})],1),e._v(" "),s("p",[s("span",[e._v("APP展示开始：")]),e._v(" "),s("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期","picker-options":e.pickerOptions0},model:{value:e.tipsLayer.start,callback:function(t){e.$set(e.tipsLayer,"start",t)},expression:"tipsLayer.start"}})],1),e._v(" "),s("p",[s("span",[e._v("APP展示结束：")]),e._v(" "),s("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期","picker-options":e.pickerOptions0},model:{value:e.tipsLayer.end,callback:function(t){e.$set(e.tipsLayer,"end",t)},expression:"tipsLayer.end"}})],1)]),e._v(" "),s("div",{staticClass:"btns-wrap"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitModity("tips")}}},[e._v("确定")]),e._v(" "),s("el-button",{on:{click:function(t){e.hideLayer("tips")}}},[e._v("取消")])],1)])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.addressLayer.show,expression:"addressLayer.show"}],staticClass:"layer-bg address-layer"},[s("div",{staticClass:"price-ct"},[s("h1",[e._v("修改退货地址")]),e._v(" "),s("div",{staticClass:"input-ct"},[s("p",[e._v("\n          所在地区：\n          "),s("el-select",{attrs:{placeholder:"省"},on:{change:e.changeProvinve},model:{value:e.addressLayer.selectedProvince,callback:function(t){e.$set(e.addressLayer,"selectedProvince",t)},expression:"addressLayer.selectedProvince"}},e._l(e.localAllCity.provinceList,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.provinceId}})})),e._v(" "),s("el-select",{directives:[{name:"show",rawName:"v-show",value:e.addressLayer.cityShow,expression:"addressLayer.cityShow"}],attrs:{placeholder:"市"},on:{change:e.changeCity},model:{value:e.addressLayer.selectedCity,callback:function(t){e.$set(e.addressLayer,"selectedCity",t)},expression:"addressLayer.selectedCity"}},e._l(e.localAllCity.cityList,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.cityId}})})),e._v(" "),s("el-select",{directives:[{name:"show",rawName:"v-show",value:e.addressLayer.districtShow,expression:"addressLayer.districtShow"}],attrs:{placeholder:"区"},model:{value:e.addressLayer.selectedDistrict,callback:function(t){e.$set(e.addressLayer,"selectedDistrict",t)},expression:"addressLayer.selectedDistrict"}},e._l(e.localAllCity.districtList,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.districtId}})}))],1),e._v(" "),s("p",[s("span",[e._v("详细地址：")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.addressLayer.inputAddress,callback:function(t){e.$set(e.addressLayer,"inputAddress",t)},expression:"addressLayer.inputAddress"}})],1),e._v(" "),s("p",[s("span",[e._v("联系人：")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.addressLayer.inputPerson,callback:function(t){e.$set(e.addressLayer,"inputPerson",t)},expression:"addressLayer.inputPerson"}})],1),e._v(" "),s("p",[s("span",[e._v("联系电话：")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.addressLayer.inputTel,callback:function(t){e.$set(e.addressLayer,"inputTel",t)},expression:"addressLayer.inputTel"}})],1)]),e._v(" "),s("div",{staticClass:"btns-wrap"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitModity("address")}}},[e._v("确定")]),e._v(" "),s("el-button",{on:{click:function(t){e.hideLayer("address")}}},[e._v("取消")])],1)])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.expressLayer.show,expression:"expressLayer.show"}],staticClass:"layer-bg express-layer"},[s("div",{staticClass:"price-ct"},[s("h1",[e._v("请选择物流方式")]),e._v(" "),s("div",{staticClass:"input-ct"},[s("p",[s("span",[e._v("该发货地已添加发货物流：")]),e._v(" "+e._s(e.expressLayer.selected)+"\n        ")]),e._v(" "),s("p",[s("span",{staticClass:"fl-l"},[e._v("添加发货物流：")]),e._v(" "),s("el-select",{staticClass:"input-select",attrs:{size:"small",multiple:"",filterable:"",placeholder:"请选择物流"},model:{value:e.expressLayer.selectExpress,callback:function(t){e.$set(e.expressLayer,"selectExpress",t)},expression:"expressLayer.selectExpress"}},[e._l(e.itemLogisticsChannel,function(e){return[s("el-option",{attrs:{label:e.desc,value:e.code}})]})],2)],1)]),e._v(" "),s("div",{staticClass:"btns-wrap"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitModity("express")}}},[e._v("确定")]),e._v(" "),s("el-button",{on:{click:function(t){e.hideLayer("express")}}},[e._v("取消")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("管理发货地")])])}]};var o=s("VU/8")(l,c,!1,function(e){s("Rwhx")},"data-v-6d7e7fe2",null);t.default=o.exports},Rwhx:function(e,t){}});
//# sourceMappingURL=36.65f699a1b39eb1956d88.js.map