wxSearchBox README

License： MIT License

组件一览：
见文档最后。

组件功能：
一个输入框， 当用户输入部分文本时，根据配置的api url即时去后台查询匹配的列值，并将多个匹配结果以列表形式分页展现到输入框下方，当用户选择列表项时，根据选择项自动补全输入文本。

组件支持属性：
1. listtitle : 下拉列表的标题，缺省值为“列表”。
2. searchUrl: 约定的后台API， 必须指定。
3. pageCount: 每页显示的列表项个数，缺省值为5。

组件事件：
valueChangeEvent
事件参数：
e.detail.value，代表输入框中的最终文本值。

组件用法：
该组件基于weui, 所以使用前需要将weui.wxss加入项目根目录。（可以去https://github.com/Tencent/weui-wxss/下载）
下载Repository中的components到项目根目录即可。


1. 页面wxml文件中，示例如下：
&lt;searchbox  searchUrl="https://www.xxx.com/demoproject/querynames" bind:valueChangeEvent='onNameChange' /&gt;

2. 页面json文件中，示例如下：
{
  "usingComponents":{
    "searchbox": "/components/searchbox/searchbox"
  }
}

3. 页面js文件中,示例如下：
onNameChange: function(e){
    console.log(e.detail.value)
	//这里写具体的业务
},

4. 前后端API接口约定：
从searchbox.js中的searchToPage函数中可以得知request查询参数如下：
data:{
	key:***,
	offset:***,
	count:***,
	checkcode:***
}
请求方法为'GET', 后台逻辑拿到前三个参数就可以通过sql语句去具体的业务表中查询合理范围的记录并返回合理的列值了，返回的JSON格式要求如下：
{
[
   {
   id:***,
   nm:***
   },
   {
   id:***,
   nm:***
   },
   ...
]
}
其中的nm值将展现在列表中。

组件视觉效果：
![image](https://github.com/legendcastle/wxSearchBox/blob/master/readmeimgs/searchbox.jpg)

这是在我的班级群接龙小程序“班级之星”里的应用截图，这里打个广告，如果您是小学生的家长，经常被家长群的接龙困扰的话，不妨推荐用一用哦^_^

![image](https://github.com/legendcastle/wxSearchBox/blob/master/readmeimgs/cs.jpg)

![image](https://github.com/legendcastle/wxSearchBox/blob/master/readmeimgs/csbarcode.jpg)




