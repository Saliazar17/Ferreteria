//import { getGalleryData } from "./galeria/datosGaleria";
//import { getHeroData } from "./hero/hero";

//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

//import { getProductData } from "./productos/producto1";


export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    switch(page){
        /*case '/galler.html':
            pageObject = getGalleryData();
            break;*/
        case '/index.html':
            pageObject = getHeroData();
            pageObject = {
                ...pageObject,
            }
            break;
    }
    return {
        ...contextObject,
        ...pageObject
    }
}