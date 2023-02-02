import React from 'react';

// icon
import todoList from '../assets/icons/icon-todo.svg';
import Planning from '../assets/icons/icon-planning.svg';
import Reminders from '../assets/icons/icon-reminders.svg';
import Calendar from '../assets/icons/icon-calendar.svg';

interface ChildProps {
  myRef: React.RefObject<HTMLDivElement>;
}

export const FeatureNav = [
  {
    name: 'Todo List',
    icon: todoList
  },
  {
    name: 'Calendar',
    icon: Calendar
  },
  {
    name: 'Reminder',
    icon: Reminders
  },
  {
    name: 'Planning',
    icon: Planning
  }
];

const Features: React.FC<ChildProps> = ({ myRef }) => {
  return (
    <div className="active_card" ref={myRef}>
      <div className="active_card_container">
        {FeatureNav.map((item) => {
          return (
            <div className="active_card_container-item" key={item.name}>
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
