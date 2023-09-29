'use client';

import { FunctionComponent } from 'react';
import Giscus from '@giscus/react';

interface CommentProps {}

const Comment: FunctionComponent<CommentProps> = () => {
  return (
    <Giscus
      id='comments'
      repo='Shaazgai/task'
      repoId='R_kgDOKW1K6w'
      category='Announcements'
      categoryId='DIC_kwDOKW1K684CZuSv'
      mapping='pathname'
      term='Welcome to @giscus/react component!'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='dark'
      lang='en'
      loading='lazy'
    />
  );
};

export default Comment;
