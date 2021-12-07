import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { Alert, FormGroup, FormLabel } from "react-bootstrap";
import {StyledLoginForm, ButtonStructure, QuestionLabel} from './LoginForm.styled';

function LoginForm() {
  const t= useTranslation()[0];



  function showAlert() {
    
  }

  return (
    <StyledLoginForm>
    <div>
        <Alert
    className={"col-3 text-danger border-3 border-danger hi"}
    variant="danger"
    show={true}
  >
          {t("login.error")}
  </Alert>
      <Form>
        <Form.Group className={"mb-3 col-3"} controlId="formBasicEmail">
          <Form.Label className={"h4 bold"}>{t("login.email")}</Form.Label>
          <Form.Control type="email" placeholder={t("login.enterEmail")} />
        </Form.Group>

        <Form.Group className="mb-4 col-3" controlId="formBasicPassword">
          <Form.Label className={"h4 bold"}>{t("login.psw")} </Form.Label>
          <Form.Control type="password" placeholder={t("login.psw")} />
        </Form.Group>

        {/*<Form.Group className={"form-inline col-3 StyledLoginForm.buttonStructure"}>*/}
        <ButtonStructure className={"form-inline col-3"}>
          <Button className={"pl-10"} variant="primary" type="submit" onSubmit={showAlert}>
            {t("login.login-label")}
          </Button>

          <QuestionLabel>
            <FormLabel className={"col-auto"} style={{ fontSize: "12px" }}>
              {t("login.new-user-question")}
            </FormLabel>
            <a href="">
              <FormLabel className={"col-auto"} style={{ fontSize: "12px" }}>
                {t("login.signup-redirect")}
              </FormLabel>
            </a>
          </QuestionLabel>
        </ButtonStructure>
      </Form>
      <br></br>
    </div>
    </StyledLoginForm>
  );
}

export default LoginForm;
