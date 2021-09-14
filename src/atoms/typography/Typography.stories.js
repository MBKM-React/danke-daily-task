import React from 'react'
import Typograpy from './Typography'

export default {
   title: "My Components/Typography",
   component: Typograpy,
}

const Template = (args) => <Typograpy {...args} />

// Variant
export const Heading1 = Template.bind({})
Heading1.args = {
   text: "Heading 1",
   variant: "h1",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Heading2 = Template.bind({})
Heading2.args = {
   text: "Heading 2",
   variant: "h2",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Heading3 = Template.bind({})
Heading3.args = {
   text: "Heading 3",
   variant: "h3",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Heading4 = Template.bind({})
Heading4.args = {
   text: "Heading 4",
   variant: "h4",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Heading5 = Template.bind({})
Heading5.args = {
   text: "Heading 5",
   variant: "h5",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Heading6 = Template.bind({})
Heading6.args = {
   text: "Heading 6",
   variant: "h6",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
   text: "Subtitle 1",
   variant: "subtitle1",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Subtitle2 = Template.bind({})
Subtitle2.args = {
   text: "Subtitle 2",
   variant: "subtitle2",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Body1 = Template.bind({})
Body1.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero? Quidem ullam placeat est illo tenetur, error nam sapiente iusto repellendus dolor. Saepe nihil placeat exercitationem deleniti. Odit nesciunt animi nemo explicabo et praesentium natus adipisci debitis voluptatum eveniet, rerum ratione, pariatur suscipit? Officiis natus ex odit fugit, dolore tenetur commodi, nam, quis nisi voluptas voluptate repellendus dignissimos earum blanditiis quas autem veritatis consequatur veniam assumenda tempora incidunt eum possimus!",
   variant: "body1",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Body2 = Template.bind({})
Body2.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero? Quidem ullam placeat est illo tenetur, error nam sapiente iusto repellendus dolor. Saepe nihil placeat exercitationem deleniti. Odit nesciunt animi nemo explicabo et praesentium natus adipisci debitis voluptatum eveniet, rerum ratione, pariatur suscipit? Officiis natus ex odit fugit, dolore tenetur commodi, nam, quis nisi voluptas voluptate repellendus dignissimos earum blanditiis quas autem veritatis consequatur veniam assumenda tempora incidunt eum possimus!",
   variant: "body2",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Caption = Template.bind({})
Caption.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero?",
   variant: "caption",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Button = Template.bind({})
Button.args = {
   text: "Button",
   variant: "button",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Overline = Template.bind({})
Overline.args = {
   text: "Overline",
   variant: "overline",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const ScreenReaderOnly = Template.bind({})
ScreenReaderOnly.args = {
   text: "SrOnly",
   variant: "srOnly",
   color: "initial",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

// Color
export const Primary = Template.bind({})
Primary.args = {
   text: "Typography",
   variant: "h4",
   color: "primary",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Secondary = Template.bind({})
Secondary.args = {
   text: "Typography",
   variant: "h4",
   color: "secondary",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const TextPrimary = Template.bind({})
TextPrimary.args = {
   text: "Typography",
   variant: "h4",
   color: "textPrimary",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const TextSecondary = Template.bind({})
TextSecondary.args = {
   text: "Typography",
   variant: "h4",
   color: "textSecondary",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

export const Error = Template.bind({})
Error.args = {
   text: "Typography",
   variant: "h4",
   color: "error",
   align: "inherit",
   noWrap: false,
   gutterBottom: false
}

// Align
export const Left = Template.bind({})
Left.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero? Quidem ullam placeat est illo tenetur, error nam sapiente iusto repellendus dolor. Saepe nihil placeat exercitationem deleniti. Odit nesciunt animi nemo explicabo et praesentium natus adipisci debitis voluptatum eveniet, rerum ratione, pariatur suscipit? Officiis natus ex odit fugit, dolore tenetur commodi, nam, quis nisi voluptas voluptate repellendus dignissimos earum blanditiis quas autem veritatis consequatur veniam assumenda tempora incidunt eum possimus!",
   variant: "body1",
   color: "initial",
   align: "left",
   noWrap: false,
   gutterBottom: false
}

export const Center = Template.bind({})
Center.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero? Quidem ullam placeat est illo tenetur, error nam sapiente iusto repellendus dolor. Saepe nihil placeat exercitationem deleniti. Odit nesciunt animi nemo explicabo et praesentium natus adipisci debitis voluptatum eveniet, rerum ratione, pariatur suscipit? Officiis natus ex odit fugit, dolore tenetur commodi, nam, quis nisi voluptas voluptate repellendus dignissimos earum blanditiis quas autem veritatis consequatur veniam assumenda tempora incidunt eum possimus!",
   variant: "body1",
   color: "initial",
   align: "center",
   noWrap: false,
   gutterBottom: false
}

export const Right = Template.bind({})
Right.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero? Quidem ullam placeat est illo tenetur, error nam sapiente iusto repellendus dolor. Saepe nihil placeat exercitationem deleniti. Odit nesciunt animi nemo explicabo et praesentium natus adipisci debitis voluptatum eveniet, rerum ratione, pariatur suscipit? Officiis natus ex odit fugit, dolore tenetur commodi, nam, quis nisi voluptas voluptate repellendus dignissimos earum blanditiis quas autem veritatis consequatur veniam assumenda tempora incidunt eum possimus!",
   variant: "body1",
   color: "initial",
   align: "right",
   noWrap: false,
   gutterBottom: false
}

export const Justify = Template.bind({})
Justify.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero? Quidem ullam placeat est illo tenetur, error nam sapiente iusto repellendus dolor. Saepe nihil placeat exercitationem deleniti. Odit nesciunt animi nemo explicabo et praesentium natus adipisci debitis voluptatum eveniet, rerum ratione, pariatur suscipit? Officiis natus ex odit fugit, dolore tenetur commodi, nam, quis nisi voluptas voluptate repellendus dignissimos earum blanditiis quas autem veritatis consequatur veniam assumenda tempora incidunt eum possimus!",
   variant: "body1",
   color: "initial",
   align: "justify",
   noWrap: false,
   gutterBottom: false
}

// NoWrap
export const NoWrap = Template.bind({})
NoWrap.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero? Quidem ullam placeat est illo tenetur, error nam sapiente iusto repellendus dolor. Saepe nihil placeat exercitationem deleniti. Odit nesciunt animi nemo explicabo et praesentium natus adipisci debitis voluptatum eveniet, rerum ratione, pariatur suscipit? Officiis natus ex odit fugit, dolore tenetur commodi, nam, quis nisi voluptas voluptate repellendus dignissimos earum blanditiis quas autem veritatis consequatur veniam assumenda tempora incidunt eum possimus!",
   variant: "body1",
   color: "initial",
   align: "left",
   noWrap: true,
   gutterBottom: false
}

// GutterBottom
export const GutterBottom = Template.bind({})
GutterBottom.args = {
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur asperiores numquam quaerat accusantium animi quas excepturi nihil debitis! Quo quibusdam illo minima rem, accusamus soluta dignissimos odio molestias ea est harum cumque maiores debitis consequatur expedita et aliquam vero? Quidem ullam placeat est illo tenetur, error nam sapiente iusto repellendus dolor. Saepe nihil placeat exercitationem deleniti. Odit nesciunt animi nemo explicabo et praesentium natus adipisci debitis voluptatum eveniet, rerum ratione, pariatur suscipit? Officiis natus ex odit fugit, dolore tenetur commodi, nam, quis nisi voluptas voluptate repellendus dignissimos earum blanditiis quas autem veritatis consequatur veniam assumenda tempora incidunt eum possimus!",
   variant: "body1",
   color: "initial",
   align: "left",
   noWrap: false,
   gutterBottom: true
}