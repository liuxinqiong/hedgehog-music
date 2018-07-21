export function addClass(el, className) {
    if(hasClass(el, className)){
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function hasClass(el, className){
    // \\s 空白字符
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

export function attr(el, name, val) {
    const prefix = 'data-'
    name = prefix + name
    if(val) {
        return el.setAttribute(name, val)
    } else {
        return el.getAttribute(name)
    }
}