import 'antd/dist/antd.css';
import { Card} from 'antd';
import Rating from './rating';
import Pic from './imageShow'
function Moviecard(props){
    return(
        <div >
      
      <Card size="default"  title={props.movieList.title} style={{ width: 300}}>
      <p><Pic src={props.movieList.imageUrl} /></p>
      <p >Subtitle: {props.movieList.subtitle}</p>
      <p>Description: {props.movieList.description}</p>
      <p>rating:<Rating rating={props.movieList.rating}/></p>
      </Card>
    </div>
    )
}
export default  Moviecard