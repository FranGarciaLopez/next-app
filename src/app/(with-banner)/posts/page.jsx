import React from 'react';
import { ListsOfPosts } from './ListOfPosts.jsx'; // Correct import path

export default async function PostsPage({ params }) { 
          return (
                    <section>
                              <ListsOfPosts />
                    </section>
          );
}