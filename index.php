<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>PHP Video Player</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            console.log('test')
            const vd = document.querySelector('video')

            vd.addEventListener('click', () => {
                vd.paused ? vd.play() : vd.pause()
            })
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
     </div>
</body>
</html>