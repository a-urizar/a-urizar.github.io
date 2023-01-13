
                        // aqui separa el texto en letras
                        const text = document.querySelector('.text');
                        text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
                
                        anime.timeline({
                
                            loop:true 
                        })
                        .add({
                            targets:'.text span',
                            //translateY: [start value, end Value]
                            translateY: [-600, 0],
                            scale:[10,1],
                            opacity:[0,1],
                            easing:"easeOutExpo",
                            duration:1500, //1.5secons
                            delay:anime.stagger(100),
                        })
                        .add({
                            targets:'.text span',
                            //translateX: [start value, end Value]
                            translateX: [0, -1000],
                            scale:[1,1],
                            opacity:[1,0],
                            easing:"easeOutExpo",
                            duration:2000, //1.5secons
                            delay:anime.stagger(100),
                        })
                        .add({
                            targets:'.text span',
                            //translateX: [start value, end Value]
                            translateX: [1000,0],
                            scale:[1,1],
                            opacity:[0,1],
                            easing:"easeOutExpo",
                            duration:2000, //1.5secons
                            delay:anime.stagger(100),
                        })
                        .add({
                            targets:'.text span',
                            //translateX: [start value, end Value]
                            translateX: [0,0],
                            scale:[1,50],
                            opacity:[1,0],
                            easing:"easeOutExpo",
                            duration:2000, //1.5secons
                            delay:anime.stagger(100),
                        })
                      