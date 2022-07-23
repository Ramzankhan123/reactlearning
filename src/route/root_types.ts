export type ReateNativeStackTypes = {
    IndexFile : any,
    Assignment1: any,
    Assignment2 :  any,
    Assignment3 :  any,
    Assignmen3Checkout : any,
    Assignment4 : any,
    Assignment5 : any,
    Assignment6 : any,
    
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends ReateNativeStackTypes { }
    }
}