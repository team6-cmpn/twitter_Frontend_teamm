import axios from 'axios';
import Configure from '../Configure'

/**
 *Search top BE Integration
 *
 *get search top data from BE server
 * 
 * @returns {string} -message from BE
 */
export async function backEndTop(){
    const body = {};
    var message;
      console.log(localStorage.getItem("searchData"))
      await axios
        .get(`${Configure.backURL}search/top?text=${localStorage.getItem("searchData")}`, body,
        {
          // params: {
            
          //   'text string': `${localStorage.getItem("searchData")}`,
          // },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message = response.data.tweets[0].text;
            console.log(message);
        }
       
       console.log(response.data); 
      }).catch(error => {
          //console.log(error);
          message = error.response.data.message;
          console.log(message);
          });
    return message;
  };

/**
 *Search people BE Integration
 *
 *get search people data from BE server
 * 
 * @returns {string} -message from BE
 */

export async function backEndPeople(){
  const body = {};
  var message;
      await axios
        .get(`${Configure.backURL}search/people?text=${localStorage.getItem("searchData")}`,body,
         {

         })
        
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message = response.data.tweets[0].text;
            console.log(message);
        } 
        else if (response.status=== 404){
          console.log(message);
        }
      }).catch(error => {
        message = error.response.data.message;
        console.log(message);
         
          });
    return message;
    };

  /**
 *search latest BE Integration
 *
 * get search latest data from BE server
 *
 * @returns {string} -message from BE
 */

export async function backEndLatest(){
  const body = {};
  var message;
      
      await axios
        .get(`${Configure.backURL}search/latest/?text=${localStorage.getItem("searchData")}`,body,
        {

        })
       
       .then((response) => {
         console.log(response);
         if (response.status === 200) {
           message = response.data.tweets[0].text;
           console.log(message);
       } 
       else if (response.status=== 404){
         console.log(message);
       }
     }).catch(error => {
       message = error.response.data.message;
       console.log(message);
        
         });
   return message;
   };