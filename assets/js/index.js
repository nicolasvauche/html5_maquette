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
  const formElement = document.getElementById('contactForm')
  formElement.addEventListener('submit', e => {
    e.preventDefault()

    const nameInput = document.getElementById('nameInput')
    const emailInput = document.getElementById('emailInput')
    const messageInput = document.getElementById('messageInput')

    const feedbackForm = document.createElement('p')
    feedbackForm.classList.add('success')
    const feedbackFormText = document.createTextNode('Merci ;)')
    feedbackForm.appendChild(feedbackFormText)
    formElement.appendChild(feedbackForm)

    document.getElementById('submitContactForm').setAttribute('disabled', true)

    console.log(nameInput.value, emailInput.value, messageInput.value)
    return false
  })
})
