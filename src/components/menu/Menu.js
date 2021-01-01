import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

const menus = [{
  title: 'Главная',
  uri: '/',
  id: nanoid(),
}, {
  title: 'Дрифт-такси',
  uri: '/drift',
  id: nanoid(),
}, {
  title: 'Time Attack',
  uri: '/timeattack',
  id: nanoid(),
}, {
  title: 'Forza Karting',
  uri: '/forza',
  id: nanoid(),
},
];

export default function Menu() {  
  return (
    <nav className="menu">
      {menus.map((menu) => (
        <NavLink exact to={menu.uri} 
            className="menu__item" 
            activeClassName="menu__item-active"
            key={menu.id}
          >{menu.title}</NavLink>)
      )}
    </nav>
  )
}
