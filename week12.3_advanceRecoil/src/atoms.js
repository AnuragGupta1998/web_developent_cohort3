import{atom, selector} from 'recoil';

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


export const myTotalNotificationSelector = selector({
    key:"myTotalNotificationSelector",
    get: ({get}) => {
        const networkCount = get(networkAtom);
        const notificationCount = get(notificationAtom);
        const jobsCount = get(jobsAtom);
        const messagingCount = get(messagingAtom);

        return networkCount + notificationCount + jobsCount + messagingCount;
    }
})