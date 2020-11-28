import { Icon24Done } from "@vkontakte/icons";
import { Cell, Group, List, Panel, PanelHeader } from "@vkontakte/vkui";
import React, { FC } from "react";
import { DefaultPanelProps } from "../reducers";
import { FiltersState } from "../reducers/webApp/filtersReducer";

type Props = {
  game: FiltersState["game"];
  setGame: (game: FiltersState["game"]) => void;
} & DefaultPanelProps;

export const GamesList: FC<Props> = ({ id, game, setGame, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Выберите игру</PanelHeader>
      <Group>
        <List>
          <Cell
            onClick={() =>
              setGame({
                name: "Counter Strike: Global Offensive",
                type: "csgo",
              })
            }
            asideContent={
              game.type === "csgo" ? <Icon24Done fill="var(--accent)" /> : null
            }
          >
            Counter Strike: Global Offensive
          </Cell>
        </List>
      </Group>
    </Panel>
  );
};
