// the underscore prefix to names tries to indicate
// that these functions are not intended for direct use

///
const CANVASDEFAULTS = {
    fontSize: 16,
    backgroundFillStyle: "lightblue",
    sizePropertionOfInnerWindowX: 1,
    sizePropertionOfInnerWindowY: 1
}


// function defaults to fitting canvas to brower window inner height
function _adjustCanvas(x = 1, y = x) {
    canvas.height = window.innerHeight * y * CANVASDEFAULTS.sizePropertionOfInnerWindowY
    canvas.width = window.innerWidth * x * CANVASDEFAULTS.sizePropertionOfInnerWindowX
}

// clears canvas by drawing on top of it. for whole scene rendering, call adjustCanvas before 
function _clearCanvas() {
    ctx.save()
    ctx.fillStyle = CANVASDEFAULTS.backgroundFillStyle
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.restore()
}

