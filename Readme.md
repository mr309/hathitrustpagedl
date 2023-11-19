<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Hathi Trust Page Scraper Bookmarklet</h1>
    <div>Instructions: Create a new bookmark and add the contents of Scraper.js to the address box. When viewing a scanned page on Hathi Trust, click the bookmark to download a .png file of the current page. Only for fair use.</div>
    <p>
    <a href="javascript:(function()%7B(()%20%3D%3E%20%7B%0A%20%20%20%20var%20url%20%3D%20window.location.href%3B%0A%20%20%20%20var%20contentId%20%3D%20url.split(%2F%5B%3D%26%5D%2F)%5B1%5D%3B%0A%20%20%20%20var%20urlImgRoot%20%3D%20'https%3A%2F%2Fbabel.hathitrust.org%2Fcgi%2Fimgsrv%2Fimage%3Fid%3D'%3B%0A%20%20%20%20var%20pageNum%20%3D%20url.split('seq%3D')%5B1%5D%3B%0A%20%20%20%20var%20parameters%20%3D%20'size%3D300%3Brotation%3D0'%3B%0A%20%20%20%20var%20builtUrl%20%3D%20urlImgRoot%20%2B%20contentId%20%2B%20'%3B'%20%2B%20'seq%3D'%20%2B%20pageNum%20%2B%20'%3B'%20%2B%20parameters%3B%0A%20%20%20%20var%20fileName%20%3D%20pageNum%20%2B%20'.png'%3B%0A%20%20%20%20fetch(builtUrl%2C%20%7B%0A%20%20%20%20%20%20'headers'%3A%20%7B%0A%20%20%20%20%20%20%20%20'accept'%3A%20'*%2F*'%2C%0A%20%20%20%20%20%20%20%20'accept-language'%3A%20'en-US%2Cen%3Bq%3D0.9'%2C%0A%20%20%20%20%20%20%20%20'sec-ch-ua'%3A%20'%5C'%20Not%20A%3BBrand%5C'%3Bv%3D%5C'99%5C'%2C%20%5C'Chromium%5C'%3Bv%3D%5C'90%5C'%2C%20%5C'Google%20Chrome%5C'%3Bv%3D%5C'90%5C''%2C%0A%20%20%20%20%20%20%20%20'sec-ch-ua-mobile'%3A%20'%3F0'%2C%0A%20%20%20%20%20%20%20%20'sec-fetch-dest'%3A%20'empty'%2C%0A%20%20%20%20%20%20%20%20'sec-fetch-mode'%3A%20'cors'%2C%0A%20%20%20%20%20%20%20%20'sec-fetch-site'%3A%20'same-origin'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20'referrerPolicy'%3A%20'strict-origin-when-cross-origin'%2C%0A%20%20%20%20%20%20'body'%3A%20null%2C%0A%20%20%20%20%20%20'method'%3A%20'GET'%2C%0A%20%20%20%20%20%20'mode'%3A%20'cors'%2C%0A%20%20%20%20%20%20'credentials'%3A%20'include'%0A%20%20%20%20%7D).then(response%20%3D%3E%20response.blob())%0A%20%20%20%20%20%20.then(blob%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20var%20file%20%3D%20window.URL.createObjectURL(blob)%3B%0A%20%20%20%20%20%20%20%20var%20link%20%3D%20document.createElement('a')%3B%0A%20%20%20%20%20%20%20%20link.href%20%3D%20file%3B%0A%20%20%20%20%20%20%20%20link.download%20%3D%20fileName%3B%0A%20%20%20%20%20%20%20%20document.body.appendChild(link)%3B%0A%20%20%20%20%20%20%20%20link.click()%3B%0A%20%20%20%20%20%20%20%20document.body.removeChild(link)%3B%0A%20%20%20%20%20%20%20%20window.URL.revokeObjectURL(blob)%0A%20%20%20%20%7D)%0A%20%20%7D)()%7D)()%3B">bookmarklet</a></p>
    <br>
</body>
</html>
