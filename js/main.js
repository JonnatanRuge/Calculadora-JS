const Pantalla = document.querySelector(".Pantalla");
const Botones = document.querySelectorAll(".btn");

//Info de cada boton
Botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const BotonApretado = boton.textContent;

        if (boton.id === "c") {
            Pantalla.textContent = "0";
            return;
        }

        //Borrado
        if (boton.id === "borrar") {
            if (Pantalla.textContent.length === 1 || Pantalla.textContent === "Error!") {
                Pantalla.textContent = "0";
            } else {
                Pantalla.textContent = Pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //Boton de igual
        if (boton.id === "igual") {
            try {
                Pantalla.textContent = eval(Pantalla.textContent);
            } catch {
                Pantalla.textContent = "Error!";
            }
            return;
        }

        //Error 
        if (Pantalla.textContent === "0" || Pantalla.textContent === "Error!") {
            Pantalla.textContent = BotonApretado;
        } else {
            Pantalla.textContent += BotonApretado;
        }

    })
})