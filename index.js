module.exports = {
    compiler: (styles) => {
        const component = [];
        parser = (obj, prefix) => {
            Object.entries(obj).map(entry => {
                let addedPrefix = prefix ? (prefix + '-' + entry[0]) : entry[0];
                if(typeof(entry[1]) === 'object') {
                    parser(entry[1], addedPrefix);
                } else {
                    if(entry[1] !== '')
                        return component.push('    ' + addedPrefix + ': ' + entry[1] + ';');
                    return;
                }
            });
        }
        parser(styles);
        component.unshift('{');
        component.push('}');
        return component.join('\n');
    }
}