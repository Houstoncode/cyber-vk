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
  Button,
} from "@vkontakte/vkui";
import React from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { DefaultPanelProps } from "../reducers";
import {
  FiltersState,
  SetFiltersAction,
  SET_FILTERS,
} from "../reducers/webApp/filtersReducer";
// import "../styles/matches.css";

type Props = {
  setGame: (game: FiltersState["game"], setGame: boolean) => void;
  setActiveModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & DefaultPanelProps;

export const Search: FC<Props> = ({ id, setActiveModal, setGame }) => {
  const dispatch = useDispatch();

  const handleSetFilterGame = () => {
    const game: FiltersState["game"] = {
      name: "Counter-Strike: Global Offensive",
      type: "csgo",
    };

    const action: SetFiltersAction = {
      type: SET_FILTERS,
      payload: {
        game,
      },
    };

    setGame(game, false);
    dispatch(action);
  };
  return (
    <Panel id={id}>
      <PanelHeader>Detoxic</PanelHeader>
      <SearchVK
        icon={<Icon24Filter onClick={setActiveModal} data-to="search-filter" />}
      ></SearchVK>
      <Group separator="show">
        <CardScroll>
          <Card
            size="m"
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleSetFilterGame();
            }}
          >
            <div
              style={{
                backgroundImage: "url('/images/csgo.png')",
              }}
            />
          </Card>
        </CardScroll>
      </Group>
      <Group
        header={
          <Header
            aside={
              <Button mode="tertiary" className="link-all">
                Показать все
              </Button>
            }
          >
            Рекомендации
          </Header>
        }
        style={{ paddingBottom: "20px" }}
      >
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
                  onClick={setActiveModal}
                  data-to="current-user"
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
                <Link className="link">Подробнее</Link>
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
                <Link className="link">Подробнее</Link>
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
                <Link className="link">Подробнее</Link>
              </div>
            </div>
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  );
};
