let circle1 = document.getElementById('circle1');
    let circle2 = document.getElementById('circle2');
    let circle3 = document.getElementById('image');
    circle1.addEventListener('mouseover', function() {
        this.style = 'animation: cycle 2s 0s 1 forwards';
        circle2.style = 'animation: cycle2 2s 0s 1 forwards';
        circle3.style = 'animation: cycle3 2s 0s 1 forwards';
    })
    circle1.addEventListener('mouseout', function() {
        this.style = '';
        circle2.style = '';
        circle3.style = '';
    })

    let button1 = document.getElementById('button1');
    button1.addEventListener('mouseover', function() {
        this.style = 'animation: btn 500ms 0s 1 forwards';
    })
    button1.addEventListener('mouseout', function() {
        this.style = '';
    })
    let button2 = document.getElementById('button2');
    button2.addEventListener('mouseover', function() {
        this.style = 'animation: btn 500ms 0s 1 forwards';
    })
    button2.addEventListener('mouseout', function() {
        this.style = '';
    })

    let stat1 = document.getElementById('stat1');
    stat1.addEventListener('mouseover', function() {
        this.style = 'animation: status 300ms 0s 1 forwards;';
    })
    stat1.addEventListener('mouseout', function() {
        this.style = 'animation: status_reverse 300ms 0s 1 forwards;';
    })

    let stat2 = document.getElementById('stat2');
    stat2.addEventListener('mouseover', function() {
        this.style = 'animation: status 300ms 0s 1 forwards; margin-top: 2px;';
    })
    stat2.addEventListener('mouseout', function() {
        this.style = 'animation: status_reverse 300ms 0s 1 forwards; margin-top: 2px;';
    })

    let stat3 = document.getElementById('stat3');
    stat3.addEventListener('mouseover', function() {
        this.style = 'animation: status 300ms 0s 1 forwards; margin-top: 2px;';
    })
    stat3.addEventListener('mouseout', function() {
        this.style = 'animation: status_reverse 300ms 0s 1 forwards; margin-top: 2px;';
    })