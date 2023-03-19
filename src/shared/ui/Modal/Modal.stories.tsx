import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "shared/ui/Modal/Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur\n" +
    "delectus dicta dolores exercitationem facilis incidunt iure laudantium\n" +
    "minus, mollitia nobis, non optio quam quas sapiente sequi similique sunt\n" +
    "tempore tenetur voluptatem voluptates? Ab ad commodi dolorem doloribus\n" +
    "exercitationem fuga, fugiat fugit harum impedit labore maxime nam,\n" +
    "perferendis quisquam veniam voluptates!",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur\n" +
    "delectus dicta dolores exercitationem facilis incidunt iure laudantium\n" +
    "minus, mollitia nobis, non optio quam quas sapiente sequi similique sunt\n" +
    "tempore tenetur voluptatem voluptates? Ab ad commodi dolorem doloribus\n" +
    "exercitationem fuga, fugiat fugit harum impedit labore maxime nam,\n" +
    "perferendis quisquam veniam voluptates!",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
