<template>
<div class="content" :style='{"minHeight":"calc(100vh - 260px)","padding":"30px","boxShadow":"6px 6px 0px rgba(0,0,0,.1)","margin":"0px auto 0","borderColor":"#eee","background":"rgba(255,255,255,1)","borderWidth":"1px 0 0","width":"94%","borderStyle":"solid"}'>
	<div class="text" :style='{"margin":"10px auto 30px","color":"#18cfa5","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221202/b565c7346c504cbcb5b87b600cf48a60.png) no-repeat center center","fontSize":"32px","lineHeight":"600px","fontWeight":"bold","height":"600px"}'>欢迎使用 {{this.$project.projectName}}</div>
</div>
</template>
<script>
//0
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
		};
	},
  mounted(){
    this.init();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
