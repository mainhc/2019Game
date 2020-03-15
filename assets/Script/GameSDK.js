 var GameSDK = cc.Class({
    gameLogin(sucFun,failFun){
        if(typeof(wx) != "undefined"){ 
            if(typeof(wx.login)=="function"){
                var pself = this;
                wx.login({
                    success:function(res){
                        if(res.code){  
                            var resFun = function(res){
                                if(res != null){
                                    console.log(res);                                  
                                    sucFun();
                                }else{
                                    failFun();
                                    console.log("+++++wx.login+++++fail");
                                }
                            }                   
                        }
                    }
                });
            }
        }else{
            //其他登陆默认成功
            sucFun();
        }
    },
});

 module.exports = {GameSDK};