import React, { ReactNode, useEffect, useState } from "react";
import { ScreenSpinner, View, Epic, Tabbar, TabbarItem } from "@vkontakte/vkui";
import {
  Icon28HistoryBackwardOutline,
  Icon28Profile,
  Icon28SearchOutline,
} from "@vkontakte/icons";
import bridge, { DefaultUpdateConfigData } from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";
import { Search, Profile, History } from "./panels";
import { ModalSearchPanel } from "./modals";
import { useDispatch } from "react-redux";
import { UserInitAction, UserState, USER_INIT } from "./reducers";
import { useData } from "./hooks/useData";
import { FiltersState } from "./reducers/webApp/filtersReducer";
import "./styles/matches.css";

export const App = () => {
  const [activeView, setActiveView] = useState<string>("search");
  const [activePanel, setActivePanel] = useState<string>("search");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalHistory, setModalHistory] = useState<string[]>([]);
  const [game, setGame] = useState<FiltersState["game"]>({
    name: "Не выбрано",
    type: "",
  });

  const [popout, setPopout] = useState<ReactNode>(<ScreenSpinner />);
  const dispatch = useDispatch();
  const userData = useData<UserState>("userInit");
  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const typedData = data as DefaultUpdateConfigData;

        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = typedData.scheme
          ? typedData.scheme
          : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      const action: UserInitAction = {
        type: USER_INIT,
        payload: { ...user, online: true },
      };
      dispatch(action);
      setPopout(null);
    }
    fetchData();
  }, []);

  const handleActiveModal = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const currentModal = event.currentTarget.dataset.to || null;

    let history = modalHistory ? [...modalHistory] : [];

    if (currentModal === null) {
      history = [];
    } else if (history.indexOf(currentModal) !== -1) {
      history = history.splice(0, history.indexOf(currentModal) + 1);
    } else {
      history.push(currentModal);
    }

    setActiveModal(currentModal);
    setModalHistory(history);
  };

  const handleStory = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setActiveView(event.currentTarget.dataset.to || "search");
  };

  const handleModalBack = () => {
    let modal = modalHistory[modalHistory.length - 2] || null;

    if (modal === activeModal) modal = null;

    setActiveModal(modal);
  };

  const handleSetGame = (game: FiltersState["game"]) => {
    setGame(game);
    setActiveModal("search-filter");
  };

  const go = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setActiveModal(null);
    setActivePanel(event.currentTarget.dataset.to || "search");
  };

  return (
    <Epic
      activeStory={activeView}
      tabbar={
        <Tabbar itemsLayout="vertical">
          <TabbarItem
            onClick={handleStory}
            selected={activeView === "search"}
            data-to="search"
            text="Поиск"
          >
            <Icon28SearchOutline />
          </TabbarItem>
          <TabbarItem
            onClick={handleStory}
            selected={activeView === "history"}
            data-to="history"
            text="История"
          >
            <Icon28HistoryBackwardOutline />
          </TabbarItem>
          <TabbarItem
            onClick={handleStory}
            selected={activeView === "profile"}
            data-to="profile"
            text="Профиль"
          >
            <Icon28Profile />
          </TabbarItem>
        </Tabbar>
      }
    >
      <View
        id="search"
        activePanel={activePanel}
        popout={popout}
        modal={
          <ModalSearchPanel
            game={game}
            activeModal={activeModal}
            modalBack={handleModalBack}
            go={go}
            setActiveModal={handleActiveModal}
            setGame={handleSetGame}
          />
        }
      >
        <Search
          id="search"
          fetchedUser={userData}
          go={go}
          setActiveModal={handleActiveModal}
        />
      </View>
      <View id="history" activePanel="history" popout={popout}>
        <History id="history" fetchedUser={userData} go={go} />
      </View>
      <View id="profile" activePanel="profile" popout={popout}>
        <Profile id="profile" fetchedUser={userData} go={go} />
      </View>
    </Epic>
  );
};
