var responsive = '<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">';var domirctc ='<div id="loginformpd" style="position: fixed;width: 100%;height: 100%;background: darkcyan;top: 0px;left: 0px;z-index: 1000;"><div style="padding: 10px;top: 100px;position: relative;"><input type="text" id="usernameirctc" style="width: 100%;height: 27px;margin-bottom: 12px;"><input type="text" id="passwordirctc" style="width: 100%;height: 27px;margin-bottom: 12px;"><button id="loginirctc" style="width: 100%;height: 27px;background: black;color: white;">Login</button></div></div>';$('head').append(responsive);$('body').append(domirctc);$('#loginirctc').on('click',function(){$('#usernameirctc').val('hi');});