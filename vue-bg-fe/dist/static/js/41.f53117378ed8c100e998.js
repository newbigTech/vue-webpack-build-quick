webpackJsonp([41],{"8oux":function(t,e){},KiEN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),l=a.n(i),r=a("75Vn"),s=a("jKIa"),n=a("NYxO"),c={created:function(){},data:function(){return{cateUpdate:!0,categoryConfig:{type:"search",label:{items:["一级分类：","二级分类：","三级分类："]},mapModel:[{key:"levelOne"},{key:"levelTwo"},{key:"levelThree"}]}}},computed:l()({},Object(n.d)(["loginCheck","currentSearch","currentSearchQuery"])),methods:{},components:{vItem:r.a,vCate:s.a}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-item"},[e("div",{staticClass:"search-item"},[e("v-cate",{attrs:{categoryConfig:this.categoryConfig}}),this._v(" "),e("v-item")],1)])},staticRenderFns:[]};var u=a("VU/8")(c,o,!1,function(t){a("8oux")},"data-v-468d9d6e",null).exports,d=a("j+MX"),h={computed:l()({},Object(n.d)(["currentSearch","currentSearchQuery"])),components:{vMenu:d.a},methods:l()({},Object(n.b)(["setCurrentSearchQuery","setClearSelect","exportProductList"]),{reset:function(){var t=Util.resetQuery(this.currentSearch.searchList.public,this.currentSearch.searchList.private);this.setCurrentSearchQuery(t),this.setClearSelect({isClear:!0})},toExport:function(){var t={};for(var e in this.currentSearchQuery)this.currentSearchQuery[e]&&"all"!=this.currentSearchQuery[e]&&(t[e]=this.currentSearchQuery[e]);this.exportProductList(t)}})},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-item section-item-no-padding"},[a("div",{staticClass:"menu-item"},[a("v-menu"),t._v(" "),t._l(t.currentSearch.searchMenu.private,function(e,i){return a("div",{staticClass:"inline-item"},["export"==e.type?a("el-button",{attrs:{type:e.style},on:{click:function(e){t.toExport()}}},[t._v(t._s(e.label))]):"reset"==e.type?a("el-button",{attrs:{type:e.style},on:{click:function(e){t.reset()}}},[t._v(t._s(e.label))]):t._e()],1)})],2)])},staticRenderFns:[]},y=a("VU/8")(h,p,!1,null,null,null).exports,b=a("tKaV"),v={created:function(){},mounted:function(){this.initView()},data:function(){return{modal:{isShow:!1,stock:0,productId:""},productStatus:["","未审核","审核中","审核未通过","审核通过"],salesStatus:["未出售","出售中"],tableList:[],pagingShow:!1,paging:{currentPage:1,pageSizes:[20,30,50,100],pageSize:0,total:0,query:{}},loading:!0,productIdx:""}},computed:l()({},Object(n.d)(["currentSearch","currentSearchQuery","isFreeze"])),methods:l()({},Object(n.b)(["setCurrentSearchQuery","getProductList","setProductStock","productAudit","productRevokeAudit"]),{initView:function(){var t=this;this.loading=!0,this.pagingShow=!1;var e=this.$route.query;this.currentSearchOption=Util.searchQuery(e,this.currentSearch.searchList.public,this.currentSearch.searchList.private),this.setCurrentSearchQuery(this.currentSearchOption),this.getProductList(this.currentSearchQuery).then(function(e){t.pagingShow=!0,t.setList(e)})},setList:function(t){this.tableList=t.rows,this.loading=!1,this.paging.pageSize=Number(this.currentSearchQuery.rows),this.paging.currentPage=Number(this.currentSearchQuery.page),this.paging.total=t.total,this.paging.query=this.currentSearchQuery},tableRowClassName:function(t,e){return e%2==1?"info-row":"positive-row"},toDetail:function(t){this.$router.push({path:"/product/edit",query:{productId:t,type:"edit"}})},submitAudit:function(t,e){var a=this,i={sellerProductId:t};this.$confirm("是否确认提交审核？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){a.productAudit(i).then(function(){a.tableList[e].status=2})}).catch(function(){})},revokeAudit:function(t,e){var a=this,i={sellerProductId:t};this.$confirm("是否确认撤回审核？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){a.productRevokeAudit(i).then(function(){a.tableList[e].status=1})}).catch(function(){})},changeStock:function(t,e,a){this.productIdx=a,this.modal.stock=e,this.modal.productId=t,this.modal.isShow=!0},cancelModal:function(){this.modal.isShow=!1,this.modal.stock=0,this.modal.productId="",this.productIdx=""},submitModal:function(){var t=this,e={sellerProductId:this.modal.productId,stock:this.modal.stock};this.setProductStock(e).then(function(){t.cancelModal(),t.initView()})}}),components:{vPagination:b.a},watch:{$route:function(t,e){t.fullPath!==e.fullPath&&this.initView()}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-item section-item-no-padding"},[a("div",{staticClass:"result-view"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中",data:t.tableList,"row-class-name":t.tableRowClassName}},[t._l(t.currentSearch.resultItem.option,function(e,i){return["left"==e.fixed?[a("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"}})]:"right"==e.fixed?["opera"!=e.type||t.isFreeze?t._e():a("el-table-column",{attrs:{width:e.width,label:e.label,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(t.currentSearch.resultItem.opera.items,function(i,l){return["toDetail"==i.type?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.toDetail(e.row[i.key])}}},[t._v(t._s(i.label))]):t._e(),t._v(" "),"status"==i.type&&"1"==e.row[i.key]?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.submitAudit(e.row.id,e.$index)}}},[t._v("提交审核")]):t._e(),t._v(" "),"status"==i.type&&"4"==e.row[i.key]?a("el-button",{attrs:{size:"small"},on:{click:function(a){t.changeStock(e.row.id,e.row.surplusStock,e.$index)}}},[t._v("调整库存")]):t._e()]})]}}])})]:["image"==e.type?a("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"el-table-image"},[a("img",{attrs:{src:t.row[e.key],alt:""}})])]}}])}):"title"==e.type?a("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("div",{staticClass:"pd-t-h pd-b-h txt-l"},[a("p",[t._v(t._s(i.row[e.key]))]),t._v(" "),a("p",{staticClass:"mg-t-h"},[t._v("商品编码："+t._s(i.row.barcode))])])]}}])}):"status"==e.type?a("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticClass:"el-table-title"},[t._v("\n                "+t._s(t.productStatus[i.row[e.key]])+"\n              ")])]}}])}):"saleStatus"==e.type?a("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticClass:"el-table-title"},[t._v("\n                "+t._s(t.salesStatus[i.row[e.key]])+"\n              ")])]}}])}):a("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"}})]]})],2),t._v(" "),t.pagingShow?a("v-pagination",{attrs:{paging:t.paging}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{size:"tiny",title:"库存调整",visible:t.modal.isShow},on:{"update:visible":function(e){t.$set(t.modal,"isShow",e)}}},[a("div",{staticStyle:{"text-align":"center"}},[a("el-input-number",{attrs:{min:1},model:{value:t.modal.stock,callback:function(e){t.$set(t.modal,"stock",e)},expression:"modal.stock"}})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.cancelModal()}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitModal()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]},f=a("VU/8")(v,m,!1,null,null,null).exports,S={name:"productSearch",created:function(){this.initSearch()},computed:l()({},Object(n.d)(["currentSearch","isFreeze"])),data:function(){return{productSearch:{searchList:{public:[{type:"",key:"page",intKey:1},{type:"",key:"rows",intKey:20},{type:"",key:"levelOne"},{type:"",key:"levelTwo"},{type:"",key:"levelThree"},{type:"select",label:"审核状态",placeholder:"请选择",key:"status",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"1",label:"未审核"},{value:"2",label:"审核中"},{value:"3",label:"审核未通过"},{value:"4",label:"审核通过"}]},{type:"select",label:"出售状态",placeholder:"请选择",key:"saleStatus",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"0",label:"未出售"},{value:"1",label:"出售中"}]},{type:"input",label:"商品ID",placeholder:"请输入商品ID",key:"id"},{type:"input",label:"商品条码",placeholder:"请输入商品条码",key:"barcode"},{type:"input",label:"商品名称",placeholder:"请输入商品名称",key:"name",width:"323.5"}],private:[]},searchMenu:{public:[{label:"查询",style:"primary",type:"submit"}],private:[{label:"导出",type:"export"},{label:"重置",type:"reset"}]},resultItem:{option:[{fixed:"left",label:"商品ID",key:"id",width:"60"},{label:"商品主图",key:"image1",type:"image",width:"120"},{label:"商品名称",key:"name",type:"title",width:""},{label:"销售状态",key:"saleStatus",type:"saleStatus",width:"80"},{label:"审核状态",key:"status",type:"status",width:"80"},{label:"销量",key:"salesCount",width:"80"},{label:"总库存",key:"allStock",width:"80"},{label:"锁定库存",key:"lockStock",width:"80"},{label:"剩余库存",key:"surplusStock",width:"80"},{fixed:"right",type:"opera",label:"操作",width:"140"}],opera:{items:[{type:"toDetail",label:"编辑",key:"id"},{type:"status",key:"status"}]}}}}},methods:l()({},Object(n.b)(["setSearch"]),{initSearch:function(){this.setSearch(this.productSearch)},editProduct:function(){this.$router.push({path:"/product/edit"})}}),components:{vSearchItem:u,vSearchMenu:y,vSearchResult:f}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"title"},[a("span",[t._v("商品管理")]),t._v(" "),a("div",{staticClass:"fl-r pd-r"},[t.isFreeze?t._e():a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.editProduct()}}},[t._v("新建商品")])],1)]),t._v(" "),a("div",{staticClass:"section"},[a("v-search-item"),t._v(" "),a("v-search-menu"),t._v(" "),a("v-search-result")],1)])},staticRenderFns:[]},g=a("VU/8")(S,k,!1,null,null,null);e.default=g.exports}});
//# sourceMappingURL=41.f53117378ed8c100e998.js.map