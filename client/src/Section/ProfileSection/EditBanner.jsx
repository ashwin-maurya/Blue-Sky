import { useRef } from "react";

export default function EditBanner(props) {
  const { BannerModal } = props;

  const BannerModalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (BannerModalRef.current === event.target) {
      BannerModal();
    }
  };
  return (
    <>
      <div
        id="myModal"
        className="fixed z-50 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack"
        ref={BannerModalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-1/2 max-lg:w-[90%] h-auto   py-5 px-10 flex rounded-lg bg-white dark:bg-darkBgMain shadow-xl flex-col">
          <h1 className="text-xl pb-4   font-bold text-gray-500 tracking-wide">
            Choose Banner Image
          </h1>
          <form className="form flex flex-col w-full px-2">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full p-10 group text-center">
                <div className=" w-full text-center flex  items-center justify-center  flex-row">
                  <img
                    className="has-mask h-36 object-center"
                    src="https://img.freepik.com/free-vector/creative-office-workers-illustration_33099-2336.jpg?w=900&t=st=1696679862~exp=1696680462~hmac=fa08f13c8840ebc7e52b713274d97286fc0f471a8139ec8af0d09d6875bf2ae8"
                    alt="freepik image"
                  />
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag and drop</span> files here{" "}
                    <br /> or{" "}
                    <a href="" id="" className="text-blue-600 hover:underline">
                      select a file
                    </a>{" "}
                    from your computer
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>

            <input
              id="next"
              type="submit"
              value="Upload"
              className="button-submit my-2 text-white rounded-full p-2 font-bold bg-primaryMain dark:bg-secondary cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
}
