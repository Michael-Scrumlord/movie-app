import React from "react";

function AddForm(props) {
    return (
        <div className="addForm-popup" id="addForm">
            <form className="EntryForm">
                <fieldset className="FormBox">
                    <fieldset>
                        <legend> Add a {props.media}</legend>
                        <label className="formLabels"> Title: </label>
                        <input type="text" id="uname" name="uname" required/><br/>
                        <label className="formLabels"> Year: </label>
                        <input type="number" min="1900" max="2024" step="1"/>
                    </fieldset>
                    <fieldset>
                        <legend>Genre</legend>
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
                    </fieldset>
                    <fieldset>
                    <legend>Add</legend>
                    <label className="formLabels">Rate the story: </label>
                    <select name="rating" id="story">
                        <option value="1">The worst</option>
                        <option value="2">Not that great</option>
                        <option value="3">It was OK</option>
                        <option value="4">Top Notch</option>
                    </select><br/>
                    <label className="formLabels">Rate the originality: </label>
                    <select name="rating" id="originality">
                        <option value="1">Generic</option>
                        <option value="2">Apple</option>
                        <option value="3">Pear</option>
                        <option value="4">Grape</option>
                    </select>
                    <label className="formLabels">Would you recommend to a friend? </label>
                    <select name="rating" id="recommend">
                        <option value="1">No, I wouldn't subject someone to this.</option>
                        <option value="2">Probably not</option>
                        <option value="3">No, but it was still a good movie</option>
                        <option value="4">Yes</option>
                    </select>
                    </fieldset>
                    <legend>Leave a review:</legend>
                    <textarea 
                        id="textBox" 
                        placeholder="Enter your comment here"
                        rows="7"
                        cols="25"></textarea><br/>
                    <button type="submit" variant="secondary">Send</button>
                    <button onClick={minimizeForm}>Close</button>
                </fieldset>
            </form>
        </div>
    )
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

function AddButton() {
    return (
        <button className="addButton-icon" onClick={minimizeForm}>
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
            <AddButton />
            <AddForm media={props.media}/>
        </div>
    )
}

export default function AddMedia(props) {
    return (
        <AddButtonClosed media={props.media}/>
    )
}