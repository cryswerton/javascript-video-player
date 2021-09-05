<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>PHP Video Player</title>
    <style>
        video{
            margin: 0px;
        }
        #progress-bar{
            margin: 0px;
            height: 15px;
            width: 0px;
            background-color: red; 
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            console.log('test')
            const vd = document.querySelector('video')
            const progressBar = document.querySelector('#progress-bar')

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
                    console.log(vd.currentTime)
                    }, 1000);
                }
        })
    </script>
</head>
<body class="container">
    <header class="my-4">
        <h1>PHP Video Player</h1>
    </header>
    <hr>
    <div id="video-container">
        <video width="640" height="360">
            <source src="videos/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div id="progress-bar"></div>
     </div>
</body>
</html>