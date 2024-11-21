import Image from "next/image";

const CartsDetails = ({ item, handleQuantityChange }) => {
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
          <span className="ml-4">{item.title}</span>
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
            className="w-16 border border-gray-300 rounded-md text-center"
          />
        </td>
        <td className="py-4 px-6">
          ${item.quantity ? item.price * item.quantity : item.price}
        </td>
        <td className="py-4 px-6">
          <button className="text-rose-500 hover:text-red-700">&times;</button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartsDetails;
