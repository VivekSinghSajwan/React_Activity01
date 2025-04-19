import './Product.css'

function Product({heading1,heading2,contents,oldPrice,newPrice}){
    let isHead2 = heading2!="";
    return (
        <div className="Product">
            <div className="head">
                <div className="head1">{heading1}</div>
                {isHead2 && <div className="head2">{heading2}</div>}
            </div>
            <div className="content">
                {
                    contents.map((content) => {
                        return <li>{content}</li>
                    })
                }
            </div>
            <div className="body">
                <span className='oldPrice'>{oldPrice}</span>
                &nbsp;
                <span className='newPrice'>{newPrice}</span>
            </div>
        </div>
    )
}

export default Product;