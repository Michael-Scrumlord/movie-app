import React, { useState } from 'react';
import { MediaData } from './MediaData';

const ArrayComponent = (props) => {
  const [items, setItems] = useState({MediaData});
  const [newItem, setNewItem] = useState();
  

  const handleInputChange = (event) => {
    //setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    //setItems([...items, newItem]);
    //setNewItem('');
  };

  return (
    <div>
        {items[0][1]}
      <input type="text" value={newItem} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <div  >
        <form className="EntryForm" method ="post" onSubmit={handleAddItem}>
            <fieldset className="FormBox">
                <fieldset>
                    <legend> Add a </legend>
                    <label className="formLabels"> Title: </label>
                    <input name="title" required/><br/>
                    <label className="formLabels"> Year: </label>
                    <input name = "Year" type="number" min="1900" max="2024" step="1"/>
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
                    <option value="2">Pretty typical but not bad</option>
                    <option value="3">Not many movies like this</option>
                    <option value="4">I've never seen anything like this</option>
                </select>
                <label className="formLabels">Would you recommend to a friend? </label>
                <select name="rating" id="recommend">
                    <option value="1">No, I wouldn't subject someone to this.</option>
                    <option value="2">Probably not</option>
                    <option value="3">No, but it was still a good movie</option>
                    <option value="4">Yes</option>
                </select>
                </fieldset>
                <legend>Synopsis:</legend>
                <textarea 
                    id="textBox" 
                    placeholder="Enter your comment here"
                    rows="7"
                    cols="25"></textarea><br/>
                <button type="submit" variant="secondary">Send</button>
                <button type="reset">Close</button>
            </fieldset>
        </form>
    </div>
        <form >
            <div className="form-group">
                <h1>Add a </h1>
                <label for="title">Title: </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ArrayComponent;

