const base = {
    get() {
        return {
            url : "http://localhost:8080/springboots5832/",
            name: "springboots5832",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboots5832/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "热门网游推荐网站的设计与开发"
        } 
    }
}
export default base
