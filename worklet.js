class StarPainter {
    static get inputProperties() {
        return [
            '--star-radius',
            '--time',
        ]
    }
    paint(context, geometry, properties) {
        const radius = parseInt(properties.get('--star-radius').toString())
        const time = parseInt(properties.get('--time').toString())
        console.log(time)
        const stX = geometry.width / 2
        const stY = geometry.height / 2
        context.moveTo(stX, stY)
        context.beginPath()
        
        for(let i=0;i<10;i++) {
            const r = radius * (i%2 + 1) / 2
            const theta = ((2*Math.PI / 5) * i + Math.PI / 2 + time * Math.PI / 10)
            const x = Math.cos(theta)*r + stX
            const y = Math.sin(theta)*r + stY
            context.lineTo(x,y)
        }

        context.closePath()
        context.fillStyle = 'aqua'
        context.fill()
    }
}

registerPaint('star', StarPainter)