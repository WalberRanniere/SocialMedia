/* eslint-disable no-unused-vars */
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from "./components/Post";

import './assets/css/global.css'

import styles from './App.module.css'
export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post></Post>
            <Post></Post>
          </main>
      </div>
    </>

  )
}


