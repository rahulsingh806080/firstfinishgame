import { inject, observer } from "mobx-react";
import * as React from "react";
import { Message } from "semantic-ui-react";

import { IStore } from "../../stores/IStore";
import { IGame } from "../../stores/models/IGameInfo";

interface IProps {
  store?: IStore;
}

@inject("store")
@observer
class Rules extends React.Component<IProps, {}> {
  private get store(): IStore {
    return this.props.store as IStore;
  }

  private get gameInfo(): IGame {
    return this.store.game;
  }

  public render() {
    if (!this.canShowRules) {
      return null;
    }

    return (
      <div>
        <Message as="h4" attached="top">
         Play!
        </Message>

        </div>
    );
  }

  private get canShowRules() {
    return (
      !this.gameInfo.canStartGame &&
      !this.gameInfo.notification &&
      !this.gameInfo.error
    );
  }
}

export default Rules;
