toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    const navDark = document.querySelector('.navfile')
    const textDark = document.querySelector('.text')
    const navIconDark = document.querySelector('.icon')
    const dateCircleDark = document.querySelector('.date')
    const faqDark = document.querySelector('.faqfile')
    const buttonDark = document.querySelector('.buttonfile')
    const clockSecondDark = document.querySelector('.second')
    const clockMiddleDark = document.querySelector('.center-point')
    const faqButtonDark = document.querySelector('.faq.active')
    const infoButtonDark = document.querySelector('#info')
    console.log(faqButtonDark)

    
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        buttonDark.classList.remove('dark')
        navDark.classList.remove('dark')
        navIconDark.classList.remove('dark')
        textDark.classList.remove('dark')
        faqDark.classList.remove('dark')
        clockSecondDark.classList.remove('dark')
        clockMiddleDark.classList.remove('dark')
        dateCircleDark.classList.remove('dark')
        faqButtonDark.classList.remove('dark')
        infoButtonDark.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        navDark.classList.add('dark')
        buttonDark.classList.add('dark')
        navIconDark.classList.add('dark')
        faqDark.classList.remove('dark')
        textDark.classList.add('dark')
        clockSecondDark.classList.add('dark')
        clockMiddleDark.classList.add('dark')
        dateCircleDark.classList.add('dark')
        faqButtonDark.classList.add('dark')
        infoButtonDark.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})
