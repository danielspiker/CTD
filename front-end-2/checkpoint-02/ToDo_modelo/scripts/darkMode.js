let bodyRef = document.querySelector('body')

export default function darkMode() {
  bodyRef.classList.toggle('dark')
  let colorModeButtonRef = document.querySelector('.colorModeButton')
  if (bodyRef.classList.contains('dark')) {
    colorModeButtonRef.innerHTML = `<img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/ffffff/external-sun-vacations-flatart-icons-outline-flatarticons.png">`
  } else {
    colorModeButtonRef.innerHTML = `<img src="https://img.icons8.com/ios-filled/344/ffffff/moon-symbol.png" alt="">`
  }
}
