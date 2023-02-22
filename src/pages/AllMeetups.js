import MeetupList from "../componets/meetups/MeetupList";
import classes from "./AllMeetups.module.css"
import {useEffect, useState} from "react";

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
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetup, setLoadedMeetup] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8080/api/v1/meetup")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setLoadedMeetup(data);
            });

    }, [])

    if (isLoading) {
        return (<section>
            <h1>Loading...</h1>
        </section>);
    }


    return (
        <section className={classes.section}>
            <MeetupList data={loadedMeetup}/>
        </section>
    );
}

export default AllMeetupsPage;
