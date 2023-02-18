import Card from "../ui/Card";
import classes from "./MeetupItem.module.css"

function MeetupItem(props) {
  return (
    <Card>
      <li>
        <Card><img className={classes.img} alt="loading..." src={props.image}></img></Card>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </li>
    </Card>
  );
}

export default MeetupItem;
