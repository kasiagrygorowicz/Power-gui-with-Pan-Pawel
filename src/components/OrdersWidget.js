import {Card} from 'react-bootstrap'
import classes from './Widget.module.css'

function OrdersWidget(props){
return <div>
    <Card className={classes.basicShape}>
        <Card.Body>
            <Card.Title className={classes.titleStyle}>Orders</Card.Title>
            <div className={classes.contentStyle}>


            </div>
        </Card.Body>
        

        </Card>
</div>
}

export default OrdersWidget;