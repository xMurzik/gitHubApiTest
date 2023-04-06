import React, { FC } from 'react';
import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

const InfoItem: FC<InfoItemProps> = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || 'Not Available';
  let currentHref: string = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https//${text}`;
  }

  return (
    <div className={`${styles.infoItem}${text ? '' : `${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            currentText
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};

export default InfoItem;
