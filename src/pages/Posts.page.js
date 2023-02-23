import React from 'react';
import Post from '../componenets/post'

import { test_movies } from '../componenets/dListMovies.js'



const PostsPage = () => {
    return (
        <div>


            {test_movies.map((element, i) => {
                return <Post

                    author={ 
                        {
                            name: element.Director,
                            nickname: element.Actors
                        }
                    }
                    image={element.Poster}
                    date={element.Released}
                    content={element.Plot}>
                </Post>
            })}
        </div>);
};

export { PostsPage };