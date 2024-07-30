import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'formulaire',
    initialState: {
        formData: []
    },
    reducers: {
        saveFormData: (state, action) => {
            // Récupérer les données existantes de localStorage
            let existingData = JSON.parse(localStorage.getItem('formData'));

            // Vérifier si existingData est un tableau, sinon initialiser avec un tableau vide
            if (!Array.isArray(existingData)) {
                existingData = [];
            }

            // Mettre à jour les données avec la nouvelle entrée
            const updatingData = [...existingData, action.payload];

            // Mettre à jour l'état Redux
            state.formData = updatingData;

            // Stocker les données mises à jour dans localStorage
            localStorage.setItem('formData', JSON.stringify(updatingData));
        },
    },
});

export const { saveFormData } = formSlice.actions;
export default formSlice.reducer;
