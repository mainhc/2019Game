
 
 var GameSDK = cc.Class({
    
    gameLogin(sucFun,failFun){
        if(typeof(wx) != "undefined"){ 
            if(typeof(wx.login)=="function"){
                var pself = this;
                wx.login({
                    success:function(res){
                        if(res.code){                            
                            if(res != null){
                                console.log(res);                                  
                                sucFun();
                            }else{
                                failFun();
                                console.log("+++++wx.login+++++fail");
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

    gameServerManager(){
       var gameServer = null;
       if(typeof(wx) != "undefined") 
       {
            gameServer = wx.getGameServerManager()
            wx.cloud.init({
                env: 'mygame-50545d',
                traceUser:true,
                // success:function(res){
                //     console.log("+++wx.cloud.init+++111");
                // }, 
            });

       }
       
       return gameServer
    }, 

    gameServerLogin(){
        if(typeof(wx) != "undefined"){
            var PromiseTemp = cc.GameServer.login() 
            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'gameLogin11',
                // 传递给云函数的参数
                data: {
                     login: 1,                    
                },
                success: res => {
                    // output: res.result === 3
                    console.log("login success")
                },
                fail: err => {
                    // handle error
                },
                complete: () => {
                    // ...
                }
              })
           

        }

    },
});

 module.exports = {GameSDK};