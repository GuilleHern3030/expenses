export default ({items, cRef, onCategorySelected}) => {

    const options = []
    for (let i = 0; i < items.length; i++) {
        options.push(<option key={i} value={`${items[i]}`}>{`${items[i]}`}</option>)
    }

    return <select ref={cRef} id="categories" name="categories" onChange={onCategorySelected}>
        <option value="$none"> </option>
        {options}
        <option value="$delete" style={{color:'red', fontWeight:'bold'}}> Delete </option>
    </select>
}