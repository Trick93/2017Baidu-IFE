var page = require('webpage').create(),
	system = require('system'),
	baseurl = "https://www.baidu.com/s?wd=",
	keyword;

if(system.args.length === 1){
	console.log('Try to pass some arguments when invoking this script!');
	phantom.exit();
}
phantom.outputEncoding="gb2312"
keyword = system.args[1];
baseurl +=  keyword;
page.open(baseurl,function(status){
	console.log('Status: ' + status);
	if(status !== 'success'){
		console.log("FAIL to load the address");
	} else{
		page.includeJs("http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js",function(){
			var data = page.evaluate(function(){
				var cc = [];
				var result = $("#content_left").find(".result");
					for(var i=0; i<result.length; i++){
						var title = result.eq(i).find("h3").find("a").eq(0).text();
						var info = result.eq(i).find(".c-abstract").text();
						var href = result.eq(i).find("h3").find("a").eq(0).attr("href");
						if(result.eq(i).find(".c-img")){
							var src = result.eq(i).find(".c-img").attr("src");
						}
						else{
							var src = "";
						}
						aa = {"title":title,"info":info,"href":href,"src":src};
						cc.push(aa)
					}
				return JSON.stringify(cc);
			});
			console.log(data);
			phantom.exit();
		});
	}
});
