var cServerFun = require("ServerFun").ServerFun; 
 
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
            gameServer = wx.getGameServerManager();

            
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

            var PromiseTemp = cc.GameServer.login(); 
            cc.ServerFun = new cServerFun;
            var onHideCallBack =function (resObj){       
                cc.ServerFun.playerNumUpdate(-1);

            }

            var onShowCallBack = function (resObj){     
                cc.ServerFun.playerNumUpdate(1);
 
            }

            wx.onHide(onHideCallBack)
            wx.onShow(onShowCallBack)

            cc.ServerFun.playerNumUpdate(1)


            var   gameRoomInfoChange = function (serverRes){
                console.log(" room info change ++++++++++++++++111  ")
                console.log(serverRes)
        
            }

            cc.GameServer.onRoomInfoChange(gameRoomInfoChange)
           
           

        }

    },
});

 module.exports = {GameSDK};