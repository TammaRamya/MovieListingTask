import { Image } from 'antd';

function ImageDemo(props) {
  return (
    <Image
      width={200}
      src={props.src}
    />
  );
}
export default ImageDemo
