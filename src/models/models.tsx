export interface RentInfo {
    id?: number,
    propertyType: string
    bedRoom: string
    month: number,
    price: number,
    dateAndTime: string,
    furniture?: string,
    notes?: string,
    reporterName: string
}