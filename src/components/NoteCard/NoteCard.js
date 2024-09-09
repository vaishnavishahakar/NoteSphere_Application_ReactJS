import React from 'react';
import './NoteCard.css';
import IconDelete from "./delete.png"

function titleCase(str){
    if(str.length===0 ){
        return 
    }
    return str[0].toUpperCase() + str.slice(1);
}

function deleteNote (index) {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(savedNotes));
    window.location.reload();
}

function NoteCategory({category}){

const CATEGORY_EMOJIS = {
    "shopping": "🛒",
    "to-do": "📋",
    "work": "💼",
    "meetings": "👩🏻‍💻",
    "personal": "👨‍👩‍👦",
    "learning": "📚",
    "health/fitness": "🏋",
    "travel": "✈️",
    "finance": "💸"
}

    return(
        <div className={`note-card-category bg-${category}`}>
           <span className='note-category-emoji'>{CATEGORY_EMOJIS[category]}</span>
            {titleCase(category)}
        </div>
    )
}

function NoteCard({index, title, description, category, emoji}) {
  return (
    <div className='note-card'>
        <div className='note-card-emoji'>
            {emoji}
        </div>
        <div>
            <h3 className='note-card-title'>{title}</h3>
            <p className='note-card-description'>{description}</p>
            <NoteCategory category={category} />

            <img src={IconDelete} className='note-card-delete' alt='Delete' 
            onClick={()=>{deleteNote(index);
            }}/>
        </div>
    </div>
  );
}

export default NoteCard;
