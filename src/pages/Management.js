import classes from "./Management.module.css";

function Management(props) {

    return <section>
        <form>
            <input type="text" placeholder="search for meetup..."/>
            <span>
                <button>
                    <img className={classes.search} alt="loading..." src="http://localhost:3000/logo192.png"/>
                </button>
            </span>
        </form>
    </section>
}

export default Management;