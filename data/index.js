//import { getGalleryData } from "./galeria/datosGaleria";
//import { getHeroData } from "./hero/hero";

//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

//import { getProductData } from "./productos/producto1";

export const generarContextoDePagina = (page) => {
    const contextObject = {
        ...navData,
    };
    let pageObject = {}; // Declarar la variable antes de usarla
    switch (page) {
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject,
    };
};
