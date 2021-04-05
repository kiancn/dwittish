let x // 2D canvas context
let c // canvas

let ctx

let mX = 0 // last mouse x coordinate
let mY = 0 // last mouse y coordinate

const clr = _clearCanvas

//const SCENEMANAGER = new SceneManager()

const S = Math.sin
const C = Math.cos
const T = Math.tan

const lE = Math.log
const l2 = Math.log2
const l10 = Math.log10
const pi2 = Math.pi * 2

let draw = true

function R(r = 0, g = 0, b = 0, a = 1) {
    return "rgba(" + r.toString() + "," + g.toString() + "," + b.toString() + "," + a.toString() + ")"
}


userCodeExamples = [
    "for(i=2e3,X=d=0,y=460+t*60;i--;y+=C(d+=S(i**8))*3){\n" +
    "x.fillRect(X+=C(d)+2+T(t/2)/9,y/2,2/(1+t),t<100)\n" +
    "x.fillRect(t*i*y%2e3,y-T(t/4)*i*t-200,.5,t<4)\n" +
    "}",
    "for (i = 12500; i--; x.fillRect(X, Y, 10, 1000)) {\n" +
    "X = i % 1024 * 11, Y = (i - X)\n" +
    " x.fillStyle = R(127 + 235 * (C(X / 20 + t + S(2 * t + Y / 7)) * C(-t / 2.1 + X / 9 + Y / 14)))\n" +
    "}",
    "clr();\n"+
    "x.font = '60pt Calibri'\n"+
    "x.fillStyle=R(0,0,0)\n"+
    "for (i = 0; i < 9; i++){\n"+
    "x.beginPath();\n"+
    "x.arc(i*100-S(t*i)*60+90, S(t)*75+200+i*50-S(t*i), 50, 0, 2 * Math.PI);\n"+
    "x.fill();\n"+
    "x.fillText('Trunky Brewster',650+C(t*i)*100,350+S(t*i)*100)\n"+
    "x.fillStyle = R(S(t)*60,C(t/i)*56,C(t)*65)\n"+
    "}",

    "for(i=3e3;--i;x.fillRect(460+9*X*T(Y),-9*X*S(Y)+750,w=i/2**t,w))f=i*t,X=f*f%200,Y=X*f%4,x.fillStyle=R(q=i*(X**.3+Y<<2),q%T(X>>3)*i,q**.5,.1)",
    "c.width=2e3;x.fillRect(0,0,2e4,2e5);for(i=8e3;i--;){x.fillStyle=`#db0`;x.fillRect(990+S(i*1)*C(t/i*6)*850,580+S(i*2)*~T(t+i)*490,4,5)}"
]

function update() {
    u(HEART.timeSinceStart)
    requestAnimationFrame(update)
    HEART.beat()
}

let userFunction

function interpretUserCode() {
    userCode = document.getElementById("userCode").value
    userCode = userCode.replace(/\s+/, '')
    console.log(userCode)

    _clearCanvas()

    try {
        const tempF = new Function('t', userCode)
        toggleElementOptioned('errorFrown', false)
        toggleElementOptioned("badFieldCross", false)
        userFunction = tempF
        HEART.beginAgain()
    } catch (err) {
        toggleElementOptioned('errorFrown', true)
    }


}

function u(t) {
    if (draw) {

        if (userFunction) {
            try {
                userFunction(t)
            } catch (err) {
                toggleElementOptioned("badFieldCross", true)
                console.log("Bad field detected, should show ❌")
                console.log(err)
            }
        } else {

            for (i = 2e3, X = d = 0, y = 460 + t * 60; i--; y += C(d += S(i ** 8)) * 3) {
                x.fillRect(X += C(d) + 2 + T(t / 2) / 9, y / 2, 2 / (1 + t), t < 100)
                x.fillRect(t * i * y % 2e3, y - T(t / 4) * i * t - 200, .5, t < 4)
            }
        }

    }
}


window.addEventListener("load", function () {

    c = document.getElementById("canvas")
    x = canvas.getContext("2d")
    ctx = x

    //  CANVASDEFAULTS.sizePropertionOfInnerWindowY = 0.8
    //  CANVASDEFAULTS.sizePropertionOfInnerWindowX = 0.8
    CANVASDEFAULTS.backgroundFillStyle = "white"
    _adjustCanvas()

    requestAnimationFrame(update)
})

window.addEventListener("mousemove", function (e) {
    mX = e.offsetX
    mY = e.offsetY
})

function drawing() {
    draw = !draw
}

function toggleElement(elementID) {
    const e = document.getElementById(elementID)

    if (e.style.display === "none") {
        e.style.display = "block"
    } else {
        e.style.display = "none"
    }
}

function toggleElementOptioned(elementID, show = false) {
    const e = document.getElementById(elementID)

    if (show) {
        e.style.display = "block"
    } else {
        e.style.display = "none"
    }
}


function loadExample(n) {
    textArea = document.getElementById('userCode')

    textArea.value = userCodeExamples[n]

    interpretUserCode()


}