module.exports = compiler = (styles) => {
    const component = [];
    function parser(obj, prefix) {
        Object.entries(obj).map(entry => {
            let addedPrefix = prefix ? (prefix + '-' + entry[0]) : entry[0];
            if(typeof(entry[1]) === 'object') {
                parser(entry[1], addedPrefix);
            } else {
                return (entry[1] !== '') ? component.push('    ' + addedPrefix + ': ' + entry[1] + ';') : console.log(addedPrefix + ': no value');
            }
        });
    }
    parser(styles);
    component.unshift('{');
    component.push('}');
    return component.join('\n');
};