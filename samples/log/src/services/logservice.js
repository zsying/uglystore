import { registryService,pushChange } from 'lite-store'

let ds = [];
let actions = {
    info: (msg) => {
        let now = (new Date()).toString()
        ds.push(`[info ${now}] ${msg}`)
        pushChange('_log')
    }
}

export function regLogService(){
    registryService('_log', () => ds, actions)
}