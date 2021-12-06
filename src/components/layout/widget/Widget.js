import { WidgetStyled } from "./Widget.styled";

function Widget(props) {
    return(
        <WidgetStyled>
            {props.children}
        </WidgetStyled>
    )
}

export default Widget;