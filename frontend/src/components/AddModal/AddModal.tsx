import React, {useReducer, useState} from 'react';
import './AddModal.styles.css';

import {
  Button, CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { postPhone } from '../../adapters';

enum Actions {
  RESET = 'RESET',
  UPDATE = 'UPDATE',
}
const initialState = {
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: '',
  imageFileName: '',
  screen: '',
  processor: '',
  ram: '',
};
type State = typeof initialState;
const reducer = (state: State, action: { type: Actions, payload: { key: keyof State, value: string } }) => {
  switch (action.type) {
    case Actions.RESET:
      return initialState;
    case Actions.UPDATE:
      const newState = {...state};
      newState[action.payload.key] = action.payload.value;
      return newState;
  }
};


interface ProductModalProps {
  open: boolean
  handleClose: () => void;
}
const AddModal: React.FC<ProductModalProps> = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [state, dispatch] = useReducer(reducer, initialState);
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);

  const onChange = (field: keyof State) => (val: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch({ type: Actions.UPDATE, payload: { key: field, value: val.target.value } })
  };

  const handleSave = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();

    formData.append(
      'image',
      file,
      file.name
    );
    Object.keys(state).forEach((key) => {
      formData.append(
        key,
        state[key as keyof State]
      );
    })

    await postPhone(formData);
    setLoading(false);
    handleClose();
  }

  return <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
  >
    <DialogTitle>Add new Phone</DialogTitle>
    <DialogContent className="add-modal-container">
      <TextField
        label="Name"
        variant="outlined"
        value={state.name}
        onChange={onChange('name')}
      />
      <TextField
        label="Manufacturer"
        variant="outlined"
        value={state.manufacturer}
        onChange={onChange('manufacturer')}
      />
      <TextField
        label="Color"
        variant="outlined"
        value={state.color}
        onChange={onChange('color')}
      />
      <TextField
        label="Price"
        InputProps={{
          endAdornment: <InputAdornment position="end">€</InputAdornment>,
        }}
        variant="outlined"
        value={state.price}
        onChange={onChange('price')}
      />
      <TextField
        label="Screen"
        variant="outlined"
        value={state.screen}
        onChange={onChange('screen')}
      />
      <TextField
        label="Processor"
        variant="outlined"
        value={state.processor}
        onChange={onChange('processor')}
      />
      <TextField
        label="Ram"
        variant="outlined"
        value={state.ram}
        onChange={onChange('ram')}
      />
      <TextField
        label="Description"
        multiline
        variant="outlined"
        value={state.description}
        onChange={onChange('description')}
      />
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
      <div className="save-button-wrapper">
        <Button disabled={loading} variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        {loading && <CircularProgress className="save-button-loading" size={24}  />}
      </div>
    </DialogActions>
  </Dialog>
};

export default AddModal;