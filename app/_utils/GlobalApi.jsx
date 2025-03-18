const { default: axios } = require("axios");


const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        'Authorization':`Bearer ${API_KEY}`
    }
})

 const getCategory=()=>axiosClient.get('/categories?populate=*');

 const getArenaList=()=>axiosClient.get('/arenas?populate=*')
 
 const getArenaByCategory=(category)=>axiosClient.get('/arenas?filters[categories][Name][$eq]='+category+"&populate=*")
 
 const getArenaById=(id)=>axiosClient.get('/arenas/'+id+"?populate=*")

 const bookAppointment=(data)=>axiosClient.post('/appointments',data);
 const getUserBookingList = (userEmail) =>
    axiosClient.get(
      `/appointments?[filters][Email][$eq]=${userEmail}&populate=arena.image`
    );
 const deleteBooking=(id)=>axiosClient.delete('/appointments/'+id)
 
 const sendEmail=(data)=>axios.post('/api/sendEmail',data);
    export default{
    getCategory,
    getArenaList,
    getArenaByCategory,
    getArenaById,
    bookAppointment,
    getUserBookingList,
    deleteBooking,
    sendEmail
}