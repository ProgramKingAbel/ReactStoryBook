import React from "react";
import Button from "./Button";

export default {
    title: 'products/buttons',
    component: Button
}

// Older way Of doing variations 

// export const Primary = () => <Button variant='primary'>Primary</Button>;
// export const Secondary = () => <Button variant='secondary' >Secondary</Button>
// export const Danger = () => <Button variant='danger'>Danger</Button>

//Renaming Stories

// Primary.storyName = "Blue Button"
// Secondary.storyName = "Green Button"
// Danger.storyName = "Red Button"

// Newer way of doing variations of a component 

export const Primary = {
    args: {
        primary: true,
        label: "Button",
        onClick: () => alert("You Clicked me"),
    }
}