import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li>
      <Card>
        <img className={classes.img} alt="loading..." src={props.image}></img>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </Card>
    </li>
  );
}

export default MeetupItem;
