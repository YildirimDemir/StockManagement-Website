import React, { ReactNode } from 'react';
import Style from './contenttitle.module.css';

interface ContentTitleProps {
  children: ReactNode;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ children }) => {
  return (
    <h2 className={Style.contentTitle}>{children}</h2>
  );
};

export default ContentTitle;
