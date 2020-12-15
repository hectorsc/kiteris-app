import Home from './components/Home';

import CategoryList from './components/category/CategoryList';
import CategoryCreate from './components/category/CategoryCreate';
import CategoryEdit from './components/category/CategoryEdit';
import CategoryShow from './components/category/CategoryShow';

import ProductList from './components/product/ProductList';
import ProductCreate from './components/product/ProductCreate';
import ProductEdit from './components/product/ProductEdit';
import ProductShow from './components/product/ProductShow';

import PostList from './components/post/PostList';
import PostCreate from './components/post/PostCreate';
import PostEdit from './components/post/PostEdit';
import PostShow from './components/post/PostShow';

import TagList from './components/tag/TagList';
import TagCreate from './components/tag/TagCreate';
import TagEdit from './components/tag/TagEdit';
import TagShow from './components/tag/TagShow';

import NotFound from './components/NotFound';

export const routes = [
   { path: '/home', component: Home },

   { path: '/category', component: CategoryList },
   { path: '/category/new', component: CategoryCreate},
   { path: '/category/edit/:id', component: CategoryEdit },
   { path: '/category/:id', component: CategoryShow },

   { path: '/product', component: ProductList },
   { path: '/product/new', component: ProductCreate},
   { path: '/product/edit/:id', component: ProductEdit },
   { path: '/product/:id', component: ProductShow },

   { path: '/post', component: PostList },
   { path: '/post/new', component: PostCreate},
   { path: '/post/edit/:id', component: PostEdit },
   { path: '/post/:id', component: PostShow },

   { path: '/tag', component: TagList },
   { path: '/tag/new', component: TagCreate},
   { path: '/tag/edit/:id', component: TagEdit },
   { path: '/tag/:id', component: TagShow },

   { path: '*', component: NotFound }
];
