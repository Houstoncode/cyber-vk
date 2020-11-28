import { Icon24Cancel, Icon24Done } from "@vkontakte/icons";
import {
  Cell,
  FormLayout,
  Group,
  List,
  Input,
  ANDROID,
  IOS,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderButton,
  RangeSlider,
  SelectMimicry,
  usePlatform,
} from "@vkontakte/vkui";
import { Value } from "@vkontakte/vkui/dist/components/RangeSlider/RangeSlider";
import React, { Fragment, useState } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useData } from "../hooks";
import { DefaultPanelProps } from "../reducers";
import {
  FiltersState,
  SetFiltersAction,
  SET_FILTERS,
} from "../reducers/webApp/filtersReducer";

type Props = {
  modalHistory?: string;
  activeModal: string | null;
  game: FiltersState["game"];
  modalBack: () => void;
  setActiveModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  setGame: (game: FiltersState["game"]) => void;
} & Pick<DefaultPanelProps, "go">;

export const ModalSearchPanel: FC<Props> = ({
  activeModal,
  game,
  setActiveModal,
  setGame,
  modalBack,
  go,
}) => {
  const filters = useData<FiltersState>("filters");
  const {
    minAge: filterMinAge,
    maxAge: filterMaxAge,
    city: filterCity,
  } = filters!;
  const [city, setCity] = useState<string>(filterCity);
  const [[minAge, maxAge], setAge] = useState<[number, number]>([
    filterMinAge,
    filterMaxAge,
  ]);

  const platform = usePlatform();
  const dispatch = useDispatch();

  const handleSave = () => {
    const action: SetFiltersAction = {
      type: SET_FILTERS,
      payload: {
        game,
        minAge,
        maxAge,
        city,
      },
    };

    dispatch(action);

    modalBack();
  };

  return (
    <ModalRoot activeModal={activeModal} onClose={modalBack}>
      <ModalPage
        id="search-filter"
        header={
          <ModalPageHeader
            left={
              <Fragment>
                {platform === ANDROID && (
                  <PanelHeaderButton onClick={modalBack}>
                    <Icon24Cancel />
                  </PanelHeaderButton>
                )}
              </Fragment>
            }
            right={
              <Fragment>
                {platform === ANDROID && (
                  <PanelHeaderButton onClick={handleSave}>
                    <Icon24Done />
                  </PanelHeaderButton>
                )}
                {platform === IOS && (
                  <PanelHeaderButton onClick={handleSave}>
                    Готово
                  </PanelHeaderButton>
                )}
              </Fragment>
            }
          >
            Фильтры
          </ModalPageHeader>
        }
      >
        <FormLayout>
          <SelectMimicry
            top="Выберите игру"
            placeholder="Не выбрана"
            onClick={setActiveModal}
            data-to="games"
          >
            {game.name}
          </SelectMimicry>
          <Input
            top="Местоположение"
            defaultValue={city}
            onBlur={(event: React.ChangeEvent<HTMLInputElement>) =>
              setCity(event.currentTarget.value)
            }
          />
          <RangeSlider
            top="Возраст"
            bottom={`От ${minAge} лет до ${maxAge} лет`}
            step={1}
            min={0}
            max={100}
            onChange={(value: Value) => setAge([value[0], value[1]])}
            defaultValue={[minAge, maxAge]}
          ></RangeSlider>
        </FormLayout>
      </ModalPage>
      <ModalPage
        id="games"
        settlingHeight={0}
        dynamicContentHeight={false}
        style={{ transform: "translate3d(0px, 0%, 0px)" }}
        header={
          <ModalPageHeader
            left={
              <Fragment>
                {platform === ANDROID && (
                  <PanelHeaderButton onClick={modalBack}>
                    <Icon24Cancel />
                  </PanelHeaderButton>
                )}
              </Fragment>
            }
            right={
              <Fragment>
                {platform === ANDROID && (
                  <PanelHeaderButton onClick={modalBack}>
                    <Icon24Done />
                  </PanelHeaderButton>
                )}
                {platform === IOS && (
                  <PanelHeaderButton onClick={modalBack}>
                    Готово
                  </PanelHeaderButton>
                )}
              </Fragment>
            }
          >
            Выберите игру
          </ModalPageHeader>
        }
      >
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
                game.type === "csgo" ? (
                  <Icon24Done fill="var(--accent)" />
                ) : null
              }
            >
              Counter Strike: Global Offensive
            </Cell>
            <Cell
              onClick={() =>
                setGame({
                  name: "Counter Strike: Global Offensive",
                  type: "csgo",
                })
              }
              asideContent={
                game.type === "csgo" ? (
                  <Icon24Done fill="var(--accent)" />
                ) : null
              }
            >
              Counter Strike: Global Offensive
            </Cell>
            <Cell
              onClick={() =>
                setGame({
                  name: "Counter Strike: Global Offensive",
                  type: "csgo",
                })
              }
              asideContent={
                game.type === "csgo" ? (
                  <Icon24Done fill="var(--accent)" />
                ) : null
              }
            >
              Counter Strike: Global Offensive
            </Cell>
          </List>
        </Group>
      </ModalPage>
    </ModalRoot>
  );
};
