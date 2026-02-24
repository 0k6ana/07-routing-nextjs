// app/notes/layout.tsx
import React from 'react';
import Sidebar from './filter/@sidebar/default';
import css from './layout-notes.module.css';

interface NotesLayoutProps {
  children: React.ReactNode;
}

export default function NotesLayout({ children }: NotesLayoutProps) {
  return (
    <div className={css.container}>
      {}
      <div className={css.sidebar}>
        <Sidebar />
      </div>

      {}
      <div className={css.notesWrapper}>
        {children}
      </div>
    </div>
  );
}
