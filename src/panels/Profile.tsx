import {
  Icon12Cancel,
  Icon24AddOutline,
  Icon24Error,
  Icon24Filter,
  Icon28SettingsOutline,
} from "@vkontakte/icons";
import {
  Button,
  Card,
  CardGrid,
  Group,
  Header,
  Link,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  Title,
} from "@vkontakte/vkui";
import React from "react";
import { FC } from "react";
import { DefaultPanelProps } from "../reducers";
import "../styles/matches.css";

type Props = {
  setActiveModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & DefaultPanelProps;

export const Profile: FC<Props> = ({ id, setActiveModal }) => {
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton>
            <Icon24Filter />
          </PanelHeaderButton>
        }
      >
        <span
          style={{
            letterSpacing: "0.38px",
            fontSize: "21px",
            lineHeight: "24px",
            color: "#FFD600",
          }}
        >
          Nagibator2007
        </span>
      </PanelHeader>
      <Group
        separator="hide"
        style={{
          padding: "0 64px",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <div
          className="statistic__left"
          style={{
            height: "93px",
            width: "93px",
            backgroundImage: "url(/images/big-star.png)",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
          }}
        >
          93
        </div>
        <div
          className="statistic__right"
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginLeft: "32px",
          }}
        >
          <img
            width="217"
            height="92"
            src="https://i.imgur.com/jcPbPun.png"
            alt=""
          />
        </div>
      </Group>
      <Group separator="hide">
        <CardGrid>
          <Card size="l">
            <div style={{ padding: "16px" }}>
              <Title
                level="3"
                weight="regular"
                style={{
                  fontSize: "13px",
                  lineHeight: "24px",
                  textTransform: "uppercase",
                  paddingLeft: "25px",
                  position: "relative",
                  marginBottom: "10px",
                }}
              >
                <Icon24Error
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "11px",
                    height: "11px",
                    color: "#3F8AE0",
                    fontSize: "10px",
                  }}
                />
                Характеристика игрока
              </Title>
              <Title
                level="3"
                weight="regular"
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Игрок с хорошей репутацией.
              </Title>
            </div>
          </Card>
        </CardGrid>
      </Group>
      <Group
        style={{ paddingTop: "12px" }}
        header={
          <Header
            aside={
              <Icon24AddOutline
                onClick={setActiveModal}
                data-to="create-action"
                style={{ cursor: "pointer" }}
              />
            }
          >
            Игровая активность
          </Header>
        }
      >
        <CardGrid>
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
                  Counter-Strike: Global Offensive
                </div>
              </div>
              <div className="matches_card-text">
                5К часов; звание: Беркут; адекватный
              </div>
              <div className="matches_card-block">
                <div className="matches_card-time">27.11.2020</div>
                <Link className="link">Изменить</Link>
              </div>
            </div>
          </Card>
        </CardGrid>
      </Group>
      {/* <Group>
        <div
          className="statistic"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 30px",
          }}
        >
          <div
            className="statistic__left"
            style={{
              height: "93px",
              width: "93px",
              backgroundImage: "url(/images/big-star.png)",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "32px",
            }}
          >
            93
          </div>
          <div className="statistic__right">
            <img src="images/analiz.png" alt="" />
          </div>
        </div>
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
            Расширенная статистика
          </Link>
        </div>
        <Group>
          <CardGrid>
            <Card
              size="l"
              className="characteristic"
              style={{
                padding: "12px 16px",
                backgroundColor: "#2C2D2E",
              }}
            >
              <div
                style={{
                  backgroundColor: "black",
                  width: "24px",
                  height: "24px",
                  color: "#818C99",
                  cursor: "pointer",
                  position: "absolute",
                  top: "0px",
                  right: "-7px",
                  zIndex: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <Icon12Cancel />
              </div>
              <Title
                level="3"
                weight="regular"
                style={{
                  fontSize: "13px",
                  lineHeight: "24px",
                  color: "rgba(255, 255, 255, 0.44)",
                  textTransform: "uppercase",
                  paddingLeft: "25px",
                  position: "relative",
                  marginBottom: "10px",
                }}
              >
                <Icon24Error
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "11px",
                    height: "11px",
                    color: "#3F8AE0",
                    fontSize: "10px",
                  }}
                />
                Характеристика игрока
              </Title>
              <Title
                level="3"
                weight="regular"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Игрок с хорошей репутацией.
              </Title>
            </Card>
          </CardGrid>
        </Group>
        <Title
          level="3"
          weight="regular"
          style={{
            color: "black",
            fontSize: "24px",
            padding: "0 10px",
            margin: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div>Игровая активность</div>
          <Icon16Add
            style={{
              color: "#818C99",
            }}
          />
        </Title>
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
                  9.3
                </div>
              </div>
              <div className="matches_card-text">
                5К часов; звание: Беркут; адекватный
              </div>
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
                  9.3
                </div>
              </div>
              <div className="matches_card-text">
                5К часов; звание: Беркут; адекватный
              </div>
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
                <div
                  className="matches_card-right"
                  style={{
                    backgroundImage: "url('/images/star.png')",
                  }}
                >
                  9.3
                </div>
              </div>
              <div className="matches_card-text">
                5К часов; звание: Беркут; адекватный
              </div>
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
                backgroundImage: "url(/images/fort-full.jpg)",
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
                  fortnite
                </div>
                <div
                  className="matches_card-right"
                  style={{
                    backgroundImage: "url('/images/star.png')",
                  }}
                >
                  9.3
                </div>
              </div>
              <div className="matches_card-text">
                5К часов; звание: Беркут; адекватный
              </div>
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
      </Group> */}
    </Panel>
  );
};
