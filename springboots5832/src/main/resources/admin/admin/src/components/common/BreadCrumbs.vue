<template>
	<div class="breadcrumb-preview">
		<el-breadcrumb :style='{"padding":"0px 12px","overflow":"hidden","background":"url(http://codegen.caihongy.cn/20221202/07363a52ad104e948c27189c5b239799.png) no-repeat left top,url(http://codegen.caihongy.cn/20221202/3b33de8b383f488db9e8701a9d146029.png) no-repeat right top,#ea8501","display":"inline-block","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}' separator="Ξ">
			<transition-group name="breadcrumb" class="box">
				<el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
					<span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.name }}</span>
					<a v-else @click.prevent="handleLink(item)">{{ item.name }}</a>
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
import { generateTitle } from '@/utils/i18n'
export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      // only show routes with meta.title
      let route = this.$route
      let matched = route.matched.filter(item => item.meta)
      const first = matched[0]
      matched = [{ path: '/index' }].concat(matched)

      this.levelList = matched.filter(item => item.meta)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Index'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    },
  }
}
</script>

<style lang="scss" scoped>
	.el-breadcrumb {
		& /deep/ .el-breadcrumb__separator {
		  		  margin: 0 0px;
		  		  color: #fff;
		  		  font-weight: 500;
		  		}
		
		& /deep/ .el-breadcrumb__inner a {
		  		  color: #fff;
		  		  display: inline-block;
		  		}
		
		& /deep/ .el-breadcrumb__inner {
		  		  padding: 0 10px;
		  		  color: #fff;
		  		  display: inline-block;
		  		}
	}
</style>
