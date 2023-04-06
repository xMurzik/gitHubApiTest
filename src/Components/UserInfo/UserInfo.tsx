import InfoItem, { InfoItemProps } from 'Components/InfoItem/InfoItem';
import React, { FC } from 'react';
import { ILocalUser } from 'types';
import styles from './UserInfo.module.scss';
import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as SiteIcon } from 'assets/icon-website.svg';

interface UserInfoProps
  extends Pick<ILocalUser, 'blog' | 'company' | 'location' | 'twitter'> {}

const UserInfo: FC<UserInfoProps> = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    { icon: <LocationIcon />, text: location },
    { icon: <SiteIcon />, text: blog, isLink: true },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((elem, id) => (
        <InfoItem {...elem} key={id} />
      ))}
    </div>
  );
};

export default UserInfo;
