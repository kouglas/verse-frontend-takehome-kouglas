const Login = () => {
  return (  
    <div className="login">
            <div className="form-container">
                <form action="">
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="relative">
                      <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-7 w-64 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter your username or email " />
                      <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 pb-8 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-6 left-1 font-extrabold">Username</label>
                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="password">Password</label>
                    <input 
                      name="password" 
                      type="password"
                      title="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password"
                    />
                    </div>
                  
                    <input 
                      type="checkbox"
                      name="checkbox" 
                      title="checkbox"
                      
                    />
                    <label className="checkbox" htmlFor="checkbox">Remember me</label>
                    <div className="submit--login">
                      <a
                        className="submit--btn" 
                        // to="/chat" 
                        type="submit" > Sign in
                      </a>
                      <a
                        className="no-account-link" 
                        // to="/chat" 
                        >Forgot password?
                      </a>
                    </div>
        
                    {/* <div className='g-sign-in-button'>
                      <div className="content-wrapper">
                        <div className='logo-wrapper'>
                          <img 
                          src="./src/assets/g-logo.svg"
                          alt="google logo"
                          />
                        </div>
                        <span className='text-container'>
                          <span onClick={signInWithGoogle}>
                            <Link
                              to="/chat"
                              className="g-btn-link"
                              >Sign in with Google</Link></span>
                        </span>
                      </div>
                    </div>
                     */}
                </form>
            </div>
        </div>
  );
}

export default Login;