import React, { FC } from 'react';
import { ILocalUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps
  extends Pick<ILocalUser, 'name' | 'login' | 'created'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const UserTitle: FC<UserTitleProps> = ({
  created,
  login,
  name,
}: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));
  return (
    <div className={styles.UserTitle}>
      <h2>{name}</h2>
      <h3>login</h3>
      <span>{joinedDate}</span>
    </div>
  );
};

export default UserTitle;
