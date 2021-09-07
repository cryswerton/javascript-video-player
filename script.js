document.addEventListener('DOMContentLoaded', () => {
    console.log('test')
    const vd = document.querySelector('video')
    const progressBar = document.querySelector('#progress-bar')
    const maxProgressBar = document.querySelector('#max-progress-bar')
    const invisibleProgressBar = document.querySelector('#invisible-progress-bar')

    vd.addEventListener('click', () => {
        vd.paused ? vd.play() : vd.pause()
    })


    vd.onloadedmetadata = function(){
        const videoLength = vd.duration
        const progressBarMaxSize = 640;
        console.log('metadata loaded')
        setInterval(function(){ 
            let taxaAtual = 100 * parseFloat(vd.currentTime) / parseFloat(videoLength)
            let progressBarSize = taxaAtual * progressBarMaxSize / 100
            progressBar.style.width = `${progressBarSize}px`
            
        }, 500);

            invisibleProgressBar.addEventListener('mousedown', function(e) {
                // Get the target
                const target = e.target;
                
                // Get the bounding rectangle of target
                const rect = target.getBoundingClientRect();

                // Mouse position
                const x = e.clientX - rect.left;
                taxaAtual = 100 * x / progressBarMaxSize
                vd.currentTime = taxaAtual * videoLength / 100

            }); 

        }

})