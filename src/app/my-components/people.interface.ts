export interface IPeople {
    fio: string;
    password: string;
    delivery2: string;
    disk: string;
    courses: IDelivery[];
    delivery: IDelivery2[];
 
}
interface IDelivery{
    name: string;
    value: boolean;
}

interface IDelivery2{
    name: string;
    value: string;
    selected: boolean
}



