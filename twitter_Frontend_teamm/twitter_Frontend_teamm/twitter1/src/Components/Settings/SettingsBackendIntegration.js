import axios from 'axios';
import Configure from '../../Configure'



export async function Post_ChangePassword(){
    var message;
    const body =  {
        currentPassword:sessionStorage.getItem('currentPassword'),password:sessionStorage.getItem('password'),confirmNewPassword:sessionStorage.getItem('confirmNewPassword')
      }
      console.log(`${localStorage.getItem('token')}`)
      await axios
        .post(`${Configure.backURL}settings/changePassword/`,body, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
          
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message='';
            
          }
          else if (response.status === 403) {
            message='  ';
            console.log(response.data.message);
          }
          else if(response.status === 401 || response.status === 404 || response.status === 500 ){
            message=response.data.message;
          }

        }).catch(error => {
            console.log(error);
            });
      return message;
  };

// export async function Post_DeactivateAccount(){
//     var message;
//       console.log(`${localStorage.getItem('token')}`)
//       await axios
//         .put(`${Configure.backURL}settings/deactivateAccount/`, {
          
  
//           headers: {
//             'Content-Type': 'application/json; charset=utf-8',
//             'x-access-token': `${localStorage.getItem('token')}`,
//           },
         
          
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             message='';
            
//           }
//           else if (response.status === 403) {
//             message='  ';
//             console.log(response.data.message);
//           }
//           else if(response.status === 401 || response.status === 404 || response.status === 500 ){
//             message=response.data.message;
//           }

//         }).catch(error => {
//             console.log(error);
//             });
//       return message;
//   };