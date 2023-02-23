import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import { Nav } from '../componenets/Nav.js'
import { ContactsPage } from '../pages/Contacts.page';
import { HomePage } from '../pages/Home.page';
import { PicturesPage } from '../pages/Pictures.page';
import { PostsPage } from '../pages/Posts.page';
import { NotFoundPage } from '../pages/NotFound.page';

const Routes = () => {
    return (
        <div>
            <Nav />
            <ReactRouterRoutes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path='/pictures' element={<PicturesPage />} />
                <Route path='/contacts' element={<ContactsPage />} />
                <Route path="*" element={< NotFoundPage />} />
            </ReactRouterRoutes>
        </div>
    );
};

export default Routes;