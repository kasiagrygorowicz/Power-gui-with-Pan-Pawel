import classes from './ListedItem.module.css'

function ListedItem({category,offerName}) {
  return (
    <div>
      <h6 className={classes.categoryLabel}>{category}</h6>
      <div className={classes.offerLabel}>{offerName}</div>
    </div>
  );
}

export default ListedItem;
