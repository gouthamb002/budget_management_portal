import React, {useState} from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import { useQuery, gql, useMutation } from "@apollo/client";

const REGISTER = gql`
    mutation($phone: String!, $password: String!, $email: String!, $name: String!){
  createUser(phone: $phone, password: $password, email: $email, name: $name)
}
`

const LOGIN = gql`
  mutation($password: String!, $email: String!){
  login(password: $password, email: $email) 
}
`

const MainHeader = ({user, setUser}) => {
    const [registerMutation, { data, loading, error }] = useMutation(REGISTER);
    const [loginMutation, { data: login, loading: loginLoad, error: loginError }] = useMutation(LOGIN);
    
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ShowModal, setShowModal] = useState(false)
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-gradient-to-b from-green-50 to-green-100">
            <div className="hidden md:flex w-full h-full items-center justify-between">
                {/* <Link to={"/"} className="flex items-center gap-2"> */}
                    {/* <img src={Logo} className="w-12 object-cover" alt="logo" /> */}
                    <p className="text-headingColor text-xl font-bold">BudgetBuddy</p>
                {/* </Link> */}
            
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li 
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                            onClick={() => setShowModal(true)}
                        >Login</li>
                            {ShowModal ? (
                                <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-96 my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Sign In
                                        </h3>
                                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={() => setShowModal(false)}>
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                        <form className="space-y-6" action="#">
                                            <div>
                                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your Email</label>
                                                <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" required />
                                            </div>
                                            <div>
                                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Password</label>
                                                <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" required />
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                                </div>
                                                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Remember me</label>
                                                </div>
                                                <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500" onClick={() => setShowModal(false)}> Lost Password?</a>
                                            </div>
                                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={async () => {
                                                setShowModal(false)
                                                 try{
                                                    await login({variables: {email: Email, password: Password}})
                                                    if(login)
                                                    {
                                                        setUser(True)
                                                    }
                                                    else{
                                                        window.alert(loginError)
                                                    }
                                                 }catch(err){
                                                    window.alert(err.message)
                                                 }
                                            }}>Login to your account</button>
                                            <div className="text-sm font-medium text-gray-500 dark:text-gray-500">
                                                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500" onClick={() => {
                                                    setShowModal(true)
                                                }}>Create account</a>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}

                        
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                        >SignUp Now!</li>
                    </ul>

                </div>
                
            </div>  
    </header> 
  )
}

export default MainHeader