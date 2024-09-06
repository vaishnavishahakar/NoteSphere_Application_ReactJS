import React from 'react';
import './Home.css';
import ImgSecure from './secure.png';
import ImgBrain from './brain.png';
import ImgHeart from './heart.png';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import {Link} from 'react-router-dom'

const FEATURES = [
  {
    featureImg: ImgSecure,
    featureText: "Your notes are securely saved in local storage, ensuring privacy and instant access anytime."
  },
  {
    featureImg: ImgBrain,
    featureText: "Capture your ideas and thoughts effortlessly, helping you brainstorm and plan with ease."
  },
  {
    featureImg: ImgHeart,
    featureText: "Loved by 100+ users. Feebacks are always welcome!"
  }
]

function home() {
  return (
    <div>
      <h1 className='text-center text-primary app-title'>NoteSphere 📝🌐</h1>
      <p className='text-center text-secondary' style={{letterSpacing: "1px"}}>
        "Your All-in-One Hub for Effortless Note Management!!"
      </p>

      <div>
        <h3 className='text-center text-primary' style={{marginTop: "50px", fontSize: "20px"}}>Why You Should Use NoteSphere?</h3>
      
      <div className='features-container'>
        {
          FEATURES.map((feature)=>{
            const {featureImg, featureText} = feature;
            return (
              <FeatureCard 
                featureImg={featureImg}
                featureText={featureText}
              />
            );
          })
        }
      </div>
      </div>

      <div className='buttons-container'>
        <Link to="/add">
        <button className='btn btn-primary'>✍️ ADD NOTES</button>
        </Link>

        <Link to="/show">
        <button className='btn btn-secondary'>📖 SHOW NOTES</button>
        </Link>
      </div>
    </div>
  );
}

export default home;

