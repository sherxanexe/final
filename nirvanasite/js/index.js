$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://mp3minusovki.com/music/fhvndfjwserjgt/aada646411fc156afae1007e0d7a8f65/854ee3353e6c0033b961f88bc6b173a9.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });
    
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    })
    $("#d-flex justify-content-center mt-3 login_container").click(function() {
        var name = $("#input-group-append").val();
        var password = $("#input-group-append").val();
        if (name == '' || email == '' || password == '' || cpassword == '') {
        alert("Please fill all fields...!!!!!!");
        } else if ((password.length) < 8) {
        alert("Password should atleast 8 character in length...!!!!!!");
        }
        
        });
});