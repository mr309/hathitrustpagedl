javascript: (() => {
    var url = window.location.href;
    var contentId = url.split(/[=&]/)[1];
    var urlImgRoot = 'https://babel.hathitrust.org/cgi/imgsrv/image?id=';
    var pageNum = url.split('seq=')[1];
    var parameters = 'size=300;rotation=0';
    var builtUrl = urlImgRoot + contentId + ';' + 'seq=' + pageNum + ';' + parameters;
    var fileName = pageNum + '.png';
    fetch(builtUrl, {
      'headers': {
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'sec-ch-ua': '\' Not A;Brand\';v=\'99\', \'Chromium\';v=\'90\', \'Google Chrome\';v=\'90\'',
        'sec-ch-ua-mobile': '?0',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin'
      },
      'referrerPolicy': 'strict-origin-when-cross-origin',
      'body': null,
      'method': 'GET',
      'mode': 'cors',
      'credentials': 'include'
    }).then(response => response.blob())
      .then(blob => {
        var file = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = file;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blob)
    })
  })()