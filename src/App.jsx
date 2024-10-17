// src/App.jsx
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MailboxList from './components/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails.jsx';
import NavBar from "./components/NavBar";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  
  const mailbox = {
    _id: 1,
    boxSize: 'Small',
    boxholder: 'Alex',
  };
  
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]); // Corrected this line
  };

  return ( // Added return statement
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailbox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
};

export default App;
