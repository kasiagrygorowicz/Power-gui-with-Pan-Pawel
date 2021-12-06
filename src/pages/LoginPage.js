import LoginForm from "../components/LoginForm";
import classes from './LoginPage.module.css'


function LoginPage(props)  {
    return <div className={classes.loginPageDisplay}>
        <div className={classes.loginFormDisplay}>
            <LoginForm theme={props.theme} />
        </div>
    </div>
}

export default LoginPage;