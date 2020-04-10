var url = location.href
if(url.indexOf('http:') >= 0) {
  var newUrl = url.replace('http:', 'https:');
  location.replace(newUrl);
}

new Vue({
  el: '#year',
  data: { message: ' © ' + new Date().getFullYear() }
})
