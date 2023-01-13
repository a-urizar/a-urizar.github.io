

    var animatione=anime.timeline({
        autoplay:true,
        loop:true,
    });

    animatione
    /*.add({
        targets:'#btn_timeline',
        top:'1500px',
        duration: 500,
        easing: 'easeInOutSine'

    })*/


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
        targets:'#text_timeline',
    
        duration: 1000,
        marginRight: 0,
        easing: 'easeInOutBack'

    })
    /*
    .add({
        targets:'#btn_timeline',
        top:'50%',
        duration: 1000,
        easing: 'easeInOutBack'

    })
    */
   // document.querySelector('#btn_timeline').onclick=animatione.play;
