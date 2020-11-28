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
      <div>
        <PanelHeader>Detoxic</PanelHeader>
      </div>
      <SearchVK icon={<Icon24Filter />}></SearchVK>
      <Group separator="show">
        <CardScroll>
          <Card size="m" className="card">
            <div
              style={{
                backgroundImage: "url('/images/csgo.png')",
              }}
            />
          </Card>
          <Card size="m" className="card">
            <div 
              style={{
                backgroundImage: "url('/images/dota.jpg')",
              }}
            />
          </Card>
          <Card size="m" className="card">
            <div
              style={{
                backgroundImage: "url('/images/csgo.png')",
              }}
            />
          </Card>
          <Card size="m" className="card">
            <div
              style={{
                backgroundImage: "url('/images/dota.jpg')",
              }}
            />
          </Card>
          <Card size="m" className="card">
            <div
              style={{
                backgroundImage: "url('/images/csgo-full.jpg')",
              }}
            />
          </Card>
        </CardScroll>
      </Group>
      <Group header={
          <Header aside={<Link href="#">Показать все </Link>}>Рекомендации</Header>
      }>
        <CardGrid>

          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/dota-full.jpg)"
              }}
            >
              <div className="matches_card-bg"></div>
              <div className="matches_card-wrapper">
                <div className="matches_card-left" style={{
                  backgroundImage: "url('/images/dota-icon.png')",
                }}>dota 2</div>
                <div className="matches_card-right" style={{
                  backgroundImage: "url('/images/star.png')",
                }}>9.3</div>
              </div>
              <div className="matches_card-text">5К часов; звание: Беркут; адекватный</div>
              <div className="matches_card-block">
                <div className="matches_card-time">27.11.2020</div>
                <Link className="link" href="https://discord.gg/J78CAfmy" target="_blank">
                  Подробнее
                </Link>
              </div>
            </div>
          </Card>

          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/csgo-full.jpg)"
              }}
            >
              <div className="matches_card-bg"></div>
              <div className="matches_card-wrapper">
                <div className="matches_card-left" style={{
                  backgroundImage: "url('/images/cs-icon.png')",
                }}>counter-strike go</div>
                <div className="matches_card-right" style={{
                  backgroundImage: "url('/images/star.png')",
                }}>9.3</div>
              </div>
              <div className="matches_card-text">5К часов; звание: Беркут; адекватный</div>
              <div className="matches_card-block">
                <div className="matches_card-time">27.11.2020</div>
                <Link className="link" href="https://discord.gg/J78CAfmy" target="_blank">
                  Подробнее
                </Link>
              </div>
            </div>
          </Card>

          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/dota-full.jpg)"
              }}
            >
              <div className="matches_card-bg"></div>
              <div className="matches_card-wrapper">
                <div className="matches_card-left" style={{
                  backgroundImage: "url('/images/dota-icon.png')",
                }}>dota 2</div>
                <div className="matches_card-right" style={{
                  backgroundImage: "url('/images/star.png')",
                }}>9.3</div>
              </div>
              <div className="matches_card-text">5К часов; звание: Беркут; адекватный</div>
              <div className="matches_card-block">
                <div className="matches_card-time">27.11.2020</div>
                <Link className="link" href="https://discord.gg/J78CAfmy" target="_blank">
                  Подробнее
                </Link>
              </div>
            </div>
          </Card>

          <Card size="l">
            <div
              className="matches_card"
              style={{
                backgroundImage: "url(/images/fort-full.jpg)"
              }}
            >
              <div className="matches_card-bg"></div>
              <div className="matches_card-wrapper">
                <div className="matches_card-left" style={{
                  backgroundImage: "url('/images/cs-icon.png')",
                }}>fortnite</div>
                <div className="matches_card-right" style={{
                  backgroundImage: "url('/images/star.png')",
                }}>9.3</div>
              </div>
              <div className="matches_card-text">5К часов; звание: Беркут; адекватный</div>
              <div className="matches_card-block">
                <div className="matches_card-time">27.11.2020</div>
                <Link className="link" href="https://discord.gg/J78CAfmy" target="_blank">
                  Подробнее
                </Link>
              </div>
            </div>
          </Card>

        </CardGrid>
      </Group>
    </Panel>
  );
};
