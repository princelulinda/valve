export default function RegisterScreen(){
    return(
    <div className="flex justify-center items-center h-[100vh] bg-gray-50 ">
          <form className="max-w-sm mx-auto">
            <div className="mb-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Entrer votre numéro Matricule </label>
              <input type="number" id="email" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="22101137" required />
            </div>
            <div className="mb-2">
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 ">Votre promotion</label>
              <input type="password" id="password" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "placeholder="Sciences Informatique" required />
            </div>
            <div className="mb-2">
              <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Votre departement</label>
              <input type="text" id="repeat-password" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "placeholder="2024" required />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-primaryBlue hover:underline ">terms and conditions</a></label>
            </div>
          <button className="text-white bg-secondaryBlueBlack p-20 hover:bg-primaryBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">register</button>
          </form>
    </div>
    )
}