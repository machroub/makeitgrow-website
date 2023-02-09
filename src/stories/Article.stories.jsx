import    Article    from '../components/Article';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Mach/Article",
    component: Article,
};

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
const Template = (args) => <Article {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "uhdiuhuh",
    body: [1, 2, 3],
}; 

export const longTitre = Template.bind({});
longTitre.args = {
    title: "la congolexicomatisation des lois du marché",
    body: ["dvfdfvf", "dvfvdfvd", "vfsdcsd"],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => {return <Article  {...args} />;}

//  export const Primaryx = Template.bind({});
//  // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primaryx.args = {
// }; 
  