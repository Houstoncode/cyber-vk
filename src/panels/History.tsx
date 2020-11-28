import { Panel, PanelHeader } from "@vkontakte/vkui";
import React from "react";
import { FC } from "react";
import { DefaultPanelProps } from "../types";

export const History: FC<DefaultPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>История</PanelHeader>
    </Panel>
  );
};
