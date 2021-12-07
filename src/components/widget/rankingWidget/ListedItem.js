import classes from './ListedItem.module.css'
import {Star, StarFill} from "react-bootstrap-icons";

function ListedItem({image, title, description}) {
    return (
        <div>
            <div className={classes.item}>
                <div className={classes.image}>
                    <img src="./chiken.png"/>
                </div>

                <div className={classes.description}>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ListedItem;
