const Shimmer = ()=>{
    return(<div className="flex gap-3 flex-wrap">
        {
            Array(10).fill("").map((e,index)=>(<div className="w-48 bg-slate-200 h-48" key={index}></div>))

        }

    </div>)
}
export default Shimmer;