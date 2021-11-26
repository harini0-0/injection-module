export class Patient{
    public name: string;
    public type: string;
    public doctorName: string;
    public doctorType: string;
    public injectionList: Medicine []; 

    constructor(name: string, pattype: string, docName: string, docType: string, medi: Medicine []){
        this.name = name;
        this.type = pattype;
        this.doctorName = docName;
        this.doctorType = docType;
        this.injectionList = medi;
    }
}
export class Medicine{
    public name: string;
    public quantity: string;
    public dose: string;
    public remarks: string;

    constructor(name: string, qnty: string, dose: string, rem: string){
        this.name = name;
        this.quantity = qnty;
        this.dose = dose;
        this.remarks = rem;
    }
}