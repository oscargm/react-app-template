import * as React from "react"

export interface SessionContextProps {
  username: string;
  updateLogin: (value) => void;
  onLogout: () => void
}

export const createDefaultUser = (): SessionContextProps => ({
  username: 'no user',
  updateLogin: (value) => { },
  onLogout: () => { }
});

export const SessionContext = React.createContext<SessionContextProps>(createDefaultUser());

interface State extends SessionContextProps {
}

export class SessionProvider extends React.Component<{}, State> {

  constructor(props) {
    super(props);
    this.state = {
      username: createDefaultUser().username,
      updateLogin: this.setLoginInfo,
      onLogout: this.onLogout
    }
  }

  setLoginInfo = (newUsername) => {
    this.setState({ username: newUsername })
  }

  onLogout = () => {
    this.setState({username: ''});
  }

  render() {
    return (
      <SessionContext.Provider value={this.state}>
        {this.props.children}
      </SessionContext.Provider>
    )
  };
};
