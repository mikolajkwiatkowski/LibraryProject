
function Card(props){
    const tytul_style ={
        color: 'red',
        fontWeight:1000,
        fontSize:20,
    }
    return <div className="card">
        <p><img src={props.obrazek} className="obrazek"/></p>
        <p style={tytul_style}>{props.tytul}</p>
        <p>{props.autor}</p>
        <p>{props.cena}</p>
    </div>

}



export default Card