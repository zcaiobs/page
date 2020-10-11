const toggle = document.getElementById('checkbox-menu')
const navbar = document.getElementById('navbar')
const closeToggle = document.querySelectorAll('a')


closeToggle.forEach(item => {
    item.addEventListener('click', () => {
        toggle.checked = false
        navbar.classList.remove('is-active')
    })
})

toggle.addEventListener('click', () => {
    navbar.classList.toggle('is-active')
})

// window.addEventListener('mousewheel', () => {
//     console.log(this.pageYOffset)
// })

const produtos = []

const addProd = add => {
    let i = 0
    do {
        add.push(`<h1>produto${i}</h1>`)
        i++
    } while( i < 15 ) 
}

addProd(produtos)

const showPosts = document.getElementById('posts')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let min = 0
let max = 5

next.addEventListener('click', () => {
    if ( produtos.length > max ) {
        produtos.length / 5 < 1 ? min = 0 : min += 5
        max < 5 ? max = produtos.length : max += 5
        showPosts.innerHTML = ''
        produtos.slice(min, max).forEach(post => {
            showPosts.innerHTML += post
        })
    } 
    if ( max >= produtos.length ) {
        next.disabled = true
    }
    prev.disabled = false
})

prev.addEventListener('click', () => {
    if ( max > 5) {
        min <= 5 ? min = 0 : min -= 5
        max < 5 ? max = produtos.length : max -= 5
        showPosts.innerHTML = ''
        produtos.slice(min, max).forEach(post => {
            showPosts.innerHTML += post
        })
        next.disabled = false
    } 
    if ( min == 0 ) {
        prev.disabled = true
    }  
})

console.log(min, max)

produtos.slice(min, max).forEach(post => {
    showPosts.innerHTML += post
    prev.disabled = true
})
