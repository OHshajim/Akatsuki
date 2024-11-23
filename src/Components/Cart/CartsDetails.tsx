import { ShopData } from "@/Services/PropsValidations/DataType";
import Image from "next/image";

const CartsDetails = ({
  item,
  handleQuantityChange,
  setRemoveId,
}: {
  item: ShopData;
  handleQuantityChange: (id: string, quantity: number) => void;
  setRemoveId: (id: string) => void | null;
}) => {
  return (
    <tbody>
      <tr key={item._id} className="border-t">
        <td className="flex items-center py-4 px-6">
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={80}
            height={80}
            className="rounded-md"
          />
          <span className="ml-4"></span> <br />
          <span className="ml-4"></span>
          <div>
            <h2 className="font-medium text-black font-primary text-lg">
              {item.title}
            </h2>
            <p className="text-sm  text-gray-800 font-medium">
              By {item.author}
            </p>
          </div>
        </td>
        <td className="py-4 px-6">${item.price.toFixed(2)}</td>
        <td className="py-4 px-6">
          <input
            type="number"
            min="1"
            defaultValue={1}
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(item._id, parseInt(e.target.value))
            }
            className="w-16 border border-gray-300 rounded-none text-center py-3"
          />
        </td>
        <td className="py-4 px-6">
          $
          {item.quantity ? (item.price * item.quantity).toFixed(2) : item.price}
        </td>
        <td className="py-4 px-6">
          <button
            onClick={() => setRemoveId(item._id)}
            className="text-rose-500 hover:text-red-700"
          >
            &times;
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartsDetails;
