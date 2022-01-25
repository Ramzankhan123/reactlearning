export type ReateNativeStackTypes = {
    Assignment1: any,
    Assignment2 :  any,
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends ReateNativeStackTypes { }
    }
}