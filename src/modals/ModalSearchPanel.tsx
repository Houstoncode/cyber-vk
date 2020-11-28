import { Icon24Cancel, Icon24Done } from "@vkontakte/icons";
import {
  FormLayout,
  Input,
  IS_PLATFORM_ANDROID,
  IS_PLATFORM_IOS,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderButton,
  RangeSlider,
  SelectMimicry,
} from "@vkontakte/vkui";
import { Value } from "@vkontakte/vkui/dist/components/RangeSlider/RangeSlider";
import React, { useState } from "react";
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
  activeModal: string | null;
  game: FiltersState["game"];
  modalHistory?: string;
  modalBack: () => void;
  setActiveModal?: (activeModal: string) => void;
} & Pick<DefaultPanelProps, "go">;

export const ModalSearchPanel: FC<Props> = ({
  activeModal,
  game,
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
              IS_PLATFORM_ANDROID && (
                <PanelHeaderButton onClick={modalBack}>
                  <Icon24Cancel />
                </PanelHeaderButton>
              )
            }
            right={
              <PanelHeaderButton onClick={handleSave}>
                {IS_PLATFORM_IOS ? "Готово" : <Icon24Done />}
              </PanelHeaderButton>
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
            onClick={go}
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
    </ModalRoot>
  );
};
