const List = () =>{
    const arr = [1,2,3,4,5,6,7];

    return<ul>
        {arr.map(i => <li>{i}</li>)}
       
    </ul>
}
export default List;