import { useCallback, useEffect, useSyncExternalStore} from "react";

const useLocalStorageSubscribe = (callback) => {
    window.addEventListener("storage", callback);
    return () => window.removeEventListener("storage", callback);
};

const getLocalStorageServerSnapshot = () => {
    throw Error("useLocalStorage is a client-only hook");
};

const removeLocalStorageItem = (key) => {
    window.localStorage.removeItem(key);
};

const setLocalStorageItem = (key, value) => {
    const stringifiedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifiedValue);
};

const getLocalStorageItem = (key) => {
    return window.localStorage.getItem(key);
};

function useLocalStorage(key, initialValue) {
    const getSnapshot = () => getLocalStorageItem(key);

    const store = useSyncExternalStore(
        useLocalStorageSubscribe,
        getSnapshot,
        getLocalStorageServerSnapshot
    );

    const setState = useCallback(
        (nextStateRawOrFunction) => {
            try {
            const nextState = typeof nextStateRawOrFunction === "function" ? 
                nextStateRawOrFunction(JSON.parse(store)) : 
                nextStateRawOrFunction;
    
            if (nextState === undefined || nextState === null) {
                removeLocalStorageItem(key);
            } else {
                setLocalStorageItem(key, nextState);
            }
            } catch (e) {
            console.warn(e);
            }
        },
        [key, store]
    );

    useEffect(() => {
        if (
            getLocalStorageItem(key) === null &&
            typeof initialValue !== "undefined"
        ) {
            setLocalStorageItem(key, initialValue);
        }
    }, [key, initialValue]);

    return [store ? JSON.parse(store) : initialValue, setState];
}


export default useLocalStorage;