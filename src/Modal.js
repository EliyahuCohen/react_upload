import React from "react";
import "./index.css";

function Modal({ user, setIsModalOpen }) {
  const {
    bio,
    company,
    date_of_sub,
    firstname,
    id,
    jobtitle,
    lastname,
    speaker_head_shot_to_display,
    website,
  } = user;
  return (
    <div className="modal">
      <div className="modalInfo">
        <p>{firstname + " " + lastname}</p>
        <p>{company}</p>
        <img
          src={speaker_head_shot_to_display}
          alt="speaker head_shot picture"
        />
        <p>{bio}</p>
        <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
      </div>
    </div>
  );
}

export default Modal;
