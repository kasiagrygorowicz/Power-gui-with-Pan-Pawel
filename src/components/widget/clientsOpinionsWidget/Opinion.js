import classes from "./ClientsOpinions.module.css"
import { Star, StarFill } from "react-bootstrap-icons";

function Opinion({description, stars, date}) {
    return (
        <div className={classes.opinion}>
            <div className={classes.rating}>
                <div className={classes.stars}>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <Star/>
                </div>
                <div className={classes.date}>
                    20.11.2021, 21:37
                </div>
            </div>
            <div className={classes.description}>
                {description}
            </div>
            <hr/>
        </div>
    );
}

export default Opinion;