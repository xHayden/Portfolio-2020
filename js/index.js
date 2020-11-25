function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(() => {
  
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });

    updateDynamicName();
    $('#fullpage').fullpage({
    //options here
      scrollingSpeed: 1200,
		  autoScrolling:true,
        scrollHorizontally: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['intro', '2020', '2019'],
        onLeave: (origin, destination, direction) => {
            var loadedSection = this;
            anime({
                targets: '#year-' + destination.anchor + '-text',
                translateX: ["-100%", 0],
                scale: 1,
                duration: 1200,
                easing: 'easeInOutCubic',
                delay: 000,
              });
            anime({
                targets: (".year-" + destination.anchor + "-desc"),
                translateX: ["-100%", 0],
                scale: 1,
                duration: 1200,
                easing: 'easeInOutCubic',
                delay: 200,
                
              });
            anime({
                targets: '#year-' + destination.anchor + '-img',
                translateX: ["100%", 0],
                scale: [0.9, 1],
                duration: 2000,
                easing: 'easeInOutCubic',
                delay: 300,
              });
              
        }
  });
});



async function updateDynamicName(oldName){
    if(!oldName){ oldName = "Hayden."; await sleep(2000); };
    let options = ["a web developer.", "a student.", "a programmer.", "a fullstack developer.", "Hayden."];
    let randomOption = Math.floor(Math.random() * options.length);
    let newName = options[randomOption];
    let sameCharCount = 0;
    for(let i = 0; i < oldName.length; i++){
        if(newName[i] === oldName[i]){
            sameCharCount++;
        }
    }
    if(randomOption < options.length && newName !== oldName){
        for(let i = oldName.length; i >= sameCharCount; i--){
            $('#dynamic-name').text(oldName.slice(0, i));
            await sleep(50);
        }
        await sleep(250);
        for(let i = 0; i < newName.length; i++){
            $('#dynamic-name').text(newName.slice(0, i+1));
            await sleep(120);
        }
        await sleep(1500);
        updateDynamicName(newName);
    } else {
        updateDynamicName(oldName);
    }
    
}


