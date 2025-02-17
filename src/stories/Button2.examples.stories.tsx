import Button2 from "./Button2.example";

export default {
    title: "products/button",
    component: Button2,
    parameters: {
        layout: "centered",
        controls: {
            expanded: true,
        },
        backgrounds: {
            default: "light",
            values: [
                {name: "light", value: "#fff"},
                {name: "sky blue", value: "#00bcd4"},
            ]
        }
    },
    argTypes: {
        backgroundColor: { control: "color" },

        size: {
        control: "select",
        option: ["small", "medium", "large"]
    },
    label: {
        control: "text",
        description: "Text displayed on the button",
    },
    borderRadius: {
        control: "number",
        min: 0,
        max: 50,
        step: 1,
    }
}
}

export const Primary = {
    label: "click Me",
    backgroundColor: "#007bff",
    size: "medium",
    borderRadius: 4,
    fontSize: "16px",
    textColor: "#fff",
}