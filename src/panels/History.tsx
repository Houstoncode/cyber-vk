import {
  Panel,
  PanelHeader,
  Card,
  CardGrid,
  Link,
  Group,
} from "@vkontakte/vkui";
import React from "react";
import { FC } from "react";
import { DefaultPanelProps } from "../reducers";
import "../styles/matches.css";

export const History: FC<DefaultPanelProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>История</PanelHeader>
      <Group>
        <CardGrid>
          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/dota-full.jpg)",
              }}
            >
              <div className="matches_card-bg"></div>
              <div className="matches_card-wrapper">
                <div
                  className="matches_card-left"
                  style={{
                    backgroundImage: "url('/images/dota-icon.png')",
                  }}
                >
                  dota 2
                </div>
                <div
                  className="matches_card-right"
                  style={{
                    backgroundImage: "url('/images/star.png')",
                  }}
                >
                  4.3
                </div>
              </div>
              <div className="matches_card-text">Ebobolik201</div>
              <div className="matches_card-block">
                <div className="matches_card-time">27.11.2020</div>
                <Link
                  className="link"
                  href="https://discord.gg/J78CAfmy"
                  target="_blank"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </Card>

          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/csgo-full.jpg)",
              }}
            >
              <div className="matches_card-bg"></div>
              <div className="matches_card-wrapper">
                <div
                  className="matches_card-left"
                  style={{
                    backgroundImage: "url('/images/cs-icon.png')",
                  }}
                >
                  counter-strike go
                </div>
                <div
                  className="matches_card-right"
                  style={{
                    backgroundImage: "url('/images/star.png')",
                  }}
                >
                  5.3
                </div>
              </div>
              <div className="matches_card-text">Vasay_pro_107</div>
              <div className="matches_card-block">
                <div className="matches_card-time">27.11.2020</div>
                <Link
                  className="link"
                  href="https://discord.gg/J78CAfmy"
                  target="_blank"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </Card>

          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/dota-full.jpg)",
              }}
            >
              <div className="matches_card-bg"></div>
              <div className="matches_card-wrapper">
                <div
                  className="matches_card-left"
                  style={{
                    backgroundImage: "url('/images/dota-icon.png')",
                  }}
                >
                  dota 2
                </div>
              </div>
              <div className="matches_card-text">Kukuha</div>
              <div className="matches_card-block">
                <div className="matches_card-time">27.11.2020</div>
                <Link
                  className="link"
                  href="https://discord.gg/J78CAfmy"
                  target="_blank"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </Card>
        </CardGrid>
      </Group>
      <div
        style={{
          textAlign: "center",
          margin: "20px",
        }}
      >
        <Link
          href="#"
          style={{
            fontSize: "17px",
            lineHeight: "22px",
          }}
        >
          Показать все
        </Link>
      </div>
    </Panel>
  );
};
