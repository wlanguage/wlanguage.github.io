window.addEventListener('load', () => {
    const containerElem = document.querySelector('.container')
    const year = new Date().getFullYear()

    // Menu
    const menuElem = document.createElement('header')
    menuElem.classList.add('menu')
    menuElem.innerHTML = /* html */ `
    <div class="logo">W</div>
    <div>Programming<br />Language 🐺</div>
    <br />
    <a href="./index.html">[Home]</a>
    `
    containerElem.prepend(menuElem)

    // Footer
    const footerElem = document.createElement('footer')
    footerElem.classList.add('footer')
    footerElem.innerHTML = /* html */ `
    <p class="copyright">Copyright ©︎ ${year} <a href="./higashi/index.html">Higashi</a></p>
    `
    document.body.appendChild(footerElem)
})
