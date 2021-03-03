import React from 'react';

import { AppThemeProvider } from './theme';

export const AppProvider: React.FC = ({ children }) => (
  <AppThemeProvider>{children}</AppThemeProvider>
);
