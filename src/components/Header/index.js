import React from 'react'
import Button from '@material-ui/core/Button';
import './Header.scss'
const Header =()=>{
    return (
    <div className='header'>
            <p>
                DRS Printing Consultants
            </p>
            <div className='button_container'>
            <Button className='button_margin' variant="contained" color="primary">
                Home
            </Button>
            <Button className='button_margin' variant="contained" color="primary">
                Contact Us
            </Button>
            <Button variant="contained" color="primary">
                Help
            </Button>
            </div>
            

        </div>
    )
}
export default Header