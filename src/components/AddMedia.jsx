import React from "react";
import { Modal } from "react-bootstrap";



function AddForm(props) {
    return (
        <>
            <button type="button" className="btn btn-outline-dark btn-block" data-toggle="modal" data-target="#addMediaModal">
            Add a {props.media}
            </button>

            <AddMediaModal media={props.media}/>
        </>
    )
}

function AddMediaModal(props) {
    return <div className="modal fade" id="addMediaModal" tabindex="-1" role="dialog" aria-labelledby="addMediaModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addMediaModalLabel">Add a {props.media}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form className="addForm-popup">
                        <div className="form-group">
                            <label for="title">Title: </label>
                            <input className="form-control" id="title" placeholder={props.media} />
                            <label> Year: </label>
                            <input className="form-control" name="Year" type="number" min="1900" max="2024" step="1" />
                        </div>
                        <input type="checkbox" id="horror" name="genre" />
                        <label className="formLabels">Horror</label>
                        <input type="checkbox" id="scifi" name="genre" />
                        <label className="formLabels">Sci-Fi</label>
                        <input type="checkbox" id="drama" name="genre" />
                        <label className="formLabels">Drama</label><br></br>
                        <input type="checkbox" id="comedy" name="genre" />
                        <label className="formLabels">Comedy</label>
                        <input type="checkbox" id="family" name="genre" />
                        <label className="formLabels">Family</label>
                        <input type="checkbox" id="action" name="genre" />
                        <label className="formLabels">Action</label>
                        <div className="form-group">
                            <label for="storyRating">Rate The Story (1-5)</label>
                            <select className="form-control" id="rating">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="originality">Rate The Originality:</label>
                            <select className="form-control" id="originality">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="Rate The Originality:">Would you recommend?</label>
                            <select className="form-control" id="originality">
                                <option value="1">No, I wouldn't subject someone to this.</option>
                                <option value="2">Probably not</option>
                                <option value="3">No, but it was still a good movie</option>
                                <option value="4">Yes</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="synopsis">Add a Synopsis</label>
                            <textarea className="form-control" id="review" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>;
}

function minimizeForm(props) {

    var display = document.getElementById("addForm").style.display;

    if (display === "block") {
            document.getElementById("addForm").style.display="none"
        }
    else{
        document.getElementById("addForm").style.display="block";
    }
}

function AddButton(props) {
    return (
        <button className="addButton-icon" onClick={<AddForm/>}>
        </button>
    )
}
function AddButtonClosed(props) {
    var i=0;
    
    switch (props.media) {
        case "Movie":
            i=0;
            break;
        case "Series":
            i=1;
            break;
        case "Book":
            i=2;
            break;
        case "Game":
            i=3;
            break;
        default:
            break;
    }

    return (        
        <div>
            <AddButton/>
        </div>
    )
}



function handleSubmit(e) {
    e.prevendDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
}

export default function AddMedia(props) {

    return (
        <AddForm media={props.media}/>
    )
}