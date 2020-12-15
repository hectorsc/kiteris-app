// SE PODRÍA MEJORAR CREANDO UNA FUNCION PARA EL SWEETALERT Y EL COLUMNS
// PERO HABRIA QUE LLAMARLA EN CADA ARCHIVO DE LIST

// CATEGORY LIST, PRODUCT LIST, TAG LIST
export const columns = [
   {name: 'nombre', selector: 'name'}
];

// POST LIST
export const columnsPost = [
   {name: 'título', selector: 'title'}
];

export const sweetAlertCategory = {
   selector: 'name',
   title: '¿Estás seguro de eliminar la categoría ',
   finalTitle: '?',
   text: 'Una vez eliminada, ¡no podrá recuperar esta categoría!',
   exception: 'La categoría ',
   finalException: ' no se puede eliminar porque tiene productos asociados. Por favor, elimine antes los productos que tengan esta categoría.'
};

export const sweetAlertPost = {
   selector: 'title',
   title: '¿Estás seguro de eliminar la noticia ',
   finalTitle: '?',
   text: 'Una vez eliminada, ¡no podrá recuperar esta noticia!',
   exception: 'Ha ocurrido un error inesperado, intentelo más tarde.',
};

// PRODUCT LIST
export const sweetAlertProduct = {
   selector: 'name',
   title: '¿Estás seguro de eliminar el producto ',
   finalTitle: '?',
   text: 'Una vez eliminado, ¡no podrá recuperar este producto!',
   exception: 'Ha ocurrido un error, por favor intentelo de nuevo.'
};

// TAG lIST
export const sweetAlertTag = {
   selector: 'name',
   title: '¿Estás seguro de eliminar la etiqueta ',
   finalTitle: '?',
   text: 'Una vez eliminada, ¡no podrá recuperar esta etiqueta!',
   exception: 'La etiqueta ',
   finalException: ' no se puede eliminar porque tiene noticias asociadas. Por favor, elimine antes las noticias que tengan esta etiqueta.'
};
