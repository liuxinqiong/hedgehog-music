
import storage from 'good-storage'

const SERACH_KEY = "__search__" // 内部key，减少冲突可能性
const SEARCH_MAX_LENGTH = 15

function insertArray(arr, val, compare, maxlen) {
    const index = arr.findIndex(compare)
    if(index === 0) {
        return
    }
    if(index > 0) {
        arr.aplice(index, 1)
    }
    arr.unshift(val)
    if(maxlen && arr.length > maxlen) {
        arr.pop()
    }
}

function deleteFromArray(arr, compare) {
    const index = arr.findIndex(compare)
    if(index > -1) {
        arr.splice(index, 1)
    }
}

export function saveSearch(query) {
    let searches = storage.get(SERACH_KEY, [])
    insertArray(searches, query, (item) => {
        return item === query
    }, SEARCH_MAX_LENGTH)
    storage.set(SERACH_KEY, searches)
    return searches
}

export function loadSearch() {
    return storage.get(SERACH_KEY, [])
}

export function deleteSearch(query) {
    let searches = storage.get(SERACH_KEY, [])
    deleteFromArray(searches, (item) => {
        return item === query
    })
    storage.set(SERACH_KEY, searches)
    return searches
}

export function clearSearch() {
    storage.remove(SERACH_KEY)
    return []
}