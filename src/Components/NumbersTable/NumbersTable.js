
export function NumbersTable(props){
    
function LimitBox(){
    for(let i=1; i<=props.limit; i+1){
        
      <div style={{width:'150px', height:'150px', border: '1px solid black', backgroundColor:'red'}}>
            <span>{i}</span>
        </div>
    
}
}
    return (
        <div className='container'>
        <div>{LimitBox}</div>
        </div>
)
}