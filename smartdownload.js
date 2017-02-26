function smartDownload(url){
	var a = document.createElement('a');
	a.href = url;
	a.download = 'anything';
	a.click();
}

