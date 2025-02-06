export interface Product {
    name: any;
    category: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    features: boolean;
    dimensions: boolean;
    inventory: number;
    _id: string;
    product: string;
    _type: 'product';
    image? : {
        assest: {
            _ref:string;
            _type: "reference";

        }
    
    };
    price: number;
    description?: string;
    
    
    }