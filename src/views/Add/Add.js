import React, { useState } from "react";
import "./Add.css";
import HomeButton from "./../../components/HomeButton/HomeButton";
import EmojiPicker from "emoji-picker-react";
import toast from 'react-hot-toast';

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

  const addNote = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    const noteObject = {
      title,
      description,
      category,
      emoji,
    };
    notes.push(noteObject);
    localStorage.setItem("notes", JSON.stringify(notes));
    toast.success("Note added successfully!");
    setTitle("");
    setDescription("");
    setCategory("");
    setEmoji("");
  };

  return (
    <div>
      <h1 className="text-center text-primary" style={{marginBottom: "50px"}}>✍️ Add Notes</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="user-input"
      />

      <input
        type="text"
        placeholder="Desciption"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="user-input"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)} className="user-input user-input-select">
        <option value="">Select Category</option>
        <option value="shopping">Shopping</option>
        <option value="to-do">To-Do</option>
        <option value="work">Work</option>
        <option value="meetings">Meetings</option>
        <option value="personal">Personal</option>
        <option value="learning">Learning</option>
        <option value="health/fitness">Health/Fitness</option>
        <option value="travel">Travel</option>
        <option value="finance">Finance</option>
      </select>

      {/* <input
        type="text"
        placeholder="Emoji"
        value={emoji}
        onChange={(e) => {
          setEmoji(e.target.value);
        }}
        disabled
      /> */}

      <EmojiPicker 
      open={openEmojiDialog} 
      // height={"300px"} 
      // width={"400px"}
      skinTonesDisabled={true}
      onEmojiClick={(emojiObject)=>{
        setEmoji(emojiObject.emoji)
        setOpenEmojiDialog(false)
      }}
      className="emoji-picker"
      />
      
      <div className="user-input user-input-emoji" onClick={() => setOpenEmojiDialog(true)}>
      {emoji ? emoji : "Select Emoji"}
      </div>

      <button
        type="button"
        className="btn btn-primary add-note-button"
        onClick={addNote}
      >
       ✙ Add Note
      </button>

      <HomeButton />
    </div>
  );
}

export default Add;
