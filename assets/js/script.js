// script de configuração responsável pelo controler do menu hamburger
let menu = document.querySelector(".hambuger");
menu.addEventListener("click", () =>{
    if(menu.classList.toggle("active")){
        let navegation = document.querySelector(".ul-list");
        let icons = document.querySelector(".section-social");
            navegation.style.display = "block";
                icons.style.display = "flex";
        }else{
            let navegation = document.querySelector(".ul-list");
                let icons = document.querySelector(".section-social");
                navegation.style.display = "none";
                    icons.style.display = "none";
        }
});
