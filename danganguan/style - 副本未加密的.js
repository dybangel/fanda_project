		function show_loader(){
		mui('.mui-progressbar-infinite')[0].className="mui-progressbar mui-progressbar-infinite mybar";
		}
		function hidden_loader(){
		mui('.mui-progressbar-infinite')[0].className=" mui-progressbar-infinite mybar"
		}
		function return_main_menu(){
			show_loader();
			$.ajax( {
													        url: "nav_div.html", //这里是静态页的地址
													        type: "GET", //静态页用get方法，否则服务器会抛出405错误
													        success: function(data){
													            var result = $(data);//.find("另一个html页面的指定的一部分");
													            $("#div_c").html(result);
													            //console.log('return ok');
													           hidden_loader();
													        }
													});												
}

	function navtap(str){
//console.log(str);
			mui('body').on('tap','#'+str,function(){ 
				//点击按钮边框变白，这样在触摸屏加载页面缓冲时给用户以提示
			show_loader();	
			this.className=this.className+" nav_div_nei_click";
			
			$.ajax( {
					url: str+"_div.html", //这里是静态页的地址
					type: "GET", //静态页用get方法，否则服务器会抛出405错误
					success: function(data){
						            var result = $(data);//.find("另一个html页面的指定的一部分");
						            $("#div_c").html(result);
						     
						             hidden_loader();
									
									//给关闭按钮绑定事件,视频返回按钮
									if(str=='dmbdg'){
									//	console.log("dmbdg");
										mui('body').on('tap','#index',function(){
											return_main_menu();
											
										});
									}
												//如果是地图引导，则跳转到指定页面
									if(str=='dtyd'){
											
										return;
									}

									//详情返回按钮绑定事件 
										mui('body').on('tap','.close-content',function(){
											
													
													try{
														mui('div .show')[0].className="content";
															mui('div .show')[0].className="";
													 }catch(err){
													 	console.log(err);
													 }
										});	

										//给返回按钮绑定事件 包括黄色侧边栏
										mui('body').on('tap','.mynav',function(){
											this.className="mynav mynav_click";
											

										//ajax start
										return_main_menu();
													
										});	

											//给缩略图绑定打开详情事件
											mui('body').on('tap','img',function(){

												//取出被点击缩略图的src
												var src=this.src;
												//遍历详情div的src
												mui(".content img").each(function(){
													//如果缩略图src和div的src相同，则找到了对应
													if(src==this.src){
												this.parentNode.parentNode.className='show grid-wrap';
														this.parentNode.parentNode.parentNode.className='content show';
														return;
													}
												});
											});


						        } //sucess end
						});
			//ajax end
			

	 });

}