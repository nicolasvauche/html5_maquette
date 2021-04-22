document.addEventListener('DOMContentLoaded', () => {
  // Change navigation bgcolor on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 580) {
      document.querySelector('body').setAttribute('class', 'scrolled')
    } else {
      document.querySelector('body').removeAttribute('class')
    }
  })

  // Validate contact form
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault()

    const nameInput = document.getElementById('nameInput')
    const emailInput = document.getElementById('emailInput')
    const messageInput = document.getElementById('messageInput')

    console.log(nameInput.value, emailInput.value, messageInput.value)
    return false
  })
})
