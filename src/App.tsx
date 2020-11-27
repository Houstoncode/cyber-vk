import React, { ReactNode, useEffect, useState } from "react";
import { ScreenSpinner, View } from "@vkontakte/vkui";
import bridge, {
  DefaultUpdateConfigData,
  UserInfo,
} from "@vkontakte/vk-bridge";
import { Home } from "./panels/Home";
import "@vkontakte/vkui/dist/vkui.css";
import { Main } from "./panels/Main";

export const App = () => {
  const [activePanel, setActivePanel] = useState<string | undefined>("home");
  const [fetchedUser, setUser] = useState<UserInfo | null>(null);
  const [popout, setPopout] = useState<ReactNode>(<ScreenSpinner />);

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
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setActivePanel(event.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel} popout={popout}>
      <Home id="home" fetchedUser={fetchedUser} go={go} />
    </View>
  );
};
