import ReactImageMagnify from "react-image-magnify";

const Image = (props) => {
  return (
    <div style={{ width: "342px", height: "513px" }}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "",
            isFluidWidth: true,
            src: props.imageUrl,
          },
          largeImage: {
            src: props.imageUrl,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </div>
  );
};

export default Image;
