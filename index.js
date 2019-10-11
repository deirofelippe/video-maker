const robots = {
    input: require('./robots/input.js'),
    text: require('./robots/text.js'),
    state: require('./robots/state.js'),
    image: require('./robots/image.js'),
    video: require('./robots/video.js'),
    youtube: require('./robots/youtube.js')
}

async function start(){
    robots.input()
    console.log('\nRobo Input Executado')

    await robots.text()
    console.log('\nRobo Text Executado')
    
    await robots.image()
    console.log('\nRobo Image Executado')
    
    await robots.video()
    console.log('\nRobo Video Executado')
    
    await robots.youtube()
    console.log('\nRobo Video Executado')

    console.log('\nROBOS FINALIZADOS!')

    // const content = robots.state.load()
    // console.dir(content, { depth: null })
}

start()
