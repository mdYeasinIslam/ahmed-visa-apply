export type Spouse = {
    id: string;
    visaApplicationId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    spouse: string;
};

export type Child = {
    id: string;
    visaApplicationId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    child: string;
};

export type Vehicle = {
    id: string;
    visaApplicationId: string;
    registerNumber: string;
    brand: string;
    serviceDate: string;
};

export type Document = {
    id: string;
    visaApplicationId: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    uploadedAt: string;
};

export type PaymentDocument = {
    id: string;
    visaApplicationId: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    paymentNote: string | null;
    uploadedAt: string;
};

export type ApplicationType = {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    nationalID: string;
    passportNumber: string;
    address: string;
    zipCode: string;
    phone: string;
    email: string;
    status: string;
    duration: number;
    effectiveDate: string;
    createdAt: string;
    updatedAt: string;
    payment?: string;
    spouses?: Spouse[];
    children?: Child[];
    vehicles?: Vehicle[];
    documents?: Document[];
    paymentDocument?: PaymentDocument[];
};