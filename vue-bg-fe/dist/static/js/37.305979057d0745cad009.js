webpackJsonp([37],{gWFB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),s=a.n(i),n=a("Dd8w"),l=a.n(n),c=a("NYxO"),o=a("DIng"),r=a("HbYu"),v={name:"businessInfo",created:function(){this.initView()},computed:l()({},Object(c.d)(["sellerInfo","sellerContact","brandList","sellerQualification"])),data:function(){return{mapRegisterType:{0:"大陆地区",1:"港澳台",2:"海外"},mapSendTypeList:{0:"一般贸易",1:"跨境直邮",2:"保税"},mapProposalSubmitType:{1:"正常结算",2:"扣点结算",3:"商品供货价+每单运费"},contactType:{1:"发货联系人",2:"售后联系人",3:"运营联系人",4:"结算联系人",5:"业务联系人"},sellerContactReady:!1,configSaveContact:{id:"",type:"",contactName:"",contactPhone:"",qq:"",email:"",weixin:""},mapSellerContact:{},contactChangeId:-1,contactTypeOptions:[{label:"发货联系人",value:1},{label:"售后联系人",value:2},{label:"运营联系人",value:3},{label:"结算联系人",value:4}],qualificationList:[],qualificationListShow:[],changeList:{isShow:!1},CRPlace:"",sellerInfoD:{registerType:0,sendTypeList:[0,1,2]},sellerImgList:{}}},methods:l()({},Object(c.b)(["getSellerContact","saveSellerContact","getSellerBrand","getSellerInfo","callSetNotice","getSellerImgList","saveSellerImgList","setViewImage","setSellerQualification"]),{initView:function(){var t=this;this.sellerInfo.sellerName||this.getSellerInfo().then(function(){t.CRPlace=t.sellerInfo.registerType}),this.brandList.length||this.getSellerBrand(),this.callGetSellerContact(),this.callGetSellerImgList()},callGetSellerImgList:function(){var t=this;this.getSellerImgList().then(function(e){t.sellerImgList=e,t.setSellerImgList()})},setSellerImgList:function(){this.qualificationList=[{key:"businessImgs",list:this.sellerImgList.businessImgs,limit:1,label:"营业执照（副本）",success:"handleBusinessSuccess",before:"beforeBusinessUpload"},{key:"companyRegistrationImgs",list:this.sellerImgList.companyRegistrationImgs,limit:5,label:"公司注册证明书",success:"handleCompanyRegistrationSuccess",before:"beforeCompanyRegistrationUpload"},{key:"foodCirculationImgs",list:this.sellerImgList.foodCirculationImgs,limit:1,label:"食品流通许可证（副本）",success:"handleFoodCirculationSuccess",before:"beforeFoodCirculationUpload"}],this.qualificationListShow=JSON.parse(s()(this.qualificationList))},callChangeList:function(){this.changeList.isShow=!0},submitQualification:function(){var t=this,e={};this.qualificationListShow.map(function(t){var a=[];t.list&&(t.list.map(function(t){a.push(t.url)}),e[t.key]=a.sort())});var a=!1,i=function(i){var n=[];if(t.sellerQualification[i]){if(t.sellerQualification[i].map(function(t){n.push(t.url)}),n.sort(),!e[i])return a=!0,"break";if(n.length!=e[i].length)return a=!0,"break";if(s()(n)!=s()(e[i]))return a=!0,"break"}};for(var n in this.sellerQualification){if("break"===i(n))break}a?this.saveSellerImgList(this.sellerQualification).then(function(){t.cancelQualification(),t.callGetSellerImgList()}):this.cancelQualification()},cancelQualification:function(){this.changeList.isShow=!1,this.qualificationList=JSON.parse(s()(this.qualificationListShow));var t={businessImgs:this.qualificationList[0].list,foodCirculationImgs:this.qualificationList[1].list,companyRegistrationImgs:this.qualificationList[2].list};this.setSellerQualification(t)},showImage:function(t){var e={url:t,isShow:!0};this.setViewImage(e)},callGetSellerContact:function(){var t=this;this.getSellerContact().then(function(){for(var e in t.mapSellerContact=t.sellerContact,t.mapSellerContact)t.mapSellerContact[e].changeId=e;t.sellerContactReady=!0})},changeContact:function(t){this.configSaveContact.id=this.mapSellerContact[t].id,this.configSaveContact.type=this.mapSellerContact[t].type,this.configSaveContact.contactName=this.mapSellerContact[t].contactName,this.configSaveContact.contactPhone=this.mapSellerContact[t].contactPhone,this.configSaveContact.qq=this.mapSellerContact[t].qq,this.configSaveContact.email=this.mapSellerContact[t].email,this.configSaveContact.weixin=this.mapSellerContact[t].weixin,this.contactChangeId=t},cancelChange:function(){this.contactChangeId=-1},saveContact:function(){var t=this;return this.configSaveContact.contactName?this.configSaveContact.contactPhone?this.configSaveContact.contactPhone.match(r.a.Tel)?this.configSaveContact.qq?this.configSaveContact.qq.match(r.a.Qq)?this.configSaveContact.email?this.configSaveContact.email.match(r.a.Email)?void this.saveSellerContact(this.configSaveContact).then(function(){t.cancelChange(),t.callGetSellerContact()}):(this.getNotice("联系人邮箱不正确"),!1):(this.getNotice("请填联系人邮箱"),!1):(this.getNotice("联系人QQ不正确"),!1):(this.getNotice("请填联系人QQ"),!1):(this.getNotice("联系人手机格式不正确"),!1):(this.getNotice("请填联系人手机"),!1):(this.getNotice("请填联系人名称"),!1)},toDeliveryArea:function(){this.$router.push({path:"/delivery/area"})},toDistributionTemplate:function(){this.$router.push({path:"/distribution/template"})},getNotice:function(t){var e={isShow:!0,msg:t};this.callSetNotice(e)}}),components:{vQual:o.a}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"section"},[a("div",{staticClass:"section-item padding"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("商家名称："+t._s(t.sellerInfo.realSellerName))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("商家ID："+t._s(t.sellerInfo.id))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("公司名称："+t._s(t.sellerInfo.companyName))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("店铺网址："+t._s(t.sellerInfo.netAddress))])]),t._v(" "),a("div",{staticClass:"block-item",staticStyle:{"padding-bottom":"0",position:"relative",overflow:"hidden"}},[t._m(3),t._v(" "),a("div",{staticStyle:{display:"inline-block",width:"800px"}},[t._l(t.brandList,function(e){return[a("span",{staticClass:"brand-item"},[t._v(t._s(e.name))])]})],2)]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("应缴纳保证金金额："+t._s(t.sellerInfo.depositPayable))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("保证金缴纳状态：\n          "),0==t.sellerInfo.depositStatus?a("span",[t._v("未签协议")]):1==t.sellerInfo.depositStatus?a("span",[t._v("已签未缴纳")]):2==t.sellerInfo.depositStatus?a("span",[t._v("已缴纳"+t._s(t.sellerInfo.depositCount))]):t._e()])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("商家结算方式："+t._s(t.mapProposalSubmitType[t.sellerInfo.proposalSubmitType]))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("结算周期：")]),t._v(" "),0==t.sellerInfo.settleType?a("span"):a("span",[t._v("每月"),t.sellerInfo.settleDate?a("span"):t._e(),t._v(t._s(t.sellerInfo.settleDate)+"号")])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("收款账号："+t._s(t.sellerInfo.receiveBankAccount))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("开户行："+t._s(t.sellerInfo.receiveBank))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("收款方名称："+t._s(t.sellerInfo.receiveName))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("银行国际代码："+t._s(t.sellerInfo.swiftCode))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("银行地址："+t._s(t.sellerInfo.bankAddress))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("公司地址："+t._s(t.sellerInfo.companyAddress))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("发货类型："),t.sellerInfo.sendTypeList&&t.sellerInfo.sendTypeList.length?a("span",[t._l(t.sellerInfo.sendTypeList,function(e,i){return[t._v("\n            "+t._s(t.mapSendTypeList[e])),i<t.sellerInfo.sendTypeList.length-1?a("span",[t._v(",")]):t._e()]})],2):t._e()])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v("公司注册地："+t._s(t.mapRegisterType[t.CRPlace]))])]),t._v(" "),a("div",{staticClass:"block-item"},[a("span",[t._v(t._s(t.CRPlace>0?"公司注册证号：":"营业执照编号：")+t._s(t.sellerInfo.businessLicenseCode))])])]),t._v(" "),a("div",{staticClass:"section-item"},[t._m(4),t._v(" "),a("div",{staticClass:"result-view"},[t.sellerContactReady?a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.mapSellerContact}},[a("el-table-column",{attrs:{prop:"type",label:"联系人类型",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.contactType[e.row.type]))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"contactName",label:"*联系人",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.contactChangeId==e.row.changeId?a("el-input",{attrs:{size:"small",placeholder:"填写联系人"},model:{value:t.configSaveContact.contactName,callback:function(e){t.$set(t.configSaveContact,"contactName",e)},expression:"configSaveContact.contactName"}}):a("span",[t._v(t._s(e.row.contactName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"contactPhone",label:"*联系人手机号",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.contactChangeId==e.row.changeId?a("el-input",{attrs:{size:"small",placeholder:"填写手机号"},model:{value:t.configSaveContact.contactPhone,callback:function(e){t.$set(t.configSaveContact,"contactPhone",e)},expression:"configSaveContact.contactPhone"}}):a("span",[t._v(t._s(e.row.contactPhone))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"qq",label:"*联系人QQ",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.contactChangeId==e.row.changeId?a("el-input",{attrs:{size:"small",placeholder:"填写qq"},model:{value:t.configSaveContact.qq,callback:function(e){t.$set(t.configSaveContact,"qq",e)},expression:"configSaveContact.qq"}}):a("span",[t._v(t._s(e.row.qq))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"email",label:"*联系人邮箱",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.contactChangeId==e.row.changeId?a("el-input",{attrs:{size:"small",placeholder:"填写邮箱"},model:{value:t.configSaveContact.email,callback:function(e){t.$set(t.configSaveContact,"email",e)},expression:"configSaveContact.email"}}):a("span",[t._v(t._s(e.row.email))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"联系人微信",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.contactChangeId==e.row.changeId?a("el-input",{attrs:{size:"small",placeholder:"填写微信"},model:{value:t.configSaveContact.weixin,callback:function(e){t.$set(t.configSaveContact,"weixin",e)},expression:"configSaveContact.weixin"}}):a("span",[t._v(t._s(e.row.weixin))])]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.contactChangeId==e.row.changeId?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.saveContact()}}},[t._v("保存")]):t._e(),t._v(" "),t.contactChangeId==e.row.changeId?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.cancelChange()}}},[t._v("取消")]):a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.changeContact(e.row.changeId)}}},[t._v("修改")])]}}])})],1):t._e()],1)]),t._v(" "),a("div",{staticClass:"section-item"},[a("div",{staticClass:"section-title o-h"},[a("span",[t._v("资质信息")]),t._v(" "),a("el-button",{staticClass:"fl-r",attrs:{size:"small",type:"primary"},on:{click:t.callChangeList}},[t._v("变更资质信息")])],1),t._v(" "),t._l(t.qualificationListShow,function(e){return a("div",{staticClass:"block-item"},[e.list&&e.list.length?["businessImgs"==e.key&&t.CRPlace<1||"foodCirculationImgs"==e.key||"companyRegistrationImgs"==e.key&&t.CRPlace>=1?[a("div",{staticClass:"section-item-sign-wrap"},[a("span",{staticClass:"section-item-sign"},[t._v(t._s(e.label)+"：")])]),t._v(" "),t._l(e.list,function(e,i){return a("div",{staticClass:"avatar-wrap"},[a("img",{staticClass:"avatar",attrs:{src:e.url}}),t._v(" "),a("div",{staticClass:"avatar-menu"},[a("i",{staticClass:"el-icon-search",on:{click:function(a){t.showImage(e.url)}}})])])})]:t._e()]:t._e()],2)})],2)]),t._v(" "),a("el-dialog",{attrs:{visible:t.changeList.isShow,size:"large"},on:{"update:visible":function(e){t.$set(t.changeList,"isShow",e)},close:t.cancelQualification}},[a("div",{staticClass:"section"},[a("div",{staticClass:"section-item"},[a("v-qual",{attrs:{CRPlace:t.CRPlace,qualificationList:t.qualificationList}})],1),t._v(" "),a("div",{staticClass:"section-item",staticStyle:{color:"#fb4b4d"}},[a("p",[t._v("注：1、图片宽度620px，高度不限，jpg格式")]),t._v(" "),a("p",{staticStyle:{"text-indent":"2rem"}},[t._v("2、复印件加盖公司公章或扫描件即可，图片中公章不可为灰色")]),t._v(" "),a("p",{staticStyle:{"text-indent":"2rem"}},[t._v("3、重新上传图片后点击确定将重新提交审核")])])]),t._v(" "),a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancelQualification}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitQualification}},[t._v("确 定")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("商家信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("span",[this._v("基本信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-item primary-color"},[e("span",[this._v("基本信息非常重要，涉及商家打款事宜，如填错未告知修改，后期产生的损失由商家承担")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-item-sign-wrap",staticStyle:{width:"auto"}},[e("span",[this._v("商家品牌：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("span",[this._v("联系人信息")])])}]};var f=a("VU/8")(v,u,!1,function(t){a("wWam")},"data-v-5939b8d3",null);e.default=f.exports},wWam:function(t,e){}});
//# sourceMappingURL=37.305979057d0745cad009.js.map