import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../App';
import mainPage from '../InitialPicture.JPG';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const InitialScreen = () => {
    const {handleClose} = useContext(AppContext);
    return (
        <Typography
            variant="h6"
            component="h5"
        >
            <div className="modalWindow"> <div>Guess the <b>WORDLE</b> in six tries.</div>
                <button className='btnCross' onClick={() => handleClose()}><CloseOutlinedIcon /></button>
            </div>
            <div> Each guess must be a valid five-letter word. Hit the enter button to submit.</div>
            <div> After each guess, the color of the tiles will change to show how close your guess was to the word.</div>
            <img className='picture' src={mainPage} alt="mainPage" />
        </Typography>
    )
}

export default InitialScreen