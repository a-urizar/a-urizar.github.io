
    var animation2=anime.timeline({
        autoplay:false
    });

    animation2


    
    .add({
        targets:'#luna',
        top:'-1000px',
        duration: 1000,
        easing: 'easeInOutBack'

    })
    
    .add({
        targets:'#estrellas',
        top:'-1000px',
        duration: 1000,
        easing: 'easeInOutSine'
        

    })

    .add({
        targets:'#mont_back',
        top:'-1000px',
        duration: 1000,
        easing: 'easeInOutSine'

    })

    .add({
        targets:'#mont_front',
        top:'-1000px',
        duration: 1000,
        easing: 'easeInOutSine'

    })

    
    
    .add({
        targets:'#btn',
        top:'-1000px',
        duration: 500,
        easing: 'easeInOutSine'

    })
    
    .add({
        targets:'#btncv',
        top:'-1000px',
        duration: 1000,
        easing: 'easeInOutSine'

    })

    
    
    
    
    .add({
        targets:'#text',
    
        duration: 500,
        top:'500px',
        easing: 'easeInOutBack'

    })


    .add({
        targets:'#text',
    
        duration: 3000,
        top:'-400px',
        easing: 'easeInOutBack'

    })

    .add({
        targets:'#text',
    
        duration: 1000,
        top:'-1000px',
        easing: 'easeInOutBack'

    })

    .add({
        targets:'#sol',
    
        duration: 1000,
        top:'0px',
        easing: 'easeInOutBack'
        

    })    

    .add({
        targets:'#sol',
    
        duration: 1000,
        top:'1500px',
        easing: 'easeInOutBack'

    }) 
    
    .add({
        targets:'#asoma',
    
        duration: 3000,
        top:'-570px',
        easing: 'easeInOutSine'

    })

    .add({
        targets:'#asoma',
    
        duration: 1000,
        top:'1599px',
        easing: 'easeInOutSine'

    })

    .add({
        targets:'#paisaje',
    
        duration: 1000,
        top:'0px',
        easing: 'easeInOutSine'

    })

    
    .add({
        targets:'#vercv',
        top:'-110px',
        duration: 1000,
        easing: 'easeInOutSine'

    })

    
    document.querySelector('#btncv').onclick=animation2.play;


