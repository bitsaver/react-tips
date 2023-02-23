import {useRef} from "react";
import Card from "../ui/Card";
import classes from "./MeetupForm.module.css";

function MeetupFormPage(props) {
    const titleRef = useRef();
    const addressRef = useRef();
    const imageUrlRef = useRef();
    const descriptionRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const titleInput = titleRef.current.value;
        const addressInput = addressRef.current.value;
        const imageInput = imageUrlRef.current.value;
        const descriptionInput = descriptionRef.current.value;

        const meetupItem2 = {
            title: titleInput,
            address: addressInput,
            image: imageInput,
            description: descriptionInput,
        };
        props.onAddMeetup(meetupItem2);
        console.log(meetupItem2);
    }

    return (
        <div className={classes.meetupForm}>
            <Card>
                <div className={classes.formBox}>
                    <h1 className={classes.head}>Add New Meetup</h1>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" ref={titleRef} required></input>
                        </div>
                        <div>
                            <label htmlFor="image">Image url</label>
                            <input type="url" id="image" ref={imageUrlRef} required></input>
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" ref={addressRef} required></input>
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" ref={descriptionRef} required></input>
                        </div>
                        <div>
                            <button className={classes.button}>Submit</button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
}

export default MeetupFormPage;
