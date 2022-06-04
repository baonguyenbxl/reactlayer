import './boxes.css'
const dw = 600,
    dh = 400,
    dp = 10;


export function CanvasVertical5 (props)
{
    let w = dw,
        h = dh,
        p = dp;
    let jsx = ( <></> );
    if ( props && props.arr && Object.prototype.toString.call( props.arr ) && props.arr.length ===5 )
    {
        if ( props.w ) w = props.w;
        if ( props.h ) h = props.h;
        //if ( props.p ) p = props.p;
        jsx = ( <div className="divboxmain" style={ { width: `${w}px`, height: `${h}px` } }>
            <div className="divverticalu" style={ { width: `${( w )}px`, height: `${( h / 2 ) - p}px` } }>
                <img className="picture" src={ props.arr[0] } alt="" />
            </div>
            <div className="divverticald" style={ { width: `${( w )}px`, height: `${( h / 2 ) - ( p )}px` } }>
                <div className="divhorizontall" style={ { width: `${w / 2}px`, height: `${( h / 2 ) - p}px` } }>
                    <img className="picture" src={ props.arr[1] } alt="" />
                </div>
                <div className="divhorizontalr" style={ { width: `${w / 2 - p}px`, height: `${( h / 2 ) - p}px` } }>
                    <div className="divverticalu" style={ { width: `${( w ) / 2 - p}px`, height: `${( h / 4 )}px` } }>
                        <img className="picture" src={ props.arr[2] } alt="" />
                    </div>
                    <div className="divverticald" style={ { width: `${( w ) / 2 - p}px`, height: `${( h / 4 ) - ( p * 2 )}px` } }>
                        <div className="divhorizontall" style={ { width: `${( w ) / 4 - p}px`, height: `${( h / 4 ) - ( p * 2 )}px` } }>
                            <img src={ props.arr[3] } alt="" className="picture" />
                        </div>
                        <div className="divhorizontalr" style={ { width: `${( w ) / 4 - p}px`, height: `${( h / 4 ) - ( p * 2 )}px` } }>
                            <img src={ props.arr[4] } alt="" className="picture" />
                        </div>
                    </div>
                </div>
            </div>
        </div> )
    }
    
    return jsx;
}
export function CanvasVertical4 ( props )
{
    let w = dw,
        h = dh,
        p = dp;
    let jsx = ( <></> );
    if ( props && props.arr && Object.prototype.toString.call( props.arr ) && props.arr.length === 4 )
    {
        if ( props.w ) w = props.w;
        if ( props.h ) h = props.h;
        //if ( props.p ) p = props.p;
        jsx = ( <div className="divboxmain" style={ { width: `${w}px`, height: `${h}px` } }>
            <div className="divverticalu" style={ { width: `${( w )}px`, height: `${( h / 2 ) - p}px` } }>
                <img className="picture" src={ props.arr[ 0 ] } alt="" />
            </div>
            <div className="divverticald" style={ { width: `${( w )}px`, height: `${( h / 2 ) - ( p )}px` } }>
                <div className="divhorizontall" style={ { width: `${w / 2}px`, height: `${( h / 2 ) - p}px` } }>
                    <img className="picture" src={ props.arr[ 1 ] } alt="" />
                </div>
                <div className="divhorizontalr" style={ { width: `${w / 2 - p}px`, height: `${( h / 2 ) - p}px` } }>
                    <div className="divverticalu" style={ { width: `${( w ) / 2 - p}px`, height: `${( h / 4 )}px` } }>
                        <img className="picture" src={ props.arr[ 2 ] } alt="" />
                    </div>
                    <div className="divverticald" style={ { width: `${( w ) / 2 - p}px`, height: `${( h / 4 ) - ( p * 2 )}px` } }>
                        <img src={ props.arr[ 3 ] } alt="" className="picture" />
                    </div>
                </div>
            </div>
        </div> )
    }
    return jsx;
}
export function CanvasVertical3 ( props )
{
    let w = dw,
        h = dh,
        p = dp;
    let jsx = ( <></> );
    if ( props && props.arr && Object.prototype.toString.call( props.arr ) && props.arr.length === 3 )
    {
        if ( props.w ) w = props.w;
        if ( props.h ) h = props.h;
        //if ( props.p ) p = props.p;
        jsx = ( <div className="divboxmain" style={ { width: `${w}px`, height: `${h}px` } }>
            <div className="divverticalu" style={ { width: `${( w )}px`, height: `${( h / 2 ) - p}px` } }>
                <img className="picture" src={ props.arr[ 0 ] } alt="" />
            </div>
            <div className="divverticald" style={ { width: `${( w )}px`, height: `${( h / 2 ) - ( p )}px` } }>
                <div className="divhorizontall" style={ { width: `${w / 2}px`, height: `${( h / 2 ) - p}px` } }>
                    <img className="picture" src={ props.arr[ 1 ] } alt="" />
                </div>
                <div className="divhorizontalr" style={ { width: `${w / 2 - p}px`, height: `${( h / 2 ) - p}px` } }>
                        <img className="picture" src={ props.arr[ 2 ] } alt="" />
                </div>
            </div>
        </div> )
    }

    return jsx;
}
export function CanvasHorizontal5 ( props )
{
    let w = dw,
        h = dh,
        p = dp;
    let jsx = ( <></> );
    if ( props && props.arr && Object.prototype.toString.call( props.arr ) && props.arr.length === 5 )
    {
        if ( props.w ) w = props.w;
        if ( props.h ) h = props.h;
        //if ( props.p ) p = props.p;
        jsx = ( <div className="divboxmain" style={ { width: `${w}px`, height: `${h}px` } }>
            <div className="divhorizontall" style={ { width: `${( w / 2 ) - p}px`, height: `${h}px` } }>
                <img className="picture" src={ props.arr[ 0 ] } alt="" />
            </div>
            <div className="divhorizontalr" style={ { width: `${( w / 2 ) - ( p )}px`, height: `${h}px` } }>
                <div className="divverticalu" style={ { width: `${( w / 2 ) - ( p )}px`, height: `${( h / 2 )}px` } }>
                    <img className="picture" src={ props.arr[ 1 ] } alt="" />
                </div>
                <div className="divverticald" style={ { width: `${w / 2 - p}px`, height: `${( h / 2 ) - p}px` } }>
                    <div className="divhorizontall" style={ { width: `${w / 4}px`, height: `${( h ) / 2 - p}px` } }>
                        <img className="picture" src={ props.arr[ 2 ] } alt="" />
                    </div>
                    <div className="divhorizontalr" style={ { width: `${( w / 4 ) - ( p * 2 )}px`, height: `${h / 2 - p}px` } }>
                        <div className="divverticalu" style={ { width: `${( w / 4 ) - ( p * 2 )}px`, height: `${( h / 4 ) - ( p )}px` } }>
                            <img src={ props.arr[ 3 ] } alt="" className="picture" />
                        </div>
                        <div className="divverticald" style={ { width: `${( w / 4 ) - ( p * 2 )}px`, height: `${( h / 4 ) - ( p )}px` } }>
                            <img src={ props.arr[ 4 ] } alt="" className="picture" />
                        </div>
                    </div>
                </div>
            </div>
        </div> )
    }

    return jsx;
}
export function CanvasHorizontal4 ( props )
{
    let w = dw,
        h = dh,
        p = dp;
    let jsx = ( <></> );
    if ( props && props.arr && Object.prototype.toString.call( props.arr ) && props.arr.length === 4 )
    {
        if ( props.w ) w = props.w;
        if ( props.h ) h = props.h;
        //if ( props.p ) p = props.p;
        jsx = ( <div className="divboxmain" style={ { width: `${w}px`, height: `${h}px` } }>
            <div className="divhorizontall" style={ { width: `${( w / 2 ) - p}px`, height: `${h}px` } }>
                <img className="picture" src={ props.arr[ 0 ] } alt="" />
            </div>
            <div className="divhorizontalr" style={ { width: `${( w / 2 ) - ( p )}px`, height: `${h}px` } }>
                <div className="divverticalu" style={ { width: `${( w / 2 ) - ( p )}px`, height: `${( h / 2 )}px` } }>
                    <img className="picture" src={ props.arr[ 1 ] } alt="" />
                </div>
                <div className="divverticald" style={ { width: `${w / 2 - p}px`, height: `${( h / 2 ) - p}px` } }>
                    <div className="divhorizontall" style={ { width: `${w / 4}px`, height: `${( h ) / 2 - p}px` } }>
                        <img className="picture" src={ props.arr[ 2 ] } alt="" />
                    </div>
                    <div className="divhorizontalr" style={ { width: `${( w / 4 ) - ( p * 2 )}px`, height: `${h / 2 - p}px` } }>
                        <img src={ props.arr[ 3 ] } alt="" className="picture" />
                    </div>
                </div>
            </div>
        </div> )
    }

    return jsx;
}
export function CanvasHorizontal3 ( props )
{
    let w = dw,
        h = dh,
        p = dp;
    let jsx = ( <></> );
    if ( props && props.arr && Object.prototype.toString.call( props.arr ) && props.arr.length === 3 )
    {
        if ( props.w ) w = props.w;
        if ( props.h ) h = props.h;
        //if ( props.p ) p = props.p;
        jsx = ( <div className="divboxmain" style={ { width: `${w}px`, height: `${h}px` } }>
            <div className="divhorizontall" style={ { width: `${( w / 2 ) - p}px`, height: `${h}px` } }>
                <img className="picture" src={ props.arr[ 0 ] } alt="" />
            </div>
            <div className="divhorizontalr" style={ { width: `${( w / 2 ) - ( p )}px`, height: `${h}px` } }>
                <div className="divverticalu" style={ { width: `${( w / 2 ) - ( p )}px`, height: `${( h / 2 )}px` } }>
                    <img className="picture" src={ props.arr[ 1 ] } alt="" />
                </div>
                <div className="divverticald" style={ { width: `${w / 2 - p}px`, height: `${( h / 2 ) - p}px` } }>
                    <img className="picture" src={ props.arr[ 2 ] } alt="" />
                </div>
            </div>
        </div> )
    }

    return jsx;
}
