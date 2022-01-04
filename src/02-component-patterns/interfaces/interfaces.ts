import { Props as PropductCardBtnProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductCardImgProps } from "../components/ProductImage";
import { Props as ProductCardTitleProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value:number ) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ( Props: ProductCardTitleProps) => JSX.Element;
    Image: (Props: ProductCardImgProps) => JSX.Element;
    Buttons: (Props: PropductCardBtnProps) => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}
