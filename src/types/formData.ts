export type SpouseType = {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    spouse: string
};

export type ChildType = {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    child: string
};

export type VehicleType = {
    registerNumber: string,
    brand: string,
    serviceDate: string
};

export type FormDataTypes = {
    firstName: string;
    lastName: string;
    passportNumber: string;
    nationalID: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    zipCode: string;
    effectiveDate: string;
    duration: number | 0;
    spouses: SpouseType[];
    children: ChildType[];
    vehicles: VehicleType[];
};
export type PropType = {
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
    current: number
    formData: FormDataTypes
    setFormData: React.Dispatch<React.SetStateAction<FormDataTypes>>
}