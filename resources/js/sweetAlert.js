import swal from 'sweetalert';
import { deleted } from './api/crudActions';

export const sweetAlert = async (data) => {
   let result = false;
   const willDelete = await swal({
      title: `${data.title}${data.name}${data.finalTitle ? data.finalTitle : ''}`,
      text: `${data.text}${data.finalText ? data.finalText : ''}`,
      icon: "warning",
      buttons: true,
      dangerMode: true
   });
   if (willDelete) {
      const deleteData = await deleted(data.path, data.id);
      if (deleteData.exception) {
         swal(`${data.exception}${data.name}${data.finalException ? data.finalException : ''}`, {
            icon: "warning",
         });
      }
      return true;
   }
   return result;
};
