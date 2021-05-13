import './styles.scss'

document.querySelectorAll('.card').forEach(element => {
  element.addEventListener('click', () => {
    element.classList.add('flipped')

  })
})
