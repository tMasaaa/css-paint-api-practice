class StarPainter {
    static get inputProperties() {
        return [
            '--star-radius',
            '--time',
            '--color',
        ]
    }
    paint(context, geometry, properties) {
        const radius = parseInt(properties.get('--star-radius').toString())
        const time = parseInt(properties.get('--time').toString())
        console.log(time)
        const color = properties.get('--color').toString()
        
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
        context.shadowColor = 'black';
        context.shadowBlur = 15;
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;
        context.closePath()
        context.fillStyle = color
        context.fill()
    }
}

registerPaint('star', StarPainter)