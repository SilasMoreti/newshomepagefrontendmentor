function openMenu() {

    let menu = document.getElementById('menu')
    let open = document.getElementById('responsive-menu')
    let closed = document.getElementById('responsive-menu-closed')

    if (menu.style.display == 'none') {
        menu.style.display = 'block'
        open.style.display = 'none'
        closed.style.display = 'block'
        
    } else {
        menu.style.display = 'none'
    }

}

function closedMenu() {

    let menu = document.getElementById('menu')
    let open = document.getElementById('responsive-menu')
    let closed = document.getElementById('responsive-menu-closed')

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        closed.style.display = 'none'
        open.style.display = 'block'
    }
}