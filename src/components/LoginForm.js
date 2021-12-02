import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { Alert, FormGroup, FormLabel } from "react-bootstrap";

function LoginForm() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  function showAlert() {
    
  }
  return (
    <div>
        <Alert
    className={"col-3 text-danger border-3 border-danger hi"}
    variant="danger"
    show={true}
  >
    Incorrect email or password!
  </Alert>
      
      <Form>
        <Form.Group className={"mb-3 col-3"} controlId="formBasicEmail">
          <Form.Label className={"h4 bold"}>{t("email")}</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-4 col-3" controlId="formBasicPassword">
          <Form.Label className={"h4 bold"}>{t("psw")} </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className={"form-inline col-3"}>
          <Button className={"pl-10"} variant="primary" type="submit" onSubmit={showAlert}>
            {t("login-label")}
          </Button>

          <FormGroup>
            <FormLabel className={"col-auto"} style={{ fontSize: "12px" }}>
              {t("new-user-question")}
            </FormLabel>
            <a href="">
              <FormLabel className={"col-auto"} style={{ fontSize: "12px" }}>
                {t("signup-redirect")}
              </FormLabel>
            </a>
          </FormGroup>
        </Form.Group>
      </Form>
      <br></br>
    </div>
  );
}

export default LoginForm;
