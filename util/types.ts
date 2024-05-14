export interface Location {
    name: string;
    phone: string;
    address1: string;
    address2: string;
    openHoursMF: string;
    openHoursSat: string;
    openHoursSun: string;
    mapUrl: string;
}

export interface Tea {
    name: string;
    description: string;
}

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}
