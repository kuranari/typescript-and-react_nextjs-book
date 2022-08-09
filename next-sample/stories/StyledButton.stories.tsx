import React, { useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";
import { action } from "@storybook/addon-actions"

export default {
  title: "StyledButton",
  compoment: StyledButton,
  argTypes: { 
    onClick: { action: 'clicked '},
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    children: {
      control: { type: 'text' },
    },
  }
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  variant: 'primary',
  children: 'Primary'
}
// const incrementAction = action('increment')

// export const Primary = (props) => {
//   const [count, setCount] = useState(0)
//   const onClick = (e: React.MouseEvent) => {
//     incrementAction(e, count)
//     setCount((c) => c + 1)
//   }

//   return (
//     <StyledButton {...props} variant="primary" onClick={onClick}>
//       Count: {count}
//     </StyledButton>
//   );
// };

// export const Success = (props) => {
//   return (
//     <StyledButton {...props} variant="success">
//       Success
//     </StyledButton>
//   );
// };

// export const Transparent = (props) => {
//   return (
//     <StyledButton {...props} variant="transparent">
//       Transparent
//     </StyledButton>
//   );
// };
