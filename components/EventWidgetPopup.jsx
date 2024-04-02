import React from 'react'
import EventWidget from '@/components/EventWidget'
import Popup from '@/components/Popup'
import { useState } from 'react'
const EventWidgetPopup = (props) => {
  const [isPopup, setIsPopup]=useState(false);
  return (
    <>
      <EventWidget popup={setIsPopup} title={props.title} img={props.img} date={props.date}  enddate={props.enddate} />
      {isPopup && <Popup popup={setIsPopup} title={props.title} loc={props.loc} link={props.link} date={props.date}  enddate={props.enddate} desc={props.desc}/>}
    </>
  )
}

export default EventWidgetPopup