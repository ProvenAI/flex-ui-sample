import React from "react";
import * as Flex from "@twilio/flex-ui";

Flex.TaskCanvasHeader.defaultProps.ActionsComponent = () => null;

class App extends React.Component {
  render() {
    const { manager } = this.props;

    if (!manager) {
      return null;
    }

    return (
      <Flex.ContextProvider manager={manager}>
        <Flex.RootContainer />
      </Flex.ContextProvider>
    );
  }
}

export default App;
