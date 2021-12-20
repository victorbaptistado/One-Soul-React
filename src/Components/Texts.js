import {React, useState} from 'react'
import Body from './Body';
import yogaImage from "./Images/Challenges/01-Yoga-Lady.png";
import postureImage from "./Images/Challenges/04-Posture.jpg";
import danceImage from "./Images/Challenges/05-Dance.jpg";
import freddyMercuryImage from "./Images/Challenges/06-Freddy-Mercury.jpg";





const Texts = () => {


 
    const [count, setCount] = useState(1);
    const [texts, setText] = useState([
        {
          theory: true,
          header: "Are you ready?",
          body:
          <div>
          <br/><h4>Welcome to your very first challenge! I guarantee you your life will change.</h4><br/></div>,
         
          challengeChoice: `Choose your challenge:`,
          id: 1,
        },
        {
          theory: true,
          header: "INSTRUCTIONS",
          body:  <div>
          <h4>Congratulation for taking this step. Your journey to self-improvement is about to begin! </h4> 
          <br/>
          <h4>Once you accomplish a challenge, click the NEXT button. </h4>
          </div>,
          next: true,
          id: 2,
        },
        { theory: true,
          header: "Mindset Builder",
          progressbar: true,
          imageChallenge:true,
          body: `It all starts with the Mind-Set. 
It's about opening yourself to a richer state and dive into it. 

Before we go to the field and build-up your social skills on practice, 
we'll develop your inner state to a happier & more confident state. 

Let's build your mindset now!
          `,
          image: <img className="image-challenge" src={yogaImage}/>,
          next: true,
          id: 3,
        
        },
        {
      theory: true,
      header:"Body and Mind",
      progressbar: true,

      body:`Mind affects body. 
Body affects mind.

What we'll seek during this first topic is to enhance Social Energy via body.
We'll focus on the correct use of the body & how you can alter your inner state simply by moving it. 
Using your body correctly is definitely the easiest path 
for a mindset change that will lead you to an active social presence. 

Remember: a good body starts with healthy habits, thus take care of your body!
Improve your diet, do physical exercises regularly (lifting weights, jogging, martial arts), stretch everyday -  
These are the foundations for social presence. 
We won't dive too deep into topics of Health during this course.
Later courses will show you how to do that. 
For now we'll focus solely on Social Energy and Charisma enhance.
 `,
        next: true,
          id: 4,
        },
        {
          theory: true,
          header: "Posture!",
          progressbar: true,
          theoryExerciseAllow: true,
          imageChallenge: true,
          exercise: `Stand up straight.
Shoulders back! 
Level your head and look above! 
Upgrade your posture. 
Every moment when you feel your mood sinking, 
or when you need to boost your confidence, 
find that posture.
 `,
exerciseInfo: `Why is it so important? As body affects mind, finding a correct posture can induce you 
to a state of equilibrium and optimal energy. 
It can reduce social anxiety and boost levels of Social Energy.`,
      image: <img className="image-challenge" src={postureImage}/>,
      next: true,
        id: 5,
        },
        {
          theory: true,
          header: "Music Boost",
          progressbar: true,
          body: `Music can be an amazing tool for social presence. 
It's one of the best ways to alter mind states and boost Social Energy. 
Loads of researches have found that music benefits memory and cognitive performance, 
it reduces depression and anxiety - among other benefits. 
  
Time for fun! Go to your phone, create a playlist (or many as you want). 
Call it "Social Boost", whatever you may want to identify it. 
Before an upcoming event, ask yourself: how do you wish to behave? 
If it's a party or a work meeting which you need to evoque strong social presence, an energetic playlist may suit you. 
If it's an event in which you need to be on control and intellectually aware, classic music may be the answer.
Find songs that works for you in each occasion.`,
          next: true,
          id: 6,
          },
          {
            theory: true,
            header: "Dance!",
            progressbar: true,
            theoryExerciseAllow: true,
            imageChallenge: true,
            exercise: `Once you have created your playlist, dive into the song. 
But how? It may sound weird, but start dancing! 
Yes, dance alone, dance with yourself. 
That way you're warming up your Social Energy, boosting your mood.   
You're getting ready for the social occasion. Have fun!
 `,
 exerciseInfo: `Remember, body affects mind: 
 Once you start moving, following the song's rythm, you're altering your inner state. 
 You're leading your mind to match the body's energy, which boosts your Social Energy. `,
            image: <img className="image-challenge" src={danceImage}/>,
            next: true,
            id: 7,
            },

            {
            theory: true,
            header: "Gesture Anchor",
            progressbar: true,
            imageChallenge: true,
            body: `Have you asked yourself why artists have their own signature moves? 
Look at that picture, Freddy Mercury signature's gesture he evoqued in literally every concert.
          
Many artists do that intuitively, they are gathered by the song.
Their gestures helps them flow into the mood. 

Good performers are state masters, 
they can shift their moods so to match the form of art they're expressing.
Their entire body reveals that state. The gestures they evoque anchor them into that state of mind.
Consciously or unconsciously, it helps them to keep the mood. By that, they boost their confidence.

The good part is, you don't need to be a great artist to use it.
A signature's gesture can boost anyone's Social Energy and confidence. 
It's so easy! Let's create yours...`,
            image: <img className="image-challenge" src={freddyMercuryImage}/>,
            next: true,
            id: 8,
            },

            {
              theoryForm: true,
              header: "Role Model",
              progressbar: true,
              body: `Now I want you to think about 3 people who you can model their actions. 
    Write down their names, we'll use them as models to achieve your goals. 
    Reflect about their values and beliefs. In time of doubts, ask yourself: what would they do? `,
              next: true,
              id: 9,
            },
            { 
              theory: true,
              header: "DEMO VERSION",
              progressbar: true,
              body: `This app is a demonstration version, still in very early stages.`,
              id: 11,
            },
          {           
            theory: true,
            header: "The Magician",
            body: `Now that we've learned about how body affects mind, it's time for us to dive into the imagination realm.
  
Imagination is key to success. Imagination can release a powerfull social mindset.`,
            image: <img className="image-challenge" src={""}/>,
            id: "",
          },
          {           
            challenge: true,
            header: "Challenge!",
            body: `Now is time.`,
            bodyChallenge1: "Yes!",
            bodyChallenge2: "Yes2",
            next: true,
            id: 10,
          },
      ])
   


      let textFilt = texts.filter(text => text.id === count) ; 

    return (
      textFilt.map((text) => 
    <>
    <Body text={text} count={count} setCount={setCount}/>

    </>  
    ))
}

export default Texts
