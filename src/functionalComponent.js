// eslint-disable-next-line
const jsxs = {
    "HFUHGJcgcgfcDYDYGFDKH": {
        tag: "div",
        className: "divclass",
        children: {
            "GDFIYTFUuigiFDTRSDTRDSTR": {
                tag: "label",
                className: "labelclass",
                children: {},
                callback: () => { },
                text: "",
                key: 0
            }
        },
        callback: () => { },
        text: "",
        key: 0
    }
}
// eslint-disable-next-line
export const configs = {
    separator: ">",
    idGenerator: ( length = 30 ) =>
    {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            str = '';
        for ( let i = 0; i < length; i++ )
        {
            str += chars.charAt( Math.floor( Math.random() * chars.length ) );
        }
        return str;
    }
}

export function findPath ( ob, key, sep=">" )
{
    const path = [];
    const keyExists = ( obj ) =>
    {
        if ( !obj || ( typeof obj !== "object" && !Array.isArray( obj ) ) )
        {
            return false;
        }
        else if ( obj.hasOwnProperty( key ) )
        {
            return true;
        }
        else if ( Array.isArray( obj ) )
        {
            let parentKey = path.length ? path.pop() : "";

            for ( let i = 0; i < obj.length; i++ )
            {
                path.push( `${parentKey}[${i}]` );
                const result = keyExists( obj[ i ], key );
                if ( result )
                {
                    return result;
                }
                path.pop();
            }
        }
        else
        {
            for ( const k in obj )
            {
                path.push( k );
                const result = keyExists( obj[ k ], key );
                if ( result )
                {
                    return result;
                }
                path.pop();
            }
        }
        return false;
    };

    keyExists( ob );

    return path.join( sep );
}

export function ImageDiv(props)
{
    // eslint-disable-next-line
    let jsx = ( <div className={ ( props && props.divclass ) ? props.divclass : "" }><img className={ ( props && props.valeurclass ) ? props.valeurclass : "" } src={ ( props && props.valeur ) ? props.valeur : "" } alt={ ( props && props.field ) ? props.field : "" } /></div> );
    return jsx;
}

export function InputDiv ( props )
{
    // eslint-disable-next-line
    let jsx = ( <div className={ ( props && props.divclass ) ? props.divclass : "" }><input type="text" className={ ( props && props.valeurclass ) ? props.valeurclass : "" }  value={ ( props && props.valeur ) ? props.valeur : "" } onChange={ ( e ) => { ( props && props.cbOnChange ) ? props.cbOnChange(e.target.value) : undefined } } /></div> );
    return jsx;
}
