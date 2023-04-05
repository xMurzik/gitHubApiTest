import UserStat from 'Components/UserStat/UserStat';
import UserTitle from 'Components/UserTitle/UserTitle';
import React from 'react';
import { ILocalUser } from 'types';
import styles from './UserCard.module.scss';

interface UserCardProps extends ILocalUser {}

const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
    </div>
  );
};

export default UserCard;
