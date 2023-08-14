import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

interface IProps {
  title: string;
  needTitleSuffix?: boolean;
}

export const Seo: React.FC<IProps> = (props) => {
  const { title, needTitleSuffix = true } = props;
  const buildTitle = (tt: string) => `${tt} - 热搜聚合`;

  useEffect(() => {
    window.document.title = needTitleSuffix ? buildTitle(title) : title;
  }, [title, needTitleSuffix]);

  return (
    <Helmet>
      <title>{needTitleSuffix ? buildTitle(title) : title}</title>
    </Helmet>
  );
};
