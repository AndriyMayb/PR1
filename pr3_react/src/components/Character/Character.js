import "./style/style.caracter.css"
export default function Character ({item, findedID}){
    return(
        <div className={'block'}>
            <div className={'block1'}> {item.id}) {item.name} </div>


            <div className={'block2'}>
                <button className={'block-button'} onClick={() => findedID(item.id)}> Details</button>
            </div>
        </div>
    )
}