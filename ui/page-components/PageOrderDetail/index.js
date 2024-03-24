import OrderDetail from "@/ui/components/OrderDetail";
import data from '../../../data.json'

export default function PageOrderDetail(){
    return(
        <>
            <OrderDetail data={data}/>
        </>
    )
}