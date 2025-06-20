<template>
<div :style='{"width":"1200px","padding":"20px","margin":"0px auto","position":"relative","background":"none"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="游戏编号" prop="youxibianhao">
              <el-input v-model="ruleForm.youxibianhao" placeholder="游戏编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="游戏名称" prop="youximingcheng">
            <el-input v-model="ruleForm.youximingcheng" 
                placeholder="游戏名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}'  label="游戏类型" prop="youxileixing">
            <el-select v-model="ruleForm.youxileixing" placeholder="请选择游戏类型"  >
              <el-option
                  v-for="(item,index) in youxileixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="游戏封面" v-if="type!='cross' || (type=='cross' && !ro.youxifengmian)" prop="youxifengmian">
            <file-upload
            tip="点击上传游戏封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.youxifengmian?ruleForm.youxifengmian:''"
            @change="youxifengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' class="upload" v-else label="游戏封面" prop="youxifengmian">
                <img v-if="ruleForm.youxifengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.youxifengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.youxifengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="视频介绍" prop="shipinjieshao">
            <file-upload
            tip="点击上传视频介绍"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.shipinjieshao?ruleForm.shipinjieshao:''"
            @change="shipinjieshaoUploadChange"
            ></file-upload>
          </el-form-item> 
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="单价" prop="danjia">
            <el-input v-model="ruleForm.danjia" 
                placeholder="单价" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="游戏厂商" prop="youxichangshang">
            <el-input v-model="ruleForm.youxichangshang" 
                placeholder="游戏厂商" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="游戏热度" prop="youxiredu">
            <el-input v-model="ruleForm.youxiredu" 
                placeholder="游戏热度" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="更新时间" prop="gengxinshijian" >
              <el-date-picker
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.gengxinshijian" 
                  type="date"
                  placeholder="更新时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"border":"3px solid #c6ecc6","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="游戏详情" prop="youxixiangqing">
            <editor 
                :style='{"padding":"0","boxShadow":"0 0 6px rgba(75,223,201,.5)","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.youxixiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"cursor":"pointer","padding":"0","margin":"0 20px 0 0","borderColor":"#59b450","color":"#333","outline":"none","borderRadius":"4px","background":"#c6ecc6","borderWidth":"4px 0","width":"128px","fontSize":"14px","borderStyle":"solid","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"cursor":"pointer","padding":"0","margin":"0","borderColor":"#999999","color":"#333","outline":"none","borderRadius":"4px","background":"#dddddd","borderWidth":"4px 0","width":"128px","fontSize":"14px","borderStyle":"solid","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            youxibianhao : false,
            youximingcheng : false,
            youxileixing : false,
            youxifengmian : false,
            shipinjieshao : false,
            danjia : false,
            youxichangshang : false,
            youxiredu : false,
            youxixiangqing : false,
            gengxinshijian : false,
            clicktime : false,
            clicknum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          youxibianhao: this.getUUID(),
          youximingcheng: '',
          youxileixing: '',
          youxifengmian: '',
          shipinjieshao: '',
          danjia: '',
          youxichangshang: '',
          youxiredu: '',
          youxixiangqing: '',
          gengxinshijian: '',
          clicktime: '',
          clicknum: '',
        },
        youxileixingOptions: [],
        rules: {
          youxibianhao: [
          ],
          youximingcheng: [
            { required: true, message: '游戏名称不能为空', trigger: 'blur' },
          ],
          youxileixing: [
            { required: true, message: '游戏类型不能为空', trigger: 'blur' },
          ],
          youxifengmian: [
          ],
          shipinjieshao: [
          ],
          danjia: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          youxichangshang: [
          ],
          youxiredu: [
            { required: true, message: '游戏热度不能为空', trigger: 'blur' },
          ],
          youxixiangqing: [
          ],
          gengxinshijian: [
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
      };
    },
    computed: {



    },
    components: {
    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
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
            if(o=='youxifengmian'){
              this.ruleForm.youxifengmian = obj[o].split(",")[0];
              this.ro.youxifengmian = true;
              continue;
            }
            if(o=='shipinjieshao'){
              this.ruleForm.shipinjieshao = obj[o];
              this.ro.shipinjieshao = true;
              continue;
            }
            if(o=='danjia'){
              this.ruleForm.danjia = obj[o];
              this.ro.danjia = true;
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
            if(o=='youxixiangqing'){
              this.ruleForm.youxixiangqing = obj[o];
              this.ro.youxixiangqing = true;
              continue;
            }
            if(o=='gengxinshijian'){
              this.ruleForm.gengxinshijian = obj[o];
              this.ro.gengxinshijian = true;
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.$http.get('option/youxileixing/youxileixing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.youxileixingOptions = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('youxixinxi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('youxixinxi/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('youxixinxi/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('youxixinxi/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
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
        this.$router.go(-1);
      },
      youxifengmianUploadChange(fileUrls) {
          this.ruleForm.youxifengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      shipinjieshaoUploadChange(fileUrls) {
          this.ruleForm.shipinjieshao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #333;
	  background: #eff8ee;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #333;
	  background: #eff8ee;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #333;
	  background: #eff8ee;
	  width: 200px;
	  font-size: 14px;
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
	  border: 1px dashed #333;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  background: #eff8ee;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #333;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  background: #eff8ee;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #333;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  background: #eff8ee;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #333;
	  background: #eff8ee;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
