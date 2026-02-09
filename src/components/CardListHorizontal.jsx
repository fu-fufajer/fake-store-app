import { Card } from "flowbite-react";

const CardListHorizontal = ({ data }) => {
    return (
        <div>
            <Card className="block mx-auto my-25 w-4xl">
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Keranjang</h5>
                    <a className="text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                        Hapus Semua
                    </a>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            data.map((item, index) => (
                                <li className="py-3 sm:py-4" key={index}>
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">
                                            <img
                                                alt={item.title}
                                                height="32"
                                                src={item.image}
                                                width="50"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400 font-bold">X{item.qty}</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${item.price}</div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Card>
        </div>
    )
}

export default CardListHorizontal
