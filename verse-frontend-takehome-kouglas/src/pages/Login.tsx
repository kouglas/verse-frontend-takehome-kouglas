const Login = () => {
  return (  
    <div className="login">
            <div className="form-container">
                <form action="">
                  <div className="grid gap-9 mb-6 lg:grid-cols-2">
                    <div className="relative">
                      <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-7 w-64 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter your username or email " />
                      <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 pb-8 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-6 left-1 font-extrabold">Username</label>
                    </div>
                    <div className="relative">
                      <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-7 w-64 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter your password " />
                      <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 pb-8 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-6 left-1 font-extrabold">Password</label>
                    </div>
                    </div>
                  
                    <div className=" border-cyan-500 border-2 float-left">
                    <input 
                      type="checkbox"
                      name="checkbox" 
                      title="checkbox"
                    />
                    <label className="  mt-0 text-sm" htmlFor="checkbox"> Remember me</label>
                    </div>
                    
                
                </form>
            </div>
        </div>
  );
}

export default Login;