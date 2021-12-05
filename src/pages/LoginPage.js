import LoginForm from "../components/LoginForm";
import classes from './LoginPage.module.css'


function LoginPage()  {
    return <div className={classes.loginPageDisplay}>
        <div className={classes.loginFormDisplay}>
        <LoginForm />
        </div>
    </div>
}

export default LoginPage;