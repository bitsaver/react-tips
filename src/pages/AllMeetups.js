import MeetupList from "../componets/meetups/MeetupList";
import classes from "./AllMeetups.module.css"

const DUMMY_DATA = [
  {
    id: 1,
    title: "What is this?",
    image: "dungkey.jpeg",
    address: "San Fransico",
    description: "This is a test of data",
  },
  {
    id: 2,
    title: "Have you ever been to this place?",
    image: "logo192.png",
    address: "Washinton",
    description: "This is a test of data",
  },
];

function AllMeetupsPage() {
  return (
    <section className={classes.section}>
      <MeetupList data={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
