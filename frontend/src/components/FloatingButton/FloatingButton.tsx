import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';

import {Fab, Tooltip} from '@material-ui/core';

import './FloatingButton.style.css';
import AddModal from '../AddModal';

const FloatingButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return <div className="floating-button-container" >
    <Tooltip title="Enter edit mode">
      <Fab color="primary" onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
    </Tooltip>
    <AddModal open={open} handleClose={handleClose} />
  </div>
};

export default FloatingButton;
