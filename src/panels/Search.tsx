import { Icon24Filter } from "@vkontakte/icons";
import {
  Group,
  Panel,
  PanelHeader,
  Search as SearchVK,
  Card,
  CardScroll,
  Header,
  CardGrid,
  Link,
} from "@vkontakte/vkui";
import React from "react";
import { FC } from "react";
import { DefaultPanelProps } from "../types";
import "../styles/matches.css";

export const Search: FC<DefaultPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <SearchVK icon={<Icon24Filter />}></SearchVK>
      <Group separator="show">
        <CardScroll>
          <Card size="m">
            <div
              style={{
                width: "150px",
                height: "120px",
                backgroundImage: "url('/images/csgo.png')",
              }}
            />
          </Card>
          <Card size="m">
            <div
              style={{
                width: "150px",
                height: "120px",
                backgroundImage: "url('/images/csgo.png')",
              }}
            />
          </Card>
          <Card size="m">
            <div
              style={{
                width: "150px",
                height: "120px",
                backgroundImage: "url('/images/csgo.png')",
              }}
            />
          </Card>
          <Card size="m">
            <div
              style={{
                width: "150px",
                height: "120px",
                backgroundImage: "url('/images/csgo.png')",
              }}
            />
          </Card>
          <Card size="m">
            <div
              style={{
                width: "150px",
                height: "120px",
                backgroundImage: "url('/images/csgo.png')",
              }}
            />
          </Card>
        </CardScroll>
      </Group>
      <Group header={<Header>Последние</Header>}>
        <CardGrid>
          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/csgo-full.png)",
              }}
            >
              <Link href="https://discord.gg/J78CAfmy" target="_blank">
                Test discord
              </Link>
            </div>
          </Card>
          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/csgo-full.png)",
              }}
            >
              <Link href="https://discord.gg/J78CAfmy" target="_blank">
                Test discord
              </Link>
            </div>
          </Card>
          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/csgo-full.png)",
              }}
            >
              <Link href="https://discord.gg/J78CAfmy" target="_blank">
                Test discord
              </Link>
            </div>
          </Card>
          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/csgo-full.png)",
              }}
            >
              <Link href="https://discord.gg/J78CAfmy" target="_blank">
                Test discord
              </Link>
            </div>
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  );
};
