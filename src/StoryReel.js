import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
        {/*Dummy profile images sources are needed to complete
        the layout of each individual story*/}

            <Story 
            image='https://images.unsplash.com/photo-1605791462488-14fa5695e818?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=900&q=60'
            profileSrc='https://images.unsplash.com/photo-1599231666334-ca0dbd7ad2da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
            title='Jennifer'
            />

            <Story 
            image='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            profileSrc='https://images.unsplash.com/photo-1605133104058-6fac9b38f522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'
            title='Eduardo'
            />

            <Story 
            image='https://images.unsplash.com/photo-1605866677524-ea9cdf7f6f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
            profileSrc='https://images.unsplash.com/photo-1600876670541-ad960ed66b02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
            title='Mateo'
            />

            <Story 
            image='https://images.unsplash.com/photo-1591818622267-a9ecc451f938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
            profileSrc='https://images.unsplash.com/photo-1587744129606-55fda9601ec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80'
            title='Cristina'
            />

            <Story 
            image='https://images.unsplash.com/photo-1605557626582-547e820a5be7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
            profileSrc='https://images.unsplash.com/photo-1587919275665-ac4ab3ccd753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=343&q=80'
            title='Andrea'
            />
        </div>
    )
}

export default StoryReel
