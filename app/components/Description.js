import react, { useContext } from "react"
import { useMediaQuery } from "react-responsive"
import { toggleContext } from "../context/toggleContextProvider"
import MiniCard from "./miniCard"


const Description = () => {
    const is650px = useMediaQuery({ minWidth: 650 })

    const { setReviews } = useContext(toggleContext)
    const { setShipping } = useContext(toggleContext)
    const { SetAboutSeller } = useContext(toggleContext)
    const { setDescription } = useContext(toggleContext)
    const handleReviews = () => {
        setReviews(true)
        setDescription(false)
    }
    const handleShipping = () => {
        setShipping(true)
        setDescription(false)
    }
    const handleAboutSeller = () => {
        SetAboutSeller(true)
        setDescription(false)
    }

    return (
        <>
            <div className={`${is650px ? "w-[100vw] flex  justify-evenly border border-[#DEE2E7] " : "hidden"}`}>
                <div className={"w-[70vw]"}>

                    <div className="flex gap-4  text-[#505050] p-2 border-b border-[#DEE2E7]">
                        <button className={"text-[#0d6efd]"}><u> Description</u></button>
                        <button onClick={handleReviews}><u> Reviews </u></button>
                        <button onClick={handleShipping}><u> Shipping </u></button>
                        <button onClick={handleAboutSeller}><u> About Seller </u></button>
                    </div>

                    <div className={" text-[#505050] mb-2 "}>

                        <div className="border-[2] py-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique omnis vel! Laudantium, libero aperiam pariatur officia quod quae minus harum sequi vero veritatis fuga voluptatem consequatur atque. Corrupti illum dolore optio suscipit doloribus eius debitis quibusdam ab, laboriosam quod. Esse totam expedita voluptatem asperiores reiciendis ipsam. Enim, quae, molestiae qui, doloribus officia omnis error vitae illum consequuntur sed ut? Necessitatibus natus saepe nam recusandae tempore, impedit inventore et animi facere ratione facilis, illum quam laudantium. Minus in veritatis ad quam. Dolores alias nemo consequuntur? Eveniet error eius incidunt magni ratione repellat, aliquid ex dolore a iusto. Ipsum aliquam sunt omnis animi corporis nobis dolores natus, ducimus, beatae modi repudiandae pariatur, eveniet magnam iure distinctio porro? Fugit similique quia totam illum nobis provident, aperiam placeat quasi labore mollitia nesciunt ea consequatur incidunt laboriosam ipsa, magnam deleniti voluptate iure dolorum sed. Illum exercitationem hic obcaecati, ipsam adipisci nisi distinctio dolore voluptate porro. Saepe sed aliquid doloribus qui ipsum blanditiis veritatis, quos ducimus suscipit voluptas molestias labore doloremque consectetur! Recusandae dolore architecto amet perspiciatis ea ducimus, beatae adipisci, a quisquam unde numquam dolorum alias esse minima inventore libero harum, eligendi quod! Nihil quam corrupti ab sed praesentium officiis officia maiores possimus adipisci?
                        </div>
                        <table>

                            <tbody>
                                <tr>
                                    <td className={"tdata"}>
                                        Model
                                    </td>
                                    <td>
                                        #878688
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"tdata"}>
                                        style
                                    </td>
                                    <td>
                                        Classic style
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"tdata"}>
                                        Certificate
                                    </td>
                                    <td>
                                        ISO-8989212121
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"tdata"}>
                                        size
                                    </td>
                                    <td>
                                        34mm x 450mm x 19mm
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"tdata"}>
                                        Memory
                                    </td>
                                    <td>
                                        36GB RAM
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={" text-[#505050]"}>
                        <div>&#10003; Some greate features name here</div>
                        <div>&#10003; Lorem ipsum dolor sit amet consectetur.</div>
                        <div>&#10003; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nihil! </div>
                        <div>&#10003; some greate features name here </div>
                    </div>


                </div>

                <div className={"w-[20vw] mt-3 flex flex-col gap-4"}>
                    <div>
                        You may like
                    </div>
                    <div className={"flex flex-col gap-3"}>

                    <MiniCard src={"/7th section/shirt.svg"} title={"Men Shirt Sleeve polo contrast"} price={"$7.00-$99.50"}/>
                    <MiniCard src={"/7th section/coat.svg"} title={"Men Shirt Sleeve polo contrast"} price={"$7.00-$99.50"}/>
                    <MiniCard src={"/7th section/bag.svg"} title={"Men Shirt Sleeve polo contrast"} price={"$7.00-$99.50"}/>
                    <MiniCard src={"/7th section/wallet.svg"} title={"Men Shirt Sleeve polo contrast"} price={"$7.00-$99.50"}/>
                    <MiniCard src={"/7th section/jar.svg"} title={"Men Shirt Sleeve polo contrast"} price={"$7.00-$99.50"}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Description 