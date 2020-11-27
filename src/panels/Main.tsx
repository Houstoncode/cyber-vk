import { UserInfo } from "@vkontakte/vk-bridge";
import {
  Panel,
  PanelHeader,
  Group,
  Cell,
  Avatar,
  Div,
  Button,
} from "@vkontakte/vkui";
import React, { FC } from "react";

type Props = {
  id: string;
  go: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  fetchedUser: UserInfo | null;
};

export const Main: FC<Props> = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Example</PanelHeader>
    {fetchedUser && (
      <Group title="User Data Fetched with VK Bridge">
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          description={
            fetchedUser.city && fetchedUser.city.title
              ? fetchedUser.city.title
              : ""
          }
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>
      </Group>
    )}

    <Group title="Navigation Example">
      <Div>
        <Button size="xl" onClick={go} data-to="home">
          Show m
        </Button>
      </Div>
    </Group>
  </Panel>
);
