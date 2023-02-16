function Model(props){
    return (
        <div className="model">
            <div className="model_title">
                <span>Are you sure to delete this item?</span>
            </div>
            <div>
                <button className="btn btn--alt" onClick={props.onComfirm}>Comfirm</button>
                <button className="btn" onClick={props.onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default Model;