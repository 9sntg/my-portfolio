import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initialCards = [
  {
    id: '1',
    title: '',
    text: (
    <>
    I'm a Systems and Computer Engineer focused on expanding my expertise in data analytics and AI.<br></br> I’m passionate about building meaningful products that serve real people and are powered by relevant, modern technologies. <br></br>Currently based between Colombia and Pittsburgh, I bring experience in both IT and business consulting,
    </>),
    image: '/images/about/black.png',
    color: '#ffffff'
  },
  {
    id: '2',
    title: '',
    text: '',
    image: '/images/about/bogota.png',
    color: '#ffffff'
  },
  {
    id: '3',
    title: '',
    text: '',
    image: '/images/about/parque_tayrona.png',
    color: '#ffffff'
  },
  {
    id: '4',
    title: '',
    text: '',
    image: '/images/about/paramo.png',
    color: '#ffffff'
  },
  {
  id: '5',
  title: '',
  text: (
    <>
    I'm currently an AI Engineering Intern at Atria, a startup developing AI agents to automate client conversations across social media. <br></br>I'm learning how to design consistent, scalable architectures and integrate AI systems with both social media platforms and customer infrastructures. <br></br>It’s a hands-on role where engineering meets communication.
    </>),
  image: '/images/about/black.png', // update with a relevant image path later
  color: '#ffffff'
},
{
  id: '6',
  title: '',
  text: (
    <>
    When I’m not building things, you’ll find me outdoors—hiking, or just wandering with Shiro, my dog and best adventure buddy.<br></br>I’m a recent Formula 1 fan (go McLaren!), and one of my deepest dreams is to someday cross the Pacific Ocean in a sailboat.,
    </>),
  image: '/images/about/black.png', // Replace with your preferred image
  color: '#ffffff'
},
{
  id: '7',
  title: '',
  text: '',
  image: '/images/about/pittsburgh.png', // Replace with your preferred image
  color: '#fff'
}
];

function SortableCard({ id, title, text, image, color = '#000' }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: '100%',
    height: '280px',
    borderRadius: '16px',
    cursor: 'grab',
    overflow: 'hidden',
    position: 'relative'
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            filter: 'brightness(85%)' // 👈 dim image slightly to make text pop
          }}
        />
      )}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: color || '#000',
          padding: '1rem 2rem 1rem 2rem', // top, right, bottom, left
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start', // align to left
          textAlign: 'left',
          zIndex: 2
        }}
        className="card-content"
      >
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

function About() {
  const [cards, setCards] = useState(initialCards);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = cards.findIndex((item) => item.id === active.id);
      const newIndex = cards.findIndex((item) => item.id === over.id);
      setCards(arrayMove(cards, oldIndex, newIndex));
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="about-wrapper" style={{ flex: 1 }}>
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">👋  Drag and drop the cards — have fun exploring!</p>
        <p className="about-subtitle" style={{ marginBottom: '2rem' }}>✨ These are glimpses into the places and moments that shaped me.</p>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={cards} strategy={verticalListSortingStrategy}>
            <div className="about-grid">
              {cards.map((card) => (
                <SortableCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  text={card.text}
                  image={card.image}
                  color={card.color}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </main>
      <Footer/>
    </div>
  );
}

export default About;