'use client';

import { useContext } from 'react';
import { PageContentContext, PageContent } from '../context/PageContentContext';

export function PageContentConsumer({ contentKey }: { contentKey: keyof PageContent }) {
  const { content } = useContext(PageContentContext);
  return <>{content[contentKey]}</>;
} 