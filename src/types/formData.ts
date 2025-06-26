export type FormDataTypes ={
      firstName: string;
        lastName: string;
        passportNumber: string;
        nationalId: string;
        dateOfBirth: string;
        gender: string;
        email: string;
        phone: string;
        address: string;
        zipCode: string;
        effectiveDate: string;
        duration: string;

        spouses: SpousesType
        children: ChildrenType
        vehicles: VehicleType
}

export type SpousesType ={
            firstName: string,
            lastName: string,
            dateOfBirth: string,
            spouse: string
        }[]
export type ChildrenType ={
            firstName: string,
            lastName: string,
            dateOfBirth: string,
            child: string
        }[]
export type VehicleType ={
            registerNumber: string,
            brand: string,
            serviceDate: string
        }
export type PropType = {
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
    current: number
    formData: FormDataTypes
    setFormData: React.Dispatch<React.SetStateAction<{
        firstName: string;
        lastName: string;
        passportNumber: string;
        nationalId: string;
        dateOfBirth: string;
        gender: string;
        email: string;
        phone: string;
        address: string;
        zipCode: string;
        effectiveDate: string;
        duration: string;


        spouses: SpousesType
        children: ChildrenType
        vehicles: VehicleType
    }>>
}