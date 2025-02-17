import React from "react";
import Button, { ButtonProps} from "./Button";
import { FaHome } from "react-icons/fa";
import { Meta, StoryObj } from "@storybook/react";


// export default {
//     title: 'products/buttons',
//     component: Button,
//     // Component Only Decorator
//     decorators: [
//         (Story: any) => (
//           <div
//             style={{
//               padding: "20px",
//               backgroundColor: "#f0f0f0",
//               borderRadius: "8px",
//             }}
//           >
//             <Story />
//           </div>
//         ),
//       ],
// }

const meta: Meta<ButtonProps> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
      color: { control: "color" },
      label: { control: "text" },

    },
  };
  
  export default meta;
  
  export const Default: StoryObj<ButtonProps> = {
    args: {
      label: "Click Me",
      color: "#007bff",

    },
  };
  
  export const Disabled: StoryObj<ButtonProps> = {
    args: {
      label: "Disabled Button",
      color: "#888",
 
    },
  };
  
  export const Red: StoryObj<ButtonProps> = {
    args: {
      label: "Red Button",
      color: "#ff0000",

    },
  };

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
        loading: false,
        size: 'medium',
        color: '#007bff',
        fullWidth: false,
        icon: <FaHome />,
        iconPosition: 'left',
        ariaLabel: 'primary-button',

    },

    // Variant Level Decorator 
    decorators: [
        (Story: any) => (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <Story />
          </div>
        ),
      ],
}

