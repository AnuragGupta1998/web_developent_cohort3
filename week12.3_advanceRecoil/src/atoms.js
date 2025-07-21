import{atom} from 'recoil';

export const networkAtom= atom({
    key: 'network', 
    default: 104
})

export const jobsAtom= atom({
    key: 'jobs', 
    default: 0
})
export const notificationAtom= atom({
    key: 'notification', 
    default: 12
})
export const messagingAtom= atom({
    key: 'messaging', 
    default: 0
})