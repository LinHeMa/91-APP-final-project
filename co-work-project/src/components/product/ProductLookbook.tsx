interface ProductLookbookProps {
  data: {
    title: string;
    photos: string[];
  };
}

function ProductLookbook({ data }: ProductLookbookProps) {
  return (
    <div className="w-[872px] h-[213px] mb-[60px]">
      <div className="mb-[14px]">{data.title}</div>
      <div className="flex">
        {data.photos.map((photo, index) => (
          <div
            className={`w-[132px] h-[176px] ${
              index === data.photos.length - 1 ? '' : 'mr-4'
            }`}
            key={index}
          >
            <img
              src={photo}
              alt="productImg"
              className="w-[100%] w-[100%] hover:opacity-60 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductLookbook;
