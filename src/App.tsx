import React, { ReactNode, useEffect, useState } from "react";
import { ScreenSpinner, View, Epic, Tabbar, TabbarItem } from "@vkontakte/vkui";
import {
  Icon28HistoryBackwardOutline,
  Icon28Profile,
  Icon28SearchOutline,
} from "@vkontakte/icons";
import bridge, {
  DefaultUpdateConfigData,
  UserInfo,
} from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";
import { Search, Profile, History } from "./panels";
import { useDispatch } from "react-redux";
import { UserInitAction, UserState, USER_INIT } from "./reducers";
import { useData } from "./hooks/useData";

export const App = () => {
  const [activeView, setActiveView] = useState<string>("search");
  const [activePanel, setActivePanel] = useState<string>("search");
  const [popout, setPopout] = useState<ReactNode>(<ScreenSpinner />);
  const dispatch = useDispatch();
  const userData = useData<UserState>("userInit");
  console.log(userData);
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

  const handleStory = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(event.currentTarget.dataset.to);
    setActiveView(event.currentTarget.dataset.to || "search");
  };

  const go = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
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
      <View id="search" activePanel="search" popout={popout}>
        <Search id="search" fetchedUser={userData} go={go} />
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
