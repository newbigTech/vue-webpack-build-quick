webpackJsonp([40],{"6J+3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),s=i.n(a),l=i("jKIa"),c=i("NYxO"),r={name:"activityDetail",created:function(){this.initView()},computed:s()({},Object(c.d)(["currentSearchQuery"])),data:function(){return{mapType:{1:"格格家",2:"环球捕手",5:"格格家供应链",6:"脉宝云店",8:"美食买手"},mapJoinStatus:{1:"审核中",2:"成功",3:"失败"},mapJoinProductStatus:{1:"等待排期",2:"取消",3:"提前结束",4:"已排期"},mapJoinLargeProductStatus:{1:"正常",2:"取消",3:"提前结束"},mapFrequency:{0:"一日一次",1:"一日两次",2:"一日三次",3:"一周一次",4:"一周两次",5:"一周三次",6:"一月一次",7:"一月两次",8:"一月三次"},productConfig:{isShow:!1},categoryConfig:{type:"search",label:{items:["一级分类：","二级分类：","三级分类："]},mapModel:[{key:"levelOne"},{key:"levelTwo"},{key:"levelThree"}]},searchItem:[{type:"input",label:"商品ID",placeholder:"请输入商品ID",key:"id"},{type:"input",label:"商品条码",placeholder:"请输入商品条码",key:"barcode"},{type:"select",label:"出售状态",placeholder:"请选择",key:"saleStatus",options:[{value:"0",label:"未出售"},{value:"1",label:"出售中"}]},{type:"input",label:"商品名称",placeholder:"请输入商品名称",key:"name",width:"323.5"}],resultItem:{option:[{fixed:"left",label:"商品ID",key:"id",width:"80"},{label:"商品名称",key:"name",type:"title",width:""},{label:"原供货价",key:"wholesalePrice",width:"120"},{label:"剩余库存",key:"surplusStock",width:"80"},{fixed:"right",type:"opera",label:"操作",width:"80"}],opera:{selectItems:[{type:"select",label:"选择",key:"id"}]}},JoinResultItem:{option:[{fixed:"left",label:"商品ID",key:"sellerProductId",width:"80"},{label:"商品主图",key:"image1",type:"image",width:"120"},{label:"商品名称",key:"productName",type:"title",width:""},{label:"原供货价",key:"wholesalePrice",width:"80"},{label:"剩余库存",key:"surplusStock",width:"80"},{label:"活动供货价",key:"activityWholesalePrice",width:"80"},{label:"库存限制",key:"isLimitStock",width:"80",type:"isLimitStock"},{label:"是否包邮",key:"isFreeFreight",width:"80",type:"isFreeFreight"},{label:"备注",key:"applyRemark",width:"80"},{label:"审核状态",key:"status",width:"80",type:"status"},{label:"参与状态",key:"productStatus",width:"80",type:"productStatus"},{fixed:"right",type:"opera",label:"操作",width:"80"}],opera:{selectItems:[{type:"select",label:"选择",key:"id"}]}},submitResultItem:{option:[{fixed:"left",label:"商品ID",key:"sellerProductId",width:"80"},{label:"商品名称",key:"name",type:"title",width:""},{label:"原供货价",key:"wholesalePrice",width:"100"},{label:"剩余库存",key:"surplusStock",width:"100"},{label:"活动供货价",key:"activityWholesalePrice",width:"140"},{label:"库存限制",key:"isLimitStock",width:"180"},{label:"是否包邮",key:"isFreeFreight",width:"150"},{label:"备注",key:"applyRemark",width:"140"},{fixed:"right",type:"opera",label:"操作",width:"80"}],opera:{selectItems:[{type:"select",label:"选择",key:"id"}]}},submitProductList:[],submitProductIdList:[],mapSubmitProductId:{},searchResult:[],mapProduct:{},mapSelectProductId:{},selectProductList:[],selectProductIdList:[],searchPage:1,searchSize:10,paging:{currentPage:1,pageSizes:[10],pageSize:0,total:0},pagingJoin:{currentPage:1,pageSizes:[10],pageSize:0,total:0},isLast:!1,mapListReady:!1,detailCon:{id:"",type:"",source:""},isActivityJoinList:!1,activityJoinOpts:{activityId:"",page:1,rows:10},loading:!0,tableActivityJoinList:[],activityDetailMsg:{},activityJoinList:{}}},methods:s()({},Object(c.b)(["getProductList","setCurrentSearchQuery","setClearSelect","getActivityDetail","getActivityJoinPageList","joinActivity","cancelJoin","callSetNotice"]),{getLargeAvailable:function(t,e,i){var a=new Date(t),s=new Date(e),l=new Date,c="",r=0;return l<a?c="未开始":l>=a&&l<s?(c="进行中",r=1):l>=s&&(c="已结束"),"status"==i?c:r},initView:function(){var t=this;this.detailCon=this.$route.query;var e={activityId:this.detailCon.id};this.getActivityDetail(e).then(function(e){t.activityDetailMsg=e}),"edit"==this.detailCon.type&&(this.activityJoinOpts.activityId=this.detailCon.id,this.callPageJoinList())},callPageJoinList:function(){var t=this;this.loading=!0,this.getActivityJoinPageList(this.activityJoinOpts).then(function(e){t.activityJoinList=e,t.tableActivityJoinList=t.activityJoinList.rows,t.pagingJoin.currentPage=Number(t.activityJoinOpts.page),t.pagingJoin.pageSize=Number(t.activityJoinOpts.rows),t.pagingJoin.total=Number(t.activityJoinList.total),t.loading=!1})},handleJoinSizeChange:function(t){this.activityJoinOpts.rows=t,this.callPageJoinList()},handleJoinCurrentChange:function(t){this.activityJoinOpts.page=t,this.callPageJoinList()},callAddProduct:function(){this.initSearch(),this.pageSearch(this.searchPage,this.searchSize)},initSearch:function(){this.searchPage=1,this.searchSize=10,this.setCurrentSearchQuery({barcode:null,id:null,levelOne:null,levelThree:null,levelTwo:null,name:null,page:1,rows:10,saleStatus:null,status:4,inStorageState:0})},pageSearch:function(t,e){var i=this,a=this.currentSearchQuery;for(var s in a)a[s]=a[s]?a[s]:null;a.page=t,a.rows=e,this.getProductList(a).then(function(t){i.searchResult=t.rows,i.paging.currentPage=Number(a.page),i.paging.pageSize=Number(a.rows),i.paging.total=Number(t.total),i.mapSelectProduct(),i.productConfig.isShow=!0})},handleSizeChange:function(t){},handleCurrentChange:function(t){this.pageSearch(t,this.searchSize)},mapSelectProduct:function(){for(var t in this.searchResult)this.mapProduct[this.searchResult[t].id]=this.searchResult[t]},searchProduct:function(){this.searchPage=1,this.searchSize=10,this.pageSearch(this.searchPage,this.searchSize)},selectProduct:function(t){this.checkSelectId(t)?(this.selectProductIdList.push(t),this.selectProductList.push(this.mapProduct[t]),this.callMapSelectProductId()):this.getNotice("商品已经存在")},checkSelectId:function(t){var e=!0;if("edit"==this.detailCon.type)for(var i in this.activityJoinList.rows)"large"==this.detailCon.source?t==this.activityJoinList.rows[i].sellerProductId&&(1==this.activityJoinList.rows[i].status||2==this.activityJoinList.rows[i].status&&1==this.activityJoinList.rows[i].productStatus)&&(e=!1):"daily"==this.detailCon.source&&t==this.activityJoinList.rows[i].sellerProductId&&(1==this.activityJoinList.rows[i].status||2==this.activityJoinList.rows[i].status&&1==this.activityJoinList.rows[i].productStatus)&&(e=!1);for(var a in this.selectProductIdList)t==this.selectProductIdList[a]&&(e=!1);for(var s in this.submitProductIdList)t==this.submitProductIdList[s]&&(e=!1);return e},callMapSelectProductId:function(){var t=this;this.mapSelectProductId={},this.selectProductIdList.forEach(function(e,i){t.mapSelectProductId[e]=i})},callMapSubmitProduct:function(){var t=this;this.mapSubmitProductId={},this.submitProductIdList=[],this.submitProductList.forEach(function(e,i){t.mapSubmitProductId[e.sellerProductId]=i,t.submitProductIdList.push(e.sellerProductId)}),this.mapListReady=!0},delSelectProduct:function(t){var e=this.mapSelectProductId[t];this.selectProductIdList.splice(e,1),this.selectProductList.splice(e,1),this.callMapSelectProductId()},delSubmitProduct:function(t){var e=this.mapSubmitProductId[t];this.submitProductList.splice(e,1),this.submitProductIdList.splice(e,1),this.callMapSubmitProduct()},saveSelectProduct:function(){for(var t in this.selectProductList){var e={};e.sellerProductId=this.selectProductList[t].id,e.activityWholesalePrice="",e.isFreeFreight="1",e.wholesalePrice=this.selectProductList[t].wholesalePrice,e.isLimitStock="0",e.applyRemark="",e.name=this.selectProductList[t].name,e.stock="",e.surplusStock=this.selectProductList[t].surplusStock,this.submitProductList.push(e)}this.callMapSubmitProduct(),this.cancelSelectProduct()},resetSearch:function(){this.initSearch(),this.setClearSelect({isClear:!0})},cancelSelectProduct:function(){this.selectProductIdList=[],this.selectProductList=[],this.mapProduct={},this.mapSelectProductId={},this.searchResult=[],this.setClearSelect({isClear:!0}),this.productConfig.isShow=!1},submitProduct:function(){var t=this;if("large"==this.detailCon.source&&1!=this.getLargeAvailable(this.activityDetailMsg.applyStartTime,this.activityDetailMsg.applyEndTime,"opera"))return this.getNotice("活动已停止提报"),!1;var e=[];for(var i in this.submitProductList){if(!this.submitProductList[i].activityWholesalePrice)return this.getNotice("请填写商品的供货价"),!1;if(this.submitProductList[i].activityWholesalePrice>=this.submitProductList[i].wholesalePrice)return this.getNotice("活动供货价须小于原供货价"),!1;if(1==this.submitProductList[i].isLimitStock&&!this.submitProductList[i].stock)return this.getNotice("请填写库存"),!1;if(1==this.submitProductList[i].isLimitStock&&this.submitProductList[i].stock>this.submitProductList[i].surplusStock)return this.getNotice("库存限制应小于当前库存"),!1;if(this.submitProductList[i].applyRemark.length>30)return this.getNotice("商品备注长度小于30字符"),!1;var a={};a.applyRemark=this.submitProductList[i].applyRemark,a.activityWholesalePrice=this.submitProductList[i].activityWholesalePrice,a.isFreeFreight=this.submitProductList[i].isFreeFreight,a.isLimitStock=this.submitProductList[i].isLimitStock,a.sellerProductId=this.submitProductList[i].sellerProductId,1==a.isLimitStock&&(a.stock=this.submitProductList[i].stock),e.push(a)}var s={activityId:this.detailCon.id,applyList:e};this.$confirm("是否确认提交","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){t.callJoinActivity(s)}).catch(function(){})},callJoinActivity:function(t){var e=this;this.joinActivity(t).then(function(){e.submitProductList=[],e.$router.push({path:"/activity/detail",query:{id:e.detailCon.id,type:"edit",source:e.detailCon.source}}),e.detailCon.type="edit",e.activityJoinOpts.activityId=e.detailCon.id,e.callPageJoinList()})},callCancelJoin:function(t){var e=this;this.$confirm("是否确认撤销","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){var i={activityId:e.detailCon.id,applyId:t};e.cancelJoin(i).then(function(){e.activityJoinOpts.page=1,e.activityJoinOpts.rows=10,e.callPageJoinList()})}).catch(function(){})},getNotice:function(t){var e={isShow:!0,msg:t};this.callSetNotice(e)}}),components:{vCate:l.a}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("\n    活动提报详情\n  ")]),t._v(" "),i("div",{staticClass:"section"},[i("div",{staticClass:"section-item"},[i("div",{staticClass:"block-item"},[i("span",[t._v("活动ID："+t._s(t.activityDetailMsg.id))]),t._v(" "),i("span",[t._v("活动主题："+t._s(t.activityDetailMsg.name))]),t._v(" "),t.activityDetailMsg.type?i("span",[t._v("活动渠道：\n          "),t._l(t.activityDetailMsg.type.split(","),function(e){return i("span",[t._v("\n                "+t._s(t.mapType[e])+"\n          ")])})],2):t._e()]),t._v(" "),"daily"==t.detailCon.source?i("div",{staticClass:"block-item"},[i("span",[t._v("活动频率："+t._s(t.mapFrequency[t.activityDetailMsg.frequency]))]),t._v(" "),i("span",[t._v("日常活动时间："+t._s(t.activityDetailMsg.timeDesc))])]):t._e(),t._v(" "),"large"==t.detailCon.source?[i("div",{staticClass:"block-item"},[i("span",[t._v("活动介绍："+t._s(t.activityDetailMsg.desc))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("span",[t._v("活动报名时间："+t._s(t.activityDetailMsg.applyStartTime)+" - "+t._s(t.activityDetailMsg.applyEndTime))])]),t._v(" "),i("div",{staticClass:"block-item"},[i("span",[t._v("活动时间："+t._s(t.activityDetailMsg.activityStartTime)+" - "+t._s(t.activityDetailMsg.activityEndTime))])])]:t._e(),t._v(" "),i("div",{staticClass:"block-item"},["large"==t.detailCon.source?[i("span",[t._v("活动状态："+t._s(t.getLargeAvailable(t.activityDetailMsg.activityStartTime,t.activityDetailMsg.activityEndTime,"status")))])]:"daily"==t.detailCon.source?i("span",[t._v(" 活动介绍："+t._s(t.activityDetailMsg.desc))]):t._e(),t._v(" "),t.activityDetailMsg.joinCount?i("span",[t._v("提报状态：已提报")]):i("span",[t._v("提报状态：未提报")])],2)],2),t._v(" "),"edit"==t.detailCon.type&&t.tableActivityJoinList.length?[i("div",{staticClass:"result-view"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中",data:t.tableActivityJoinList}},[t._l(t.JoinResultItem.option,function(e,a){return["left"==e.fixed?[i("el-table-column",{attrs:{fixed:"",prop:e.key,label:e.label,width:e.width,align:"center"}})]:"right"==e.fixed?["daily"==t.detailCon.source?["opera"==e.type?i("el-table-column",{attrs:{width:e.width,label:e.label,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.productStatus?i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){t.callCancelJoin(e.row.id)}}},[t._v("撤回")]):t._e()]}}])}):t._e()]:t._e()]:["image"==e.type?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("div",{staticClass:"el-table-image"},[i("img",{attrs:{src:t.row.image1,alt:""}})])]}}])}):"status"==e.type?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t.mapJoinStatus[e.row.status]))])]}}])}):"productStatus"==e.type?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[2==e.row.status?["daily"==t.detailCon.source?i("span",[t._v(t._s(t.mapJoinProductStatus[e.row.productStatus]))]):"large"==t.detailCon.source?i("span",[t._v(t._s(t.mapJoinLargeProductStatus[e.row.productStatus]))]):t._e()]:i("span",[t._v("未参与")])]}}])}):"isLimitStock"==e.type?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.isLimitStock?i("span",[t._v(t._s(e.row.stock))]):i("span",[t._v("否")])]}}])}):"isFreeFreight"==e.type?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.isFreeFreight?i("span",[t._v("是")]):i("span",[t._v("否")])]}}])}):i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"}})]]})],2)],1),t._v(" "),i("div",{staticClass:"pagination-item"},[i("el-pagination",{attrs:{"current-page":t.pagingJoin.currentPage,"page-sizes":t.pagingJoin.pageSizes,"page-size":t.pagingJoin.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pagingJoin.total},on:{"size-change":t.handleJoinSizeChange,"current-change":t.handleJoinCurrentChange}})],1)]:t._e(),t._v(" "),i("div",{staticClass:"section-item"},["large"==t.detailCon.source?[1==t.activityDetailMsg.isAvailable&&1==t.getLargeAvailable(t.activityDetailMsg.applyStartTime,t.activityDetailMsg.applyEndTime,"opera")?i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.callAddProduct()}}},[t._v("新增商品")]):t._e()]:"daily"==t.detailCon.source?[1==t.activityDetailMsg.isAvailable?i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.callAddProduct()}}},[t._v("新增商品")]):t._e()]:t._e()],2),t._v(" "),t.submitProductList.length?i("div",{staticClass:"result-view"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.submitProductList}},[t._l(t.submitResultItem.option,function(e,a){return["left"==e.fixed?[i("el-table-column",{attrs:{fixed:"",prop:e.key,label:e.label,width:e.width,align:"center"}})]:"right"==e.fixed?["opera"==e.type?i("el-table-column",{attrs:{fixed:"right",width:e.width,label:e.label,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small"},on:{click:function(i){t.delSubmitProduct(e.row.sellerProductId)}}},[t._v("删除")])]}}])}):t._e()]:["activityWholesalePrice"==e.key?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{size:"small"},model:{value:t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]].activityWholesalePrice,callback:function(i){t.$set(t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]],"activityWholesalePrice",i)},expression:"submitProductList[mapSubmitProductId[scope.row.sellerProductId]].activityWholesalePrice"}})]}}])}):"isLimitStock"==e.key?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-radio",{staticClass:"radio",attrs:{label:"0"},model:{value:t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]].isLimitStock,callback:function(i){t.$set(t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]],"isLimitStock",i)},expression:"submitProductList[mapSubmitProductId[scope.row.sellerProductId]].isLimitStock"}},[t._v("否")]),t._v(" "),i("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]].isLimitStock,callback:function(i){t.$set(t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]],"isLimitStock",i)},expression:"submitProductList[mapSubmitProductId[scope.row.sellerProductId]].isLimitStock"}},[t._v("是")]),t._v(" "),1==t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]].isLimitStock?i("el-input",{staticStyle:{width:"50px"},attrs:{size:"small"},model:{value:t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]].stock,callback:function(i){t.$set(t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]],"stock",i)},expression:"submitProductList[mapSubmitProductId[scope.row.sellerProductId]].stock"}}):t._e()]}}])}):"isFreeFreight"==e.key?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]].isFreeFreight,callback:function(i){t.$set(t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]],"isFreeFreight",i)},expression:"submitProductList[mapSubmitProductId[scope.row.sellerProductId]].isFreeFreight"}},[t._v("是")]),t._v(" "),i("el-radio",{staticClass:"radio",attrs:{label:"0"},model:{value:t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]].isFreeFreight,callback:function(i){t.$set(t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]],"isFreeFreight",i)},expression:"submitProductList[mapSubmitProductId[scope.row.sellerProductId]].isFreeFreight"}},[t._v("否")])]}}])}):"applyRemark"==e.key?i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{size:"small"},model:{value:t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]].applyRemark,callback:function(i){t.$set(t.submitProductList[t.mapSubmitProductId[e.row.sellerProductId]],"applyRemark",i)},expression:"submitProductList[mapSubmitProductId[scope.row.sellerProductId]].applyRemark"}})]}}])}):i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"}})]]})],2)],1):t._e(),t._v(" "),t.submitProductList.length?i("div",{staticClass:"menu-center"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitProduct()}}},[t._v("提交")])],1):t._e(),t._v(" "),i("el-dialog",{staticClass:"product-panel",attrs:{size:"large",visible:t.productConfig.isShow},on:{"update:visible":function(e){t.$set(t.productConfig,"isShow",e)},close:function(e){t.cancelSelectProduct()}}},[i("div",{staticClass:"section"},[i("div",{staticClass:"section-item"},[i("div",[i("v-cate",{attrs:{categoryConfig:t.categoryConfig}})],1),t._v(" "),t._l(t.searchItem,function(e,a){return i("div",{staticClass:"inline-item"},[e.label?i("span",{staticClass:"sign-name-item"},[t._v(t._s(e.label)+"：")]):t._e(),t._v(" "),"input"==e.type?[e.width?i("el-input",{staticClass:"input-item-middle",style:"width:"+e.width+"px",attrs:{size:"small",placeholder:e.placeholder},model:{value:t.currentSearchQuery[e.key],callback:function(i){t.$set(t.currentSearchQuery,e.key,i)},expression:"currentSearchQuery[item.key]"}}):i("el-input",{staticClass:"input-item-middle",attrs:{size:"small",placeholder:e.placeholder},model:{value:t.currentSearchQuery[e.key],callback:function(i){t.$set(t.currentSearchQuery,e.key,i)},expression:"currentSearchQuery[item.key]"}})]:t._e(),t._v(" "),"select"==e.type?i("el-select",{staticClass:"input-item-middle",attrs:{size:"small",placeholder:e.placeholder},model:{value:t.currentSearchQuery[e.key],callback:function(i){t.$set(t.currentSearchQuery,e.key,i)},expression:"currentSearchQuery[item.key]"}},[t._l(e.options,function(t){return[i("el-option",{attrs:{label:t.label,value:t.value}})]})],2):t._e()],2)}),t._v(" "),i("div",{staticClass:"inline-item"},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.searchProduct()}}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:function(e){t.resetSearch()}}},[t._v("重置")])],1)],2),t._v(" "),i("div",{staticClass:"result-view"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.searchResult,height:"240"},on:{scroll:function(e){t.onScroll(e)}}},[t._l(t.resultItem.option,function(e,a){return["left"==e.fixed?[i("el-table-column",{attrs:{fixed:"",prop:e.key,label:e.label,width:e.width,align:"center"}})]:"right"==e.fixed?["opera"==e.type?i("el-table-column",{attrs:{width:e.width,label:e.label,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){t.selectProduct(e.row.id)}}},[t._v("选择")])]}}])}):t._e()]:[i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"}})]]})],2)],1),t._v(" "),i("div",{staticClass:"pagination-item"},[i("el-pagination",{attrs:{"current-page":t.paging.currentPage,"page-sizes":t.paging.pageSizes,"page-size":t.paging.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.paging.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),t.selectProductList.length?[i("div",{staticClass:"section-item"},[i("div",{staticClass:"inline-item"},[t._v("\n              已选择商品：\n            ")])]),t._v(" "),i("div",{staticClass:"result-view "},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.selectProductList,height:"240"}},[t._l(t.resultItem.option,function(e,a){return["left"==e.fixed?[i("el-table-column",{attrs:{fixed:"",prop:e.key,label:e.label,width:e.width,align:"center"}})]:"right"==e.fixed?["opera"==e.type?i("el-table-column",{attrs:{width:e.width,label:e.label,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small"},on:{click:function(i){t.delSelectProduct(e.row.id)}}},[t._v("删除")])]}}])}):t._e()]:[i("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"}})]]})],2)],1)]:t._e(),t._v(" "),i("div",{staticClass:"menu-center"},[t.selectProductList.length?i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.saveSelectProduct()}}},[t._v("保存")]):t._e(),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:function(e){t.cancelSelectProduct()}}},[t._v("取消")])],1)],2)])],2)])},staticRenderFns:[]};var n=i("VU/8")(r,o,!1,function(t){i("XH8A")},"data-v-4ed71060",null);e.default=n.exports},XH8A:function(t,e){}});
//# sourceMappingURL=40.bde15404e7e235840466.js.map