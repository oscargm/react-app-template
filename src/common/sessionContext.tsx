import * as React from "react"

export interface SessionContextProps {
  username: string;
  isAuth: boolean,
  updateLogin: (value, auth) => void;
  onLogout: () => void
}

export const createDefaultUser = (): SessionContextProps => ({
  username: 'no user',
  isAuth: false,
  updateLogin: (value, auth) => { },
  onLogout: () => { }
});

export const SessionContext = React.createContext<SessionContextProps>(createDefaultUser());

interface State extends SessionContextProps {
  isAuth: boolean;
}

export class SessionProvider extends React.Component<{}, State> {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      username: createDefaultUser().username,
      updateLogin: this.setLoginInfo,
      onLogout: this.onLogout
    }
  }

  setLoginInfo = (newUsername, auth) => {
    this.setState({ username: newUsername, isAuth: auth })
  }

  onLogout = () => {
    this.setState({ username: '',isAuth: false });
  }

  render() {
    return (
      <SessionContext.Provider value={this.state}>
        {this.props.children}
      </SessionContext.Provider>
    )
  };
};
