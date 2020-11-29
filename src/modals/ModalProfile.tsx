import { Icon24Cancel, Icon24Done } from "@vkontakte/icons";
import {
  ANDROID,
  Cell,
  FormLayout,
  Group,
  Input,
  IOS,
  List,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderButton,
  SelectMimicry,
  Textarea,
  usePlatform,
} from "@vkontakte/vkui";
import React, { FC, Fragment } from "react";

export type ModalProfileProps = {
  activeModal: string | null;
  profileGame: {
    type: string;
    name: string;
  };
  modalBack: () => void;
  setProfileGame: (profileGame: ModalProfileProps["profileGame"]) => void;
  setActiveModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const ModalProfile: FC<ModalProfileProps> = ({
  activeModal,
  profileGame,
  modalBack,
  setProfileGame,
  setActiveModal,
}) => {
  const platform = usePlatform();
  return (
    <ModalRoot activeModal={activeModal} onClose={modalBack}>
      <ModalPage
        id="create-action"
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
                    Сохранить
                  </PanelHeaderButton>
                )}
              </Fragment>
            }
          >
            Форма
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
            {profileGame.name}
          </SelectMimicry>
          <Input
            top="Количество часов"
            type="number"
            placeholder="Введите часы"
            // onBlur={(event: React.ChangeEvent<HTMLInputElement>) =>
            //   setCity(event.currentTarget.value)
            // }
          />
          <Input
            top="Звание"
            type="text"
            placeholder="Введите звание"
            // onBlur={(event: React.ChangeEvent<HTMLInputElement>) =>
            //   setCity(event.currentTarget.value)
            // }
          />
          <Textarea top="О себе" placeholder="Расскажите немного о себе" />
        </FormLayout>
      </ModalPage>
      <ModalPage
        id="games"
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
        <Group style={{ paddingBottom: "20px" }}>
          <List>
            <Cell
              onClick={() =>
                setProfileGame({
                  name: "Counter Strike: Global Offensive",
                  type: "csgo",
                })
              }
              asideContent={
                profileGame.type === "csgo" ? (
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
