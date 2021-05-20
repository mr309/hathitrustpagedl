<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Hathi Trust Page Scraper Bookmarklet</h1>
    <div>Instructions: Create a new bookmark and add the contents of Scraper.js to the address box. When viewing a scanned page on Hathi Trust, click the bookmark to download a .png file of the current page.</div>
    <br>
    (HathiTrust Page Download)[javascript:(()=>{var url=window.location.href;var contentId=url.split(/[=&]/)[1];var urlImgRoot='https://babel.hathitrust.org/cgi/imgsrv/image?id=';var pageNum=url.split('seq=')[1];var parameters='size=300;rotation=0';var builtUrl=urlImgRoot+contentId+';'+'seq='+pageNum+';'+parameters;var fileName=pageNum+'.png';fetch(builtUrl,{'headers':{'accept':'*/*','accept-language':'en-US,en;q=0.9','sec-ch-ua':'\' Not A;Brand\';v=\'99\', \'Chromium\';v=\'90\', \'Google Chrome\';v=\'90\'','sec-ch-ua-mobile':'?0','sec-fetch-dest':'empty','sec-fetch-mode':'cors','sec-fetch-site':'same-origin'},'referrerPolicy':'strict-origin-when-cross-origin','body':null,'method':'GET','mode':'cors','credentials':'include'}).then(response=>response.blob()).then(blob=>{var file=window.URL.createObjectURL(blob);const link=document.createElement('a');link.href=file;link.download=fileName;document.body.appendChild(link);link.click();document.body.removeChild(link);window.URL.revokeObjectURL(blob)})})()]
</body>
</html>
