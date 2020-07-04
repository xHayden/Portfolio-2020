function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeWordCool(original, newWord){
    for(let i = 1; i <= original.length; i++){
        var cropped = original.slice(0, original.length-i);
        $("#me-name").text(cropped);
        await sleep(100);
    }
    for(let i = 1; i <= newWord.length; i++){
        var cropped = newWord.slice(0, i);
        $("#me-name").text(cropped);
        await sleep(80);
    }
}


function startNameChange(){
    setTimeout(async () => {
        let original = "Hayden Carpenter"
        let newWords = ["A Programmer", "Someone who hates CSS", "A Web Developer", "An Epic Gamer", "A Scissor-Lift Enthusiast", "A Student"]
        random = Math.floor(Math.random() * newWords.length);
        changeWordCool(original, newWords[random])
     }, 2000);
}



$(document).ready(function(){
    
    let sjOffset = $("#ScoutJanssen").offset().top - 200;
    console.log(sjOffset)
    let titleOffset = $("#title").offset().top;
    let nameTriggered = false;
    let sjTriggered = false;
    $("#visit-FRC").css({'margin-left': $(window).width()})
    
    if(!nameTriggered){
        startNameChange()
        nameTriggered = true;
    }
    var $w = $(window).scroll(function(){
        $('#progress').css({'height': (($w.scrollTop())/($(document).height()- $(window).height())) * $(window).height()})

        if(!sjTriggered){
            if ($w.scrollTop() >= sjOffset){
                $("#visit-FRC").stop().animate({'margin-left': '0'}, 1000, 'linear');
                sjTriggered = true;
        
            } else {
                // ...
            }
        }
        
    });
});


