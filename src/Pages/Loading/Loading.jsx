import {Circle} from 'better-react-spinkit'

function Loading() {
    return (
        <center style={{display:"grid",placeItems:"center",height:"100vh",background:"#5f7392"}}>

            <div>
                <h1 className="mb-3">CovTrack19</h1>
                <Circle color="#232f41" size={70}/>
            </div>
            
        </center>
    )
}

export default Loading
