## 目的
为了在chrome的console环境下更方便灵活的下载自己想要的文件

## JavaScript版本
  * 用法：将smartdownload.js文件中的smartdownload函数复制进console，然后传入想要下载的资源的url   
      

```	
function smartDownload(url){
	var a = document.createElement('a');
	a.href = url;
	a.download = 'anything';
	a.click();
}

smartDownload('https://doc-08-b4-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/7cet75f8s4l6i8chg8o6bvpue92g2slv/1487923200000/08194080062508406917/*/0B0jH18Lft7ypSmRjdWg1c082Y2M');
```         

