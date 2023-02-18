import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./MeetupForm.module.css";

function MeetupFormPage(props) {
  const titleRef = useRef();
  const addressRef = useRef();
  const imageUrlRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event){
    event.preventDefault();
    const titleInput = titleRef.current.value;
    const addressInput = addressRef.current.value;
    const imageInput = imageUrlRef.current.value;
    const descriptionInput = descriptionRef.current.value;

    const meetupItem2 = {
        title: titleInput,
        address : addressInput,
        image: imageInput,
        description: descriptionInput
    }

    console.log(meetupItem2);


  }
  return (
    <Card>
      <h1>Meetup Form page</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Titile</label>
          <input type="text" id="title" ref={titleRef}></input>
        </div>
        <div>
          <label htmlFor="image">Image url</label>
          <input type="url" id="image" ref={imageUrlRef}></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address"  ref={addressRef}></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" ref={descriptionRef}></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupFormPage;
