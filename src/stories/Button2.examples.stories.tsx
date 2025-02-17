import Button2 from "./Button2.example";

export default {
    title: "products/button",
    component: Button2,
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