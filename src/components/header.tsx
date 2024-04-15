import { useState } from "react";
import nlwUniteIcon from "../assets/nlwUniteIcon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  const [isClickedAttendeeButton, setIsClickedAttendeeButton] = useState(true);
  const [isClickedEventButton, setIsClickedEventButton] = useState(false);

  function handlerClickAttendeeButton() {
    setIsClickedAttendeeButton(true);
    setIsClickedEventButton(false);
  }
  function handlerClickEventButton() {
    setIsClickedEventButton(true);
    setIsClickedAttendeeButton(false);
  }
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="Icon of nlwUniteIcon" />
      <div className="flex items-center gap-5">
        <NavLink
          href="/eventos"
          onClick={handlerClickEventButton}
          onLink={isClickedEventButton}
        >
          Eventos
        </NavLink>
        <NavLink
          href="/participantes"
          onClick={handlerClickAttendeeButton}
          onLink={isClickedAttendeeButton}
        >
          Participantes
        </NavLink>
      </div>
    </div>
  );
}
