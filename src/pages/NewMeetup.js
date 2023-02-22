import { useNavigate } from 'react-router-dom'
import MeetupFormPage from "../componets/meetups/MeetupForm";
import classes from "./NewMeetup.module.css";

function NewMeetupPage() {
  const navigate = useNavigate();
  function addMeetupHandler(data) {
    fetch("http://localhost:8080/api/v1/meetup",
    {
      method: 'POST',
      body:JSON.stringify(data),
      headers: {
        'Content-Type': "application/json",
      }
      
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <div className={classes.container}>
      <MeetupFormPage onAddMeetup={addMeetupHandler}/>
    </div>
  );
}

export default NewMeetupPage;
