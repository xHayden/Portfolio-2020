function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var portfolio = () => {
    return this;
};
//I'll show myself out

async function changeWordCool(currentName){
    let original = currentName
    let newWords = ["A Programmer", "Someone who hates CSS", "A Web Developer", "An Epic Gamer", "A Scissor-Lift Enthusiast", "A High-School Student"]
    random = Math.floor(Math.random() * newWords.length);
    newName = newWords[random]
    if(newName == original){
        newName = "Hayden Carpenter"
    }
    for(let i = 1; i <= original.length; i++){
        var cropped = original.slice(0, original.length-i);
        $("#me-name").text(cropped);
        await sleep(100);
    }
    for(let i = 1; i <= newName.length; i++){
        var cropped = newName.slice(0, i);
        $("#me-name").text(cropped);
        await sleep(80);
    }
    return newName
}

function startNameChange(currentName){
    var promise = new Promise(function(resolve, reject) {
        window.setTimeout(function() {
          resolve(changeWordCool(currentName));
        }, 2000);
      });
    return promise;
}
function removeHash(){ 
    history.replaceState("", document.title, window.location.origin + window.location.pathname + window.location.search);
}



$(document).ready(function(){
    $('.arrow').click(function(){
        setTimeout(function(){
            removeHash()
        },1); 
    });
    
    currentName = "Hayden Carpenter"
    let sjOffset = $("#ScoutJanssen").offset().top - 200;
    let titleOffset = $("#ScoutJanssen").offset().top;
    let nameTriggered = false;
    let sjTriggered = false;
    if(!nameTriggered){
        nameTriggered = true;
        startNameChange(currentName).then(data => {currentName = data})
    }

    setInterval(() => {
        nameTriggered = false;
        if(!document.hidden){
            if ($(window).scrollTop() <= titleOffset){
                nameTriggered = true;
                startNameChange(currentName).then(data => {currentName = data})
            }
        }
    }, 6000)
    var $w = $(window).scroll(function(){
        

        $('#progress').css({'height': (($w.scrollTop())/($(document).height()- $(window).height())) * $(window).height()})

        if(!sjTriggered){
            if ($w.scrollTop() >= sjOffset){
                /*$("#duck").stop().animate({'padding-left': 0}, 1000, 'linear');
                $("#duck").animate({'padding-right': $(window).width()}, 1000, 'linear');*/
                sjTriggered = true;
        
            } else {
                // ...
            }
        }
        
    });



    function log() {
        message = `

        ██████╗ ███████╗██╗   ██╗   ██████╗  █████╗ ███╗   ██╗ ██████╗███████╗
        ██╔══██╗██╔════╝██║   ██║   ██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝
        ██║  ██║█████╗  ██║   ██║   ██║  ██║███████║██╔██╗ ██║██║     █████╗  
        ██║  ██║██╔══╝  ╚██╗ ██╔╝   ██║  ██║██╔══██║██║╚██╗██║██║     ██╔══╝  
        ██████╔╝███████╗ ╚████╔╝ ██╗██████╔╝██║  ██║██║ ╚████║╚██████╗███████╗
        ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝`
        setTimeout(console.log.bind(console, "%c" + message, "white-space: pre-wrap; "));
    }
    log();
});


