import { useEffect } from "react";
import { withRouter } from "react-router";

const PageNavigationListener = ({ history }) => {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    };
  }, [history]);
  return null;
};

export default withRouter(PageNavigationListener);
