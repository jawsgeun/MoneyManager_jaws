import React from 'react';
import BigText from '../components/BigText';

const Post = (args) => {
    return (
        <div>
            <BigText>{JSON.stringify(args.match.params.id)}</BigText>
        </div>
    );
};

export default Post;