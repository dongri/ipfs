var url = location.href
if(url.indexOf('http:') >= 0) {
  var newUrl = url.replace('http:', 'https:');
  location.replace(newUrl);
}

document.getElementById('year').innerHTML = new Date().getFullYear()

const setTheme = (theme) => {
  if (theme === 'dark') {
    document.body.classList.add('dark')
    document.getElementById('theme').innerHTML = "🌙"
  } else if (theme === 'light') {
    document.body.classList.remove('dark')
    document.getElementById('theme').innerHTML = "🌞"
  } else {
    document.body.classList.remove('dark')
    document.getElementById('theme').innerHTML = "🧐"
  }
}

const userTheme = localStorage.getItem('theme')
if (userTheme) {
  setTheme(userTheme)
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

document.getElementById('theme').addEventListener('click', function() {
  const theme = document.body.classList.contains('dark') ? 'light' : 'dark'
  setTheme(theme)
  localStorage.setItem('theme', theme)
})
