export interface Product {
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