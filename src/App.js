import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleUserInfo, setSingleUserInfo] = useState({});
  const url = "https://youngstartup.io/api/cwebsite/get_speakers_dyn";

  const gettingData = async () => {
    //just to make sure that the value is true in any case
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setUsers(data.speakers);
  };
  const popUpModal = (user) => {
    setIsModalOpen(!isModalOpen);
    setSingleUserInfo(user);
  };
  useEffect(() => {
    gettingData();
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1 className="loading">Loading</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="headline">MEET OUR 30 FEATURED INVESTORS </h1>
        <div className="users">
          {isModalOpen && (
            <Modal user={singleUserInfo} setIsModalOpen={setIsModalOpen} />
          )}
          {users.map((user) => {
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
            } = user; //if we wanted in any case to add something
            return (
              <div className="singleUser" key={id}>
                <img
                  src={speaker_head_shot_to_display}
                  className="userImg"
                  onClick={() => popUpModal(user)}
                />
                <h3>{firstname}</h3>
                <p>{company}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
