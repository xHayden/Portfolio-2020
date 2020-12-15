function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(() => {
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    let isSmallScreen = window.matchMedia("only screen and (max-width: 1025px)").matches;
    if(isMobile){
      $('.section').each((i) => {
        if(i !== 0){ 
          $('.section').eq(i).addClass('fp-auto-height');
          $('.section').eq(i).addClass('mobile-margin');
        }
      })
    }
    backgroundParticles()
    updateDynamicName();
    $('#fullpage').fullpage({
    //options here
      scrollingSpeed: 1200,
      responsiveWidth: 1025,
		  autoScrolling:true,
        scrollHorizontally: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['home', 'about', 'projects', 'contact'],
        onLeave: (origin, destination, direction) => {
            var loadedSection = this;
            if(!isSmallScreen){
              if(destination.anchor == "projects"){
                anime({
                  targets: '#projects-flexbox div',
                  //translateX: ["-100%", 0],
                  translateY: ["100%", 0],
                  scale: 1,
                  duration: 1200,
                  easing: 'easeInOutCubic',
                  delay: 000,
                });
              }
            }
            
            
            anime({
                targets: '#' + destination.anchor + '-text',
                translateX: ["-100%", 0],
                scale: 1,
                duration: 1200,
                easing: 'easeInOutCubic',
                delay: 000,
              });
            anime({
                targets: ("." + destination.anchor + "-desc"),
                translateX: ["-100%", 0],
                scale: 1,
                duration: 1200,
                easing: 'easeInOutCubic',
                delay: 200,
                
              });
            anime({
                targets: '#' + destination.anchor + '-img',
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
    let typeChar = document.createElement("span");
    $(typeChar).attr("id", "typechar")
    typeChar.innerHTML = "_";

    if(!oldName){ oldName = "hayden."; await blinkTyping(2000); };
    let options = ["a web developer.", "a student.", "a programmer.", "a fullstack developer.", "hayden."];
    let randomOption = Math.floor(Math.random() * options.length);
    let newName = options[randomOption];
    if(randomOption < options.length && newName !== oldName){
      let sameCharCount = 0;
      for(let i = 0; i < oldName.length; i++){ //Check how many characters are the same in a row
          if(newName[i] === oldName[i]){ sameCharCount++; }
          else { break; }
      }
      for(let i = oldName.length; i >= sameCharCount; i--){
        //Removing text
          $('#dynamic-name').text(oldName.slice(0, i));
          if(!$('#typechar').length){
            $('#dynamic-name').append(typeChar);
          }
          await sleep(50);
      }
      await sleep(250);
      for(let i = 0; i < newName.length; i++){
        //Adding text
          $('#dynamic-name').text(newName.slice(0, i+1+sameCharCount));
          if(!$('#typechar').length){
            $('#dynamic-name').append(typeChar);
          }
          await sleep(120);
      }
      await blinkTyping(2000);
      updateDynamicName(newName);
    } else {
        updateDynamicName(oldName);
    }
    
}

async function blinkTyping(time){
  let typeChar = document.createElement("span");
  $(typeChar).attr("id", "typechar");
  typeChar.innerHTML = "_";
  if(!$('#typechar').length){
    $('#dynamic-name').append(typeChar);
  }
  await sleep(250);
  for(let i = 0; i < (time - 250)/500; i++){
    if($('#typechar').length){
      $('#typechar').remove();
    }
    else {
      $('#dynamic-name').append(typeChar);
    }
    await sleep(500);
  }
}

function backgroundParticles(){
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
}