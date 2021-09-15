const allText = $('body').text()

document.addEventListener('DOMContentLoaded', function(event) {
    var replaceList = { 'á' : 'KK', 'é' : '&eacute;', 'í' : 'i', 'ó' : 'o', 'ú' : 'u' }
    return allText.replace(/[^a-z]/gi, function(c) {
        return replaceList[c]||c
      })
})