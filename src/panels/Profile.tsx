import { Panel, PanelHeader } from "@vkontakte/vkui";
import React from "react";
import { FC } from "react";
import { DefaultPanelProps } from "../reducers";

export const Profile: FC<DefaultPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
    </Panel>
  );
};
