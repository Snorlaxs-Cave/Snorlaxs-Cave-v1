function discord () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://discord.com');
    });

}

function google () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://google.com');
    });

}

function coolMathGames () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://coolmathgames.com');
    });

}

function spotify () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://spotify.com');
    });

}

function youtube () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://youtube.com');
    });

}

function tiktok () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://tiktok.com');
    });

}

function chess () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://chess.com');
    });

}

function reddit () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://reddit.com');
    });

}

function poki () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://poki.io');
    });

}

function cookie () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://cookie-clicker.io');
    });

}

function hole () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://hole-io.com');
    });

}

function ball () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://red-ball4.com/red-ball-4');
    });

}

function paper () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://paper-io.com/');
    });

}

function gba () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://cattn.github.io/gba/');
    });

}


function slope () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://derpmandev.github.io/unblocked-games/slope');
    });

}

function twoOneFourEight () {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://derpmandev.github.io/unblocked-games/2048/');
    });

}

function emulatorJS () {
   location.href = '/emulatorjs';
}

function cloak() {
    let url = window.location.href;
    var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999");
    w.document.write('<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="' + url + '"></iframe>');
  }

  function ourDiscord () {
    window.location.href = 'https://discord.gg/Cqaa8x82Ch';
    }