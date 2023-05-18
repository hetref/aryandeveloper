import React from 'react'

const Progressbar = ({ progress }) => {

    const Parentdiv = {
        height: 10,
        width: '200px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#000000',
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv} className='progress_bar'>
            <div style={Childdiv}>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}

export default Progressbar;