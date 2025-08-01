var theme=0
function swapStyle(){
    if(theme == 0){
        document.getElementById("pagestyle").setAttribute("href", "light.css")
        document.getElementById("themebutton").setAttribute("class", "fa-solid fa-moon")
        theme += 1
    }
    else{
        document.getElementById("pagestyle").setAttribute("href", "dark.css")
        document.getElementById("themebutton").setAttribute("class", "fa-solid fa-sun")  
        theme -= 1
    }
}