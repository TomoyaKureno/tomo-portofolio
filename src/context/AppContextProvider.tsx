"use client";

import { createContext, Dispatch, SetStateAction, useState, type ReactNode } from "react";
import { GetProfileQuery } from "../gql/graphql";


type GlobalValueType = {
    sidebarOpen?: boolean;
};

type AppContextType = {
    profile: GetProfileQuery["profiles"][0] | null;
    globalValue: GlobalValueType;
    setGlobalValue: Dispatch<SetStateAction<GlobalValueType>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
    profile: GetProfileQuery["profiles"][0] | null;
};

export default function AppContextProvider({ children, profile }: Props) {
    const [globalValue, setGlobalValue] = useState<GlobalValueType>({ sidebarOpen: false });

    return (
        <AppContext.Provider value={{ profile, globalValue, setGlobalValue }}>
            {children}
        </AppContext.Provider>
    );
}
