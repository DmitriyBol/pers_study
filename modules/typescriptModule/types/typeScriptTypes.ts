// type uses in another like array
export type ProductVariationsType = {
    sku: string;
    image: string;
    price: number;
    plan: string;
}

// custom field type, it can be any type
// it's not safe because type can be any type, an object too
export type ProductHashItem = {
    hash: string;
};

// main type uses in product description
export type SomeProductType = {
    name: string;
    id: number;
    variations: ProductVariationsType[];
    field: string;
    category: string;
    hash: string;
    priceOption: ProductEnumType;
}

export enum ProductEnumType {
    defaultOption = 1,
    normalOption = 2,
    luxuryOption = 3
}

const ProductVariations: ProductVariationsType[] = [
    {
        sku: "",
        image: "",
        price: 1,
        plan: "",
    },
    {
        sku: "",
        image: "",
        price: 2,
        plan: "",
    },
];

export const ProductFixture: SomeProductType = {
    category: "", field: "", hash: "", id: 0, name: "", variations: [...ProductVariations], priceOption: ProductEnumType.defaultOption
};