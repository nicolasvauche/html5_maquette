document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling assistance for Safari / IOS
  zenscroll.setup(1000, 0)
  const navigationLinks = document.querySelectorAll(
    '#appNavigation > ul > li > a'
  )
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', e => {
      if (navigationLinks[i].getAttribute('href') !== './') {
        e.preventDefault()
        const targetId = navigationLinks[i]
          .getAttribute('href')
          .replace('./#', '')
        const targetElement = document.getElementById(targetId)
        zenscroll.to(targetElement, 200)
      }
    })
  }

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
