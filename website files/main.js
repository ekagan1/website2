window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector(".pclose1").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
document.querySelector(".pclose2").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});it


