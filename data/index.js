// Importar las dependencias necesarias
import { getHeroData } from "./hero/hero";
import navData from "./global/nav";

// Función para generar el contexto de la página
export const generarContextoDePagina = (page) => {
    const contextObject = {
        ...navData,
    };
    let pageObject = {}; // Declarar la variable antes de usarla
    switch (page) {
        case '/index.html':
            pageObject = getHeroData();
            pageObject = {
                ...pageObject,
            };
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject,
    };
};

