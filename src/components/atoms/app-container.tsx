"use client";

import type React from 'react';

type AppContainerProps = {
    children: React.ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
    return (
        <main className="max-w-4xl mx-auto overflow-y-auto h-full">
            {children}
        </main>
    );
};

export default AppContainer;