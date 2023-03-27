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
                            <label> Title:</label><br/>
                            <input type="text" id="uname" name="uname" required/><br/>
                        </fieldset>
                        <fieldset>
                            <legend required>Type</legend>
                            <input type="radio" id="movie" name="group1" />
                            <label> Movie </label>
                            <input type="radio" id="series" name="group1"/>
                            <label> Series </label>
                            <input type="radio" id="game" name="group1"/>
                            <label> Games </label>
                            <input type="radio" id="book" name="group1"/>
                            <label> Books </label>
                        </fieldset>
                        <fieldset>
                            <legend>Genre</legend>
                            <input type="checkbox" id="horror" name="genre" />
                            <label >Horror</label>
                            <input type="checkbox" id="scifi" name="genre" />
                            <label >Sci-Fi</label>
                            <input type="checkbox" id="drama" name="genre" />
                            <label >Drama</label><br></br>
                            <input type="checkbox" id="comedy" name="genre" />
                            <label >Comedy</label>
                            <input type="checkbox" id="family" name="genre" />
                            <label >Family</label>
                            <input type="checkbox" id="action" name="genre" />
                            <label >Action</label>
                        </fieldset>
                        <fieldset>
                        <legend>Add</legend>
                        <label >Select the type: </label>
                        <select name="fruit" id="fruit">
                            <option value="banana">Banana</option>
                            <option value="apple">Apple</option>
                            <option value="pear">Pear</option>
                            <option value="grape">Grape</option>
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