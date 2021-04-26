// the underscore prefix to names tries to indicate
// that these functions are not intended for direct use

// Note for creation of renderable types; types must have a field that is a function called 'render'
// It is advised to hook into the GameObject class or at least the Transform2D class
// If you don't hook into the GameObject structure, you need to figure out your own way of updating your renderable
// (if you hook into the GameObject structure, simply supply the renderable the gameobject.sprite 
// - and update the gameobject.transform to adjust renderable )
//


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
