import { FC } from 'react';

import { RouteProps, Route } from 'react-router-dom';

interface CustomProps extends RouteProps {
  isPrivate?: boolean;
}

const Custom: FC<CustomProps> = ({ ...rest }) => <Route {...rest} />;

export default Custom;
