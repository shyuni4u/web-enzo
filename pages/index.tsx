import React from 'react';
import { useTranslation } from 'react-i18next';

import Intro from './etc';

export const Index: React.FC = () => {
  const { t } = useTranslation();

  return <Intro />;
};

export default Index;
