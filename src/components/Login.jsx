import AuthForm from "./AuthForm";
import Header from "./Header";

const Login = () => {
    return(
        <div className="relative">
            <div>

            <img className="h-screen w-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_large.jpg" alt="cover screen" />
            <div className="absolute inset-0 bg-black bg-opacity-70" />
            </div>
           <AuthForm />
            <div className="absolute top-0 left-0 z-10 p-4">

            <Header />
            </div>
        </div>
    )
}

export default Login; 