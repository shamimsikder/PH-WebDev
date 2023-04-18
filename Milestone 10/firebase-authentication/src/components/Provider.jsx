import React, { createContext, useContext } from 'react';

export const AuthContext = createContext(null)

const Provider = ({children}) => {

    const user = {displayName: 'Sagor Nodi'}

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;