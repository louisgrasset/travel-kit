import React from 'react';
import './App.scss';
import { Carousel, CreditCard, Event, Nav, Travel, Travelers, TravelersDetails, Week } from './components';
import iconDocument from './images/document.svg'
import iconHome from './images/home.svg'
import iconMessage from './images/message.svg'

function App() {
  return (
    <div className="app">
      <p className="attribution">ReactJS implementation of <a target="_blank" rel="noopener" href="https://dribbble.com/ghulaam-rasool">Ghulam Rasool</a>'s work <a target="_blank" rel="noopener" href="https://dribbble.com/shots/14593121-Travel-UI-Elements">available on Dribble</a></p>
      <Travel departure={{
        airport: {
          code: 'NYC',
          name: 'New York City'
        },
        date: new Date(2021, 1, 2, 12, 32, 0)
      }} arrival={{
        airport: {
          code: 'LDN',
          name: 'London'
        },
        date: new Date(2021, 1, 2, 17, 32, 0)
      }} />
      <Travelers travelers={[
        {
          name: "David",
          image: "https://randomuser.me/api/portraits/men/21.jpg"
        },
        {
          name: "Alice",
          image: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
          name: "Pierre",
          image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
          name: "Jean",
          image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          name: "Clémence",
          image: "https://randomuser.me/api/portraits/women/85.jpg"
        },
      ]} />
      <TravelersDetails travelers={[
        {
          name: "David",
          job: "Account manager",
          time: 43,
          image: "https://randomuser.me/api/portraits/men/21.jpg"
        },
        {
          name: "Alice",
          job: "Account manager",
          time: 52,
          image: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
          name: "Pierre",
          job: "Account manager",
          time: 12,
          image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
          name: "Jean",
          job: "Account manager",
          time: 4,
          image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          name: "Clémence",
          job: "Account manager",
          time: 4,
          image: "https://randomuser.me/api/portraits/women/85.jpg"
        },
      ]} />
      <Event from={new Date(2021, 1, 1, 10, 0, 0, 0)} to={new Date(2021, 1, 1, 11, 0, 0, 0)} />
      <Event from={new Date(2021, 1, 1, 10, 0, 0, 0)} to={new Date(2021, 1, 1, 11, 0, 0, 0)} action={() => { }} />
      <Nav
        links={[
          {
            icon: iconHome,
            text: 'Home',
            url: 'https://example.com',
          },
          {
            icon: iconMessage,
            text: 'Message',
            url: 'https://example.com',
          },
          {
            icon: iconDocument,
            text: 'Documents',
            url: 'https://example.com',
          }
        ]}
      />
      <Week selected={1} days={[
        { date: new Date(2021, 1, 12), event: false },
        { date: new Date(2021, 1, 13), event: true },
        { date: new Date(2021, 1, 14), event: false },
        { date: new Date(2021, 1, 15), event: false },
        { date: new Date(2021, 1, 16), event: true },
        { date: new Date(2021, 1, 17), event: false },
        { date: new Date(2021, 1, 18), event: false },
      ]} />
      <CreditCard holder={"John Doe"}
        numbers="4406822941034525"
        system="visa" />
      <Carousel
        heading={{
          title: "Top 10 places",
          subtitle: "You must visit"
        }}
        slides={[
          'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=560&q=60',
          'https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFyaXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=560&q=60',
          'https://images.unsplash.com/photo-1590893322091-473316efeb78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcmlzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=560&q=60',
          'https://images.unsplash.com/photo-1454386608169-1c3b4edc1df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=560&q=60',
        ]} />
    </div>
  );
}

export default App;
