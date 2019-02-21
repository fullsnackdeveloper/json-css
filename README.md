# json-css

The purpose of this function is to take a JSON object and convert it into a css style sheet.

## JSON Object

```
const styles = {
    margin: {
        bottom: '20px',
        top: '20px',
        left: '20px',
        right: '20px',
    },
    padding: {
        bottom: '20px',
        top: '20px',
        left: '20px',
        right: '20px',
    },
    display: 'inline-block',
    border: {
        bottom: {
            color: '#343434',
            style: '',
            width: '2px',
            radius: {
                left: '20px',
                right: '20px'
            }
        }
    },
    what: {
        ever: {
            values: {
                you: {
                    want: 'will go here'
                }
            }
        }
    }
}
```
## Parse
```
const file = compiler(styles);
```

## Returns

```
{
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    display: inline-block;
    border-bottom-color: #343434;
    border-bottom-width: 2px;
    border-bottom-radius-left: 20px;
    border-bottom-radius-right: 20px;
    what-ever-values-you-want: will go here;
}
```
