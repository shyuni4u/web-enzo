import React from 'react';
import { useTranslation } from 'react-i18next';

import Home from './home';

export const Index: React.FC = () => {
  const { t } = useTranslation();

  return <Home />;
};

export default Index;
