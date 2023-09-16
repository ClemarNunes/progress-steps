const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1





next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})








prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

//após clicar em NEXT o currentActive vai valer 2, então após fazer um loop no forEach,
//ele irá aplicar nos itens que estão no index abaixo do valor 2( o index 0 que ja tem a class e o item 1 que não tem a class ainda)


function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    //se tivemos 2 actives  e dividir pela quantidade de circles(4) * 100
    //vai me retornar 50%, porém o que precisamos é apenas 33%,sendo assim,
    //cada clique que eu der, ele vai de 0% para 33%, depois 66% e depois 99%
    //após entender isso, levando o msm raciocinio, 2 actives -1 = 1 % 4 - 1 = 3 resultado:
    //1 / 3 = 0,3333333333 * 100 = 33.3333

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}