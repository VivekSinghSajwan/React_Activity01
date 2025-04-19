import Product from "./Product.jsx"
import './ProductTab.css'

function ProductTab(){
    return (
        <div className="ProductTab">
            <Product heading1="Logitech MX Master 3S" heading2={""} contents={["8,000 DPI","5 Programmable Buttons"]} oldPrice="12,495" newPrice="8,999"/>
            <Product heading1="Apple Pencil (2nd Gen)" heading2={""} contents={["Intuitive touch surface","Designed for iPad Pro"]} oldPrice="11,900" newPrice="9,199"/>
            <Product heading1="Zebronics" heading2={"Zeb Tranformer"} contents={["Intuitive touch surface","Designed for iPad Pro"]} oldPrice="1,599" newPrice="899"/>
            <Product heading1="Portronics Toad 23" heading2={"Wireless Mouse"} contents={["Wireless Mouse 2.4GHz","Optical Orientation"]} oldPrice="599" newPrice="278"/>
        </div>
    )
}

export default ProductTab