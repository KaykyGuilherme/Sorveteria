const menu__mobile = document.querySelector(".menu__mobile")
const nav__all = document.querySelector(".nav__all")

menu__mobile.addEventListener("click", () =>{
    nav__all.classList.toggle("active")
})

const heartALL = document.querySelectorAll(".heart")

heartALL.forEach((elemento) =>{
    elemento.addEventListener("click", () => {
        elemento.classList.toggle("active")
    })
})

// ==================

const card__quem__somosALL = document.querySelectorAll(".card__quem__somos");

card__quem__somosALL.forEach((elemento) =>{
    elemento.addEventListener('click', () =>{
        elemento.classList.toggle("flip__quem__somos")
    })
})

// ==================

const oberservandoALL = document.querySelectorAll(".oberservando")

const oberservador = new IntersectionObserver((elemento) =>{
    elemento.forEach((separador) =>{
       if(separador.isIntersecting){
        separador.target.classList.add("visto")
       }
    })
})

oberservandoALL.forEach((separador) =>{
    oberservador.observe(separador)
})