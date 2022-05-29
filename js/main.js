/*=============== LINK ACTIVE ===============*/
const linkColor = document.querySelectorAll('.nav__link')


function colorLink() {
    linkColor.forEach( link => link.classList.remove('active-link') )
    this.classList.add('active-link')
}

linkColor.forEach( link => link.addEventListener('click', colorLink) )


/*=============== SHOW HIDDEN MENU ===============*/

const showMenu = ( toggleId, navbarId ) => {
    const toggle = document.getElementById(toggleId)
    const navbar = document.getElementById(navbarId)

    if( toggle && navbar ) {
        toggle.addEventListener('click', ()=> {

            /* show menu */
            navbar.classList.toggle('show-menu')

            /* Rotate toggle icon */
            toggle.classList.toggle('rotate-icon')
        })
    }
}

showMenu('nav__toggle', 'nav')