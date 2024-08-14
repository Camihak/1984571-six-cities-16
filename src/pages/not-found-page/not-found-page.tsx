import React from "react";
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element{
  return (
    <React.Fragment>
      <p style={{padding: 20}}>404 Not Found</p>
      <Link to="/" style={{cursor: 'default', color: 'blue', textDecoration: 'none', padding: 20}}>
        Вернуться на главную страницу
      </Link>
    </React.Fragment>
  );
}

type User = {
  firstname: string;
  lastname: string;
  age: number;
  isAdmin: boolean;
  }

  const users: User[] = [
    { firstname: 'Richie', lastname: 'Sambora', age: 61, isAdmin: false },
    { firstname: 'Jon', lastname: 'Bon Jovi', age: 61, isAdmin: true },
    { firstname: 'Fox William', lastname: 'Mulder', age: 60, isAdmin: true }
  ];

  function filterByProperty<Type, Key extends keyof Type>(collection: Type[], property: Key, value: Type[Key]): Type[] {
    return collection.filter((item) => item[property] === value);
  }

  console.log(filterByProperty(users, 'age', 61)); // [
  //   { firstname: 'Richie', lastname: 'Sambora', age: 61, isAdmin: false },
  //   { firstname: 'Jon', lastname: 'Bon Jovi', age: 61, isAdmin: true }
  // ]

export default NotFoundPage;
