<template>
	<div class="addEdit-block" :style='{"padding":"0px 0px","margin":"0px auto 0 auto","borderColor":"#eee","overflow":"hidden","background":"#f6f6f6","borderWidth":"1px 0 0","width":"94%","position":"relative","borderStyle":"solid"}' style="width: 100%;">
		<el-form
			:style='{"minHeight":"calc(100vh - 260px)","padding":"30px  30px 20px 40px","boxShadow":"6px 6px 0px rgba(0,0,0,.1)","margin":"0px auto 0","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221202/3a1390c8b1c6477eab0f816fcf703030.png) no-repeat left top,url(http://codegen.caihongy.cn/20221202/5cd54f92f6ee487ca789e17939569264.png) no-repeat right bottom,#fff","display":"flex","justifyContent":"space-between","height":"100%"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="120px"
		>
			<template >
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'" label="订单编号" prop="dingdanbianhao">
					<el-input v-model="ruleForm.dingdanbianhao" placeholder="订单编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-else-if="ruleForm.dingdanbianhao" label="订单编号" prop="dingdanbianhao">
					<el-input v-model="ruleForm.dingdanbianhao" placeholder="订单编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="游戏编号" prop="youxibianhao">
					<el-input v-model="ruleForm.youxibianhao" placeholder="游戏编号" clearable  :readonly="ro.youxibianhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="游戏编号" prop="youxibianhao">
					<el-input v-model="ruleForm.youxibianhao" placeholder="游戏编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="游戏名称" prop="youximingcheng">
					<el-input v-model="ruleForm.youximingcheng" placeholder="游戏名称" clearable  :readonly="ro.youximingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="游戏名称" prop="youximingcheng">
					<el-input v-model="ruleForm.youximingcheng" placeholder="游戏名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="游戏类型" prop="youxileixing">
					<el-input v-model="ruleForm.youxileixing" placeholder="游戏类型" clearable  :readonly="ro.youxileixing"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="游戏类型" prop="youxileixing">
					<el-input v-model="ruleForm.youxileixing" placeholder="游戏类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="游戏厂商" prop="youxichangshang">
					<el-input v-model="ruleForm.youxichangshang" placeholder="游戏厂商" clearable  :readonly="ro.youxichangshang"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="游戏厂商" prop="youxichangshang">
					<el-input v-model="ruleForm.youxichangshang" placeholder="游戏厂商" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="游戏热度" prop="youxiredu">
					<el-input v-model="ruleForm.youxiredu" placeholder="游戏热度" clearable  :readonly="ro.youxiredu"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="游戏热度" prop="youxiredu">
					<el-input v-model="ruleForm.youxiredu" placeholder="游戏热度" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="单价" prop="danjia">
					<el-input v-model="ruleForm.danjia" placeholder="单价" clearable  :readonly="ro.danjia"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="单价" prop="danjia">
					<el-input v-model="ruleForm.danjia" placeholder="单价" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="date" v-if="type!='info'" label="下单时间" prop="xiadanshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.xiadanshijian" 
						type="datetime"
						:readonly="ro.xiadanshijian"
						placeholder="下单时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-else-if="ruleForm.xiadanshijian" label="下单时间" prop="xiadanshijian">
					<el-input v-model="ruleForm.xiadanshijian" placeholder="下单时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="用户电话" prop="yonghudianhua">
					<el-input v-model="ruleForm.yonghudianhua" placeholder="用户电话" clearable  :readonly="ro.yonghudianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="用户电话" prop="yonghudianhua">
					<el-input v-model="ruleForm.yonghudianhua" placeholder="用户电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="身份证号" prop="shenfenzhenghao">
					<el-input v-model="ruleForm.shenfenzhenghao" placeholder="身份证号" clearable  :readonly="ro.shenfenzhenghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="身份证号" prop="shenfenzhenghao">
					<el-input v-model="ruleForm.shenfenzhenghao" placeholder="身份证号" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"20px 0 0"}' class="btn">
				<el-button :style='{"border":"4px solid #18cfa5","cursor":"pointer","padding":"0 30px","margin":"0 20px 0 0","outline":"none","color":"#1fbfae","borderRadius":"0px","background":"#e9faf8","width":"auto","lineHeight":"40px","fontSize":"14px","height":"44px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"4px solid #dc333b","cursor":"pointer","padding":"0 30px","margin":"0","outline":"none","color":"#dc333b","borderRadius":"0px","background":"#fbeced","width":"auto","lineHeight":"40px","fontSize":"14px","height":"44px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"4px solid #dc333b","cursor":"pointer","padding":"0 30px","margin":"0","outline":"none","color":"#dc333b","borderRadius":"0px","background":"#fbeced","width":"auto","lineHeight":"40px","fontSize":"14px","height":"44px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				dingdanbianhao : false,
				youxibianhao : false,
				youximingcheng : false,
				youxileixing : false,
				youxichangshang : false,
				youxiredu : false,
				danjia : false,
				xiadanshijian : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				yonghudianhua : false,
				shenfenzhenghao : false,
				ispay : false,
			},
			
			
			ruleForm: {
				dingdanbianhao: this.getUUID(),
				youxibianhao: '',
				youximingcheng: '',
				youxileixing: '',
				youxichangshang: '',
				youxiredu: '',
				danjia: '',
				xiadanshijian: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				yonghudianhua: '',
				shenfenzhenghao: '',
			},
		
			
			rules: {
				dingdanbianhao: [
				],
				youxibianhao: [
				],
				youximingcheng: [
					{ required: true, message: '游戏名称不能为空', trigger: 'blur' },
				],
				youxileixing: [
					{ required: true, message: '游戏类型不能为空', trigger: 'blur' },
				],
				youxichangshang: [
				],
				youxiredu: [
					{ required: true, message: '游戏热度不能为空', trigger: 'blur' },
				],
				danjia: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				xiadanshijian: [
				],
				yonghuzhanghao: [
				],
				yonghuxingming: [
				],
				yonghudianhua: [
				],
				shenfenzhenghao: [
				],
				ispay: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
		this.ruleForm.xiadanshijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='dingdanbianhao'){
							this.ruleForm.dingdanbianhao = obj[o];
							this.ro.dingdanbianhao = true;
							continue;
						}
						if(o=='youxibianhao'){
							this.ruleForm.youxibianhao = obj[o];
							this.ro.youxibianhao = true;
							continue;
						}
						if(o=='youximingcheng'){
							this.ruleForm.youximingcheng = obj[o];
							this.ro.youximingcheng = true;
							continue;
						}
						if(o=='youxileixing'){
							this.ruleForm.youxileixing = obj[o];
							this.ro.youxileixing = true;
							continue;
						}
						if(o=='youxichangshang'){
							this.ruleForm.youxichangshang = obj[o];
							this.ro.youxichangshang = true;
							continue;
						}
						if(o=='youxiredu'){
							this.ruleForm.youxiredu = obj[o];
							this.ro.youxiredu = true;
							continue;
						}
						if(o=='danjia'){
							this.ruleForm.danjia = obj[o];
							this.ro.danjia = true;
							continue;
						}
						if(o=='xiadanshijian'){
							this.ruleForm.xiadanshijian = obj[o];
							this.ro.xiadanshijian = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
						if(o=='yonghudianhua'){
							this.ruleForm.yonghudianhua = obj[o];
							this.ro.yonghudianhua = true;
							continue;
						}
						if(o=='shenfenzhenghao'){
							this.ruleForm.shenfenzhenghao = obj[o];
							this.ro.shenfenzhenghao = true;
							continue;
						}
				}
				













			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
						this.ro.yonghuzhanghao = true;
					}
					if(((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuxingming = json.yonghuxingming
						this.ro.yonghuxingming = true;
					}
					if(((json.yonghudianhua!=''&&json.yonghudianhua) || json.yonghudianhua==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghudianhua = json.yonghudianhua
						this.ro.yonghudianhua = true;
					}
					if(((json.shenfenzhenghao!=''&&json.shenfenzhenghao) || json.shenfenzhenghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shenfenzhenghao = json.shenfenzhenghao
						this.ro.shenfenzhenghao = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `youxigoumai/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {



























var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "youxigoumai/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `youxigoumai/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.youxigoumaiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `youxigoumai/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.youxigoumaiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.youxigoumaiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  text-shadow: 0 1px 10px #fff;
	  	  color: #666;
	  	  background: none;
	  	  font-weight: 500;
	  	  display: block;
	  	  width: 120px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #999;
	  	  background: rgba(24,207,165,.1);
	  	  width: 400px;
	  	  font-size: 14px;
	  	  border-color: #18cfa5;
	  	  border-width: 4px;
	  	  border-style: solid;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #999;
	  	  background: rgba(24,207,165,.1);
	  	  width: 400px;
	  	  font-size: 14px;
	  	  border-color: #18cfa5;
	  	  border-width: 4px;
	  	  border-style: solid;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 0px solid #333;
	  	  padding: 0 10px 0 30px;
	  	  color: #999;
	  	  font-size: 14px;
	  	  border-color: #18cfa5;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  background: rgba(24,207,165,.1);
	  	  width: 400px;
	  	  border-width: 4px;
	  	  border-style: solid;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 4px solid #18cfa5;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: #18cfa5;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 4px solid #18cfa5;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: #18cfa5;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 4px solid #18cfa5;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: #18cfa5;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 4px solid #18cfa5;
	  	  border-radius: 0px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #999;
	  	  width: 500px;
	  	  font-size: 14px;
	  	  min-height: 120px;
	  	  height: auto;
	  	}
</style>
