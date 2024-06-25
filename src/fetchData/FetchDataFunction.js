   async function  GetDataFunction (endpoint, options){
    try {
        const URL_BASE = "http://Valve.fongolab.com/api"
        const req =   await fetch(`${URL_BASE}${endpoint}`, options)
        const res = await req.json()
        console.log(res);
        return res
    } catch (error) {
        console.log(error.message);
    }

   }

   export default GetDataFunction;