import classes from "./Opinion.module.css"
import { Star, StarFill } from "react-bootstrap-icons";

function Opinion({description, stars, date}) {
    return (
        <div>
            <div className={classes.rating}>
                <div className={classes.stars}>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <Star/>
                </div>
                <div className={classes.date}>
                    {date}
                </div>
            </div>
            <div>
                {description}
            </div>
            <hr/>
        </div>
    );
}

export default Opinion;