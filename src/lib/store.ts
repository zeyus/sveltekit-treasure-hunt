// import { writable } from 'svelte/store';
import { localStore } from "$lib/localstore";


export const stepIndex = localStore('stepIndex', 1);