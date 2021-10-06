document.addEventListener('DOMContentLoaded', () => {
    console.log('test')
    const vd = document.querySelector('video')
    const pbc = document.querySelector('#progress-bar-container')
    const progressBar = document.querySelector('#progress-bar')
    const maxProgressBar = document.querySelector('#max-progress-bar')
    const invisibleProgressBar = document.querySelector('#invisible-progress-bar')

    vd.addEventListener('click', () => {
        vd.paused ? vd.play() : vd.pause()
    })

// Esse é um comentário para um teste, ignore!!!!
    function getVideoDurationFormatted(videoTime, type){
        let time = videoTime 
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time - minutes * 60)
        if(type === 'd'){
            return `/${minutes}:${seconds}`
        }else{
            return `${minutes}:${seconds}`
        }
    }

    function renderVideoDuration(time){
        document.querySelector('#video-duration').textContent = ''
        document.querySelector('#video-duration').textContent = getVideoDurationFormatted(time, 'd')
    }

    function renderVideoCurrentTime(time){
        document.querySelector('#video-current-time').textContent = ''
        document.querySelector('#video-current-time').textContent = getVideoDurationFormatted(time)
    }


    vd.onloadedmetadata = function(){
        const videoLength = vd.duration
        let progressBarMaxSize = invisibleProgressBar.offsetWidth
        console.log('metadata loaded')

        renderVideoDuration(vd.duration)

        pbc.style.top = `${vd.offsetHeight}px`
        window.onresize = function(){
            pbc.style.top = `${vd.offsetHeight}px`
        }

        setInterval(function(){ 
            progressBarMaxSize = invisibleProgressBar.offsetWidth
            let taxaAtual = 100 * parseFloat(vd.currentTime) / parseFloat(videoLength)
            let progressBarSize = taxaAtual * progressBarMaxSize / 100
            progressBar.style.width = `${progressBarSize}px`
            renderVideoCurrentTime(vd.currentTime)
            
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