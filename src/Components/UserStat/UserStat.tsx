import React, { FC } from 'react';
import { ILocalUser } from 'types';
import styles from './UserStat.module.scss';

export interface UserStatProps
  extends Pick<ILocalUser, 'repos' | 'followers' | 'following'> {}

const UserStat: FC<UserStatProps> = ({
  repos,
  followers,
  following,
}: UserStatProps) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{repos}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};

export default UserStat;
