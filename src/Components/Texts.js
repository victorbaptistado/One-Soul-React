import {React, useState} from 'react';
import Body from './Body';
import yogaImage from "./Images/Challenges/01-Yoga-Lady.png";
import postureImage from "./Images/Challenges/04-Posture.jpg";
import danceImage from "./Images/Challenges/05-Dance.jpg";
import freddyMercuryImage from "./Images/Challenges/06-Freddy-Mercury.jpg";



const Texts = () => {


 /*
const [chapter2, setChapter2] = useState("");
const [chapter3, setChapter3] = useState("");
*/
  const [count, setCount] = useState(1);
  const [texts] = useState([

    /* ---- INTRO ---- */
    {
      intro: true,
      theory: true,
      header: "Are you ready?",
      body:
      <div>
      <br/><h4>Your journey to self-improvement is about to begin!</h4><br/></div>,
     
      challengeChoice: `Choose your challenge:`,
      id: 1,
    },
    {
      intro: true,
      theory: true,
      header: "Choose Chapter",
      return: true,
      id: 2,
    },

    /* ---- CHAPTER 1 ---- */

    {
      chapter1: true,
      theory: true,
      header: "INSTRUCTIONS",
      body:  
      <>
        <div>
          <h4>Welcome to your very first challenge! I guarantee, your life will change. 
          During this chapter we'll talk about the use of the body to improve your social skills.</h4>
        </div>
        <div className='container1'>
          <h4>Click "Next" everytime you complete a challenge.</h4>  
        </div>
      </>,
      next: true,
      returnToChapters: true,
      id: 3
    },
    {
      chapter1: true,
      theory: true,
      header:"Body and Mind",
      progressbar: true,
      body:
      <>
        <div>
          <p className='center'>Mind affects body. Body affects mind.</p>
        </div>
        <div className='container1'>
          <p className='center'>What we'll seek during Chapter 1 is to enhance Social Energy via body.
          We'll focus on the correct use of the body & how you can alter your inner state simply by moving it. 
          Using your body correctly is definitely the easiest path 
          for a mindset change that will lead you to an active social presence.</p>
        </div>
        <div className='container1'>
          <p className='center'>Remember: a good body starts with healthy habits, thus take care of your body!
          Improve your diet, do physical exercises regularly (lifting weights, jogging, martial arts), stretch everyday -  
          These are the foundations for social presence. 
          We won't dive too deep into topics of Health during this course.
          Later courses will show you how to do that. 
          For now we'll focus solely on Social Energy and Charisma enhance.</p>
        </div>
      </>,
      return: true,
      next: true,
      id: 4,
    },
    {
      chapter1: true,
      theory: true,
      header: "Posture!",
      progressbar: true,
      theoryExerciseAllow: true,
      imageChallenge: true,
      exercise: 
      <p>Stand up straight. Shoulders back! 
      Level your head and look above - upgrade your posture. 
      Every moment when you feel your mood sinking or when you need to boost your confidence, find that posture.`</p>,
      exerciseInfo: 
      <p className='center'>Why is it so important? As body affects mind, finding a correct posture can induce you 
      to a state of equilibrium and optimal energy. 
      It can reduce social anxiety and boost levels of Social Energy.</p>,
  image: <img className="image-challenge" src={postureImage}/>,
  return: true,
  next: true,
    id: 5,
    },
    {
      chapter1: true,
      theory: true,
      header: "Music Boost",
      progressbar: true,
      body: 
      <>
        <div>
        <p className='center'>Music can be an amazing tool for social presence. 
        It's one of the best ways to alter mind states and boost Social Energy.</p>
        <p className='center'>Loads of researches have found that music benefits memory and cognitive performance, 
        it reduces depression and anxiety - among other benefits.</p>
        </div>
        <div className='container1'>
        <p className='center'>
        Time for fun! Go to your phone, create a playlist (or many as you want). 
        Call it "Social Boost", whatever you may want to identify it. 
        Before an upcoming event, ask yourself: how do you wish to behave? 
        If it's a party or a work meeting which you need to evoque strong social presence, an energetic playlist may suit you. 
        If it's an event in which you need to be on control and intellectually aware, classic music may be the answer.
        Find songs that works for you in each occasion.</p></div>
      </>,
      return: true,
      next: true,
      id: 6,
      },
      {
        chapter1: true,
        theory: true,
        header: "Dance!",
        progressbar: true,
        theoryExerciseAllow: true,
        imageChallenge: true,
        exercise: `Once you have created your playlist, dive into the song. 
But how? It may sound weird, but start dancing! 
Yes, dance alone, dance with yourself. 
That way you're warming up your Social Energy, boosting your mood.   
You're getting ready for the social occasion. 
Have fun!
`,
exerciseInfo: `Remember, body affects mind: 
Once you start moving, following the song's rythm, you're altering your inner state. 
You're leading your mind to match the body's energy, which boosts your Social Energy. `,
        image: <img className="image-challenge" src={danceImage}/>,
        return: true,
        next: true,
        id: 7,
        },

        {
        chapter1: true,
        theory: true,
        header: "Gesture Anchor",
        progressbar: true,
        imageChallenge: true,
        body: `Have you asked yourself why artists have their own signature moves? 
Look at that picture... 
Freddy Mercury signature's gesture that he evoqued in literally every concert.
      
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
        return: true,
        next: true,
        id: 8,
        },


      {        
        chapter1: true,   
        challenge: true,
        header: <h2>Challenge!</h2>,
        body: <h4>{`Now is time to apply what we have learned so far. 
You're about to go into the field and socialize.
Before your leap of faith, let's warm-up. 
Let's boost your social energy.
Click the "forward arrow" to start your first challenge!`}</h4>,

        warmUp1: <h4>{`Remember? 
Good posture! 
Straight up your column, erected. 
Face right the horizon, shoulders falling to the back.`}</h4>,

        warmUp2: <h4>{`Now choose a song with loads of energy in it. 
Start dancing, follow its rythm. Don't be shy! 
You don't need to dance good.
As crazy as you go, the better.
Imitate an animal if you want, beastialize yourself. 
Come on, release your inner energy!`}</h4>,

        warmUp3: <h4>{`Now find a gesture that simbolizes 
all the energy you've awaken from that dance. 
Hold that gesture. You've got all your energy right there! 
Remember that.`}</h4>,

        warmUp4: <h4>{`Last, but not least... 
before you go to the field and socialize: smile.
Open up that shiny smile. Even if you don't actually want to, do it. 
Now, your quest is about to begin.`}</h4>,

        mainChallenge:
        <>
        <h4>{`Now that you boosted your energy, 
is time to go to the field and socialize.
Your very first challenge is:`}</h4>

<div className='challengeBox'>
<h4>{`Walk up to a barista in a coffee-shop and start a conversation.`}</h4>
</div>

<h4>{`Ask them how are they doing.
Make a comment about how busy that place is (or how busy it's not).
Mix questions and assertive setences 
(you don't want to be asking questions all the time).
Assertive setences about the coffee shop, the products, 
maybe even about the staff's style (if that fits: you don't be too intimate at first).
Try to be light and funny. Don't be polemic or exagerated.
Notice when the conversation has ended, then say goodbye - and smile.`} </h4>

<h4>{`Once you do that, create that habit: have small talks with staff members.
Coffee shops, supermarkets, restaurants, pubs. Be polite and interested about them. 
That's a great way to build your social confidence. 
Those working in costumer services are used to small talks,
and they might appreaciate some polite attention.`}</h4>
</>,

      mainChallengeInfo:
<h4>{`Remember! 
That's a very normal thing to do. 
Of course you will talk with him/her! 
That's what you were made for.
You're a social specie, you're meant to do that. 
Take every interaction with naturality 
(even if it feels weird for you at first, act as it's normal). 
Every word you say means who you're.`}</h4>,
        return: true,        
        next: true,
        
        id: 9,
      },
      {
        chapter1: true,
        congratulation: true,
        header: "Congratulations!",
        progressbar: true,
        body: `
You've completed the first part of the Social Development course.

What have you learn so far? 
Body affects mind.
You can use body to direct your emotions.
Therefore, you can boost your social energy via body.
        
Next chapter we'll cover the mind.`,
        return: true,
        id: 10,
      },

    /* ---- CHAPTER 2 ---- */

    {
      chapter2: true,
      theory: true,
      header: "INSTRUCTIONS",
      body:  <div>
      <h4>{`The second Chapter is about to begin!
      We'll build a correct mind-state for a better social performance.

      Click "Next" everytime you complete a challenge.`}</h4>  
      </div>,
      next: true,
      returnToChapters: true,
      id: 11
    },


    { 
      chapter2: true,
      theory: true,
      header: "Mindset Builder",
      progressbar: true,
      imageChallenge:true,
      body: `So far we've learned how body affects mind. 
If you do the exercises suggested in Chapter 1 regularly 
these techniques will become second nature.

Now it's time for us to dive into the realm of the mind.
Let's Build your Mind-Set! Let's be opened to a richer state.
      `,
      image: <img className="image-challenge" src={yogaImage}/>,
      return: true,
      next: true,
      id: 12,
    },

    {
      chapter2: true,
      theory: true,
      header: "Awareness!",
      progressbar: true,
      body: `To be socially present is to be aware of what surrounds you. 
Is to leave your inner world, then to engage with the external world.

Awareness is improved by meditation. 
When we talk about awareness, your breath becomes your best friend - 
concentrated breathing is the key for awareness.`,
      return: true,
      next: true,
      id: 13,
      },

    {
      chapter2: true,
      theory: true,
      header: "Presence Meditation",
      progressbar: true,
      theoryExerciseAllow: true,
      imageChallenge: true,
      exercise: `On construction`,
exerciseInfo: `

Everytime you lose focus onto something, concentrate for a few seconds on your breathing.
before reconnecting to.`,
  image: <img className="image-challenge" src={""}/>,
  return: true,
  next: true,
    id: 14,
    },


    {   
      chapter2: true,        
      theory: true,
      header: "The Magician",
      progressbar: true,
      body: `Imagination is key to succeed. Imagination can release a powerfull social mindset.`,
      image: <img className="image-challenge" src={""}/>,
      return: true,
      next: true,
      id: 15,
    },

    {
      chapter1: true,
      theoryForm: true,
      header: "Role Model",
      progressbar: true,
      body: `Now I want you to think about 3 people who you can model their actions. 
Write down their names, we'll use them as models to achieve your goals. 
Reflect about their values and beliefs. In time of doubts, ask yourself: what would they do? `,
      return: true,          
      next: true,
      id: 16,
    },

      { 
        chapter2: true,
        theory: true,
        header: "DEMO VERSION",
        body: `This app is a demonstration version, still in very early stages.`,
        id: 17,
      },
  

`
      Silence is a highly underestimated art. 
      To be a good listener is one of the : 
      Let them speak, lead your thoughts towards what's been told: they will love you for that. 
`     


  ]);
  
    let textFilt = texts.filter(text => text.id === count) ; 

    return (

   <>
   

{textFilt.map((text) => 
    
    <>
    <Body text={text} count={count} setCount={setCount}
     />
    </>
    )}



      </>
  

    )  
        }

export default Texts
