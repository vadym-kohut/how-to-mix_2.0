export interface IngredientDetails {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    strType: string;
    strAlcohol: string;
    strABV: string;
}

export interface IngredientListItem {
    strIngredient1: string
}

export interface IngredientListResponse {
    drinks: IngredientListItem[]
}
