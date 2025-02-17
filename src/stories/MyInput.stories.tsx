import MyInput from "./MyInput";

export default {
    title: "My Inputs",
    component: MyInput,
}

export const SmallInput = () => <MyInput size="10rem" placeholder="Enter Your Name" />
export const MediumInput = () => <MyInput size="24rem" placeholder="Enter Your Name" />
export const LargeInput = () => <MyInput size="40rem" placeholder="Enter Your Name" />