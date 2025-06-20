export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除"],"menu":"科普知识","menuJump":"列表","tableName":"kepuzhishi"}],"menu":"科普知识管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"游戏攻略","menuJump":"列表","tableName":"youxigonglve"}],"menu":"游戏攻略管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"游戏信息","menuJump":"列表","tableName":"youxixinxi"}],"menu":"游戏信息管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"游戏类型","menuJump":"列表","tableName":"youxileixing"}],"menu":"游戏类型管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除","发货"],"menu":"游戏购买","menuJump":"列表","tableName":"youxigoumai"}],"menu":"游戏购买管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"游戏发货","menuJump":"列表","tableName":"youxifahuo"}],"menu":"游戏发货管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"游戏资讯","tableName":"news"},{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-form","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"科普知识列表","menuJump":"列表","tableName":"kepuzhishi"}],"menu":"科普知识模块"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"游戏攻略列表","menuJump":"列表","tableName":"youxigonglve"}],"menu":"游戏攻略模块"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","购买"],"menu":"游戏信息列表","menuJump":"列表","tableName":"youxixinxi"}],"menu":"游戏信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","支付"],"menu":"游戏购买","menuJump":"列表","tableName":"youxigoumai"}],"menu":"游戏购买管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"游戏发货","menuJump":"列表","tableName":"youxifahuo"}],"menu":"游戏发货管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看"],"menu":"我的收藏管理","menuJump":"1","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"科普知识列表","menuJump":"列表","tableName":"kepuzhishi"}],"menu":"科普知识模块"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"游戏攻略列表","menuJump":"列表","tableName":"youxigonglve"}],"menu":"游戏攻略模块"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","购买"],"menu":"游戏信息列表","menuJump":"列表","tableName":"youxixinxi"}],"menu":"游戏信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
