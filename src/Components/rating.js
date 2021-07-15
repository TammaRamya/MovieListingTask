import 'antd/dist/antd.css';
import { Rate} from 'antd';
function Rating(props){
    return(
        <div >
            <Rate disabled defaultValue={props.rating} />
    </div>
    )
}
export default  Rating