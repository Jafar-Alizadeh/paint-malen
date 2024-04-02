const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const brushWidth = document.querySelector('#brush-width')
const brushcolor = document.querySelector('#color-picker')
const brush = document.querySelector('.brush')
const areaser = document.querySelector('.areaser')
const clearBtn = document.querySelector('.clear')
const saveBtn = document.querySelector('.save')

let isDrawing = false
let currentWidth = 5
let currenColor = ''
window.addEventListener('load', ()=>{
    canvas.width=canvas.offsetWidth
    canvas.height=canvas.offsetHeight
    ctx.fillStyle='white'
    ctx.fillRect(0, 0,canvas.width,canvas.height)
})
function startDraw() {
    isDrawing = true
    ctx.beginPath()
    ctx.lineWidth = currentWidth
}
function drawing (e) {
    if (!isDrawing) return
    ctx.lineTo(e.offsetX  ,  e.offsetY)
    ctx.strokeStyle=`${currenColor}`
    ctx.stroke()
}
function endDraw() {
    isDrawing = false
}
canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', endDraw)

brushWidth.addEventListener('change' , ()=>{
    currentWidth = brushWidth.value
})

brushcolor.addEventListener('change' , ()=>{
    currenColor = brushcolor.value
})

areaser.addEventListener('click', ()=>{
    areaser.classList.add('active')
    brush.classList.remove('active')
    currenColor= 'white'
})

brush.addEventListener('click', ()=>{

    brush.classList.add('active')
    areaser.classList.remove('active')
    currenColor.brushcolor.value
})

clearBtn.addEventListener('click', () =>{
    ctx.fillRect(0, 0,canvas.width,canvas.height)
})

saveBtn.addEventListener('click', () => {
    let link = document.createElement('a')
    link.download = `${Date.now()}.jpg`
    link.href = canvas.toDataURL()// Hier können Sie das Bild oder den Inhalt festlegen, der heruntergeladen werden soll
    link.click() // Klicken Sie auf das <a> Element, um den Download auszulösen
    
})