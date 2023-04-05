import React, { FC } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import Button from 'Components/Button/Button';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFiled = {
  username: HTMLInputElement;
};

const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFiled>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.username.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search user..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
