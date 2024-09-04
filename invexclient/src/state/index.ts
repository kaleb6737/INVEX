import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitalStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitalStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },

        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload; // Corrected this line
        },
    },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;

