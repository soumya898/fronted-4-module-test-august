// import './App.css';
// import {Routes, Route} from 'react-router-dom'
// import HomePage from './Components/HomePage';
// import DetailsPage from './Components/DetailsPage';

// function App() {
//   return (
//     <div className="App">
//       <nav>
//         <h1>Social Media  For Travellers </h1>
//       </nav>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/item/:id" element={<DetailsPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa'; // Import icons
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';

function App() {
  const navStyles = {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  };

  const logoStyles = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const linkContainerStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: 'black',
    marginLeft: '20px',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  };

  const iconStyles = {
    fontSize: '24px', // Adjust the size as needed
    marginBottom: '5px',
  };

  const nameStyles = {
    display: 'none',
  };

  const linkHoverStyles = {
    ':hover': {
      [nameStyles]: {
        display: 'block',
      },
    },
  };

  const searchStyles = {
    width: '100%', // Set the width to 100% to fit the container
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '10px',
    boxSizing: 'border-box',
  };

  return (
    <div className="App">
      <nav style={navStyles}>
        <div>
          <Link to="/" style={logoStyles}>
            TravelMedia.in
          </Link>
        </div>
        <div style={{ ...linkContainerStyles, justifyContent: 'center' }}>
          <Link to="/" style={{ ...linkStyles, ...linkHoverStyles }}>
            <FaHome style={iconStyles} />
            <span style={nameStyles}>Home</span>
          </Link>
          <Link to="/profile" style={{ ...linkStyles, ...linkHoverStyles }}>
            <FaUser style={iconStyles} />
            <span style={nameStyles}>Profile</span>
          </Link>
        </div>
      </nav>
      <h1 style={{ textAlign: 'center', margin: '20px 0', fontSize: '24px' }}>
        Social Media For Travellers
      </h1>
      <input type="text" placeholder="Search..." style={searchStyles} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
