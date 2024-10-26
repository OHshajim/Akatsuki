import { Rating } from "@smastrom/react-rating";

const QuickViewModal = ({item}) => {
  console.log(item);
  
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-primary">
            ✕
          </button>
        </form>
        <div>
          <div></div>
          <div>
            <div className="card-body py-2 px-1">
              <h2 className="card-title bebas-neue font-medium tracking-[1px]">
                {item.name}
              </h2>
              <div className="flex justify-between">
                <h3 className="font-semibold text-zinc-500">{item.price} $</h3>
                <Rating
                  style={{ maxWidth: 110, color: "#fff" }}
                  value={item.rating}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );

};

export default QuickViewModal;
