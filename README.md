# 2017Baidu-IFE
2017Baidu-IFE

###糯米学院-网页抓取分析任务
一、抓取百度搜索结果<br />

下载**phantom**模块 -- http://phantomjs.org/ <br />

用法 ：`phantomjs task.js keyword`
<br />

ex ：`phantomjs task.js javascript`

结果：
```javascript
{
  "code": "1",
  "msg": "抓取成功",
  "word": "javascript",
  "time": 12658,
  "dataList": [
    {
      "info ": "JavaScript 是属于网络的脚本语言! JavaScript 被数百万计的网页用来改进设计、验 证表单、检测浏览器、创建cookies,以及更多的应用。 JavaScript 是因特网上最流行的.. .",
      "link": "http://www.baidu.com/link?url=s2DcM0UVCJIm_M-RqsotfGTE6xuGdjXsd4_Rdin qp1tJjCjSHDqaVJy9WVSGxZbc",
      "pic": "",
      "title": "JavaScript 教程"
    },
    {
      "info": "JavaScri pt 教程 JavaScript 是 Web 的编程语言。 所有现代的 HTML 页面都使用 JavaScript。 J avaScript 非常容易学。 本教程将教你学习从初级到高级JavaScript知识。 ...",
      "link": "http://www.baidu.com/link?url=pJLwuig60IYHeSSQeENqjxiPCMxmU9vFDL4effqpXewcObQjn RbybY9r0wzwf8u6JHF6bCSuLnkHzkwG4JgrTq",
      "pic": "",
      "title": "JavaScript 教程 | 菜鸟 教程"
    },
    {
      "info": "本部分提供完整的 JavaScript 参考手册: JavaScript 本地对象和内置 对象 Browser 对象(BOM) HTML DOM 对象JavaScript 对象参考手册 本参考手册描述每个对 象的属性和...",
      "link": "http://www.baidu.com/link?url=OvJkSa9q9XQEDnrI0c9M16hhQqG w-SY4IQW2Ahvwcl5ONuhW2Fu4DJW9H3MW75nb64Lu2GfstE124hTy0FsnYK",
      "pic": "",
      "title": "J avaScript 参考手册"
    },
    {
      "info": "JavaScript是一种基于对象和事件驱动并具有相对安全性 的客户端脚本语言。同时也是一种广泛用于客户端Web开发的脚本语言,常用来给HTML(标准 通用标记语言的子集)网页添加...",
      "link": "http://www.baidu.com/link?url=WpevNkqY4y lvKvsvz-aVVA8j7l5Qg8s-NDXyL_620FXVpkbThwa8HaWiyD_9oXyd",
      "pic": "",
      "title": "JavaSc ript-脚本之家"
    },
    {
      "info": "研究互联网产品和技术,提供原创中文精品教程... 这是小白的 零基础JavaScript全栈教程。 JavaScript是世界上最流行的脚本语言,因为你在电脑、手机 、平板上浏览的所有的网...",
      "link": "http://www.baidu.com/link?url=cdwjFOQdgADhpNw 2foL5ZMRtebV5E2Z-cBxkoeFmsAgNsBW5NKl-jfEekODYKEomoiiX6BISjZCqD8BU6Rt7eODShR7F7bn 4j8khOvL00NPrJiLca1gadI9bwfEzsSlY",
      "pic": "",
      "title": "JavaScript教程 - 廖雪峰的官 方网站"
    },
    {
      "info": "开源项目 国产开源项目 项目分类 最新收录项目 Java 开源软件 C# 开源软件 PHP 开源软件 C/C++ 开源软件 Ruby 开源软件 Python 开源软件 Go开源软件 JS 开源软件...",
      "link": "http://www.baidu.com/link?url=g0hta1_hyp06tnBy1wlQAy36UaAOY r2dBT9O-Fvq_jFJ-5cmpMaXBEg2CJmX_zQfIsle3NY7miNSUiO6-mIwGq",
      "pic": "https://ss0.ba idu.com/73F1bjeh1BF3odCf/it/u=1956332724,522448561&fm=85&s=20B155321FFC4D8C06F5F 9DA0200E0B2",
      "title": "JavaScript开源软件 - 开源中国社区"
    },
    {
      "info": "JavaScript中 文网是一家以JavaScript资源分享为主的专业网站,面向JavaScript爱好人员提供:最新Java Script资讯、原创内容、Ajax、jQuery、node.js及JavaScriptPDF等相关电子书...",
      "link ": "http://www.baidu.com/link?url=Gbsg_RnsZ57PuCZC4I4izzTui5QgfwOU8UPxwPPeikocUGM 0c2UDyzPvcViksRMm",
      "pic": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=95584070 ,2251064812&fm=58&s=0DA05D328F805D43424DB0C60000E0B3",
      "title": "Javascript中文网- Javascript教程资源分享门户"
    },
    {
      "info": "全球最大的中文 Web 技术教程。... JavaScrip t 对象实例 HTML DOM 实例 jQuery 实例 jQuery Mobile 实例 XML DOM 实例 DHTML 实例 AJAX 实例 VBScript 实例 ASP 实...",
      "link": "http://www.baidu.com/link?url=rKy6JW5 Z33vG0Npg_KUKXr1Ya8ExZOhlv5MY43uJdyXt_VqgZb2nMSoDBBADkNN3",
      "pic": "",
      "title": "w3s chool 在线教程"
    }
  ]
}
```
