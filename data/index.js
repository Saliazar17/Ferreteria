// Importar las dependencias necesarias
import { getHeroData } from "./hero/hero";
import navData from "./global/nav";
import misionData from "./mision/datosmision";

// Función para generar el contexto de la página
export const generarContextoDePagina = (page) => {
    const contextObject = {
        ...navData,
    };

    let pageObject = {}; // Declarar la variable antes de usarla
    switch (page) {
        case '/index.html':
            pageObject = {
                ...getHeroData(),
                mision: misionData.mision, // Aseguramos que los datos de misión se incluyan
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

