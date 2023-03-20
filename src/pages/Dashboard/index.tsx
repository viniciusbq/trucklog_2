import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

interface User {
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredUsers = users.filter(
      (user) => user.username.toLowerCase() === searchTerm.toLowerCase()
    );
    setUsers(filteredUsers);
  };

  return (
    <div className={styles.bdy}>
      <div className={styles.search_bar}>
        <input
          className={styles.search}
          type="text"
          placeholder="Pesquise pelo User"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className={styles.btn_search} onClick={handleSearch}>
          Pesquisar
        </button>
      </div>
      <div className={styles.container}>
        {users.map((user) => (
          <div className={styles.card} key={user.username}>
            <h2 className={styles.nome}>{user.name}</h2>
            <div className={styles.name_email}>
              <p className={styles.username}>@{user.username}</p>
              <p className={styles.email}>{user.email}</p>
            </div>
            <p className={styles.company}>Empresa: {user.company.name}</p>
            <p className={styles.company_bs}>{user.company.bs}</p>
            <p className={styles.frase}>"{user.company.catchPhrase}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
