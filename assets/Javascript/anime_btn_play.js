

    var animation=anime.timeline({
        autoplay:false
    });

    animation
    .add({
        targets:'#btn',
        top:'1500px',
        duration: 500,
        easing: 'easeInOutSine'

    })
    


    .add({
        targets:'#estrellas',
        top:'0px',
        duration: 1000,
        easing: 'easeInOutSine'

    })

    .add({
        targets:'#mont_back',
        top:'0px',
        duration: 1000,
        easing: 'easeInOutSine'

    })
    .add({
        targets:'#luna',
        top:'0px',
        duration: 1000,
        easing: 'easeInOutBack'

    })
    
    .add({
        targets:'#mont_front',
        top:'0px',
        duration: 1000,
        easing: 'easeInOutSine'

    })
    .add({
        targets:'#text',
    
        duration: 1000,
        marginRight: 0,
        easing: 'easeInOutBack'

    })
    
    .add({
        targets:'#btn',
        top:'55%',
        duration: 1000,
        easing: 'easeInOutBack'

    })

    .add({
        targets:'#btncv',
        top:'100px',
        duration: 1000,
        easing: 'easeInOutSine'

    })
    document.querySelector('#btn').onclick=animation.play;
