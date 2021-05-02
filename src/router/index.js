import React from 'react'
import WangDiscover from '@/pages/discover';
import WangFriend from '@/pages/friend';
import WangMine from '@/pages/mine';
import WangRecommend from '@/pages/discover/c-pages/recommend'
import WangAlbum from '@/pages/discover/c-pages/album'
import WangArtist from '@/pages/discover/c-pages/artist'
import WangDjradio from '@/pages/discover/c-pages/djradio'
import WangRanking from '@/pages/discover/c-pages/ranking'
import WangSongs from '@/pages/discover/c-pages/songs'
import { Redirect } from 'react-router-dom';


const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: "/discover",
    component: WangDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend"/>
      }
       ,
      {
        path: '/discover/recommend',
        component: WangRecommend
      },
      {
        path: '/discover/album',
        component: WangAlbum
      },
      {
        path: '/discover/artist',
        component: WangArtist
      },
      {
        path: '/discover/djradio',
        component: WangDjradio
      },
      {
        path: '/discover/ranking',
        component: WangRanking
      },
      {
        path: '/discover/songs',
        component: WangSongs
      }
    ]
  },
  {
    path: "/mine",
    component: WangMine
  },
  {
    path: "/friend",
    component: WangFriend
  }

];

export default routes;
