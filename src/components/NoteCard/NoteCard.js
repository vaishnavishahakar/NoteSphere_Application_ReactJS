import React from 'react';
import './NoteCard.css';

function titleCase(str){
    return str[0].toUpperCase() + str.slice(1);
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

function NoteCard({title, description, category, emoji}) {
  return (
    <div className='note-card'>
        <div className='note-card-emoji'>
            {emoji}
        </div>
        <div>
            <h3 className='note-card-title'>{title}</h3>
            <p className='note-card-description'>{description}</p>
            <NoteCategory category={category} />
        </div>
    </div>
  );
}

export default NoteCard;
