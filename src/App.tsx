import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url= "", name="", role="" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/SecondzzMSF.png",
      name: 'Matheus Sencades',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia, pessoal!'},
      { type: 'paragraph', content: 'Como estão hoje? Vamos para mais um dia de produtividade? 🚀'},
      { type: 'link', content: 'https://github.com/SecondzzMSF'},
    ],
    publishedAt: new Date('2024-11-25 09:22:43'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQH43XKsC1X0fg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726916283609?e=1738800000&v=beta&t=O9e12u7H28WagtmHMEPi2595gLrANSQKWAZaMj5cTG0",
      name: 'Prof. Dr. Sávio Almeida',
      role: 'Educator at @UNINASSAU'
    },
    content: [
      { type: 'paragraph', content: 'Olá, seguidores!'},
      { type: 'paragraph', content: 'Vamos para mais um dia de aprendizados? ✅'},
      { type: 'link', content: 'https://github.com/svalmeidadev'},
    ],
    publishedAt: new Date('2024-11-20 11:23:53'),
  },
];

export function App() {
  return (
    <div>
        <Header />
          <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
    </div>
  </div>
  )
}


