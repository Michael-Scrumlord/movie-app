import React from "react";
import useState from 'react'

function openForm() {
    const formStyle = { display: "block" };

    return(
        document.getElementById("addForm").style.display = "block"
    )
  }
  
  function closeForm() {
    return(
        document.getElementById("addForm").style.display = "none"
        )
    }

function AddButton() {
    return (
        <button className="addButton-icon" onClick={openForm}>
        </button>
    )
}
function AddButtonClosed(props) {
    return (        
        <div>
            <AddButton />
            <div className="addForm-popup" id="addForm">
                <form className="EntryForm">
                    <fieldset className="FormBox">
                        <fieldset>
                            <legend> Add a Title</legend>
                            <label className="formLabels"> Title: </label>
                            <input type="text" id="uname" name="uname" required/><br/>
                            <label className="formLabels"> Year: </label>
                            <input type="number" min="1900" max="2024" step="1"/>
                        </fieldset>
                        <fieldset>
                            <legend required>Type</legend>
                            <input type="radio" id="movie" name="group1" />
                            <label className="formLabels"> Movie </label>
                            <input type="radio" id="series" name="group1"/>
                            <label className="formLabels"> Series </label>
                            <input type="radio" id="game" name="group1"/>
                            <label className="formLabels"> Games </label>
                            <input type="radio" id="book" name="group1"/>
                            <label className="formLabels"> Books </label>
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
                            <option value="banana">Banana</option>
                            <option value="apple">Apple</option>
                            <option value="pear">Pear</option>
                            <option value="grape">Grape</option>
                        </select><br/>
                        <label className="formLabels">Rate the originality: </label>
                        <select name="rating" id="originality">
                            <option value="banana">Generic</option>
                            <option value="apple">Apple</option>
                            <option value="pear">Pear</option>
                            <option value="grape">Grape</option>
                        </select>
                        <label className="formLabels">Would you recommend to a friend? </label>
                        <select name="rating" id="recommend">
                            <option value="banana">No, I wouldn't subject someone to this.</option>
                            <option value="apple">Probably not</option>
                            <option value="pear">No, but it was still a good movie</option>
                            <option value="grape">Yes</option>
                        </select>
                        </fieldset>
                        <legend>Leave a review:</legend>
                        <textarea 
                        id="textBox" 
                        placeholder="Enter your comment here"
                        rows="7"
                        cols="25"></textarea>
                        <br/>
                        <button type="submit" variant="secondary">Send</button>
                        <button onClick={closeForm}>Close</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default function AddMedia(props) {
    return (
        <AddButtonClosed media={props.media}/>
    )
}