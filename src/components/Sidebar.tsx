import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'


export function Sidebar (){
  return (
    <aside 
      className={styles.sidebar}>
      <img 
      className={styles.cover} 
      src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/SecondzzMSF.png" />

        <strong>Matheus Sencades</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine  size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}