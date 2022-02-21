
export enum EStatus {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error',
}


declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Window {
        toaster: any,
    }
}

export {}
