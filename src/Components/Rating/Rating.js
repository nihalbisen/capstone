export default function Rating(props){
    //console.log(props.rating.rate+" "+props.rating.count)
    return (
        <>
            <div className="stars-outer">
                <div
                    className="stars-inner"
                    style={{ width: props.rating.rate*10*2 }}
                ></div>
            </div>
            <span className="number-rating">({props.rating.count})</span>
        </>
    );
}